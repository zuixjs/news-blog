function closeContent() {
  if (window.parent.closeContentFrame) {
    window.parent.closeContentFrame();
  } else {
    location.href += '../../../index.html';
  }
}
function shareContent(url) {
  if (navigator.share) {
    navigator.share(url);
  }
}
function printContent() {
  window.print();
}

document.body.addEventListener('keyup', function(e) {
  if (e.key === 'Escape') {
    const actionMenu = zuix.context('actions-menu');
    if (actionMenu && actionMenu.showing()) {
      actionMenu.close();
    } else {
      closeContent();
    }
  }
});
