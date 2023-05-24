function SearchPage(cp) {
  let resultsList = null;
  let searchInput = null;
  let noResultsMessage = null;
  let coverMessage = null;
  let searchItems;
  let searchEngine;
  let searchTimeout;

  this.create = onCreate;

  function onCreate() {
    coverMessage = cp.field('cover');
    noResultsMessage = cp.field('no-results');

    // get reference to the list view component
    zuix.context('results-list', function(list) {
      resultsList = list;
    });

    // download the search index
    loadIndex();

    // update results list on 'keyup'
    searchInput = zuix.field('search-input');
    searchInput.on('input search', (e, v) => {
      resultsList.$.get().offsetParent.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        resultsList.clear(() => search());
      }, 100);
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
    const terms = searchInput.value();
    const results = searchEngine.search(terms);
    if (results.length > 0) {
      resultsList.model(results);
      resultsList.config({
        adapter: (index, item) => {
          item = searchItems[item.refIndex];
          item.coverPreview = item.image;
          return {
            itemId: index,
            componentId: 'listview/results-item',
            type: 'view',
            options: {
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
