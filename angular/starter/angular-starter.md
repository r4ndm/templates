
## Angular Starter
References to start an Angular project. 


### Pre-requisites
1. npm (pnpm or yarn depending upon package manager choice)
1. Angular installed globally (npm install -g @angular/cli). Global install is better if we are starting the project with ng new
1. VSCode
1. VSCode Prettier plugin - to format from within VSCode editor. You may want to set it as the default formatter in your user level settings.json:
   1. Ctrl-Shift-P > Open User Settings (JSON)
   1. Add to user level settings.json:
      ```json
      "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
       },
       "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
       },
      "[css]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
      },
      "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
      },
      "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
      }
      ```
      **Note1**: ~~for html, VSCode default formatter is preferable~~ can use Prettier for html formatting as long as line size is set to long (120 or 140)<p>
      **Note2**: these could be set at the workspace level, but will generate error when the project is opened and Prettier extension is not installed
  1. VSCode plugins: not necessarily needed but will help:
     1. Angular Language Service (https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)
     1. HTML CSS Support (https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)
### Steps:
1. Create a new Angular app in the current folder:
   ```sh
   ng new <appname> --directory . --package-manager pnpm|npm|yarn
   ```
   A new angular app is generated and dev packages are installed. The app can be build (npm run build), started (npm start) and accessed at http://localhost:4200 <p>
   * Use --package-manager option if using something other than npm
   * Use --standalone=false to include app module (as of Angular 19)

1. VSCode workspace level settings: customize .vscode/settings.json file. Ctrl > Shift > P > Open Workspace Settings (JSON), add:
   <br>
   (NOTE not needed if already in user settings, however use workspace settings for consistency across project members)
   ```json
   "[typescript]": {
     "editor.tabSize": 2,
     "editor.insertSpaces": true,
     "editor.detectIndentation": false,
     "editor.wordWrapColumn": 140,
     "editor.wordWrap": "wordWrapColumn",
    },
    "prettier.printWidth": 140
    ```
1. Add Prettier config file .prettierrc.json at top level
   ```json
   {
     "printWidth": 140,
     "tabWidth": 2,
     "singleQuote": true,
     "trailingComma" : "none",
     "semi": true
   }
   ```

1. [tsconfig.json](tsconfig.json): customize any Typescript settings as needed, e.g.:
   ```json
   "noImplicitAny": true,
   "suppressImplicitAnyIndexErrors": true
   ```
   https://angular.io/guide/typescript-configuration<p>
   **suppressImplicitAnyIndexErrors** has been deprecated, so needs to be removed

1. Linting with eslint: see [lint.md](lint.md)
1. Edit angular.json to add any asset (e.g. images) folders: in projects > project name > architect > build > assets:
   ```json
   "assets": [
      ...
      "public/favicon.ico",
      "src/assets"
   ],
   ```
1. Add a component: <br>
   ```ng generate component my-component```
   <br>
   Generates the new component in a new folder with the same name inside src/app. To create in existing folder, use --flat option: ```ng g c myfolder/my-component --flat```
   
<br>

### Additional resources
1. Add bootstrap (https://getbootstrap.com/docs/5.2/getting-started/introduction/):
   1. ```npm install bootstrap --save```
   1. In angular.json, add Bootstrap stype and script:
      ```json
      "styles": [
        "node_modules/bootstrap/dist/css/bootstrap.min.css",
        "src/styles.css"
      ],
      "scripts": [
        "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
      ]
      ```
   Or try ng-bootstrap https://ng-bootstrap.github.io/#/home
   
