'use strict';
let div = document.querySelector('#cursor'),
  body = document.querySelector('body');
document.onmousemove = function (e) {
  // Move cursor
  cursor.style.top = e.pageY + 'px';
  cursor.style.left = e.pageX + 'px';

  // Animate background
  body.style.backgroundPositionX = e.pageX / -4 + 'px';
  body.style.backgroundPositionY = e.pageY / -4 + 'px';
};
