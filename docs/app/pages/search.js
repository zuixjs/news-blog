function SearchPage(cp) {
  let searchIndex = null;
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
    /** @type {elasticlunr.Index} searchIndex */
    fetch('../search-index.json').then((response) =>
      response.json().then((rawIndex) => {
        searchIndex = elasticlunr.Index.load(rawIndex);
        elasticlunr.clearStopWords(); // the word 'About' is still ignored
      })
    );

    // update results list on 'keyup'
    const searchInput = zuix.field('search-input');
    searchInput.on('search', (e, v) => {
      console.log(e, v)
      if (!resultsList) return;
      coverMessage.addClass('hidden');
      noResultsMessage.addClass('hidden');
      const terms = searchInput.value();
      const results = searchIndex.search(terms, {
        bool: 'OR',
        expand: true
      }).map((r) => {
        if (!r.doc) {
          r.doc = searchIndex.documentStore.docs[r.ref];
        }
        return {
          date: r.doc.date,
          title: r.doc.title,
          description: r.doc.description,
          imagePreviewMini: r.doc.image,
          link: '../' + r.ref.substring(1)
        };
      });
      resultsList.clear();
      if (results.length > 0) {
        resultsList.model({
          itemList: results,
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
                    openContentFrame(item.link);
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
