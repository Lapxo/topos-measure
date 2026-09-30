import { found, lang, listed, of } from '@lapxo/topos/capsule';
import type { Asked } from '@lapxo/topos/capsule';
import { intervals } from '@lapxo/obligations';
import type { Interval } from '@lapxo/obligations';
import { cell, encounter, observe, state } from '@lapxo/obligations/views/field';
import { readingsOf } from '../helpers/reading.ts';

const whole = intervals(-Infinity, Infinity);

/** The held region. It answers what the readings of one quantity hold together, and in which state their cell is. */
export const held = (asked: Asked): readonly string[] => {
  const read = readingsOf(asked.lines);
  const numbers = listed(asked, `form/prose/${lang(asked)}/numbers`);
  return [...new Set(read.map((one) => one.quantity))].map((quantity) => {
    const mine = read.filter((one) => one.quantity === quantity);
    const met = mine.reduce((at, one) => observe(at, { origin: one.origin, span: one.span }), cell<Interval>(quantity));
    const { origins, held: meet } = encounter(whole, met);
    const said = state(whole, met);
    const fields: Readonly<Record<string, string | number>> = { quantity, origins: numbers[origins] ?? String(origins), lo: meet.lo, hi: meet.hi, unit: of(mine[0]?.line, 'measure') };
    return listed(asked, `form/template/measure/${said}`).reduce((text, field) => text.split(`{${field}}`).join(String(fields[field] ?? '')), of(found(asked, `prose/${lang(asked)}/${said}`), 'about'));
  });
};
