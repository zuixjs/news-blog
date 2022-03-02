/* global zuix */
'use strict';

function ListIteMini(cp) {
  cp.create = onCreate;

  function onCreate() {
    cp.field('container')
        .css('background-image', 'url('+cp.model().imagePreviewMini+')')
        .on('click', function() {
          openContentFrame(cp.model().link);
        });
    cp.view('.summary')
        .on('click', function() {
          openContentFrame(cp.model().link);
        });
    cp.field('more').on('click', function() {
      // show context menu
      zuix.context('news-options-menu').show();
    });
  }
}

module.exports = ListIteMini;
