/* global zuix */
'use strict';
function ItemsList(cp) {
  let itemsList;

  cp.create = onCreate;

  function onCreate() {
    const url = cp.options().section;
    fetchList(url);
  }

  function refreshList() {
    const list = cp.field('list');
    if (itemsList != null) {
      let itemsHtml = '';
      window.__cardOptions = window.__cardOptions || {};
      window.__cardOptions[cp.context.contextId] = window.__cardOptions[cp.context.contextId] || [];
      itemsList.forEach(function(item, i) {
        const options = {
          lazyLoad: true,
          model: item
        };
        const el = document.createElement('div');
        if (i < 5) {
          // different layout for first 4 items (bigger)
          el.setAttribute('z-load', 'items_list/item');
          // 2 columns layout
          if (i < 2) {
            el.setAttribute('self', 'size-1of2 lg-full md-full sm-full');
          } else {
            el.setAttribute('self', 'size-1of3 lg-half md-half sm-full');
          }
          el.setAttribute('class', 'card-wrapper visible-on-ready');
        } else {
          // "mini" layout for subsequent items
          el.setAttribute('z-load', 'items_list/item_mini');
          // 4 columns layout
          el.setAttribute('self', 'size-1of4 lg-half md-half sm-full');
          el.setAttribute('class', 'card-wrapper mini visible-on-ready');
        }
        // center the list on wide screens
        el.setAttribute('layout', 'column stretch-center');
        el.setAttribute('z-options', '__cardOptions[' + cp.context.contextId + '][' + i + ']');
        window.__cardOptions[cp.context.contextId][i] = options;
        itemsHtml += el.outerHTML;
      });
      list.html(itemsHtml);
    }
  }

  // Download RSS feed
  function fetchList(rssUrl) {
    zuix.$.ajax({
      url: rssUrl,
      success: function(res) {
        itemsList = JSON.parse(res);
        refreshList();
      },
      error: function(err) {
        // TODO: handle error
      }
    });
  }
}

module.exports = ItemsList;
