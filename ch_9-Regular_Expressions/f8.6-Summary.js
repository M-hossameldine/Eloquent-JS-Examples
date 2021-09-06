/*
* Regular Expressions: are object that represent patterns in strings.
/abc/       a sequence of characters 
/[abc]/     Any character from a set of characters 
/[^abc]/    Any character not in a set of characters
/[0-9]/     Any character in a range of characters
/x+/        One or more occurances of pattern x
/x+?/       One or more occurances, nongreedy
/x* /       Zero or more occurances 
/x?/        Zero or one occurance
/x{2,4}/    Two to four occurances
/(abc)/     A group
/a|b|c/     Any one of several patterns
/\d/        Any digit character 
/\w/        Any aphanumeric character
/\s/        Any whitespace character
/./         Any character except newlines
/\b/        A word boundary
/^/         Start on input
/$/         End of input

* Regular Expressions methods
test ()
exec ()

* Strings methods:
match ()
search ()
replace ()

* flags (options)
i  case insensitive 
g  global
y  sticky
u  Unicode mode
*/

