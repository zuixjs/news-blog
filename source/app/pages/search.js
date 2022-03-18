function SearchPage(cp) {
  let searchIndex = null;
  let resultsList = null;

  this.create = onCreate;

  function onCreate() {
    // download the search index
    /** @type {elasticlunr.Index} searchIndex */
    fetch('../search-index.json').then((response) =>
      response.json().then((rawIndex) => {
        searchIndex = elasticlunr.Index.load(rawIndex);
        elasticlunr.clearStopWords(); // the word 'About' is still ignored
      })
    );

    // get reference to the list view component
    zuix.context('results-list', function(list) {
      resultsList = list;
    });

    // update results list on 'keyup'
    const searchInput = zuix.field('search-input');
    searchInput.on('search', (e, v) => {
      if (!resultsList) return;
      const term = searchInput.value();
      const results = searchIndex.search(term, {
        bool: 'OR',
        expand: true
      }).map((r) => {
        if (!r.doc) {
          r.doc = searchIndex.documentStore.docs[r.ref];
        }
        // r.ref = 'javascript:openContentFrame("../' + r.ref.substring(1) + '")';
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
        cp.field('results-none').hide();
        resultsList.model({
          itemList: results,
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
                    openContentFrame(item.link);
                  }
                }
              }
            };
          }
        });
      } else if (term.length > 0) {
        cp.field('results-none').show();
      }
    });
  }
}

module.exports = SearchPage;
