setTimeout(function(){  console.log('Timer is done!');
}, 1);

// console.log("Hello World");
// console.log("Node JS World");

function add(a,b) {
    var c = a+b;
    console.log(c);
}

()=>{
    // var c = a+b;
    console.log(c);
}

var addArrow = (a,b) => {
    var c = a+b;
    console.log(c);
}

add(6,7);

// addVar(6,7);

addArrow(6,7);