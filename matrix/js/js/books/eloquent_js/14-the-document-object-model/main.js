/**
 * Moving Through the Tree
 */
function talksAbout(node, string) {
  if (node.nodeType === Node.ELEMENT_NODE) {
    for (let child of node.childNodes) {
      if (talksAbout(child, string)) {
        return true;
      }
    }

    return false;
  } else if (node.nodeType === Node.TEXT_NODE) {
    return node.nodeValue.indexOf(string) > -1;
  }
}

console.log(talksAbout(document.body, 'JavaScript'));

/**
 * Finding Elements
 */
let link = document.body.getElementsByTagName('a')[0];
console.log(link.href); // ./page2.html || ./index.html

let test = document.getElementById('test');
console.log(test.textContent); // Lorem ipsum dolor sit...

let reorder = document.getElementsByClassName('reordering')[0];
console.log(reorder.childNodes); // [text, p, text, p, text, p, text]
let paragraphs = reorder.getElementsByTagName('p'); // three, one, two
console.log(paragraphs); // [p, p, p]
reorder.insertBefore(paragraphs[1], paragraphs[0]); // one, three, two
reorder.insertBefore(paragraphs[2], paragraphs[1]); // one, two, three

/**
 * Creating Nodes
 */
function replaceImagesLive() {
  let images = document.body.getElementsByTagName('img');
  // reverse loop becuase replaceChild removes from DOM
  for (let i = images.length - 1; i >= 0; i--) {
    let image = images[i];
    if (image.alt) {
      let text = document.createTextNode(image.alt);
      image.parentNode.replaceChild(text, image);
    }
  }
}

function replaceImages() {
  let arrayish = document.body.getElementsByTagName('img');
  let realArray = Array.from(arrayish);
  for (let i = 0; i < realArray.length; i++) {
    let image = realArray[i];
    if (image.alt) {
      let text = document.createTextNode(image.alt);
      image.parentNode.replaceChild(text, image);
    }
  }
}

function elt(type, ...children) {
  let node = document.createElement(type);
  for (let child of children) {
    if (typeof child !== 'string') node.appendChild(child);
    else node.appendChild(document.createTextNode(child));
  }
  return node;
}

document
  .getElementById('no-finish')
  .appendChild(
    elt(
      'footer',
      '--',
      elt('strong', 'Karl Popper'),
      ', preface to the second edition of ',
      elt('em', 'The Open Society and Its Enemies'),
      ', 1950'
    )
  );

/**
 * Attributes
 */
let classifiedAttributes = document.body.getElementsByClassName('attributes')[0];
let paragraphs1 = classifiedAttributes.getElementsByTagName('p');
for (let paragraph of Array.from(paragraphs1)) {
  if (paragraph.getAttribute('data-classified') === 'secret') {
    paragraph.remove();
  }
}

/**
 * Layout
 */
let boxed = document.body.getElementsByClassName('layout')[0];
console.log('clientHeight:', boxed.clientHeight);
console.log('offsetHeight:', boxed.offsetHeight);

function time(name, action) {
  let start = Date.now(); // current time in Milliseconds
  action();
  console.log(name, 'took', Date.now() - start, 'ms');
}

time('naive', () => {
  let target = document.getElementById('one');
  while (target.offsetWidth < 2000) {
    target.appendChild(document.createTextNode('X'));
  }
}); // naive took 7 ms

time('clever', function () {
  let target = document.getElementById('two');
  target.appendChild(document.createTextNode('XXXX'));
  let total = Math.ceil(2000 / (target.offsetWidth / 5));
  target.firstChild.nodeValue = 'X'.repeat(total);
}); // clever took 0 ms

/**
 * Styling
 */
let styledParagraph = document.getElementById('para');
console.log(styledParagraph.style.color);
styledParagraph.style.color = 'red';

/**
 * Positioning and Animating
 */
let dog = document.querySelector('.position-animation > img');
let angle = Math.PI / 2;
function animate(time, lastTime) {
  if (lastTime !== null) {
    angle += (time - lastTime) * 0.001;
  }
  dog.style.top = Math.sin(angle) * 20 + 'px';
  dog.style.left = dog.offsetWidth + Math.cos(angle) * 200 + 'px';
  requestAnimationFrame(newTime => animate(newTime, time));
}
animate(0, 0);
