## Basic HTML site
HTML site with some basic html, css and javacript. 

### Pre-requisites
   1. VSCode extensions
      1. Live server (ritwick dey) - web server
      2. HTML CSS Support (ecmel) - snippets for html and intellisense for html and css
      3. Prettier - for formatting:
         1. Set prettier as html formatter in user or workspace settings: 
            ```json
            "[html]": {
               "editor.defaultFormatter": "esbenp.prettier-vscode"
            },
            ```
         1. Set longer line size:
            ```json
               "prettier.printWidth": 120,
            ```
### Creating the web pages
   1. Create a new VSCode project
   1. Add index.html (top level or in html folder)
   1. Use VSCode completion (ctrl-space) to create a new HTML Sample
   1. Update head
   1. Inside body add content
      1. Create header, main, footer sections
      1. nav>ul>li*3 TAB for auto completion
      1. Add nav items (Home, Computers, Contact)
      1. Same for footer
      1. Add main section
      1. Create specific pages
      1. Add css to customize nav and other elements
      1. To use bootstrap, add reference to its css 
         ```<link rel="stylesheet" href="…">``` see https://getbootstrap.com/ 
      1. javascript: can be directly in element, or in script (anywhere in head, body or outside) element ```<script>function ShowDate() { ... }``` or in separate js file ```<script src="...">```


### Notes
   1. Relative or absolute path when referring to pages in links
   1. Script loading is blocking, so add at end of body if concerns with loading time
   1. Use ```window.addEventListener('DOMContentLoaded', e => {``` to run script after page is loaded
   1. local storage to save data between pages
   1. Navigate to another page with JS with ```window.location.href = url;```

