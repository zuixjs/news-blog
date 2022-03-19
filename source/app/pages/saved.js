function SavedPage(cp) {
  let listView = null;
  /** @type ItemMenu */
  let itemMenu = null;

  // 'create' life-cycle callback
  this.create = function() {
    // load the item menu component
    zuix.load('shared/item-menu', {
      view: zuix.field('item-options-menu'),
      ready: function(menu) {
        itemMenu = menu;
        loadListView();
      }
    });
  };

  function loadListView() {
    // get a reference to the listview component
    zuix.context('bookmarks-list', function(l) {
      listView = l;
      itemMenu.getBookmarks(function(bm) {
        refreshList(bm.getAll());
        bm.on('bookmarks:updated', function(e, items) {
          refreshList(items);
        });
      });
    });
  }

  function refreshList(bookmarks) {
    if (!listView) return;
    listView.clear();
    listView.model({
      itemList: bookmarks,
      getItem: function(index, item) {
        return {
          itemId: index,
          componentId: 'listview/results-item',
          options: {
            lazyLoad: true,
            /* fixed height is required for best lazy-load and scroll performances */
            height: '108px',
            controller: zuix.controller(function(cp) {}),
            model: item,
            on: {
              'click': function() {
                itemMenu.showMenu(item);
              }
            }
          }
        };
      }
    });
    if (bookmarks.length === 0) {
      cp.field('no-bookmarks').show();
    } else {
      cp.field('no-bookmarks').hide();
    }
  }
}

module.exports = SavedPage;
