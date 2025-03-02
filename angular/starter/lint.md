
## Lint for Angular projects

### Resources:
   * https://eslint.org/
   * https://eslint.org/docs/latest/use/configure/configuration-files
   * https://github.com/angular-eslint/angular-eslint

### Install
Install and use eslint for linting. Eslint can be set up two ways:
   1. Run ng lint. First time you run "ng lint" (Angular CLI 14 and above), it will install and configure eslint.
   1. Run ```ng add angular-eslint```. See (https://github.com/angular-eslint/angular-eslint)

The following changes are made to the project:<br>
   1. package.json: 
      1. lint command is added
      1. eslint, angular-eslint and typescript-eslint packages are added in dev dependencies
   1. eslint.config.js file is added (.eslintrc.json prior to eslint v9)
   1. angular.json is modified to include lint


### Use
**NOTE 1** .eslintrc.json is the old file syntax. Generated eslint.config.js or [eslint.config.mjs](eslint.config.mjs) is the new flat file syntax. Use either the estlint.config.js or this [eslint.config.mjs](eslint.config.mjs). See Migration section below to see how to create this file from the old .eslintrc.json file.

**NOTE 2** If using eslint.config.mjs, you will need to install 2 more libraries:
```pn install @eslint/js @eslint/eslintrc --save-dev```

**NOTE 3** This [eslint.config.mjs](eslint.config.mjs) file was created by migrating the old .eslintrc.json. There may be a simpler .mjs file possible. TODO: Copy from nestjs created .mjs file?

Customize rules for appropriate level of checking.

   1. Extend eslint.config.mjs file for stricter type checking (https://typescript-eslint.io/docs/linting/configs/):
      ```js
      .extends(
         'plugin:@angular-eslint/recommended',
         'plugin:@angular-eslint/template/process-inline-templates',
         'plugin:@typescript-eslint/recommended',
         'plugin:@typescript-eslint/recommended-requiring-type-checking',
         'plugin:@typescript-eslint/strict',
         'prettier'
      )
   1. To turn rules on or off or change the severity level, update rules section in eslint.config.mjs file. 
      1. Disable (remove or set error level to off) directive-selector and component-selector rules unless all selectors have the same prefix
      1. To disable empty class rule: 
         ```js
         '@typescript-eslint/no-extraneous-class': ['off'],
         ```
      1. Other rules that may help when getting started:
         ```js
         '@typescript-eslint/no-inferrable-types': ['off'],
         '@typescript-eslint/explicit-function-return-type': ['warn'],
         '@typescript-eslint/no-explicit-any': ['off']
         ```
         Sample [eslint.config.mjs](eslint.config.mjs) file
      1. List of all Typescript ESLint rules: https://typescript-eslint.io/rules/
      <br>
         For example, to force functions to specify return types: https://typescript-eslint.io/rules/explicit-function-return-type
      
   1. Prettier/ESLint integration: for Prettier and ESLint to play nice together (https://typescript-eslint.io/docs/linting/configs/#prettier):
      1. Install eslint-config-prettier: `npm install eslint-config-prettier --save-dev` or `pnpm add eslint-config-prettier --save-dev|-D`
      1. Add "prettier" to eslint.config.mjs "extends" section:
         ```js
         .extends(
            'plugin:@angular-eslint/recommended',
            ...
            'prettier'
         )
         ```
      1. Do you need eslint-plugin-prettier and prettier-eslint? Not really. See https://prettier.io/docs/en/integrating-with-linters.html#notes 


### Migrate
As of ESLint v9, flat config file eslint.config.js (or .mjs) is the preferred standard. .json files can be migrated: https://eslint.org/docs/latest/use/configure/migration-guide
<br>

Command: `pnpx dlx @eslint/migrate-config .eslintrc.json`

Configuration file precedence: <https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file-precedence>

