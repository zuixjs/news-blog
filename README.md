# News-Blog template

A G-News alike web application template, featuring view pager with gesture, popup context menu, search page, bookmarks.  
Implemented as Progressive Web App, with background service worker and other optimizations.  
Suitable both for desktop and mobile.

Based on [zuix.js Web Starter](https://zuixjs.github.io/zuix-web-starter/) and [zuix.js HTML-PWA](#), this web application
is implemented as a static site with `markdown` and `liquid` templates using [11ty](https://11ty.dev) engine.


### --&gt;&gt;[ [Demo and Docs](https://zuixjs.github.io/news-blog/) ]&lt;&lt;--


## Prerequisites

Node.js version 14 or higher is required to use this template.

## Getting started

To create a new project using this template, enter the following command:

```shell
npx zuix new my-site-name -t news-blog
```

## Commands

### Starting the web server

- `npx zuix start` to start the local web server

The `zuix` CLI tool can be used, among the other things, to initialize the web application and create new pages.

### Initializing

- `npx zuix wipe-content`

This command will delete all data contained in the `content/` folder, required to wipe out all DEMO
data after installation.

### Adding new pages

Pages are grouped into sections. Each section creates a new `view-pager` tab, where all pages belonging to that section
are listed in the form of *cards*, with a preview image, the title, the date and a button to pop up a context menu with
options.

For example, to add a new post page in the `travel` section  :
- `npx zuix add -s travel -n my-cruise-to-maldive`

This will create a new post page named `my-cruise-to-maldive/index.md` inside the `content/travel/` folder.

So, the `-s` option is used to specify the section under which the page will be included, while the `-n` options is used to
specify the name of the page.


For complete documentation see [zuix.js Web Starter](https://zuixjs.github.io/zuix-web-starter/).


## References

- **Web Starter** https://zuixjs.github.io/zuix-web-starter/
- **Web App** https://zuixjs.github.io/web-app/
- **zuix.js** https://zuixjs.org
- **zKit** https://zuixjs.github.io/zkit/
- **11ty** https://11ty.dev
