# conductor-plugin-example

An example of how to use the Conductor framework to create a plugin that will run on Source Academy.

## Using this repository

This repository is a *template*. To use, click the "Use this template" button,
and create a new repository for yourself - don't clone or fork this repository.

However, if you wish to propose changes to this repository, then *do* clone or fork it - 
don't create a new repository based on this template.


## Contents of this package

The template uses Yarn v4 with [PnP](https://yarnpkg.com/features/pnp) out of the box. 
**To generate the Typescript SDK if you're using VSCode, run `yarn dlx @yarnpkg/sdks vscode`. Otherwise, types won't show up properly**. For other editors, refer to the [Yarn documentation](https://yarnpkg.com/getting-started/editor-sdks). If you're using packages which are not supported in PnP (such as `jsdoc` as of v4.0.5), set `.yarnrc.yml` to
```yaml
nodeLinker: node-modules
```

It is already configured with [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/). Linting is available through `yarn lint` and formatting through `yarn format`. **Linting and formatting changes are enforced in CI builds, in line with other SA repos**. A minimal testing framework is provided with `jest`. Testing is performed using `yarn test`.

_Note: For more information regarding the terminology and systems used in this example, refer to the [Conductor](https://github.com/source-academy/conductor) repository. It'll make the paragraphs below a lot more coherent_

The repo consists of two plugins, `WebPlugin` in `src/web.ts` which is meant to be run on the host's side (the frontend, most likely), as well as the `RunnerPlugin` in `src/runner.ts` meant to be run on the runner's side (the thread running the evaluator). 

At the moment, the plugins don't do much. The `WebPlugin` subscribes to the `__test_channel__` channel, waiting for messages. In the background, the host would request the runner to load the `RunnerPlugin`. On load, the `RunnerPlugin` sends a message on the channel and the `WebPlugin` displays it.

The Typescript files are bundled using [Rollup](https://rollupjs.org/), and are transpiled into the `dist` folder (at `dist/web.js` and `dist/runner.js`).

## Making your plugin available to run

Run `yarn build` (or `yarn watch` for development, where it creates incremental builds). If there are no problems, a file `dist/web.js` and `dist/runner.js` will be generated.
This is the file that will be used to run the plugin on the host (the frontend) and the runner.

This repository has been configured to automatically build your runner and deploy it to GitHub Pages
upon pushing to the `main` branch on GitHub.
You should be able to find it at `https://{your-username}.github.io/{your-repository}/index.js`.

When the plugin is finally up (good job!), you can add it into the [plugin directory](https://github.com/source-academy/plugin-directory) to make it visible to all instances of the Source Academy frontend. 