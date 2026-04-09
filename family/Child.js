const Mother = require("./Mother.js");

class Child {
  constructor(name, bloodGroup, amountToRequest, momInstance) {
    this.name = name;
    this.bloodGroup = bloodGroup;
    this.give = amountToRequest;
    this.mom = momInstance;
  }


  requestMoney() {
    console.log(`>> ${this.name} กำลังขอเบิกเงิน ${this.give.toLocaleString()} บาท...`);
    this.mom.processWithdraw(this.give);
  }

  checkBlood() {
    if (this.bloodGroup === this.mom._momBlood) {
      console.log(`   [:heavy_check_mark:] ฉันชื่อ ${this.name} ลูกรักของแม่ (กรุ๊ปเลือดตรงกัน)`);
    } else {
      console.log(`   [!] ฉันชื่อ ${this.name} ลูกใครหว่า !!! (กรุ๊ปเลือดไม่ตรง)`);
    }
  }
}

module.exports = Child;