let lvlSimple = `
......................
..#................#..
..#..............=.#..
..#.........o.o....#..
..#.@......#####...#..
..#####............#..
......#++++++++++++#..
......##############..
......................
`;

class Level {
  constructor(plan) {
    let rows = plan
      .trim()
      .split('\n')
      .map(row => [...row]);
    this.height = rows.length;
    this.width = rows[0].length;
    this.startActors = [];
    this.rows = rows.map((row, y) => {
      return row.map((char, x) => {
        let type = levelChars[char];
        if (typeof type != 'string') {
          let pos = new Vector(x, y);
          this.startActors.push(type.create(pos, char));
          type = 'empty';
        }
        return type;
      });
    });
  }
}

class State {
  constructor(level, actors, status) {
    this.level = level;
    this.actors = actors;
    this.status = status;
  }

  static start(level) {
    return new State(level, level.startActors, 'playing');
  }

  get player() {
    return this.actors.find(actor => actor.type === 'player');
  }
}

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(other) {
    return new Vector(this.x + other.x, this.y + other.y);
  }

  times(factor) {
    return Vector(this.x * factor, this.y * factor);
  }
}

class Player {
  constructor(position, speed) {
    this.position = position;
    this.speed = speed;
  }

  get type() {
    return 'player';
  }

  static create(position) {
    return new Player(position.plus(new Vector(0, -0.5)), new Vector(0, 0));
  }
}

Player.prototype.size = new Vector(0.8, 1.5);

class Lava {
  constructor(position, speed, reset) {
    this.position = position;
    this.speed = speed;
    this.reset = reset;
  }

  get type() {
    return 'lava';
  }

  static create(position, char) {
    if (char === '=') {
      return new Lava(position, new Vector(2, 0));
    } else if (char === '|') {
      return new Lava(position, new Vector(0, 2));
    } else if (char === 'v') {
      return new Lava(position, new Vector(0, 3), position);
    }
  }
}

Lava.prototype.size = new Vector(1, 1);

class Coin {
  constructor(position, basePosition, wobble) {
    this.position = position;
    this.basePosition = basePosition;
    this.wobble = wobble;
  }

  get type() {
    return 'coin';
  }

  static create(position) {
    let basePosition = position.plus(new Vector(0.2, 0.1));
    return new Coin(basePosition, basePosition, Math.random() * Math.PI * 2);
  }
}

Coin.prototype.size = new Vector(0.6, 0.6);

const levelChars = {
  '.': 'empty',
  '#': 'wall',
  '+': 'lava',
  '@': Player,
  o: Coin,
  '=': Lava,
  '|': Lava,
  v: Lava,
};

function elt(name, attributes, ...children) {
  let dom = document.createElement(name);

  for (let attribute of Object.keys(attributes)) {
    dom.setAttribute(attribute, attributes[attribute]);
  }

  for (let child of children) {
    dom.appendChild(child);
  }

  return dom;
}

class DOMDisplay {
  constructor(parent, level) {
    this.dom = elt('div', { class: 'game' }, drawGrid(level));
    this.actorLayer = null;
    parent.appendChild(this.dom);
  }

  clear() {
    this.dom.remove();
  }
}

const scale = 20;

function drawGrid(level) {
  return elt(
    'table',
    {
      class: 'background',
      style: `width: ${level.width * scale}px`,
    },
    ...level.rows.map(row => elt('tr', { style: `height: ${scale}px` }, ...row.map(type => elt('td', { class: type }))))
  );
}

function drawActors(actors) {
  return elt(
    'div',
    {},
    ...actors.map(actor => {
      let rectangle = elt('div', { class: `actor ${actor.type}` });
      rectangle.style.width = `${actor.size.x * scale}px`;
      rectangle.style.height = `${actor.size.y * scale}px`;
      rectangle.style.left = `${actor.position.x * scale}px`;
      rectangle.style.top = `${actor.position.y * scale}px`;
      return rectangle;
    })
  );
}

DOMDisplay.prototype.syncState = function (state) {
  if (this.actorLayer) this.actorLayer.remove();

  this.actorLayer = drawActors(state.actors);
  this.dom.appendChild(this.actorLayer);
  this.dom.className = `game ${state.status}`;
  this.scrollPlayerIntoView(state);
};

DOMDisplay.prototype.scrollPlayerIntoView = function (state) {
  let width = this.dom.clientWidth;
  let height = this.dom.clientHeight;
  let margin = width / 3;

  // the viewport
  let left = this.dom.scrollLeft;
  let right = left + width;
  let top = this.dom.scrollTop;
  let bottom = top + height;

  let player = state.player;
  let center = player.pos.plus(player.size.times(0.5)).times(scale);

  if (center.x < left + margin) {
    this.dom.scrollLeft = center.x - margin;
  } else if (center.x > right - margin) {
    this.dom.scrollLeft = center.x + margin - width;
  }

  if (center.y < top + margin) {
    this.dom.scrollTop = center.y - margin;
  } else if (center.y > bottom - margin) {
    this.dom.scrollTop = center.y + margin - height;
  }
};

let simpleLevel = new Level(lvlSimple);
console.log(`${simpleLevel.width} by ${simpleLevel.height}`);
let display = new DOMDisplay(document.body, simpleLevel);
display.syncState(State.start(lvlSimple));
