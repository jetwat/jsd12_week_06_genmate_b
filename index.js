const Mother = require("./family/Mother.js");
const Child = require("./family/Child.js");
const Family = require("./family/Family.js");

const theMom = new Mother(20000000);

const waiwai = new Child("Waiwai", "AB", 10000000, theMom);
const chong = new Child("Chong", "B", 5000000, theMom);
const my = new Child("My", "O", 20, theMom);

const myFamily = new Family("เดอร์ รวย");
myFamily.addChild(waiwai);
myFamily.addChild(chong);
myFamily.addChild(my);



myFamily.showAllAndSpend();



console.log(`สรุปยอดเงินสุดท้ายในกระเป๋าแม่: ${theMom.currentMoney.toLocaleString()} บาท`);