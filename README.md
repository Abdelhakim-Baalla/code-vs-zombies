# Code vs Zombies

[![Node.js](https://img.shields.io/badge/Node.js-%E2%89%A514-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Status](https://img.shields.io/badge/status-in%20progress-orange)]()

Ash must clear a 16000 × 9000 zone of zombies while keeping the civilians alive.
This is an **optimization** puzzle: there is no single correct output, only a score
that depends on how many zombies you kill, how many humans survive, and how many
zombies you manage to kill **in the same turn**.

---

## Rules

### Zone

- `16000 × 9000` units, origin `(0, 0)` at the top-left.
- Coordinates are integers; any non-integer position is **rounded down**.

### Ash

- Each turn you output a target `X Y`.
- Ash moves exactly **1000** units toward it, or lands on it if closer.
- At the end of the turn, every zombie within **2000** units of Ash dies.

### Zombies

- Each turn every zombie steps **400** units toward the **closest human** (Ash
  included).
- If a zombie is closer than 400 units to its target, the human dies and the zombie
  moves onto their coordinate.
- Two zombies may share a coordinate.

### Order inside one round

1. Zombies move toward their targets.
2. Ash moves toward his target.
3. Zombies within 2000 units of Ash are destroyed.
4. Zombies eat any human they share a coordinate with.

That order matters: a zombie that reaches Ash's *old* position this turn is not
necessarily in range after Ash moves.

---

## Scoring

Per zombie:

```
points = (humans alive, excluding Ash)² × 10
```

Multi-kills are multiplied by the Fibonacci sequence, indexed as the statement
lists it:

```
1, 2, 3, 5, 8, 13, ...
```

The **n-th** zombie destroyed in the same round is multiplied by the **(n+2)-th**
number of that sequence. So a round with four kills is worth
`1·w + 2·w + 3·w + 5·w` — the order of kills does not matter, only how many die
together.

> ⚠️ Off-by-one trap: the exact indexing is easy to get wrong. Verify the multiplier
> of the first kill of a round against the IDE before building a strategy on it.

### Win / lose

| | |
|---|---|
| **Win** | all zombies destroyed, at least one human besides Ash alive |
| **Lose** | every other human is dead → 0 points for that test case |

There is no penalty for Ash dying — the lose condition is only about civilians.

---

## Input / Output

**Each turn, input:**

```
x y                 Ash position
humanCount
id hx hy            × humanCount
zombieCount
id zx zy znx zny    × zombieCount   (current and next-turn positions)
```

**Each turn, output:**

```
targetX targetY
```

Any text after the coordinates is displayed on screen and ignored by the judge.

**Constraints:** `0 ≤ x < 16000`, `0 ≤ y < 9000`, `1 ≤ humanCount < 100`,
`1 ≤ zombieCount < 100`, response time ≤ 100 ms per turn.

---

## Project layout

```
solution.js   the bot (currently: input parsing + a placeholder move)
README.md     rules, scoring, notes
LICENSE       MIT
```

There is no local judge yet — this puzzle is scored by the platform, and the
provided tests are deliberately different from the validation ones, so the only
reliable feedback is the CodinGame test panel.

## Plan

- [x] read and structure the per-turn game state
- [ ] understand the exact kill/scoring mechanics on the "Simple" test
- [ ] keep humans alive — identify which civilian is threatened first
- [ ] decide when to chase a kill vs. when to reposition
- [ ] group kills into multi-kill rounds for the Fibonacci bonus
- [ ] iterate on the leaderboard score, one change at a time

---

## Author

**Abdelhakim Baalla**

- GitHub: [https://github.com/Abdelhakim-Baalla](https://github.com/Abdelhakim-Baalla)

## License

Released under the [MIT License](./LICENSE).
