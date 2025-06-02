let journal = require('./journal');

function phi(table) {
  return (
    (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) * (table[1] + table[3]) * (table[0] + table[2]))
  );
}

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let entry of journal) {
    let index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}


function filterJournalByCorrelation(journal, threshold) {
  let correlatedEvents = [];
  for (let event of journalEvents(journal)) {
    let correlation = phi(tableFor(event, journal));
    if (correlation > threshold || correlation < -threshold) {
      correlatedEvents.push(event);
    }
  }
  return correlatedEvents;
}

function printCorrelations(correlations, journal) {
  for (let event of correlations) {
    console.log(`${event}: ${phi(tableFor(event, journal))}`);
  }
}

for (let entry of journal) {
  if (entry.events.includes('peanuts') && !entry.events.includes('brushed teeth')) {
    entry.events.push('peanut teeth');
  }
}

console.log(journalEvents(journal));
let correlations = filterJournalByCorrelation(journal, 0.1);
printCorrelations(correlations, journal);
