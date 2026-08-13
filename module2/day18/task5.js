export const VAT = 0.15;
export function addVat(price) {
  return price + price * VAT;
}
