export const RECEIVED_A_PAYCHECK = "RECEIVED_A_PAYCHECK";
export const BOUGHT_AN_ITEM = "BOUGHT_AN_ITEM";
export const HAD_A_BIRTHDAY = "HAD_A_BIRTHDAY";

export function createReceivedAPaycheckAction(amountAfterTaxes) {
  return { type: RECEIVED_A_PAYCHECK, amountAfterTaxes };
}

export function createBoughtAnItemAction(item, price) {
  return { type: BOUGHT_AN_ITEM, item, price };
}

export function createHadABirthdayAction() {
  return { type: HAD_A_BIRTHDAY };
}
