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

module.exports = Family;