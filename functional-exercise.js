let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Return a url-friendly version of a string
// Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
};

// map
function statesMap(states) {
  return states.map(state => `https://example.com/${urlify(state)}`)
};
console.log(statesMap(states));

// filter: using String#includes
function statesFilter(states) {
  return states.filter(state => state.includes("Dakota"));
};
console.log(statesFilter(states));

// filter: using regex
function statesFilterRegex(states) {
  return states.filter(state => state.split(/\s+/).length === 2);
};
console.log(statesFilterRegex(states));

// reduce
// Returns the product of all the elements in an array
function arrayProduct(array) {
  return array.reduce((product, n) => product *= n);
}
console.log(arrayProduct(a));
