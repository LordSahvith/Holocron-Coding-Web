/**
 * Event Handlers
 */
// window.addEventListener('click', () => {
//   console.log('You knocked?');
// });

/**
 * Events and DOM Nodes
 */
let clickMeButton = document.querySelector('.click-me');
clickMeButton.addEventListener('click', () => {
  console.log('clickMeButton clicked');
});

let actOnceButton = document.querySelector('.act-once');
function once() {
  console.log('Done.');
  actOnceButton.removeEventListener('click', once);
}
actOnceButton.addEventListener('click', once);

/**
 * Event Objects
 */
let anyWayButton = document.querySelector('.any-way');
anyWayButton.addEventListener('mousedown', event => {
  if (event.button === 0) {
    console.log('Left Button');
  } else if (event.button === 1) {
    console.log('Middle button');
  } else if (event.button === 2) {
    console.log('Right button');
  }
});

/**
 * Propogation
 */
let propP = document.querySelector('.prop-p');
let propBtn = document.querySelector('.prop-btn');

propP.addEventListener('mousedown', () => {
  console.log('Handler for paragraph.');
});

propBtn.addEventListener('mousedown', event => {
  console.log('Handler for button');
  if (event.button === 2) event.stopPropagation();
});

document.body.addEventListener('click', event => {
  if (event.target.nodeName === 'BUTTON') {
    console.log('Clicked', event.target.textContent);
  }
});

/**
 * Default Actions
 */
let link = document.querySelector('.default-a');
link.addEventListener('click', event => {
  console.log('Nope.');
  event.preventDefault();
});

/**
 * Key Events
 */
window.addEventListener('keydown', event => {
  if (event.key === 'v') {
    document.body.style.background = 'violet';
  }
});

window.addEventListener('keyup', event => {
  if (event.key === 'v') {
    document.body.style.background = '';
  }
});

window.addEventListener('keydown', event => {
  if (event.key === ' ' && event.ctrlKey) {
    console.log('Continuing!');
  }
});

/**
 * Pointer Events:
 * Mouse Clicks
 */
window.addEventListener('click', event => {
  let dot = document.createElement('div');
  dot.className = 'dot';
  dot.style.left = event.pageX - 4 + 'px'; // minus half the size of dot
  dot.style.top = event.pageY - 4 + 'px';
  document.body.appendChild(dot);
});

/**
 * Pointer Events:
 * Mouse Motion
 */
let lastX; // tracks the last observed mouse X position
let bar = document.querySelector('.click-drag');
bar.addEventListener('mousedown', event => {
  if (event.button === 0) {
    lastX = event.clientX;
    window.addEventListener('mousemove', moved);
    event.preventDefault(); // Prevent Selection
  }
});

function moved(event) {
  if (event.buttons === 0) {
    window.removeEventListener('mousemove', moved);
  } else {
    let distance = event.clientX - lastX;
    let newWidth = Math.max(10, bar.offsetWidth + distance);
    bar.style.width = newWidth + 'px';
    lastX = event.clientX;
  }
}

/**
 * Pointer Events:
 * Touch Events
 */
function update(event) {
  for (let touchDot; touchDot.document.querySelector('.dot-touch'); ) {
    touchDot.remove();
  }

  for (let i = 0; i < event.touches.length; i++) {
    let { pageX, pageY } = event.touches[i];
    let touchDot = document.createElement('touh-dot');
    touchDot.style.left = pageY - 50 + 'px';
    touchDot.style.top = pageY - 50 + 'px';
    document.body.appendChild(touchDot);
  }
}

window.addEventListener('touchstart', update);
window.addEventListener('touchmove', update);
window.addEventListener('touchend', update);

/**
 * Scroll Events
 */
// create some content
document.body.appendChild(document.createTextNode('supercalifragilisticexpialidocious '.repeat(1000)));
let scrollBar = document.querySelector('#progress');
window.addEventListener('scroll', () => {
  let max = document.body.scrollHeight - innerHeight;
  scrollBar.style.width = `${(pageYOffset / max) * 100}%`;
});

/**
 * Focus Events
 */
let help = document.querySelector('#help');
let fields = document.querySelectorAll('input');

for (let field of Array.from(fields)) {
  field.addEventListener('focus', event => {
    let text = event.target.getAttribute('data-help');
    help.textContent = text;
  });

  field.addEventListener('blur', event => {
    help.textContent = '';
  });
}

/**
 * Events and the Event Loop
 */
let squareWorker = new Worker('./code/squareworker.js');
squareWorker.addEventListener('message', event => {
  console.log('The worker responded:', event.data);
});
squareWorker.postMessage(10);
squareWorker.postMessage(24);

/**
 * Timers
 */
let bombTimer = setTimeout(() => {
  console.log('BOOM!');
}, 500);

if (Math.random() < 0.5) {
  console.log('Defused.');
  clearTimeout(bombTimer);
}

let ticks = 0;
let clock = setInterval(() => {
  console.log('tick', ticks++);

  if (ticks === 10) {
    clearInterval(clock);
    console.log('stop');
  }
}, 200);

/**
 * Debouncing
 */
let textarea = document.querySelector('textarea');
let timeout;
textarea.addEventListener('input', () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => console.log('Typed!'), 500);
});

let scheduled = null;
window.addEventListener('mousemove', event => {
  if (!scheduled) {
    setTimeout(() => {
      document.querySelector('#mouse-coords').textContent = `Mouse at ${scheduled.pageX}, ${scheduled.pageY}`;
      scheduled = null;
    });
  }
  scheduled = event;
});
