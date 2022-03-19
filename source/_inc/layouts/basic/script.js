function closeContent() {
  if (window.parent.closeContentFrame) {
    window.parent.closeContentFrame(location);
  } else {
    location.href = '../../../home';
  }
}
function shareContent() {
  const item = {
    title: document.title,
    text: document.querySelector('meta[name="description"]').content,
    url: document.location.href
  };
  if (navigator.share) {
    navigator.share(item).then(() => {
      console.log('Document url shared.');
    }).catch(console.error);
  } else {
    console.log(item);
    console.log('Sharing is not available in the current context');
  }
}
function printContent() {
  window.print();
}

document.body.addEventListener('keyup', function(e) {
  if (e.key === 'Escape') {
    const actionMenu = zuix.context('actions-menu');
    if (!actionMenu || !actionMenu.showing()) {
      closeContent();
    }
  }
});

const history = window.history;
if (history && history.pushState) {
  history.pushState('back-detect', null, '#open');
  window.onpopstate = function() {
    closeContent();
  };
}
