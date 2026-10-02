// Four thermometers in one room, asked of this world through the one contract: its own lock as it stands, what it says of the four and of the three without d, then the line a place adopts it with.
import { readFileSync } from 'node:fs';
import { declarationOf, shell } from '@lapxo/topos/capsule';
import { answer } from '@lapxo/topos/contract';
import { PROTOCOL, canonical } from '@lapxo/topos/wire';
import { render as region } from '../../src/regions/held.ts';

const lock = readFileSync(new URL('../../capsule.bound', import.meta.url), 'utf8').split('\n').filter((line) => line.startsWith('bound-lock/1'));
const render = shell({ held: { reads: declarationOf(lock).regions['held'] ?? [], region } });
const key = / scope=capsule\/key value=(\S+)/.exec(lock.join('\n'))?.[1] ?? '';
const prose = lock.filter((line) => line.includes(` scope=prose/`) && line.includes(`/${key}/`)).map((line) => line.replace(new RegExp(` scope=prose/([^/ ]+)/${key}/`), ' scope=prose/$1/'));
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
  answer({ render }, { protocol: PROTOCOL, verb: 'render', rootScope: '', files: [], lines: [...words, ...prose, ...read(origins)], region: 'held', at: 3, shape: 'README.md', name: 'acme', reads: declarationOf(lock).regions['held'] ?? [] }, '') as { kind: string; lines: string[]; why: string });

for (const line of lock.filter((one) => / scope=(capsule|region)\//.test(one))) console.log(line);
console.log('four thermometers ', held(room));
console.log('without d         ', held(room.filter((one) => one.origin !== 'd')));
console.log(canonical({ at: 'policy:acme/capsules', by: 'target', form: 'alphabet', measure: 'id', role: 'writes', scope: 'uses/topos-measure', value: 'sha256:1fdaecd9e0db78503143c649ad2a0bfec3b597060db18b8a1b845415e3adb225' }));
