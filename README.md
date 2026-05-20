# typescript-node-app-template

A production-ready TypeScript Node.js server template with best practices baked in — linting, formatting, testing, and Git hooks pre-configured so you can skip the boilerplate and start building.

---

## 🚀 Features

- **TypeScript** — strict type-safe Node.js setup with `tsconfig.json`
- **Express v5** — fast, unopinionated web framework
- **ESLint** — code linting with `eslint.config.mjs`
- **Prettier** — consistent code formatting with `.prettierrc`
- **Jest + ts-jest** — unit & integration testing with supertest support
- **Husky + lint-staged** — pre-commit hooks that auto-format and lint only staged `.ts` files
- **Winston** — structured logging
- **nodemon + tsx** — fast dev server with hot reload (no compile step)
- **dotenv** — environment variable management
- **`.nvmrc`** — pinned Node.js version for consistent environments
- **`.env.example`** — environment variable template

---

## 📁 Folder Structure

```
typescript-node-app-template/
├── .husky/               # Git hooks (pre-commit)
├── src/                  # Application source code
│   └── server.ts         # Entry point
├── .env.example          # Environment variable template
├── .gitignore            # Git ignore rules
├── .nvmrc                # Node.js version
├── .prettierignore       # Prettier ignore rules
├── .prettierrc           # Prettier config
├── app.spec.ts           # Root-level test file
├── eslint.config.mjs     # ESLint config
├── jest.config.js        # Jest config
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript config
└── README.md
```

---

## 🛠️ Getting Started

### 1. Use this template

Click **"Use this template"** on GitHub to create a new repo from this template.

Or clone directly:

```bash
git clone https://github.com/GleanCoder/typescript-node-app-template.git your-project-name
cd your-project-name
```

### 2. Use the correct Node.js version

```bash
nvm use
```

### 3. Install dependencies

```bash
npm install
```

### 4. Set up environment variables

```bash
cp .env.example .env
```

Edit `.env` with your values.

### 5. Start the dev server

```bash
npm run dev
```

---

## 📜 Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server with nodemon + tsx (no compile step) |
| `npm test` | Run Jest tests in watch mode |
| `npm run lint:check` | Check code for lint errors |
| `npm run lint:fix` | Auto-fix lint errors |
| `npm run format:check` | Check code formatting |
| `npm run format:fix` | Auto-fix formatting with Prettier |
| `npm run prepare` | Set up Husky Git hooks |

---

## 🔧 Configuration Files

| File | Purpose |
|------|---------|
| `tsconfig.json` | TypeScript compiler options |
| `eslint.config.mjs` | ESLint rules and plugins |
| `.prettierrc` | Prettier formatting rules |
| `.prettierignore` | Files excluded from Prettier |
| `jest.config.js` | Jest + ts-jest config |
| `.nvmrc` | Pinned Node.js version |
| `.husky/` | Pre-commit hooks |

---

## 🌱 Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```env
PORT=3000
NODE_ENV=development
```

> Never commit your `.env` file. It's already in `.gitignore`.

---

## 📦 Tech Stack

### Runtime & Framework
| Package | Purpose |
|---------|---------|
| `express` v5 | Web framework |
| `typescript` | Type safety |
| `tsx` | Run TS files directly (dev) |
| `dotenv` | Environment variables |
| `winston` | Logging |
| `http-errors` | HTTP error handling |

### Dev Tooling
| Package | Purpose |
|---------|---------|
| `nodemon` | Dev server with hot reload |
| `jest` + `ts-jest` | Testing framework |
| `supertest` | HTTP integration testing |
| `eslint` + `typescript-eslint` | Linting |
| `prettier` | Code formatting |
| `husky` + `lint-staged` | Pre-commit hooks |

---

## 🪝 Git Hooks

Husky runs on every commit via `lint-staged` — only staged `.ts` files are processed:

1. `prettier --write` — auto-formats the file
2. `eslint --fix` — auto-fixes lint issues

---

## 📄 License

ISC
