/**
 * Item options menu handler.
 * @param {ContextController} cp
 * @constructor
 */
function ItemMenu(cp) {
  // public methods' declaration
  // they also need to be "exposed"
  // (see end of 'create' function)

  this.showMenu = showItemMenu;
  this.getBookmarks = getBookmarks;

  // 'create' life-cycle hook
  this.create = function() {
    // expose public methods
    cp.expose('showMenu', showItemMenu);
    cp.expose('getBookmarks', getBookmarks);
  };

  let currentItem = null;
  let optionsMenu = null;
  /** @type Bookmarks */
  let bookmarks = null;

  // load the bookmarks component
  getBookmarks();

  // get a reference to the context menu component
  // and listen to button click events
  zuix.context(cp.view(), function(menu) {
    optionsMenu = menu;
    menu.field('bookmark-add-btn')
        .on('click', saveCurrentItem);
    menu.field('bookmark-remove-btn')
        .on('click', removeCurrentItem);
    menu.field('open-btn')
        .on('click', function() {
          openContentFrame(currentItem.link);
        });
    menu.field('share-btn')
        .on('click', shareCurrentItem);
  });

  /**
   * Show context menu for the given item.
   * @param item
   */
  function showItemMenu(item) {
    currentItem = item;
    const saved = bookmarks.get(item.link);
    if (saved) {
      optionsMenu.field('bookmark-add-btn').hide();
      optionsMenu.field('bookmark-remove-btn').show();
    } else {
      optionsMenu.field('bookmark-add-btn').show();
      optionsMenu.field('bookmark-remove-btn').hide();
    }
    optionsMenu.show();
  }

  /**
   * Get bookmarks component
   * @param {function(Bookmarks)} [callback] Async callback
   */
  function getBookmarks(callback) {
    if (bookmarks && callback) {
      callback(bookmarks);
    } else {
      zuix.load('shared/bookmarks', {
        view: cp.view(),
        ready: function(bc) {
          bookmarks = bc;
          if (callback) {
            callback(bookmarks);
          }
        }
      });
    }
  }

  function saveCurrentItem() {
    bookmarks.add(currentItem);
  }
  function removeCurrentItem() {
    bookmarks.remove(currentItem);
  }
  function shareCurrentItem() {
    const item = {
      title: currentItem.title,
      text: currentItem.description,
      url: location.protocol + '//' + location.host + currentItem.link
    };
    if (navigator.share) {
      navigator.share(item).then(() => {
        console.log('Document url shared.');
      }).catch(console.error);
    } else {
      console.log(item);
      console.log('Sharing is not available in the current context.');
    }
  }
}

module.exports = ItemMenu;
