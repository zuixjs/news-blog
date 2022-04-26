function SearchPage(cp) {
  let resultsList = null;
  let searchInput = null;
  let noResultsMessage = null;
  let coverMessage = null;
  let searchItems;
  let searchEngine;

  this.create = onCreate;

  function onCreate() {
    coverMessage = cp.field('cover');
    noResultsMessage = cp.field('no-results');

    // get reference to the list view component
    setTimeout(() => {
      zuix.context('results-list', function(list) {
        resultsList = list;
      });
    });
    // ^^^ not sure why it's not working without the setTimeout
    // TODO: ^^^ investigate this issue

    // download the search index
    loadIndex();

    // update results list on 'keyup'
    searchInput = zuix.field('search-input');
    searchInput.on('input search', (e, v) => {
      resultsList.$.get().offsetParent.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      search();
    });
    cp.expose({search, loadIndex});
  }
  function loadIndex(callback) {
    fetch('../search-index.json').then((indexResponse) =>
      indexResponse.json().then((searchIndex) => {
        fetch('../search-list.json').then((listResponse) =>
          listResponse.json().then((searchList) => {
            searchItems = searchList;
            const index = Fuse.parseIndex(searchIndex);
            searchEngine = new Fuse(searchList, options, index);
            if (callback) {
              callback(searchItems, searchEngine);
            }
          })
        );
      })
    );
  }
  function search() {
    if (!searchEngine) {
      // TODO: should report issue
      console.log('Search engine not initialized.');
      return;
    }
    noResultsMessage.addClass('hidden');
    coverMessage.addClass('hidden');
    resultsList.clear();
    const terms = searchInput.value();
    const results = searchEngine.search(terms);
    if (results.length > 0) {
      resultsList.model({
        itemList: results,
        getItem: function(index, item) {
          item = searchItems[item.refIndex];
          item.coverPreview = item.image;
          return {
            itemId: index,
            componentId: 'listview/results-item',
            options: {
              controller: zuix.controller(function(cp) {}),
              height: '108px',
              model: item,
              on: {
                'click': function() {
                  openContentFrame(item.url);
                }
              }
            }
          };
        }
      });
    } else if (terms.length > 0) {
      setTimeout(function() {
        noResultsMessage.removeClass('hidden');
      });
    } else {
      setTimeout(function() {
        coverMessage.removeClass('hidden');
      });
    }
  }
}

module.exports = SearchPage;
