/* global zuix */

let pageIndicator;
let pageButtons;

//__zuix__debug = true;
zuix.lazyLoad(true, -window.innerWidth / 4);

options = {
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
  }
};

function syncPageIndicator(page) {
  if (pageButtons) {
    pageButtons.eq(page.out).removeClass('active');
    pageButtons.eq(page.in).addClass('active');
  }
  if (pageIndicator) pageIndicator.page(page.in);
}

function openContentFrame(url) {
  const contentFrame = zuix.field('content-frame');
  contentFrame.get().src = url;
  contentFrame.animateCss('slideInRight', {duration: '500ms'}, function() {
    contentFrame.get().focus();
  }).removeClass('hidden');
}
function closeContentFrame(loc) {
  const contentFrame = zuix.field('content-frame');
  contentFrame.animateCss('slideOutRight', {duration: '300ms'}, ()=> {
    contentFrame.addClass('hidden');
    loc && loc.replace('about:blank');
  });
}
