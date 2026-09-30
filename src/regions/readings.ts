import { found, lang, listed, of } from '@lapxo/topos/capsule';
import type { Asked } from '@lapxo/topos/capsule';
import { readingsOf } from '../helpers/reading.ts';

/** The readings region. It answers what each origin read of each quantity, in the unit its line names. */
export const readings = (asked: Asked): readonly string[] => {
  const words = (key: string): string => of(found(asked, `prose/${lang(asked)}/${key}`), 'about');
  const row = (fields: Readonly<Record<string, string>>): string => listed(asked, 'form/template/measure/row').reduce((text, field) => text.split(`{${field}}`).join(fields[field] ?? ''), words('row'));
  const read = readingsOf(asked.lines);
  return read.length ? [words('readings'), '', words('table'), words('rule'),
    ...read.map((one) => row({ quantity: one.quantity, origin: one.origin, value: of(one.line, 'value'), unit: of(one.line, 'measure') }))] : [];
};
