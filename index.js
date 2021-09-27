const userInfo = require("./information.js");

const message = `Hi, my name is ${userInfo.name} and I'm a wilder at the ${userInfo.campus} campus.`;

let cowsay = require("cowsay");

console.log(cowsay.say({
    text : message,
    e : "oO",
    T : "U "
}));