let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

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
