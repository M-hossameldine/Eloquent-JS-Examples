/* We have:
 * - A characterScript function
 * - A way to correctly loop over characters.
 * - The next step is to count the characters that belong to each script.
*/

// The counting abstraction function 
function countBy(items, groupName) {
  let counts = [];
  for(let item of items){
    let name = groupName(item);
    let know = counts.findIndex(c => c.name == name);
    if (know == -1) {
      counts.push({name, count:1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

console.log(["Alaa", "Ali", "Nesma", "Osama", "Aliaa"]);
// -> [{name: true, count: 3}, {name: false, count: 2}]

function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script? script.name : "none";
  }).filter(({name}) => name != "none");

  let total = scripts.reduce( (n, {count}) => n = count, 0);
  if(total == 0) return "NO scripts found";
  
  return scripts.map(({name, count}) => {
    return `${Math.round(count * 100 / total)}% ${name}`;
  }).join(", ");
}

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
// → 61% Han, 22% Latin, 17% Cyrillic