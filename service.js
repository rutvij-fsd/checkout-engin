import PricingRules from "./pricingRules.js";

export function countItems(items) {
  return items.reduce((itemCounts, item) => {
    itemCounts[item] = (itemCounts[item] || 0) + 1;
    return itemCounts;
  }, {});
}

export function calculateTotalPrice(itemCounts) {
    let totalPrice = 0;
  
    for (const sku in itemCounts) {
      const rule = PricingRules.getRule(sku);
  
      if (rule) {
        const itemPrice = rule.price;
        const itemQuantity = itemCounts[sku];
  
        if (hasRetailDeal(rule) && itemQuantity >= rule.retailDeal.quantity) {
          const dealCount = Math.floor(itemQuantity / rule.retailDeal.quantity);
          const remainingCount = itemQuantity % rule.retailDeal.quantity;
          const retailPrice = (dealCount * rule.retailDeal.price + remainingCount) * itemPrice;
  
          if (hasBulkDiscount(rule) && itemQuantity >= rule.bulkDiscount.minQuantity) {
            const bulkPrice = itemQuantity * rule.bulkDiscount.discountPrice;
            totalPrice += Math.min(retailPrice, bulkPrice);
          } else {
            totalPrice += retailPrice;
          }
        } else if (hasBulkDiscount(rule) && itemQuantity >= rule.bulkDiscount.minQuantity) {
          const bulkPrice = itemQuantity * rule.bulkDiscount.discountPrice;
          totalPrice += bulkPrice;
        } else {
          totalPrice += itemQuantity * itemPrice;
        }
      }
    }
  
    return totalPrice;
  }
  
function hasRetailDeal(rule) {
  return rule.retailDeal && rule.retailDeal.quantity && rule.retailDeal.price;
}

function hasBulkDiscount(rule) {
  return rule.bulkDiscount && rule.bulkDiscount.minQuantity && rule.bulkDiscount.discountPrice;
}

