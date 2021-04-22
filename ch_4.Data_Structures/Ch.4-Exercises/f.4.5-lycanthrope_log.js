// Computing Correlation
function phi(table) {
  return (
    (table[3] * table[0] - table[2] * table[1]) / 
    Math.sqrt(
      (table[2] + table[3]) *
      (table[0] + table[1]) *
      (table[1] + table[3]) *
      (table[0] + table[2])
    )
  );
}
phi([76, 9, 4, 1])

// fill the 2*2 table for a certain event 
function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  
  for(let i = 0; i < journal.length; i++) {
    let entry = journal[i], 
        index = 0; // table index, max value 3  
    if(entry.events.include(event)) index += 1;
    if(entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

// list event types from journal dataset 
function journalEvent(journal) {
  let events = [];
  for(let entry of journal){
    for(let event of entry.events){
      if(!events.includes(event)){
        events.push(event);
      }
    }
  }
  return events;
}

console.log(journalEvent(JOURNAL));

