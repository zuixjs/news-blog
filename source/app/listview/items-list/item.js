/* global zuix */
'use strict';

function ListItem(cp) {
  cp.create = onCreate;

  function onCreate() {
    cp.field('container')
        .css('background-image', 'url(' + cp.model().coverSmall + ')')
        .on('click', function() {
          cp.trigger('item:click', cp.model());
        });
    cp.field('more').on('click', function() {
      cp.trigger('item:menu', cp.model());
    });
  }
}

module.exports = ListItem;
