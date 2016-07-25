class Receipt {
  constructor(receiptItems = [],savedTotal = 0,total = 0){
    this.receiptItems = receiptItems;
    this.savedTotal = savedTotal;
    this.total = total;
  }
}

module.exports = Receipt;
