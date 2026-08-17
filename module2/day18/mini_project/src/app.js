import { transactions, updateTransactionAmount } from "./transactions.js";
import { getTotalCredits, getTotalDebits, getReceipts } from "./report.js";

// 1. Calculate Totals
const totalCredits = getTotalCredits(transactions);
const totalDebits = getTotalDebits(transactions);

console.log(`Total Credits: ${totalCredits} ETB`);
console.log(`Total Debits: ${totalDebits} ETB\n`);

// 2. Generate Receipts
console.log("--- Formatted Receipts ---");
const receipts = getReceipts(transactions);
receipts.forEach((receipt) => console.log(receipt));

// 3. Immutability Verification
console.log("\n--- Spread Update Test ---");
const originalTx = transactions[0];
const updatedTx = updateTransactionAmount(transactions, 101, 2000);

console.log("Original Transaction Amount:", originalTx.amount);
console.log("Updated Copy Amount:", updatedTx.amount);
console.log("Is Original Unchanged?", originalTx.amount === 1500);
