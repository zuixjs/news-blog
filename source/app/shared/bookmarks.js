/**
 * Bookmarks handler component.
 * @param {ContextController} cp
 * @constructor
 */
function Bookmarks(cp) {
  // public methods' declaration
  // they also need to be "exposed"
  // (see 'create' life-cycle hook)

  this.add = addBookmark;
  this.remove = removeBookmark;
  this.get = getBookmark;
  this.getAll = getBookmarkList;

  this.create = function() {
    cp.expose('add', addBookmark);
    cp.expose('remove', removeBookmark);
    cp.expose('get', getBookmark);
    cp.expose('getAll', getBookmarkList);
  };

  function getBookmark(itemLink) {
    const bookmarks = getBookmarkList();
    return bookmarks.find((item) => item.link === itemLink);
  }

  /**
   * Adds a bookmark.
   * @param item
   */
  function addBookmark(item) {
    const bookmarks = getBookmarkList();
    bookmarks.push(item);
    setBookmarks(bookmarks);
    zuix.field('saved-button').animateCss('tada', {delay: '200ms'});
  }

  /**
   * Removes a bookmark.
   * @param item
   */
  function removeBookmark(item) {
    const bookmarks = getBookmarkList()
        .filter((bm) => bm.link !== item.link);
    setBookmarks(bookmarks);
    zuix.field('saved-button').animateCss('flash', {delay: '200ms'});
  }

  /**
   * Get the bookmarks list.
   * @return {*[]}
   */
  function getBookmarkList() {
    let bookmarks = [];
    try {
      bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    } catch (e) {}
    return bookmarks || [];
  }

  /**
   * Set the bookmarks list.
   * @param {*[]} bookmarks
   */
  function setBookmarks(bookmarks) {
    cp.trigger('bookmarks:updated', bookmarks);
    bookmarks = JSON.stringify(bookmarks);
    localStorage.setItem('bookmarks', bookmarks);
  }
}

module.exports = Bookmarks;
