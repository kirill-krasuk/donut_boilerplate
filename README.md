<p align="center">
  <img width="256" src="./src/assets/svgs/new_logo.svg" alt="Donut Logo"/>
</p>

<p align="center">
  <img src="https://circleci.com/gh/kirill-krasuk/donut_boilerplate.svg?style=svg" alt="circle ci result"/>
  <img src="https://img.shields.io/circleci/build/github/kirill-krasuk/donut_boilerplate" alt="build result">
  <a href="https://codecov.io/gh/kirill-krasuk/donut_boilerplate">
	<img src="https://codecov.io/gh/kirill-krasuk/donut_boilerplate/branch/develop/graph/badge.svg?token=SPFQJZ6O73"/>
  </a>
</p>

<h1 align="center" style="font-size: 45px; font-weight: bold">
<span style="color: yellow">Donut</span> <span style="color: #F05158">Boilerplate</span>
</h1>

This template based on [Feature-Sliced Design](https://feature-sliced.design/). Uses Yarn🧶 v2 (codenamed Berry). We are taking a new approach to installing dependencies - [PnP](https://classic.yarnpkg.com/en/docs/pnp/).
You can check out the yarn cli [here](https://yarnpkg.com/cli/install).

This template comes with circleci ♻️.<br/>
You just have to link your repository to a CircleCI account.

The template is already prepared to work with a service worker ⚙️. To enable/disable it, change the **`SERVICE_WORKER_ENABLE`** variable. <br/>
To do development inside a service worker, go to the path `<appRootDir>/app/service-worker.js`.<br/>
In the browser, the service worker connects to the _**/sw.js**_ path

## How to start

-   Copy and edit environment variables `cp .env.example .env`
-   Install all dependencies `yarn`
-   Finally start developing `yarn start`

## Hot to run in production mode

-   Copy and edit environment variables `cp .env.example .env`
-   Install all dependencies `yarn`
-   Finally start developing `yarn start:prod`

You can also start production via docker.

-   `make build-image` for building docker image. Set environment variables in _`.env`_ which contain **DOCKER\***
-   `make run-container` for run docker container.
-   the rest of the commands and what they do you can see in the Makefile

## Helpful information

1. see into the dotenv file for custom configuration application
1. for correct and scalable application look at the [structure doc](/docs/structure/)
1. By default, the application opens in the browser, this can be inconvenient and this setting can be disabled in the _`.env`_ file by setting **`OPEN_IN_BROWSER`**`=false`
1. In development mode, all builded assets are written to memory, if you need to look at the source or if you prefer to have it all in the visible area, you can set **`WRITE_ASSETS_TO_DISK`**`=true`
1. In development mode, we recommend setting **`HYDRATE`**`=false`, but in production, `true`
1. In development mode, you can run or not run bundle analyzer.
   The variable is responsible for this **`BUILD_ANALYZE`**. In production analyzer write results in stats directory. You can also set the port to the analyzer server
1. To use production build via docker, you are recommended to rewrite _`.env`_ docker-specific variables
1. To configure **`stylelint`** [go to guide](./docs/stylelint/README.md)
1. For use conventional-commits use `yarn commit` or follow the commitlint rules on normal git use

## Useful scripts

All these scripts are described in package.json and called through the `yarn <command>` command.

-   `bundle` - build production version
-   `ci` - run all commands to test the application(using in ci/cd workflow)
    -   `:test` - run ci test
    -   `:lint` - run ci lint
-   `lint` - code style checking
    -   `-fix` - fix js syntax
    -   `:styled` - styled-components style checking
    -   `:css` - css style checking
    -   `:css-fix` - css lint and fix
-   `format:code` - run prettier and eslint-fix on project
-   `prunecaches` - delete app caches
-   `run:server` - start builded app
-   `start` - build and run development app
    -   `:prod` - build and run production app
-   `storybook` - run storybook
    -   `:build` - build storybook static files
-   `test` - run jest for testing
    -   `:coverage`
    -   `:update`
    -   `:watch`
-   `types` - run typescript checking
-   `commit` - run for use commitizen better commit
-   `release` - generate CHANGELOG based your commits
-   `generate(gen)` - app entities generator

## Stack used

-   App developing 🧑‍💻
    -   React ecosystem ⚛ (redux, redux-toolkit)
    -   [loadable component](https://loadable-components.com/)✂️✨ for split coding
    -   [Styled-components](https://styled-components.com/) 💅🏾
    -   [Styled-icons](https://styled-icons.js.org/) 💅
    -   [Typescript](https://www.typescriptlang.org/)
    -   [Ramda](https://ramdajs.com/docs/#)🐏
    -   SSR
    -   [Feature-Sliced Design](https://feature-sliced.design/) 🍰
-   Bundling 📦
    -   [webpack](https://webpack.js.org/) v5
    -   [babel](https://babeljs.io/) v7
    -   [typescript](https://www.typescriptlang.org/) v4
    -   [PostCSS](https://postcss.org/)🔮
    -   [Yarn v2 (Berry)](https://yarnpkg.com/getting-started/migration) 🧶
-   Tooling 🛠
    -   [eslint](https://eslint.org/)
    -   [stylelint](https://stylelint.io/)
    -   [prettier](https://prettier.io/)
    -   [typescript](https://www.typescriptlang.org/)
    -   [commitlint](https://commitlint.js.org/#/) 🚥
    -   [lint-staged](https://github.com/okonet/lint-staged)
    -   [husky](https://typicode.github.io/husky/#/) 🐶
    -   [commitizen](http://commitizen.github.io/cz-cli/)
-   Testing 🧪
    -   [Jest](https://jestjs.io/en/) 🃏
    -   [@testing-library/react](https://testing-library.com/) 🦑
    -   [Storybook](https://storybook.js.org/) 📗
-   CI/CD 🤖
    -   [CircleCI](https://circleci.com/enterprise-trial-install/?utm_source=gb&utm_medium=SEM&utm_campaign=SEM-gb-Ld-ni&utm_content=SEM-gb-Ld-ni-CircleCILocal_impDBA&gclid=Cj0KCQiApsiBBhCKARIsAN8o_4hQShx9SiAsDCMTGa5p_8abvIQrm9VAvBGYZ-2VTqB1Ir_xVzXcfNMaAvhkEALw_wcB) ♻️
    -   [Codecov](https://about.codecov.io/) ⛱
    -   [Docker](https://www.docker.com/) 🐳
