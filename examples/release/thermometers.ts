// Four thermometers in one room, asked of this world through the one contract: its own lock as it stands, what it says of the four and of the three without d, then the line a place adopts it with.
import { readFileSync } from 'node:fs';
import { declarationOf } from '@lapxo/topos/capsule';
import { answer } from '@lapxo/topos/contract';
import { PROTOCOL, canonical } from '@lapxo/topos/wire';
import { render } from '../../src/index.ts';

const lock = readFileSync(new URL('../../capsule.bound', import.meta.url), 'utf8').split('\n').filter((line) => line.startsWith('bound-lock/1'));
const words = [
  `bound-lock/1 about="The {origins} origins that measured {quantity} meet: every one of their readings holds {lo}..{hi} {unit}." at=policy:acme/words by=target form=alphabet measure=text role=writes scope=prose/en/measure/FREE value=lock`,
  `bound-lock/1 about="The {origins} origins that measured {quantity} do not meet: no value in {unit} is held by all of their readings, and no average of them closes that." at=policy:acme/words by=target form=alphabet measure=text role=writes scope=prose/en/measure/CONFLICT value=lock`,
  `bound-lock/1 at=policy:acme/words by=target form=alphabet measure=id role=writes scope=form/template/measure/FREE value=origins|quantity|lo|hi|unit`,
  `bound-lock/1 at=policy:acme/words by=target form=alphabet measure=id role=writes scope=form/template/measure/CONFLICT value=origins|quantity|unit`,
  `bound-lock/1 at=policy:acme/words by=target form=alphabet measure=id role=writes scope=form/prose/en/numbers value=no|one|two|three|four`,
  `bound-lock/1 at=policy:acme/words by=target form=alphabet measure=id role=writes scope=lang value=en`,
];
const room = [
  { origin: 'a', span: { lo: 19.8, hi: 20.2 } },
  { origin: 'b', span: { lo: 19.9, hi: 20.3 } },
  { origin: 'c', span: { lo: 19.7, hi: 20.1 } },
  { origin: 'd', span: { lo: 24, hi: 24.4 } },
];
const read = (origins: typeof room): string[] => origins.map(({ origin, span: { lo, hi } }) => canonical({ at: 'policy:acme/room', by: 'target', form: 'interval', measure: 'celsius', role: 'writes', scope: `measure/room/${origin}`, value: `${lo}..${hi}` }));
const held = (origins: typeof room): string => ((got) => (got.kind === 'fact' ? got.lines.join(' ') : got.why))(
  answer({ render }, { protocol: PROTOCOL, verb: 'render', rootScope: '', files: [], lines: [...words, ...read(origins)], region: 'held', at: 3, shape: 'README.md', name: 'acme', reads: declarationOf(lock).regions['held'] ?? [] }, '') as { kind: string; lines: string[]; why: string });

for (const line of lock) console.log(line);
console.log('four thermometers ', held(room));
console.log('without d         ', held(room.filter((one) => one.origin !== 'd')));
console.log(canonical({ at: 'policy:acme/capsules', by: 'target', form: 'alphabet', measure: 'id', role: 'writes', scope: 'uses/topos-measure', value: 'sha256:386f8a36d34a50c7f82a8ac34828ce88af881eb2dfd668f062d910596317c897' }));
