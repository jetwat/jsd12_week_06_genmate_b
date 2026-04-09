class Mother {
  constructor(money) {
    this._money = money;
    this._momBlood = "AB";
    this._lastName = "Genmate B";
  }



  processWithdraw(amount) {
    this._money -= amount;
    this.displayStatus();
  }



  displayStatus() {
    if (this._money < 0) {
      console.log("แม่บอก: ติดหนี้แล้วลูกเอ๊ย!!");
    } else if (this._money <= 10000000) {
      console.log(`แม่บอก: เงินเหลือครึ่งกระเป๋าแล้วนะ!! (คงเหลือ: ${this._money.toLocaleString()} บาท)`);
    } else {
      console.log(`แม่บอก: รวย!! พร้อมเปย์จ้า!! (คงเหลือ: ${this._money.toLocaleString()} บาท)`);
    }
  }

  get currentMoney() {
    return this._money;
  }
}

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

class Family {
  constructor(familyName) {
    this.familyName = familyName;
    this.familyList = [];
  }

  addChild(child) {
    this.familyList.push(child);
    console.log(`เพิ่ม ${child.name} เข้าสู่ครอบครัว ${this.familyName} เรียบร้อย!`);
  }

  showAllAndSpend() {
    console.log(`
--------------------------------------------
--- ยินดีต้อนรับสู่ครอบครัว ${this.familyName} ---
--------------------------------------------`);

    this.familyList.forEach((child) => {
      child.checkBlood();
      child.requestMoney();
      console.log("--------------------------------------------");
    });
  }
}







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