# backend-ts-assignment

We are starting an electronics store. You have been asked to build the checkout system. We will start with the following products in our catalogue-


| SKU     | Name        | Price    |
| --------|:-----------:| --------:|
| op10    | Oneplus 10  | $849.99  |
| op11    | Oneplus 11  | $949.99  |
| buds    | Earbuds     | $129.99  |
| wtch    | Smart Watch | $229.99  |

As we're launching our new electronics store, we would like to have a few opening day specials:

- We're going to have a 3 for 2 deal on Earbuds. For example, if you buy 3 Earbuds, you will pay the price of 2 only
- The brand new Oneplus 11 will have a bulk discount applied where the price will drop to $899.99 each, if someone buys more than 4

As our Sales manager is quite indecisive, we would want the pricing rules to be as flexible as possible as they can change in the future with little notice.

Our checkout system can scan items in any order.

The interface to our checkout looks like this (shown in typescript):

```typescript
  const co = new Checkout(pricingRules);
  co.scan(item1);
  co.scan(item2);
  co.total();
```

Your task is to implement a checkout system that fulfills the requirements described above.

Example scenarios
-----------------

SKUs Scanned: buds, op10, buds, buds
Total expected: $1109.97

SKUs Scanned: wtch, op11, op11, op11, buds, buds, op11, op11
Total expected: $4989.92

Notes on implementation:

- use **Typescript**
- try not to spend more than 4-5 hours maximum. (We don't want you to lose a weekend over this!)
- don't build guis etc, we're more interested in your approach to solving the given task, not how shiny it looks
- don't worry about making a command line interface to the application
- don't use any frameworks
- you can use basic libraries, but the core logic has to be your own
- you can hard code the above data in the code itself, just how the database would return
- incorporate test cases

When you've finished, send us the link to your github-repo.
