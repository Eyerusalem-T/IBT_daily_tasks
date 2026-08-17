// Filter credits and calculate sum
export function getTotalCredits(list) {
  return list
    .filter((t) => t.type === "credit")
    .reduce((sum, t) => sum + t.amount, 0);
}

// Filter debits and calculate sum
export function getTotalDebits(list) {
  return list
    .filter((t) => t.type === "debit")
    .reduce((sum, t) => sum + t.amount, 0);
}

// Map receipts using parameter destructuring
export function getReceipts(list) {
  return list.map(
    ({ customer, amount }) => `Receipt: ${customer} paid ${amount} ETB`,
  );
}
