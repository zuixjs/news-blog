# News-Blog template

A G-News alike web application template, featuring view pager with gesture, popup context menu, search page, bookmarks.  
Implemented as Progressive Web App, with background service worker and other optimizations.  
Suitable both for desktop and mobile.

Based on [zuix.js Web Starter](https://zuixjs.github.io/zuix-web-starter/) and [zuix.js HTML-PWA](#), this web application
is implemented as a static site with `markdown` and `liquid` templates using [11ty](https://11ty.dev) engine.


## Live demo

### https://zuixjs.github.io/news-blog/


https://user-images.githubusercontent.com/6654265/156775456-c7a420c2-bb99-4b32-9040-4f0bcca0de82.mp4


https://user-images.githubusercontent.com/6654265/156776137-7448b67e-9c6d-4d0f-abf7-4167adf0f504.mp4



## Requirements

- *Node* >= `v.12` 


## Installation

Clone this repository, and open a terminal in the project folder then enter the command `npm i` to install required
dependencies.


## Commands

### Starting the web server
 
- `npm start` to start the local web server

### CLI

The `zx` CLI tool can be used, among the other things, to initialize the web application and create new pages with just
a command.

**Initializing**

- `zx clean`

This command will delete all data contained in the `pages/news-blog` folder, and it is also required to wipe out all DEMO
data after installation.

**Adding new pages**

Pages are grouped into sections. Each section creates a new `view-pager` tab, where all pages belonging to that section
are listed in the form of *cards*, with a preview image, the title, the date and a button to pop up a context menu with
options.

For example, to add a new post page in the `travels` section  :
- `zx add -s travels -n my-cruise-to-maldive -l article`

This will create a new post page named `my-cruise-to-maldive.md` inside the `pages/news-blog/travels/` folder. 

So, the `-s` option is used to specify the section under which the post page will be grouped, the `-n` options is used to
specify the name of the page, and the `-l` option to specify the layout template to be used (from the `./templates/pages/` folder).  
Custom page layouts can be added in the `_inc/layouts` folder.

### Building for production

```shell
rm -rf docs # clean up build folder
NODE_ENV=production npm start
```

Also see [zuix.js Web Starter](https://github.com/zuixjs/zuix-web-starter) for all configuration and build options.


## References and Docs

- **zuix.js** https://zuixjs.org
- **zKit** https://zuixjs.github.io/zkit/
- **11ty** https://11ty.dev
