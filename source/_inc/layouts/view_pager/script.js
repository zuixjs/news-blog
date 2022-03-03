/* global zuix */

let viewPager;
let pageIndicator;
let pageButtons;
let contextMenu;

//__zuix__debug = true;
zuix.lazyLoad(true, 48);

options = {

  viewPager: {
    enablePaging: true,
    startGap: 40,
    on: {
      'page:change': function(e, page) {
        syncPageIndicator(page);
        // show header/footer
        if (viewPager) {
          const currentPage = viewPager.get(page.in);
          if (currentPage) {
            // load the 'header-auto-hide' component that is loaded on each page
            zuix.context(currentPage, (headerAutoHide) => {
              headerAutoHide.show && headerAutoHide.show();
            });
          }
        }
      }
    },
    ready: function() {
      viewPager = this;
      initialize();
    }
  },

  pageIndicator: {
    contextId: 'page-indicator',
    enablePaging: true,
    startGap: 40,
    ready: function(ctx) {
      pageIndicator = ctx;
      pageButtons = pageIndicator.$.find('div');
      if (pageButtons.length() > 0) {
        pageButtons.each(function(i, el, $el) {
          $el.on('click', function(e) {
            if (viewPager) viewPager.page(i);
          });
        });
      }
    }
  },

  autoHidingBars: {
    header: 'header-bar',
    footer: 'footer-bar',
    height: 56,
    on: {
      'page:scroll': function(e, data) {
        zuix.componentize();
      },
      'scroll:ready': function(e, scroll) {
        // lazy-load cards background cover
        const itemsList = scroll.$.find('div').get();
        //console.log(itemsList)
        zuix.context(itemsList, function(ctx) {
          scroll.watch('.cover-wrapper', function(el, data) {
            //console.log(el, data);
          });
          scroll.check();
        });
      }
    }
  },

  contextMenu: {
    ready: function(ctx) {
      contextMenu = ctx;
    }
  },

  content: {
    css: false
  }

};


function initialize() {
  // change page clicking buttons on the footer bar
  const buttons = zuix.$.find('[data-page]');
  buttons.each(function(i, el, $el) {
    // TODO:
    $el.on('click', function() {
      buttons.removeClass('active');
      this.addClass('active');
      showPage($el.attr('data-page'));
    });
  });
  showPage(0);
}

function syncPageIndicator(page) {
  if (pageButtons) {
    pageButtons.eq(page.out).removeClass('active');
    pageButtons.eq(page.in).addClass('active');
  }
  if (pageIndicator) pageIndicator.page(page.in);
}

function showPage(i) {
  // show header top-box
  zuix.field('header-box')
      .children().hide()
      .eq(i).animateCss('fadeIn', {duration: '300ms'}).show();
  // show header bottom-box
  zuix.field('header-tools')
      .children().hide()
      .eq(i).animateCss('fadeIn', {duration: '300ms'}).show();
  // show page
  const page = zuix.field('pages')
      .children().hide()
      .eq(i);
  page.animateCss('fadeIn', {duration: '300ms'}).show();
  if (viewPager) {
    viewPager.layout();
  }
}

function onItemClicked(e, $el) {
  if ($el.attr('data-url')) {
    const targetUrl = $el.attr('data-url');
    //location.href = targetUrl;
    //window.open(targetUrl);
    openContentFrame(targetUrl);
  }
}
function onItemShowMenu(e, $el) {
  contextMenu.show();
  e.cancelBubble = true;
}

function openContentFrame(url) {
  const contentFrame = zuix.field('content-frame');
  contentFrame.get().src = url;
  viewPager.$.animateCss('fadeOut', {duration: '500ms'});
  contentFrame.animateCss('slideInRight', {duration: '500ms'}).show();
}
function closeContentFrame() {
  const contentFrame = zuix.field('content-frame');
  viewPager.$.animateCss('fadeIn', {duration: '300ms'});
  contentFrame.animateCss('slideOutRight', {duration: '300ms'}, ()=> {
    contentFrame.hide();
    contentFrame.get().src = 'about:blank';
  });
}
