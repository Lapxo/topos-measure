import { shell } from '@lapxo/topos/capsule';
import { held } from './regions/held.ts';
import { readings } from './regions/readings.ts';

export const render = shell({
  held: { reads: ['lang', 'form/prose/**', 'form/template/**', 'prose/*/*', 'measure/**'], region: held },
  readings: { reads: ['lang', 'form/template/**', 'prose/*/*', 'measure/**'], region: readings },
});
