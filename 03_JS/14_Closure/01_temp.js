function makeFunc() {
    let name = 'Hello World';
    function displayName() {
      console.log(name);
    }
    name = "Neelkanth";
    name = "Suresh";
    return displayName;
  }

// function makeFunc(){
//     console.log("Make Function");
//     return 1;
// }
const myFunc = makeFunc();
myFunc();