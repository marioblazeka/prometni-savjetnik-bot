# Welcome to your Lovable project

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

# Detaljan opis strukture projekta (Frontend aplikacija)

Ovaj projekt je **čista frontend aplikacija** izrađena u **React + TypeScript + Vite + Tailwind CSS** stacku.
Ne sadrži backend (server, bazu, API) u ovom repozitoriju – sav kod je **isključivo frontend**.

Ako se backend koristi, on je:

* ili eksterni (REST / GraphQL API)
* ili simuliran kroz statičke podatke u `/src/data`

---

## OPĆA PODJELA

* **Frontend:** kompletan projekat (UI, logika, interakcija)
* **Backend:** ❌ ne postoji u ovom repozitoriju

---

## `/public`

**Tip:** Frontend (statički resursi)

Fajlovi koji se serviraju direktno browseru, bez obrade kroz Vite.

### `favicon.ico`

Ikonica aplikacije (tab u browseru).

### `placeholder.svg`

SVG placeholder (loading, fallback grafika).

### `robots.txt`

SEO konfiguracija – pravila za web crawlere.

---

## `/src`

**Tip:** Frontend (glavni izvorni kod)

---

## `/src/components`

**Tip:** Frontend – UI komponente

Sadrži **sve reusable React komponente**. Dijeli se na:

---

### `/src/components/ui`

**Tip:** Frontend – UI biblioteka (shadcn/ui stil)

Ovo su **generičke, niskonivojske UI komponente**.

Karakteristike:

* bez poslovne logike
* bez znanja o kvizu, chatu ili domeni
* fokus isključivo na izgled i osnovne interakcije

Primjeri:

* `button.tsx` – dugmad
* `dialog.tsx`, `alert-dialog.tsx` – modali
* `form.tsx`, `input.tsx`, `label.tsx` – forme
* `table.tsx`, `tabs.tsx`, `pagination.tsx` – strukturalne UI komponente
* `toast.tsx`, `toaster.tsx`, `sonner.tsx` – notifikacije

**Komentar (na vrhu fajlova):**

```ts
// Generička UI komponenta
// Dio dizajn sistema aplikacije
```

---

### Domen-specifične komponente (`/src/components` root)

Ove komponente **znaju kontekst aplikacije** (kviz, chatbot, saobraćajna pravila).

#### `ChatInput.tsx`

Input za slanje poruka chatbotu.

#### `ChatMessage.tsx`

Prikaz pojedinačne poruke (user / bot).

#### `FeedbackButton.tsx`

Slanje feedbacka korisnika.

#### `ModeNavButton.tsx`

Navigacija između modova (chat / quiz).

#### `NavLink.tsx`

Custom navigacioni link.

#### `QuickTopics.tsx`

Brzi izbor tema kviza.

#### `QuizMode.tsx`

Glavna komponenta za kviz logiku i UI.

#### `TrafficSignIcon.tsx`

Ikonica pojedinačnog saobraćajnog znaka.

#### `TrafficSignsSVG.tsx`

SVG ilustracije / animacije znakova.

**Komentar:**

```ts
// Domen-specifična komponenta
// Povezana sa funkcionalnošću aplikacije
```

---

## `/src/data`

**Tip:** Frontend (mock / statički podaci)

Zamjena za backend bazu podataka.

### `quizQuestions.ts`

Pitanja za kviz.

### `trafficKnowledge.ts`

Saobraćajna pravila, pojmovi i objašnjenja.

**U pravoj aplikaciji:**

* ovo bi dolazilo sa backend API-ja

**Komentar:**

```ts
// Statički podaci (mock data)
// U produkciji dolaze sa backend servisa
```

---

## `/src/hooks`

**Tip:** Frontend – poslovna logika

Custom React hook-ovi (state + efekti).

### `useChatbot.ts`

* upravljanje porukama
* stanje chata
* komunikacija sa bot logikom

### `useSoundEffects.ts`

* zvukovi (klik, poruke)

### `use-mobile.tsx`

* detekcija mobilnog uređaja

### `use-toast.ts`

* wrapper za toast notifikacije

**Komentar:**

```ts
// Custom hook
// Enkapsulira poslovnu logiku bez JSX-a
```

---

## `/src/lib`

**Tip:** Frontend – helper logika

### `utils.ts`

Zajedničke utility funkcije (formatiranje, helperi).

---

## `/src/pages`

**Tip:** Frontend – stranice (routing nivo)

### `Index.tsx`

Glavna početna stranica aplikacije.

### `NotFound.tsx`

404 stranica.

**Komentar:**

```ts
// Page-level komponenta
// Predstavlja cijelu rutu aplikacije
```

---

## Root fajlovi (konfiguracija)

### `App.tsx`

Root layout aplikacije.

### `main.tsx`

Entry point – mount React aplikacije u DOM.

### `index.html`

Osnovni HTML template.

### `index.css` / `App.css`

Globalni stilovi.

---

## Konfiguracioni fajlovi

* `vite.config.ts` – Vite build i dev server
* `tailwind.config.ts` – Tailwind theme
* `postcss.config.js` – PostCSS
* `eslint.config.js` – linting
* `tsconfig*.json` – TypeScript konfiguracija

---

## Backend – gdje bi bio?

Backend NIJE dio ovog projekta.

Tipična struktura backend-a (ako se doda):

```
backend/
 ├─ routes/
 ├─ controllers/
 ├─ services/
 ├─ models/
 └─ database/
```

Frontend bi komunicirao sa backendom preko:

* REST API-ja
* fetch / axios poziva

---

## Sažetak

* ✅ Ovo je **100% frontend projekat**
* ❌ Nema servera ni baze
* 🧠 Poslovna logika → `hooks`
* 🎨 UI → `components/ui`
* 📦 Podaci → `data`
* 📄 Stranice → `pages`


