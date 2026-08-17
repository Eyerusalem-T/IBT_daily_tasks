import { createLoyaltyCard } from "./loyalty.js";
import { standardRule, holidayRule } from "./rules.js";

// Initialize card
const cardA = createLoyaltyCard();
console.log("Initial Balance:", cardA.balance());

// Earn points using standard vs swapped rule
console.log("Earned (Standard Rule, 100 ETB):", cardA.earn(100, standardRule));
console.log("Earned (Holiday Rule, 200 ETB):", cardA.earn(200, holidayRule));
console.log("Current Balance:", cardA.balance());

// Redeem points
console.log("Redeem 30 Points:", cardA.redeem(30));
console.log("Redeem 50 Points (Insufficient):", cardA.redeem(50));
console.log("Final Balance:", cardA.balance());

// Verification: Independent instance
const cardB = createLoyaltyCard(50);
console.log("Card B Balance:", cardB.balance());

// Verification: Direct access attempt
console.log("Direct points access (cardA.points):", cardA.points); // Output: undefined
