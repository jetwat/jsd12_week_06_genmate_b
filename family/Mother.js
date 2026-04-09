class Mother {
  constructor(name, bloodGroup, give) {
    this.name = name;
    this.bloodGroup = bloodGroup;
    this.give = give;
    this._momBlood = "AB";
    this._lastName = "Genmate B";
    this._money 
  }
  getStatus() {
    ( money === undefined) ? money = 20000000 : money -= this.give;
    this._money = money;
    if ( money < 0) return console.log("ติดหนี้!!");
    if ( money <= 10000000) return console.log(`เงินเหลือครึ่งกระเป๋าแล้วนะ!!`);
    if ( money < 20000000) return console.log("รวย!! พร้อมเปย์จ้า!!");
    return console.log("มหาเศรษฐี...เงินฉันไม่มีหมด!!");
  }
}

module.exports = Mother;