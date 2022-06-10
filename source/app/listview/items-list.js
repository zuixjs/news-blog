/* global zuix */
'use strict';
function ItemsList(cp) {
  let itemsList;

  cp.create = onCreate;

  function onCreate() {
    const url = cp.options().section;
    cp.expose('reload', function(callback) {
      fetchList(url, callback);
    });
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
          model: item,
          on: {
            'item:click': function(e, item) {
              cp.trigger('item:click', item);
            },
            'item:menu': function(e, item) {
              cp.trigger('item:menu', item);
            }
          }
        };
        const $el = zuix.$(document.createElement('div'));
        if (i < 5) {
          // different layout for first 4 items (bigger)
          $el.attr({
            'z-load': 'listview/items-list/item',
            'self': i < 2 ? 'size-1of2 lg-full md-full sm-full' : 'size-1of3 lg-half md-half sm-full',
            'class': 'card-wrapper visible-on-ready'
          });
        } else {
          // "mini" layout for subsequent items
          $el.attr({
            'z-load': 'listview/items-list/item-mini',
            'self': 'size-1of4 lg-half md-half sm-full',
            'class': 'card-wrapper mini visible-on-ready'
          });
        }
        // center the list on wide screens
        $el.attr({
          'layout': 'column stretch-center',
          'z-options': '__cardOptions["' + cp.context.contextId + '"][' + i + ']'
        });
        window.__cardOptions[cp.context.contextId][i] = options;
        itemsHtml += $el.get().outerHTML;
      });
      list.html(itemsHtml);
      zuix.componentize(list);
    }
  }

  // Download RSS feed
  function fetchList(jsonUrl, callback) {
    fetch(jsonUrl)
        .then((response) => response.json())
        .then((list) => {
          itemsList = list;
          refreshList();
          if (callback) {
            callback(itemsList);
          }
        }).catch((e) => {
          // TODO: handle error
        });
  }
}

module.exports = ItemsList;
