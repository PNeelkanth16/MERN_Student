global.text = "I am Global";

console.log(__dirname);

setTimeout(()=>{
    console.log("5 sec passed");
},5000)

function display(text){
    console.log("This is local text => "+text);
    console.log("This is Global text => "+global.text);
}

display("I am local");
