let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// map: Imperative version
function imperativeMap(states) {
  let urlStates = [];
  states.forEach(function(state) {
    urlStates.push(state.toLowerCase().split(/\s+/).join("-"));
  });
  return urlStates;
}
console.log(imperativeMap(states));

//map: Functional version
function functionalMap(states) {
  return states.map(state => state.toLowerCase().split(/\s+/).join("-"));
}
console.log(functionalMap(states));
