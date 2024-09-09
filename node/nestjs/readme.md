
## nest.js starter template project

Startup for Nest.js based project

Steps to start from scratch in an empty folder:

#### Pre-requisites:
1. node, npm installed
2. vscode
3. git is installed (if needed)
4. Install Nest CLI if using CLI to create a new project
   ```sh
   npm install -g @nestjs/cli
   ```

#### Steps:
1. git: git init, git remote add origin - any git initialization if needed. Create .gitignore
1. nest new project-name
   1. can choose between npm, yarn or pnpm for package manager
   1. installs typescript, creates tsconfig.json
   1. eslint, including eslint.js
   1. prettier, including eslint-config-prettier and eslint-plugin-prettier. creates .prettierrc
   1. use "--strict" option to enable some of the type checking options mentioned below
   1. If not using the CLI, follow [node-starter](../node-starter) and add nest libraries
1. Files to update:
   1. [tsconfig.json](./tsconfig.json)
      1. Modify default values to enable stricter type checking, e.g. strict, noImplicitAny, strictFunctionTypes etc. See [tsconfig.json](./tsconfig.json)
   1. [.eslintrc.js](./.eslintrc.js)
      1. Add stricter @typescript/eslint rules and adjust specific rules to turn them off (see [.eslintrc.js](./.eslintrc.js))
   1. Prettier - while optional, it automatically added if using Nest CLI
      1. Install Prettier vscode extension if not already
      1. In vscode user settings, set prettier to be the default formatter. This can be for all languages or language specific.
         ```json
         {
           "[typescript]": {
             "editor.defaultFormatter": "esbenp.prettier-vscode",
             "editor.tabSize": 2,
             "editor.insertSpaces": true,
             "editor.detectIndentation": false,
             "editor.wordWrapColumn": 140,
             "editor.wordWrap": "wordWrapColumn"
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
         }
         ```
      1. In vscode workspace setings for the project, set preferences as in [workspace-settings.json](./.vscode/settings.json)
      1. Edit .prettierrc to customize as needed. See [.prettierrc](./.prettierrc)
1. Run ```npm run lint``` to verify everything is clean with strict settings. Adjust as needed
   1. Disable eslint @typescript-eslint/no-floating-promises file in [main.ts](./src/main.ts) to ignore missing await in top-level
   1. Disable eslint-disable-next-line @typescript-eslint/no-unsafe-argument in [app.e2e-spec.ts](./test/app.e2e-spec.ts)
   1. Other instances if required
1. Commands:
   ```sh
   npm run format
   npm run build
   npm run start:dev
   ```
1. Test response on http://localhost:3000


### Starting dev
1. Remove auto-generated app-controller and related test specs
1. Add a set of API endpoints:
   1. Add a new controller:
      ```sh
      nest generate controller user
      ```
      or to generate controller with CRUD capabilities that include APIs, DTO and entity classes:
      ```sh
      nest generate resource user
      ```
      Note controller can be added to app.module or can be in its own module (as is the case when generating resource)
   1. Create DTO classes for request and response
   1. Create entity classes for business logic and storage layer
1. Enable Swagger (https://docs.nestjs.com/openapi/introduction)
   <p>
   Install @nestjs/swagger and enable swagger in [main.ts](./src/main.ts). Go to http://localhost:3000/api to view Swagger page. 
   <p>
   There are two ways to use Swagger:

   1. Manual annotation using annotation decorators @ApiBody, @ApiProperty, @ApiResponse etc. https://docs.nestjs.com/openapi/decorators 
   1. Automatic generation using Swagger plugin https://docs.nestjs.com/openapi/cli-plugin  



### Docs
https://docs.nestjs.com/


### Concepts
   * Controllers: similar to Web API

   * Services: 
      * Create with ```nest new service servicename ```
      * Inject service into whatever controller needs it 
      * Create services for business logic layer to keep controllers simply the request/response endpoints 
      * Convert from DTOs to DAOs (objects that are used to persist to db) here 
      * Preferably have a data access layer that manages storage into specific persistence 

   * DTOs: 
      * Create a dto folder each controller, e.g. users/dto
      * Create the requires request/response DTOs, named *.dto.ts 

   * DI: Scopes: https://docs.nestjs.com/fundamentals/injection-scopes 

   * Request: Use @Req decorator to annotate a parameter to get access to the request object

   * Response: Default handling is to return object or arrays as json and everything else as native types. So method can simply return what they want. Additional handling can be controlled through @Res decorator 

   * How to pass data in API requests:
      1. Route parameters
         1. This is for Get operations only? https://docs.nestjs.com/controllers#route-parameters 
         1. @Get(:id) and then @Param to annotate parameter that you would access the id parameter with 
      1. Query parameters using @Query
      1. Post operation body using @Body parameter

   * Async controller methods: Both async (return Promise) and Observable return types are automatically handled (https://docs.nestjs.com/controllers#asynchronicity)

   * Lifetime and scopes:
      * Default behavior for DI is singleton. Can be made request scoped (https://docs.nestjs.com/fundamentals/injection-scopes) but that will add some overhead 
      * Almost everything is shared across incoming requests (node.js doesn't follow request/response multi-threaded stateless model in which every request is processed by a separate thread) 
      * Using singleton instances is fully safe 

   * Middleware: same as WebAPI. https://docs.nestjs.com/middleware  

   * Pipes: similar to middleware but specific to individual requests, used to transform data or data validation. Invoked right before a method is invoked. https://docs.nestjs.com/pipes

   * Guard: similar but main responsibility is to allow or deny the request, e.g. authorization, RBAC etc. https://docs.nestjs.com/guards 

   * Interceptor: similar to middleware but inspired from AOP to inject extra logic or transform result or extend basic function behavior 