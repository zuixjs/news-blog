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
      title: '{{ app.title }}',
      text: document.title,
      url: document.location.href
    });
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
