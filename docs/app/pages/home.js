let currentItem = null;
let bookmarks = null;
let optionsMenu = null;

function saveCurrentItem() {
  bookmarks.add(currentItem);
}
function removeCurrentItem() {
  bookmarks.remove(currentItem);
}

function shareCurrentItem() {
  const item = {
    title: currentItem.title,
    text: currentItem.description,
    url: location.protocol + '//' + location.host + currentItem.link
  };
  if (navigator.share) {
    navigator.share(item).then(() => {
      console.log('Document url shared.');
    }).catch(console.error);
  } else {
    console.log(item);
    console.log('Sharing is not available in the current context.');
  }
}

function showItemMenu(item) {
  currentItem = item;
  const saved = bookmarks.get(item.link);
  if (saved) {
    optionsMenu.field('bookmark-add-btn').hide();
    optionsMenu.field('bookmark-remove-btn').show();
  } else {
    optionsMenu.field('bookmark-add-btn').show();
    optionsMenu.field('bookmark-remove-btn').hide();
  }
  optionsMenu.show();
}

function HomePage(cp) {
  this.create = onCreate;

  function onItemClick(e, item) {
    currentItem = item;
    openContentFrame(item.link);
  }

  function onItemMenu(e, item) {
    showItemMenu(item);
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
    // get a reference to the bookmarks component
    zuix.context('bookmarks', function(bp) {
      bookmarks = bp;
    });
    // get a reference to the context menu component
    // and listen to button click events
    zuix.context('item-options-menu', function(menu) {
      optionsMenu = menu;
      menu.field('bookmark-add-btn')
          .on('click', saveCurrentItem);
      menu.field('bookmark-remove-btn')
          .on('click', removeCurrentItem);
      menu.field('open-btn')
          .on('click', function() {
            openContentFrame(currentItem.link);
          });
      menu.field('share-btn')
          .on('click', shareCurrentItem);
    });
    cp.expose('showMenu', showItemMenu);
  }
}

module.exports = HomePage;
