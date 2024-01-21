## Three.js HTML starter
HTML site with basic three.js initialized

### Pre-requisites
   1. HTML starter files

### Creating the web pages
   1. Create an HTML starter project. See HTML starter
   1. Download three.js and put in scripts, either directly or through package manager, npm, pnpm etc.
      1. Download either three.js (deprecated) or three.module.js (used in this example)
      1. See options for installing: https://discoverthreejs.com/book/introduction/get-threejs/
   1. In index html, add three.module.js and app.js (where app code lives)
      ```html
      <div id="webgl-container"></div>

      <script src='../scripts/three.module.js'></script>
      <script src='../scripts/app.js'></script>
      ```
      webgl-container div is for the script to anchor to
   1. Starter code in [app.js](./scripts/app.js) to test 



