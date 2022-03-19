let itemMenu = null;

function HomePage(cp) {
  // 'create' life-cycle callback
  this.create = onCreate;

  function onItemClick(e, item) {
    openContentFrame(item.link);
  }
  function onItemMenu(e, item) {
    itemMenu.showMenu(item);
  }

  function onCreate() {
    const itemsList = this.field('items-list');
    itemsList.each(function(i, el, $el) {
      // items-list events
      zuix.context(el, function(list) {
        list.on('item:click', onItemClick);
        list.on('item:menu', onItemMenu);
      });
    });
    // load the item menu component
    zuix.load('shared/item-menu', {
      view: zuix.field('item-options-menu'),
      ready: function(menu) {
        itemMenu = menu;
      }
    });
  }
}

module.exports = HomePage;
