class Receipt {
  constructor(receiptItems = [],savedTotal = 0,total = 0){
    this.receiptItems = receiptItems;
    this.savedTotal = savedTotal;
    this.total = total;
  }

  static buildReceipt(receiptItems) {

  let total = 0;
  let savedTotal = 0;

  for (const receiptItem of receiptItems) {
    total += receiptItem.subtotal;
    savedTotal += receiptItem.saved;
  }

  return new Receipt(receiptItems,savedTotal,total);
}

   
}

module.exports = Receipt;
