
## nest.js starter template project

Basic/minimal set steps to start a Nest.js based project

Steps to start from scratch in an empty folder:

#### Pre-requisites:
1. Node, npm installed
2. vscode
3. git is installed (if needed)
4. Install Nest CLI if using CLI to create a new project
   ```sh
   npm install -g @nestjs/cli
   ```

#### Steps:
1. git: git init, git remote add origin - any git initialization if needed. Create .gitignore
1. nest new project-name
   1. installs typescript, creates tsconfig.json
   1. eslint, including eslint.js
   1. prettier, including eslint-config-prettier and eslint-plugin-prettier. creates .prettierrc
   1. use "--strict" option to enable some of the type checking options mentioned below
1. If not using the CLI, follow [node-starter](../node-starter) and add nest libraries

1. [tsconfig.json](./tsconfig.json)
   1. Modify default values to enable stricter type checking, e.g. strict, noImplicitAny, strictFunctionTypes etc. See [tsconfig.json](./tsconfig.json) file for full list
1. [.eslintrc.js](./.eslintrc.js)
   1. Add stricter @typescript/eslint rules and adjust specific rules to turn them off (see [.eslintrc.js](./.eslintrc.js) file)
1. Disable eslint @typescript-eslint/no-floating-promises file in [main.ts](./main.ts) to ignore missing await in top-level
1. Prettier - while optional, it automatically added if using Nest CLI
   1. Install Prettier vscode extension
   1. In vscode user settings, set prettier to be the default formatter. This can be for all languages or language specific.
      ```json
      "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
      },
      "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
      },
      "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
      }
      ```
   1. In vscode workspace setings for the project, set preferences as in [workspace-settings.json](./workspace-settings.json)
   1. Edit .prettierrc to customize as needed. See [.prettierrc](./.prettierrc)

