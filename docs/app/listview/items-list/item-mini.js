/* global zuix */
'use strict';

function ListIteMini(cp) {
  cp.create = onCreate;

  function onCreate() {
    const item = cp.model();
    cp.field('container')
        .css('background-image', 'url(' + item.coverPreview+')')
        .on('click', function() {
          cp.trigger('item:click', item);
        });
    cp.view('.summary')
        .on('click', function() {
          cp.trigger('item:click', item);
        });
    cp.field('more').on('click', function() {
      cp.trigger('item:menu', item);
    });
  }
}

module.exports = ListIteMini;
