class Receipt {
  constructor(receiptItems = [], savedTotal = 0, total = 0) {
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

    return new Receipt(receiptItems, savedTotal, total);
  }

  static buildReceiptText(receipt) {
    const formatMoney = (money) => {
      return money.toFixed(2);
    }

    let receiptItemsText = receipt.receiptItems
      .map(receiptItem => {
        const cartItem = receiptItem.cartItem;
        return `名称：${cartItem.item.name}，\
数量：${cartItem.count}${cartItem.item.unit}，\
单价：${formatMoney(cartItem.item.price)}(元)，\
小计：${formatMoney(receiptItem.subtotal)}(元)`;
      })
      .join('\n');

    return `***<没钱赚商店>收据***
${receiptItemsText}
----------------------
总计：${formatMoney(receipt.total)}(元)
节省：${formatMoney(receipt.savedTotal)}(元)
**********************`;
  }
}

module.exports = Receipt;
