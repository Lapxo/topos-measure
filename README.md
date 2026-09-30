# @lapxo/topos-measure

![version 0.1.0](https://img.shields.io/badge/version-0.1.0-8c959f) ![license MIT](https://img.shields.io/badge/license-MIT-8c959f) ![node >=22.12](https://img.shields.io/badge/node-%3E%3D22.12-8c959f) ![dependencies 2](https://img.shields.io/badge/dependencies-2-8c959f) ![cases 0 hold](https://img.shields.io/badge/cases-0_hold-8c959f) ![verify agrees](https://img.shields.io/badge/verify-agrees-2da44e)

One cell for every quantity.

A world for readings. Point it at what you measure, thermometers, sensors, a CSV, and it folds every reading into a cell with a floor and a ceiling, and every second instrument into an encounter. [its regions, read off its own descriptor](docs/reference.md)

## Why one cell

A reading from one instrument is potential. Two independent instruments that agree make information, and the world tells you how much: in bits.

## Four thermometers, one room

<p align="center"><img src="docs/img/world.svg" alt="declares measurements, runs on node, reaches none, 2 regions, the longest of them 22 lines, 0 vector files, each held from the blob, packed as sha256:2c3b0692590a76f35de5b2ff02d90f21b261f46f58e9dfa245db0920345e2827, pinned by topos-measure and run by the node host" width="640"></p>

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
