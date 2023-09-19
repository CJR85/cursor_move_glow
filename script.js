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

  // Add elements to body
  let element = document.createElement('div');
  element.className = 'element';
  body.prepend(element);

  // Move elements randomly across x & y axis
  element.style.left = cursor.getBoundingClientRect().x + 'px';
  element.style.top = cursor.getBoundingClientRect().y + 'px';

  setTimeout(function () {
    let text = document.querySelectorAll('.element')[0],
      directionX = Math.random() < 0.5 ? -1 : 1,
      directionY = Math.random() < 0.5 ? -1 : 1;

    text.style.left =
      parseInt(text.style.left) - directionX * (Math.random() * 200) + 'px';
    text.style.top =
      parseInt(text.style.top) - directionY * (Math.random() * 200) + 'px';
  });
};
