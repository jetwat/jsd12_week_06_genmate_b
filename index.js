const Mother = require("./family/Mother.js");
const Child = require("./family/Child.js");
const Family = require("./family/Family.js");

const myFamily = new Family("เดอร์ รวย");
const waiwai = new Child("Waiwai", "AB", 10000000);
const chong = new Child("Chong", "B", 5000000);
const my = new Child("My", "O", 20);

let money = 20000000

myFamily.addChild(waiwai);
myFamily.addChild(chong);
myFamily.addChild(my);
myFamily.showAllChild();
console.log(chong._money);