class Mother {
  constructor(name, bloodGroup, give) {
    this.name = name;
    this.bloodGroup = bloodGroup;
    this.give = give;
    this._momBlood = "AB";
    this._lastName = "Genmate B";
    this._money = 20000000;
  }
  getStatus() {
    this._money -= this.give;
    if (this._money < 0) return console.log("ติดหนี้!!");
    if (this._money <= 10000000)
      return console.log("เงินเหลือครึ่งกระเป๋าแล้วนะ!!");
    if (this._money < 20000000) return console.log("รวย!! พร้อมเปย์จ้า!!");
    return console.log("มหาเศรษฐี...เงินฉันไม่มีหมด!!");
  }
  getMoney() {
    return this._money;
  }
}

module.exports = Mother;