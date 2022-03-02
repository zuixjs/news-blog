/* global zuix */
'use strict';

function ListItem(cp) {
  cp.create = onCreate;

  function onCreate() {
    cp.field('container')
        .css('background-image', 'url(' + cp.model().imagePreview + ')')
        .on('click', function() {
          window.open(cp.model().link);
        });
    cp.field('more').on('click', function() {
      // show context menu
      zuix.context('news-options-menu').show();
    });
  }
}

module.exports = ListItem;
