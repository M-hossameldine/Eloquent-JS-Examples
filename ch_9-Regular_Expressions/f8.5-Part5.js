/*
* Parasing an INI File

*/

/**************************************************************/
// Parsing an INI File
/**************************************************************/
/* INI file format rules
- Blank lines and lines starting with semicolons are ignored.
- Lines warpped in [ and ] start a new section
- Lines containing an alphnumeric identifier followed by an = character and a setting to the current section.
- Anything else is invalid.
*/

function parseINI(string) {
  // Start with an object to hold the top-level fields
  let result = {};
  let section = result;
  string.split(/\r?\n/).forEach( line => {
    let match;
    if (match = line.match(/^(\w+)=(.*)$/)) {
      section[match[1]] = match[2];
    } else if (match = line.match(/^\[(.*)\]$/)) {
      section = result[match[1]] = {};
    } else if (!/^\s*(;.*)?/.test(line)) {
      throw new Error("Line '" + line + "' is not valid.");
    }
  });
  return result;
}
/**************************************************************/