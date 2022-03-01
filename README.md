# News-Blog template

A G-News alike web application template, featuring view pager with gesture, side drawer, and popup context menu.  
Implemented as Progressive Web App, with background service worker and other optimizations.  
Suitable both for desktop and mobile.

The app is implemented as a static site with [11ty](https://11ty.dev) engine, and using `markdown` and `liquid` templates.


## Live demo

### https://zuixjs.github.io/news-blog/


https://user-images.githubusercontent.com/6654265/156253042-7dc2dfbd-6e51-4f9a-a6f2-5ec9b2fd884b.mp4


This template is based on [zuix.js Web Starter](https://zuixjs.github.io/zuix-web-starter/) and
[zuix.js HTML-PWA](#).

![Lighthouse score screenshot](https://camo.githubusercontent.com/c65de26d27f9b35f03f3ddf66714971a33e8f0a2d60104e7093aac7c7228b356/68747470733a2f2f7a7569786a732e6769746875622e696f2f7a7569782d68746d6c2d7077612f696d616765732f6c69676874686f7573652d7265706f72742e706e67)


## Requirements

- *Node* >= `v.12` 


## Installation

Checkout this repository, and open a terminal in the project folder then enter the command `npm i` to install required
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
- `zx add -s travels -n my-cruise-to-maldive -l basic`

This will create a new post page named `my-cruise-to-maldive.md` inside the `pages/news-blog/travels/` folder. 

So, the `-s` option is used to specify the section under which the post page will be grouped, the `-n` options is used to
specify the name of the page, and the `-l` option to specify the layout template to be used.  
Custom page layouts can be added in the `_inc/layouts` folder.
