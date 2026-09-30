import { of } from '@lapxo/topos/capsule';
import type { Handed } from '@lapxo/topos/capsule';
import { canonical, fromLine, steps } from '@lapxo/topos/wire';
import type { Interval } from '@lapxo/obligations';

/** Every reading among the lines a region is handed: a scope naming a family, a quantity and an origin, and a value that is a band, read through the form its own line names. */
export const readingsOf = (lines: readonly Handed[]): readonly { readonly line: Handed; readonly quantity: string; readonly origin: string; readonly span: Interval }[] =>
  lines.flatMap((line) => ((got, [family, quantity, origin, ...more]) => (family === undefined || quantity === undefined || origin === undefined || more.length
    || got.kind !== 'fact' || got.value.bound.kind !== 'interval' || got.value.bound.lo === null || got.value.bound.hi === null
    ? [] : [{ line, quantity, origin, span: { lo: got.value.bound.lo, hi: got.value.bound.hi } }]))(fromLine(canonical(line), null), steps(of(line, 'scope'))));
