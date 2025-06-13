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
