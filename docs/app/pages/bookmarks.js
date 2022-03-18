function BookmarksPage(cp) {
  let listView = null;

  this.create = onCreate;

  function onCreate() {
    cp.expose('add', addBookmark);
    cp.expose('remove', removeBookmark);
    cp.expose('get', getBookmark);
    cp.expose('getAll', getBookmarkList);
    // get a reference to the listview components
    zuix.context('bookmarks-list', function(l) {
      listView = l;
      const bookmarks = getBookmarkList();
      refreshList(bookmarks);
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
          componentId: 'results-item',
          options: {
            lazyLoad: true,
            /* fixed height is required for best lazy-load and scroll performances */
            height: '108px',
            controller: zuix.controller(function(cp) {}),
            model: item,
            on: {
              'click': function() {
                zuix.context('home').showMenu(item);
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

  function getBookmark(itemLink) {
    const bookmarks = getBookmarkList();
    return bookmarks.find((item) => item.link === itemLink);
  }
  function addBookmark(item) {
    const bookmarks = getBookmarkList();
    bookmarks.push(item);
    setBookmarks(bookmarks);
  }
  function removeBookmark(item) {
    const bookmarks = getBookmarkList()
        .filter((bm) => bm.link !== item.link);
    setBookmarks(bookmarks);
  }
  function getBookmarkList() {
    let bookmarks = [];
    try {
      bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    } catch (e) {}
    return bookmarks;
  }
  function setBookmarks(bookmarks) {
    refreshList(bookmarks);
    bookmarks = JSON.stringify(bookmarks);
    localStorage.setItem('bookmarks', bookmarks);
  }
}

module.exports = BookmarksPage;
