This is a foundational rebuild of [whatido.app](https://whatido.app/) with nextjs, created with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

first, run installation of the app.

```bash
yarn
```

NB: engines are set to strict mode to use node lts/fermium and yarn for installation of modules.

```bash
  "engines": {
    "node": ">=14.0.0",
    "yarn": ">=1.22.0",
    "npm": "please-use-yarn"
  },
```

if installation completes successfully, you can run the app with the yarn command.

```bash
yarn dev
```

open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

you can start developing page in `pages/` by adding parent component in file with router path as file name. . The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

## Git Hooks

make components are re-useable as possible and commit frequently.
git commits should have a subject and phrase description of your work.
your commits should look like the example.

```bash
git commit -m "docs: add readme docs"
```

all avalable subjects are included below, remember engines and hooks are in strict mode.

- build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- docs: documentation only changes
- chore: working on cleanups and random changes
- feat: A new feature
- fix: A bug fix
  -wip : work in progress
  -develop : routing and architecture
- perf: A code change that improves performance
- refactor: A code change that neither fixes a bug nor adds a feature
- revert: A code change that reverts to a previous feature
- translation: A code change translates to a modified form
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- security: code to improve app security
- test: Adding missing tests or correcting existing tests

## Learn

to learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

you can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!\\

you can learn how the app was setup

- [scalable next app](https://dev.to/alexeagleson/how-to-build-scalable-architecture-for-your-nextjs-project-2pb7)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

create a pull reqest to merge to main.
