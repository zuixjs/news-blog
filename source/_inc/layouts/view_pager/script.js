/* global zuix */

let viewPager;
let pageIndicator;
let pageButtons;

//__zuix__debug = true;
zuix.lazyLoad(true, -window.innerWidth / 4);

options = {

  viewPager: {
    lazyLoad: false,
    enablePaging: true,
    //startGap: 40,
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
        zuix.context(itemsList, function(ctx) {
          scroll.watch('.cover-wrapper', function(el, data) {
            //console.log(el, data);
          });
          scroll.check();
        });
      }
    }
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
  const animOptions = {duration: '150ms'};
  // show header top-box
  zuix.field('header-box')
      .children().hide()
      .eq(i).animateCss('fadeIn', animOptions).show();
  // show header bottom-box
  zuix.field('header-tools')
      .children().hide()
      .eq(i).animateCss('fadeIn', animOptions).show();
  // show page
  const page = zuix.field('pages')
      .children().hide()
      .eq(i);
  page.animateCss('fadeIn', animOptions).show();
  if (viewPager) {
    viewPager.layout();
  }
  zuix.componentize(page);
}

function openContentFrame(url) {
  const contentFrame = zuix.field('content-frame');
  contentFrame.get().src = url;
  viewPager.$.animateCss('fadeOut', {duration: '500ms'});
  contentFrame.animateCss('slideInRight', {duration: '500ms'}, function() {
    contentFrame.get().focus();
  }).show();
}
function closeContentFrame(loc) {
  const contentFrame = zuix.field('content-frame');
  viewPager.$.animateCss('fadeIn', {duration: '300ms'});
  contentFrame.animateCss('slideOutRight', {duration: '300ms'}, ()=> {
    contentFrame.hide();
    loc && loc.replace('about:blank');
  });
}
