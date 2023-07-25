
## Angular Starter
References to start an Angular project. 


### Pre-requisites
1. npm
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

### Steps:
1. Create a new Angular app in the current folder:
   ```sh
   ng new <appname> --directory . --package-manager pnpm|npm|yarn
   ```
   A new angular app is generated and dev packages are installed. The app can be build (npm run build), started (npm start) and accessed at http://localhost:4200 <p>
   Use --package-manager option if using something other than npm

1. VSCode workspace level settings: customize .vscode/settings.json file. Ctrl > Shift > P > Open Workspace Settings (JSON), add:
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

1. tsconfig.json: customize any Typescript settings as needed, e.g.:
   ```json
   "noImplicitAny": true,
   "suppressImplicitAnyIndexErrors": true
   ```
   https://angular.io/guide/typescript-configuration

1. Linting with eslint: install and configure eslint:
   1. First time you run "ng lint" (Angular CLI 14 and above), it will install and configure eslint. @angular/eslint, @typescript-eslint packages are installed and lint command is added to package.json. .eslintrc.json file is created
   1. Extend .eslintrc.json file for stricter type checking (https://typescript-eslint.io/docs/linting/configs/):
      ```json
      "extends": [
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@typescript-eslint/strict"
      ]
      ```
      
   1. To turn rules on or off or change the severity level, update .eslintrc.json file. 
      1. Disable (remove or set error level to off) directive-selector and component-selector rules in .eslintrc.json unless all selectors have the same prefix
      1. To disable empty class rule: 
         ```json
         "@typescript-eslint/no-extraneous-class": [
            "off"
         ]
         ```
      1. Other rules that may help when getting started:
         ```json
         "@typescript-eslint/no-extraneous-class": [ "off" ],
         "@typescript-eslint/no-inferrable-types": [ "off" ],
         "@typescript-eslint/explicit-function-return-type": [ "warn" ],
         "@typescript-eslint/no-explicit-any": [ "off" ]
         ```
         Sample [.eslintrc.json](.eslintrc.json) file
      1. List of all Typescript ESLint rules: https://typescript-eslint.io/rules/
      <br>
         For example, to force functions to specify return types: https://typescript-eslint.io/rules/explicit-function-return-type
      
   1. Prettier/ESLint integration: for Prettier and ESLint to play nice together (https://typescript-eslint.io/docs/linting/configs/#prettier):
      1. Install eslint-config-prettier: ```npm install eslint-config-prettier --save-dev```
      1. Add "prettier" to eslintrc.json "extends" array:
         ```json
         "extends": [
           "plugin:@angular-eslint/recommended",
           ...
           "plugin:@typescript-eslint/strict"
           "prettier"
         ]
         ```
      1. Do you need eslint-plugin-prettier and prettier-eslint? Not really. See https://prettier.io/docs/en/integrating-with-linters.html#notes 
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
   
