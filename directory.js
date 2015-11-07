var directory = {
  jim: "Bulb",
  sara: "Leading Learners",
  ray: "Chem with Ray"
};
//
// for(var key in directory){
//   console.log(key);
// }

var input = window.prompt("Enter the name of a Galvanize Member to find the company they work for." )


function searchGalvanize(input) {
for(var key in directory){
  if(input == key){
    return directory[input];
  }
}
}
// if(input === 'jim') {
//   return directory[input];
//   }
//   if(input === 'sara') {
//   return directory[input];
//         }
//   if(input === 'ray') {
//   return directory[input];
//             }
// }

console.log(searchGalvanize('ray'));
