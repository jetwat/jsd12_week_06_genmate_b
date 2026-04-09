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

module.exports = Mother;