const PricingRules = (() => {
  const rules = {
    op10: { price: 849.99 },
    op11: { price: 949.99, bulkDiscount: { minQuantity: 4, discountPrice: 899.99 } },
    buds: { price: 129.99, retailDeal: { quantity: 3, price: 2 }},
    wtch: { price: 229.99 },
  };

  const getRule = (sku) => rules[sku];

  return { getRule };
})();

export default PricingRules;
