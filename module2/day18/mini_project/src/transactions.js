// TeleBirr transaction dataset
export const transactions = [
  { id: 101, customer: "Abebe Kebede", amount: 1500, type: "credit" },
  { id: 102, customer: "Tigist Alemu", amount: 450, type: "debit" },
  { id: 103, customer: "Mulugeta Tadesse", amount: 3200, type: "credit" },
  { id: 104, customer: "Hana Girma", amount: 120, type: "debit" },
  { id: 105, customer: "Dawit Worku", amount: 800, type: "credit" },
];

// Returns updated copy via spread operator without mutating original
export function updateTransactionAmount(list, id, newAmount) {
  const original = list.find((t) => t.id === id);
  return { ...original, amount: newAmount };
}
