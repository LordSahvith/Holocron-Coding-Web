function test(label, body) {
  if (!body()) console.error(`Failed: ${label}`);
  else console.log(`Passed: ${label}`);
}

test('convert latin text to uppercase', () => {
  return 'hello'.toUpperCase() === 'HELLO';
});

test('convert latin text to lowercase', () => {
  return 'HELLO'.toLocaleLowerCase() === 'hello';
});
