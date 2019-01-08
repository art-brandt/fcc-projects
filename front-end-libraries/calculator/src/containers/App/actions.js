import { ENTRY_OPERATOR, EQUALS, CLEARE, ENTRY_NUMBER, ENTRY_DECIMAL} from './constants';

export function entryNumber(number) {
  return { type: ENTRY_NUMBER, number };
}

export function entryOperator(operator) {
  return { type: ENTRY_OPERATOR, operator };
}

export function entryDecimal() {
  return { type: ENTRY_DECIMAL };
}

export function equals() {
  return { type: EQUALS };
}

export function cleare() {
  return { type: CLEARE };
}