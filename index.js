class Mother { 
    constructor (name, bloodGroup, give) {
        this.name = name;    
        this.bloodGroup = bloodGroup;
        this.give = give;  
        this._momBlood = "AB";
        this._lastName = "Genmate B";      
        this._money = 20000000; 
    }
  
    getStatus() {
        this._money -= this.give;
        if(this._money < 0) return "ติดหนี้!!";
        if(this._money <= 10000000) return "เงินเหลือครึ่งกระเป๋าแล้วนะ!!";
        if(this._money < 20000000) return "รวย!! พร้อมเปย์จ้า!!";        
        return "มหาเศรษฐี...เงินฉันไม่มีหมด!!";
    }

}

module.exports = Mother;