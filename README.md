# @lapxo/topos-measure

![version 0.1.0](https://img.shields.io/badge/version-0.1.0-8c959f) ![license MIT](https://img.shields.io/badge/license-MIT-8c959f) ![node >=22.12](https://img.shields.io/badge/node-%3E%3D22.12-8c959f) ![dependencies 2](https://img.shields.io/badge/dependencies-2-8c959f) ![cases 0 hold](https://img.shields.io/badge/cases-0_hold-8c959f) ![verify agrees](https://img.shields.io/badge/verify-agrees-2da44e)

One cell for every quantity.

A world for readings. Point it at what you measure, thermometers, sensors, a CSV, and it folds every reading into a cell with a floor and a ceiling, and every second instrument into an encounter. [its regions, read off its own descriptor](docs/reference.md)

## Why one cell

A reading from one instrument is potential. Two independent instruments that agree make information, and the world tells you how much: in bits.

## Four thermometers, one room

<p align="center"><img src="docs/img/world.svg" alt="declares measurements, runs on node, reaches none, held reads lang|form/prose/**|form/template/**|prose/*/*|measure/**, readings reads lang|form/template/**|prose/*/*|measure/**, against topos sha256:680af2143a339689f58b8f672da4c637b76e22f3b3812d2dfb95b2f0723d5541, packed as sha256:1fdaecd9e0db78503143c649ad2a0bfec3b597060db18b8a1b845415e3adb225, a place adopts it with uses/topos-measure and run by the node host" width="640"></p>

```bash
node examples/release/thermometers.ts
```

```
bound-lock/1 about="the domain this capsule serves: what several origins measured, each quantity read as one cell" at=policy:topos/capsule by=target form=alphabet measure=id role=writes scope=capsule/domain value=measurements
bound-lock/1 about="the runtime a host starts this capsule with, whose entry, regions and effects are the runtime's own lines" at=policy:topos/capsule by=target form=alphabet measure=id role=writes scope=capsule/runtime value=node
bound-lock/1 about="where this capsule's world keeps its values: the place's own files" at=policy:topos/capsule by=target form=alphabet measure=id role=writes scope=capsule/holds value=./
bound-lock/1 about="the held region" at=policy:topos/capsule by=target form=alphabet measure=reads role=render scope=region/held value=lang|form/prose/**|form/template/**|prose/*/*|measure/**
bound-lock/1 about="the readings region" at=policy:topos/capsule by=target form=alphabet measure=reads role=render scope=region/readings value=lang|form/template/**|prose/*/*|measure/**
bound-lock/1 about="the key this world's own prose is written under, which its host drops as it hands the prose to the place's pages and to its own regions" at=policy:topos/capsule by=target form=alphabet measure=id role=writes scope=capsule/key value=measure
bound-lock/1 about="what this capsule reaches beyond the lines it is handed" at=policy:topos/capsule by=target form=alphabet measure=effects role=writes scope=capsule/effects value=none
bound-lock/1 about="the topos release this capsule is packed against, named by its digest" at=policy:topos/capsule by=target form=alphabet measure=digest role=writes scope=capsule/topos value=sha256:680af2143a339689f58b8f672da4c637b76e22f3b3812d2dfb95b2f0723d5541
bound-lock/1 about="The {origins} origins that measured {quantity} do not meet: no value in {unit} is held by all of their readings, and no average of them closes that." at=witness:a-demo-world-that-held-no-readings by=target form=alphabet measure=text role=writes scope=prose/en/measure/CONFLICT value=lock
bound-lock/1 about="The {origins} origins that measured {quantity} meet: every one of their readings holds {lo}..{hi} {unit}." at=witness:a-demo-world-that-held-no-readings by=target form=alphabet measure=text role=writes scope=prose/en/measure/FREE value=lock
```

[The whole example](examples/release/thermometers.ts)

The four origins that measured room do not meet: no value in celsius is held by all of their readings, and no average of them closes that.

## Readings

| quantity | origin | reading |
|---|---|---|
| room | a | 19.8..20.2 celsius |
| room | b | 19.9..20.3 celsius |
| room | c | 19.7..20.1 celsius |
| room | d | 24..24.4 celsius |

## What it claims

- **It costs 2 dependencies: the algebra its cells are read by and the SDK it answers through.** · [receipt](receipts.bound)

## How to read it

topos-measure is read one region at a time, and each answers one question.

- **held** · what the readings of one quantity hold together, and in which state their cell is
- **readings** · what each origin read of each quantity, in the unit its line names

It rests on obligations and topos.

## Check

● 0 cases hold

● `npm ci && npm run build`

## Pointers

- [Reference](docs/reference.md)
