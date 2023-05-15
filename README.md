# Odd-Mono

The architecture is built on several different ideas & concepts, such as: [Micro-Frontends](https://micro-frontends.org/) and [Microservices](https://aws.amazon.com/microservices/).
The purpose of dividing a website & app into tiny compartmentalized apps is to achieve:

- Easier debugging
- Higher performance
- Increase Security
- Easier to distribute content & information
- Increase SEO capabilities

We've made a visualization in [Figma](https://www.figma.com/) of the architecture in this repo, which can hopefully provide a satelite view of how it was intended to be built and work, for more information [click here](https://www.figma.com/community/file/1120598283125188720).
We've also created a Sitemap in [Figma](https://www.figma.com/) with the intent of providing you a more comprehensive understanding of what type of content the app will generate on install & run: [click here](https://www.figma.com/community/file/1120597920465543277).

## What's inside?

### Node

| Avatar                                                                                                                                                                                 | Name                                                  | Category                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ------------------------- |
| <a href="https://github.com/nvm-sh/nvm"><img src="https://raw.githubusercontent.com/nvm-sh/logos/HEAD/nvm-logo-color.svg" alt="Node Version Manager logo" width="32" height="32"/></a> | [Node Version Manager](https://github.com/nvm-sh/nvm) | Package Manager           |
| <a href="https://nodejs.org/"><img src="https://cdn.svgporn.com/logos/nodejs-icon.svg" alt="Nodejs logo" width="32" height="32"/></a>                                                  | [Nodejs](https://nodejs.org/)                         | JavaScript runtime engine |
| <a href="https://turborepo.org/"><img src="https://cdn.svgporn.com/logos/turborepo-icon.svg" alt="Turborepo logo" width="32" height="32"/></a>                                         | [Turborepo](https://turborepo.org/)                   | Monorepo Tool             |
| <a href="https://yarnpkg.com/"><img src="https://cdn.svgporn.com/logos/yarn.svg" alt="YarnPKG logo logo" width="32" height="32"/></a>                                                  | [Yarn](https://yarnpkg.com/)                          | Package Manager           |

### Coding Conventions

| Avatar                                                                                                                                             | Name                                      | Category                   |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | -------------------------- |
| <a href="https://editorconfig.org/"><img src="https://cdn.svgporn.com/logos/editorconfig.svg" alt="Editorconfig logo" width="32" height="32"/></a> | [Editorconfig](https://editorconfig.org/) | Coding Styles              |
| <a href="https://www.eslint.org/"><img src="https://cdn.svgporn.com/logos/eslint.svg" alt="ESLint logo" width="32" height="32"/></a>               | [ESLint](https://www.eslint.org/)         | Code Linter                |
| <a href="https://prettier.io/"><img src="https://cdn.svgporn.com/logos/prettier.svg" alt="Prettier logo" width="32" height="32"/></a>              | [Prettier](https://prettier.io/)          | Opinionated Code Formatter |

### Tools

| Avatar                                                                                                                                              | Name                                     | Category                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------------------- |
| <a href="https://storybook.js.org/"><img src="https://cdn.svgporn.com/logos/storybook-icon.svg" alt="Storybookjs logo" width="32" height="32"/></a> | [Storybookjs](https://storybook.js.org/) | UI, Testing & Documentation Tool |

### Apps

| Avatar                                                                                                                                                    | Name                                          | Category                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | -------------------------------------------------------------- |
| <a href="https://nextjs.org/"><img src="https://cdn.svgporn.com/logos/nextjs-icon.svg" alt="Nexjs logo" width="32" height="32"/></a>                      | [Nextjs](https://nextjs.org/)                 | Page Generator                                                 |
| <a href="https://www.typescriptlang.org/"><img src="https://cdn.svgporn.com/logos/typescript-icon.svg" alt="TypeScript logo" width="32" height="32"/></a> | [TypeScript](https://www.typescriptlang.org/) | TypeScript is JavaScript with syntax for types                 |
| <a href="https://mui.com/"><img src="https://cdn.svgporn.com/logos/material-ui.svg" alt="Material UI (MUI) logo" width="32" height="32"/></a>             | [Material UI - MUI](https://mui.com/)         | Comprehensive frontend suite of UI components, styling & theme |

## File structure

```text
🧮 odd-mono
┃
┠── 📁 apps (workspaces)
┃   ├┄┄ 📁 blocks
┃   ├┄┄ 📁 blog
┃   ├┄┄ 📁 docs
┃   ├┄┄ 📁 help
┃   ├┄┄ 📁 jobs
┃   ├┄┄ 📁 legal
┃   ├┄┄ 📁 shop
┃   └┄┄ 📁 www
┃
┠── 📁 packages (workspaces)
┃   ├┄┄ 📁 components
┃   ├┄┄ 📁 design-blocks
┃   ├┄┄ 📁 layouts
┃   ├┄┄ 📁 svg
┃   ├┄┄ 📁 theme
┃   └┄┄ 📁 views
┃
┠── 📁 tools (workspaces)
┃   └┄┄ 📁 story
┃
┠── 📁 utils (workspaces)
┃   ├┄┄ 📁 eslint-config-custom
┃   └┄┄ 📁 tsconfig
┃
┠┄┄ 🐭 .editorconfig
┠┄┄ 🔩 .eslintignore
┠┄┄ 🔩 .eslintrc
┠┄┄ 💄 .prettierignore
┠┄┄ 💄 .prettierrc
┠┄┄ 🟥 .gitattributes
┠┄┄ 🟥 .gitignore
┠┄┄ 🐉 .nvmrc
┠┄┄ 📝 README.md
┠┄┄ 📝 CONTRIBUTING.md
┠┄┄ ⭕ turbo.json
┠┄┄ 📦 package.json
┖┄┄ 🧶 yarn.lock

```

## Apps, Packages, Tools, Utils & Tests

### API

| Packages | Develop Command | Build Command    | URL                                              | Tech                                                                                                   |
| -------- | --------------- | ---------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| API      | `yarn api:dev`  | `yarn api:build` | [http://localhost:4000/](http://localhost:4000/) | [GraphQL](https://graphql.org/), [Apollo](https://www.apollographql.com/), [Relay](https://relay.dev/) |

### UI, UX & Graphical Design

| Packages | Develop Command  | Build Command      | URL                                                  | Tech                                   |
| -------- | ---------------- | ------------------ | ---------------------------------------------------- | -------------------------------------- |
| Story    | `yarn story:dev` | `yarn story:build` | [http://localhost:6006/](http://localhost:6006/)     | [Storybook](https://storybook.js.org/) |
| Design   |                  |                    | [http://figma.com/@odduse](http://figma.com/@odduse) | [Figma](https://www.figma.com/)        |

### Apps

Structure of the apps that is used in this repository.

| Packages    | Develop Command    | Build Command        | URL                                              | Description | Tech                          |
| ----------- | ------------------ | -------------------- | ------------------------------------------------ | ----------- | ----------------------------- |
| **Account** | `yarn account:dev` | `yarn account:build` | [http://localhost:3005/](http://localhost:3005/) | Lorem       | [Nextjs](https://nextjs.org/) |
| **Blocks**  | `yarn blocks:dev`  | `yarn blocks:build`  | [http://localhost:3008/](http://localhost:3008/) | Lorem       | [Nextjs](https://nextjs.org/) |
| **Blog**    | `yarn blog:dev`    | `yarn blog:build`    | [http://localhost:3001/](http://localhost:3001/) | Lorem       | [Nextjs](https://nextjs.org/) |
| **Docs**    | `yarn docs:dev`    | `yarn docs:build`    | [http://localhost:3006/](http://localhost:3006/) | Lorem       | [Nextjs](https://nextjs.org/) |
| **Help**    | `yarn help:dev`    | `yarn help:build`    | [http://localhost:3002/](http://localhost:3002/) | Lorem       | [Nextjs](https://nextjs.org/) |
| **Jobs**    | `yarn jobs:dev`    | `yarn jobs:build`    | [http://localhost:3004/](http://localhost:3004/) | Lorem       | [Nextjs](https://nextjs.org/) |
| **Legal**   | `yarn legal:dev`   | `yarn legal:build`   | [http://localhost:3003/](http://localhost:3003/) | Lorem       | [Nextjs](https://nextjs.org/) |
| **Shop**    | `yarn shop:dev`    | `yarn shop:build`    | [http://localhost:3007/](http://localhost:3007/) | Lorem       | [Nextjs](https://nextjs.org/) |
| **WWW**     | `yarn www:dev`     | `yarn www:build`     | [http://localhost:3000/](http://localhost:3000/) | Lorem       | [Nextjs](https://nextjs.org/) |

### App

| Avatar | Name | Category |
| ------ | ---- | -------- |

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org) app
- `web`: another [Next.js](https://nextjs.org) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Setup

This repository is used in the `npx create-turbo` command, and selected when choosing which package manager you wish to use with your monorepo (Yarn).

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
yarn run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
yarn run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
