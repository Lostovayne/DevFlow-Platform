# Ultimate Next.js Project

This project is a robust template for building modern web applications using Next.js and a set of key technologies and tools.

## Demo

<img src="./public/img.png" alt="Devflows" width="100%" />

## Key Features

- **Modern Stack:** Built with Next.js, TypeScript, and Tailwind CSS.
- **Developer Experience:** Pre-configured with ESLint and Prettier for code quality and consistency.
- **Essential Libraries:** Includes commonly used libraries for UI components, authentication, form handling, and more.
- **Efficient Package Management:** Uses pnpm for fast and efficient dependency management.

## Main Technologies

- **Next.js**: React framework for server-side rendering and static site generation.
- **TypeScript**: Typed language for safer and more scalable development.
- **Tailwind CSS**: Utility-first CSS framework for rapid and responsive design.
- **ESLint**: Linting tool to maintain code quality.
- **Prettier**: Code formatter to ensure consistent style.
- **pnpm**: Fast and efficient package manager.

## Key Dependencies

The project includes a variety of libraries for common functionalities:

- `@radix-ui/*`: Accessible UI components.
- `cmdk`: Command palette component.
- `date-fns`: Date handling utilities.
- `embla-carousel-react`: Touch-friendly and responsive carousel.
- `lucide-react`: Icons.
- `next-auth`: Authentication for Next.js.
- `next-themes`: Theme handling (light/dark).
- `react-hook-form`: Form handling with hooks.
- `sonner`: Toast components.
- `zod`: Schema validation.
  _(Note: Please ensure this list is up-to-date with your project's current dependencies)_

## Development Setup

- **ESLint**: Configured with `eslint-config-standard`, `eslint-plugin-n`, `eslint-plugin-promise`, `eslint-plugin-tailwindcss`, and `eslint-config-prettier` to ensure clean and well-styled code.
- **PostCSS**: Configured with `@tailwindcss/postcss`.
- **TypeScript**: Standard configuration for a Next.js project.

### Installing ESLint and Style Rules

To configure ESLint and the recommended style rules, follow these steps:

1. Install `eslint-config-standard`:

   ```bash
   pnpm i eslint-config-standard -D
   ```

2. Install Node and Promises plugins:

   ```bash
   pnpm i eslint-plugin-n eslint-plugin-promise -D
   ```

3. Install the Tailwind CSS plugin:

   ```bash
   pnpm i eslint-plugin-tailwindcss -D
   ```

4. Install the configuration to integrate Prettier with ESLint:

   ```bash
   pnpm i eslint-config-prettier -D
   ```

5. Install Prettier:

   ```bash
   pnpm i prettier -D
   ```

**Note:** Make sure to add `-D` to the installation commands to save these dependencies as development dependencies.

## How to Get Started

1. Clone the repository:

   ```bash
   git clone <REPOSITORY_URL>
   cd ultimate-nextjs
   ```

2. Install dependencies using pnpm:

   ```bash
   pnpm install
   ```

3. Run the development server:

   ```bash
   pnpm dev
   ```

   The project will be available at `http://localhost:3000`.

## Available Scripts

- `pnpm dev`: Starts the development server.
- `pnpm build`: Builds the project for production.
- `pnpm start`: Starts the production server.
- `pnpm lint`: Runs ESLint to check the code.
- `pnpm format`: Runs Prettier to format the code.

## Project Structure

```
ultimate-nextjs/
├── public/             # Static assets (images, fonts, etc.)
├── src/                # Source code
│   ├── app/            # Next.js App Router
│   ├── components/     # Reusable React components
│   ├── lib/            # Utility functions and configurations
│   └── styles/         # Global styles
├── .eslintrc.json      # ESLint configuration
├── .prettierrc.json    # Prettier configuration
├── next.config.js      # Next.js configuration
├── package.json        # Project dependencies and scripts
├── pnpm-lock.yaml      # pnpm lock file
├── postcss.config.js   # PostCSS configuration
├── README.md           # Project README
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```
