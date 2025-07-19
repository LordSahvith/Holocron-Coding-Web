let count = 0;

function increment() {
  return ++count;
}

function decrement() {
  return --count;
}

function getCount() {
  return count;
}

module.exports = {
  anything: true,
  who: 'Savith',
  count,
  increment,
  decrement,
  getCount,
};
