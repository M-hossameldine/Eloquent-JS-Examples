/*
{
  name: "Chakma",
  ranges: [[69888, 69941], [69942, 69956]],
  direction: "ltr",
  year: 1050,
  living: true,
  link: "https://en.wikipedia.org/wiki/Chakma_alphabet"
}
*/

function characterScript(code) {
  for( let script of SCRIPTS) {
    if (script.ranges.some( ([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}
/*
  - items: ARRAY, any group of something that can be looped with for/of
  - groupName: FUNCTION, to set the group of each looped item, return 
  
  - known: NUMBER, (index) false = -1, true >= 0
  - return ARRAY_OF_OBJECTS each object {name, count}
*/

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name = name);

    if (known == -1) counts.push({name, count: 1});
    else counts[known].count++;
  }
  return counts;
}

function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({name}) => name != "none");

  let total = scripts.reduce((n, {count}) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts.map(({name, count}) => {
    return `${Math.round(count * 100 / total)}% ${name}`;
  }).join(", ");
}






