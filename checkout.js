import PricingRules from './pricingRules.js';
import { countItems, calculateTotalPrice } from './service.js';

const Checkout = (() => {
  let scannedItems = [];

  const scan = (item) => {
    scannedItems.push(item);
    if (!PricingRules.getRule(item)) {
        throw new Error(`Item "${item}" is not found in the pricing rules.`);
    }
    return Checkout;
  };

  const total = () => {
    const itemCounts = countItems(scannedItems);
    return calculateTotalPrice(itemCounts);
  };

  return { scan, total };
})();

export default Checkout;
