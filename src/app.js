const CartItem = require('./models/cart-item');
const ReceiptItem = require('./models/receipt-item');
const Receipt = require('./models/receipt');
const Item = require('./models/item');
const Promotion = require('./models/promotion');

function printReceipt(tags) {

  const cartItems = CartItem.buildCartItems(tags, Item.AllItems());
  const receiptItems = ReceiptItem.buildReceiptItems(cartItems,Promotion.AllPromotions());
  const receipt = new Receipt(receiptItems);
  const receiptText = Receipt.buildReceiptText(receipt);

  console.log(receiptText);
}

exports.printReceipt = printReceipt;
