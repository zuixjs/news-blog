# News-Blog template

A G-News alike web application template, featuring view pager with gesture, popup context menu, search page, bookmarks.  
Implemented as Progressive Web App, with background service worker and other optimizations.  
Suitable both for desktop and mobile.

Based on [zuix.js Web Starter](https://zuixjs.github.io/zuix-web-starter/) and [zuix.js HTML-PWA](#), this web application
is implemented as a static site with `markdown` and `liquid` templates using [11ty](https://11ty.dev) engine.


## Live demo

### https://zuixjs.github.io/news-blog/


https://user-images.githubusercontent.com/6654265/156775456-c7a420c2-bb99-4b32-9040-4f0bcca0de82.mp4

[![Youtube Video](https://user-images.githubusercontent.com/6654265/156862698-f16ea45c-205b-421f-989b-490958fd3a5a.png)](https://youtu.be/GE-046o1hLc)


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

For example, to add a new post page in the `travel` section  :
- `zx add -s travel -n my-cruise-to-maldive`

This will create a new post page named `my-cruise-to-maldive.md` inside the `pages/news-blog/travel/` folder. 

So, the `-s` option is used to specify the section under which the page will be included, while the `-n` options is used to
specify the name of the page.  


### Building for production

```shell
rm -rf docs # clean up build folder
NODE_ENV=production npm start
```

Also see [zuix.js Web Starter](https://github.com/zuixjs/zuix-web-starter) for all configuration and build options.


## References and Docs

- **zuix.js** https://zuixjs.org
- **zKit** https://zuixjs.github.io/zkit/
- **zuix.js Web Starter** https://zuixjs.github.io/zuix-web-starter/
- **11ty** https://11ty.dev
