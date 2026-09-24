# My Personal Website

This is my personal portfolio website — a small, simple page that introduces who I am, what I work with, and a few things I enjoy outside of coding.

It is built as a lightweight React app and serves as a clean space to share my background, stack, hobbies, and projects.

## About

This site is meant to feel personal and approachable rather than overly polished or corporate. It highlights:

- who I am
- the technologies I use
- my interests and hobbies
- a few selected projects

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- CSS modules / custom styling

## Project Structure

```text
personal-page/
├── README.md
├── src/
│   └── UI/
│       ├── index.html
│       ├── package.json
│       ├── vite.config.ts
│       └── src/
│           ├── App.tsx
│           ├── components/
│           ├── interfaces/
│           ├── sections/
│           ├── icons/
│           └── img/
└── ...
```

## Run locally

From the frontend app directory:

```bash
cd src/UI
yarn install
yarn dev
```

Then open the local Vite URL shown in the terminal.

## Build for production

```bash
cd src/UI
yarn build
```

This creates a production build in the Vite output folder.
