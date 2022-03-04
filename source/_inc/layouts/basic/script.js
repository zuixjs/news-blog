function closeContent() {
  if (window.parent.closeContentFrame) {
    window.parent.closeContentFrame();
  } else {
    location.href += '../../../index.html';
  }
}
function shareContent() {
  if (navigator.share) {
    navigator.share({
      title: document.title,
      url: document.location.href
    }).then(() => {
      console.log('Document url shared.');
    }).catch(console.error);
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
  window.addEventListener('popstate', function() {
    closeContent();
  });
}
