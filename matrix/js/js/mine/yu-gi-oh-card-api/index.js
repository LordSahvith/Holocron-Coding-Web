const cardData = fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Horn%20of%20the%20Unicorn').then(
  response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }
);

cardData.then(data => {
  const card = data.data[0];
  console.log('Card Name:', card.name);
  console.log('Card Type:', card.type);
  console.log('Card Description:', card.desc);
  console.log(
    'Card Price:',
    card.card_sets.map(set => {
      if (set.set_code === 'YGLD-ENA29') {
        return set.set_price;
      }
    })
  );
});
