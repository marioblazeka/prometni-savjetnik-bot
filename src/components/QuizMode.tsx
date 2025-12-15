import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrafficSignIcon } from "./TrafficSignIcon";
import { getRandomQuestions, QuizQuestion } from "@/data/quizQuestions";
import { useSoundEffects } from "@/hooks/useSoundEffects";
import { CheckCircle, XCircle, Trophy, RotateCcw, Bike } from "lucide-react";

interface QuizModeProps {
  onClose: () => void;
}

export const QuizMode = ({ onClose }: QuizModeProps) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const { playCorrect, playWrong, playClick, playStart, playComplete } = useSoundEffects();

  useEffect(() => {
    startNewQuiz();
  }, []);

  const startNewQuiz = () => {
    setQuestions(getRandomQuestions(5));
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
    playStart();
  };

  const handleAnswer = (answerIndex: number) => {
    if (showResult) return;
    
    playClick();
    setSelectedAnswer(answerIndex);
    setShowResult(true);

    const isCorrect = answerIndex === questions[currentIndex].correctAnswer;
    if (isCorrect) {
      setScore(prev => prev + 1);
      setTimeout(() => playCorrect(), 200);
    } else {
      setTimeout(() => playWrong(), 200);
    }
  };

  const nextQuestion = () => {
    playClick();
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
      playComplete();
    }
  };

  if (questions.length === 0) return null;

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  if (quizComplete) {
    const percentage = (score / questions.length) * 100;
    const isPassed = percentage >= 60;

    return (
      <Card className="border-2 border-secondary bg-card shadow-xl">
        <CardHeader className="bg-secondary text-secondary-foreground rounded-t-lg">
          <CardTitle className="flex items-center gap-2 justify-center">
            <Trophy className="w-6 h-6 text-primary" />
            Rezultat kviza
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 text-center space-y-6">
          <div className={`text-6xl font-bold ${isPassed ? 'text-green-500' : 'text-destructive'}`}>
            {score}/{questions.length}
          </div>
          
          <div className={`text-xl font-semibold ${isPassed ? 'text-green-500' : 'text-destructive'}`}>
            {isPassed ? "🎉 Bravo! Položil si!" : "😅 Trebaš još vježbati!"}
          </div>

          <p className="text-muted-foreground italic">
            {isPassed 
              ? "Kaj velim - ti si pravi biciklist! Samo tak naprej!" 
              : "Ne sekiraj se, vježba čini majstora! Probaj još jedanput!"}
          </p>

          <div className="flex gap-3 justify-center pt-4">
            <Button onClick={startNewQuiz} className="gap-2">
              <RotateCcw className="w-4 h-4" />
              Ponovi kviz
            </Button>
            <Button variant="outline" onClick={onClose}>
              Natrag na chat
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-2 border-secondary bg-card shadow-xl">
      <CardHeader className="bg-secondary text-secondary-foreground rounded-t-lg pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Bike className="w-5 h-5 text-primary" />
            Kviz - Pitanje {currentIndex + 1}/{questions.length}
          </CardTitle>
          <span className="text-sm bg-primary text-primary-foreground px-2 py-1 rounded-full">
            Bodovi: {score}
          </span>
        </div>
        <Progress value={progress} className="h-2 mt-2" />
      </CardHeader>
      
      <CardContent className="p-6 space-y-6">
        {/* Question with optional sign icon */}
        <div className="flex items-start gap-4">
          {currentQuestion.signImage && (
            <TrafficSignIcon type={currentQuestion.signImage} />
          )}
          <p className="text-lg font-semibold flex-1 break-words">{currentQuestion.question}</p>
        </div>

        {/* Answer options */}
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === currentQuestion.correctAnswer;
            
            let buttonClass = "w-full justify-start text-left h-auto py-3 px-4 whitespace-normal break-words ";
            
            if (showResult) {
              if (isCorrect) {
                buttonClass += "bg-green-500 hover:bg-green-500 text-white border-green-600";
              } else if (isSelected && !isCorrect) {
                buttonClass += "bg-destructive hover:bg-destructive text-destructive-foreground";
              } else {
                buttonClass += "opacity-50";
              }
            } else if (isSelected) {
              buttonClass += "bg-primary text-primary-foreground";
            }

            return (
              <Button
                key={index}
                variant="outline"
                className={buttonClass}
                onClick={() => handleAnswer(index)}
                disabled={showResult}
              >
                <span className="w-6 h-6 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center mr-3 text-sm font-bold">
                  {String.fromCharCode(65 + index)}
                </span>
                {option}
                {showResult && isCorrect && <CheckCircle className="ml-auto w-5 h-5" />}
                {showResult && isSelected && !isCorrect && <XCircle className="ml-auto w-5 h-5" />}
              </Button>
            );
          })}
        </div>

        {/* Result explanation */}
        {showResult && (
          <div className={`p-4 rounded-lg border-2 ${selectedAnswer === currentQuestion.correctAnswer ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'}`}>
            <p className="font-semibold mb-2">
              {selectedAnswer === currentQuestion.correctAnswer ? "✅ Točno!" : "❌ Netočno!"}
            </p>
            <p className="text-sm mb-3">{currentQuestion.explanation}</p>
            <p className="text-sm italic text-muted-foreground border-t pt-2">
              🗣️ {currentQuestion.medimurskaIzreka}
            </p>
          </div>
        )}

        {/* Navigation */}
        {showResult && (
          <div className="flex justify-end">
            <Button onClick={nextQuestion} className="gap-2">
              {currentIndex < questions.length - 1 ? "Sljedeće pitanje" : "Završi kviz"}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
