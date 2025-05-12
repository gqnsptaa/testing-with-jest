import * as stack from './stack.js';

window.onload = function () {
  const pop = document.getElementById('pop');
  const push = document.getElementById('push');
  const peek = document.getElementById('peek');
  const display = document.getElementById('top_of_stack');

  pop.addEventListener("click", function () {
    alert("Tog bort " + stack.pop());
  });

  push.addEventListener("click", function () {
    let x = prompt("Vad ska vi lägga på stacken?");
    stack.push(x);
    display.innerHTML = x;
  });

  peek.addEventListener("click", function () {
    display.innerHTML = stack.peek();
  });
};

