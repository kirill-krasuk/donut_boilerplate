<p align="center">
  <img src="/public/images/logo256x256.png" alt="Donut Logo"/>
</p>

<p align="center">
  <img src="https://circleci.com/gh/kirill-krasuk/new_boilerplate.svg?style=svg" alt="circle ci result"/>
</p>


<h1 align="center">
Donut Boilerplate
</h1>

This template uses Yarn v2 (codenamed Berry). We are taking a new approach to installing dependencies - [PnP](https://classic.yarnpkg.com/en/docs/pnp/).<br/>
You can check out the yarn cli [here](https://yarnpkg.com/cli/install).

This template comes with circleci ♻️.<br/>
You just have to link your repository to a CircleCI account.

## How to start

- Copy and edit environment variables `cp .env.example .env`
- Install all dependencies `yarn`
- Finally start developing `yarn start`

## Hot to run in production mode
- Copy and edit environment variables `cp .env.example .env`
- Install all dependencies `yarn`
- Finally start developing `yarn start:prod`

You can also start production via docker.
- `make build-image` for building docker image. Set environment variables in *`.env`*  which contain **DOCKER***
- `make run-container` for run docker container.
- the rest of the commands and what they do you can see in the Makefile
## Helpful information
1. By default, the application opens in the browser, this can be inconvenient and this setting can be disabled in the *`.env`* file by setting **`OPEN_IN_BROWSER`**`=false`
1. In development mode, all builded assets are written to memory, if you need to look at the source or if you prefer to have it all in the visible area, you can set **`WRITE_ASSETS_TO_DISK`**`=true` 
1. In development mode, we recommend setting **`HYDRATE`**`=false`, but in production, `true`
1. In development mode, you can run or not run bundle analyzer. 
The variable is responsible for this **`BUILD_ANALYZE`**. In production analyzer write results in stats directory. You can also set the port to the analyzer server
1. To use production build via docker, you are recommended to rewrite *`.env`* docker-specific variables

## Stack used
- App developing 🧑‍💻
  - React ecosystem ⚛ (redux, react-redux, reselect ...)
  - [loadable component](https://loadable-components.com/)✂️✨ for split coding
  - [Styled-components](https://styled-components.com/) 💅🏾
  - [Styled-icons](https://styled-icons.js.org/) 💅
  - [Typescript](https://www.typescriptlang.org/)
  - [RxJS](https://rxjs-dev.firebaseapp.com/guide/overview)
  - [Ramda](https://ramdajs.com/docs/#) helpers 🐏
  - [fp-ts](https://gcanti.github.io/fp-ts/learning-resources/)
  - SSR
  - [Storybook](https://storybook.js.org/) 📗
- Bundling 📦
  - [webpack](https://webpack.js.org/) v5
  - [babel](https://babeljs.io/) v7
  - [typescript](https://www.typescriptlang.org/) v4
  - Yarn v2([Berry](https://yarnpkg.com/getting-started/migration)) 🧶
- Tooling 🛠
  - [eslint](https://eslint.org/)
  - [stylelint](https://stylelint.io/)
  - [typescript](https://www.typescriptlang.org/)
- Testing 🧪
  - [Jest](https://jestjs.io/en/) 🃏
  - [@testing-library/react](https://testing-library.com/) 🦑
- CI/CD 🤖
  - [CircleCI](https://circleci.com/enterprise-trial-install/?utm_source=gb&utm_medium=SEM&utm_campaign=SEM-gb-Ld-ni&utm_content=SEM-gb-Ld-ni-CircleCILocal_impDBA&gclid=Cj0KCQiApsiBBhCKARIsAN8o_4hQShx9SiAsDCMTGa5p_8abvIQrm9VAvBGYZ-2VTqB1Ir_xVzXcfNMaAvhkEALw_wcB) ♻️
  - [Docker](https://www.docker.com/) 🐳