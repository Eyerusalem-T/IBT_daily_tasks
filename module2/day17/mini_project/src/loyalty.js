import { standardRule } from "./rules.js";

export function createLoyaltyCard(initialPoints = 0) {
  // Encapsulated state (closure)
  let points = initialPoints;

  function earn(amountSpent, rule = standardRule) {
    const pointsEarned = rule(amountSpent);
    points += pointsEarned;
    return pointsEarned;
  }

  function redeem(amount) {
    if (amount <= 0 || amount > points) {
      return false; 
    }
    points -= amount;
    return true;
  }

  function balance() {
    return points;
  }

  return { earn, redeem, balance };
}
