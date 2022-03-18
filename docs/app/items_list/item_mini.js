/* global zuix */
'use strict';

function ListIteMini(cp) {
  cp.create = onCreate;

  function onCreate() {
    cp.field('container')
        .css('background-image', 'url('+cp.model().imagePreviewMini+')')
        .on('click', function() {
          cp.trigger('item:click', cp.model());
        });
    cp.view('.summary')
        .on('click', function() {
          cp.trigger('item:click', cp.model());
        });
    cp.field('more').on('click', function() {
      cp.trigger('item:menu', cp.model());
    });
  }
}

module.exports = ListIteMini;
