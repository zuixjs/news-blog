function SearchPage(cp) {
  const searchIndex = null;
  let resultsList = null;
  let noResultsMessage = null;
  let coverMessage = null;

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
    fetch('../search-index.json').then((indexResponse) =>
      indexResponse.json().then((searchIndex) => {
        fetch('../search-list.json').then((listResponse) =>
          listResponse.json().then((searchList) => {
            searchItems = searchList;
            const index = Fuse.parseIndex(searchIndex);
            searchEngine = new Fuse(searchList, options, index);
          })
        );
      })
    );

    // update results list on 'keyup'
    const searchInput = zuix.field('search-input');
    searchInput.on('keyup search', (e, v) => {
      if (!searchEngine) {
        // TODO: should report issue
        console.log('Search engine not initialized.');
        return;
      }
      const terms = searchInput.value();
      const results = searchEngine.search(terms);
      resultsList.clear();
      if (results.length > 0) {
        noResultsMessage.hide();
        coverMessage.hide();
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
    });
  }
}

module.exports = SearchPage;
