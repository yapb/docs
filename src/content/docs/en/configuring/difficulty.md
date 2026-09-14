---
title: "Bot Difficulty Configuration"
---

You can fine-tune the bots thanks to the difficulty configuration file. It contains the values of reaction time, headshot and wallshot probabilities, recoil control values, and aim offset axes.

Each of these values is tied to each difficulty level (`yb_difficulty` `0`–`4` maps to `Noob`–`Expert`).

The bots difficulty configuration file is located at `addons/yapb/conf/difficulty.cfg`.

:::note
All changes to this file take effect only on server restart. Missing values in a block are inherited from the built-in defaults.
:::

## Format

Every block is a difficulty level. Only the levels `Noob`, `Easy`, `Normal`, `Hard` and `Expert` are recognized, unknown blocks are reported and ignored.

```ini
Expert {
   reaction = 0.1, 0.25
   headshotChance = 75
   seenThruWallChance = 75
   heardThruWallChance = 75
   maxRecoil = 20
   aimError = 0.0, 0.0, 0.0
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `reaction` | Min,max reaction time (seconds) from when the bot first saw the enemy to when it can recognize it. Must contain exactly two values |
| `headshotChance` | Probability that the bot will aim at the head instead of body, if both body and head are visible |
| `seenThruWallChance` | Chance that the bot will attack the enemy if it believes that it is there and just saw it |
| `heardThruWallChance` | Chance that the bot will attack the enemy if it believes that it is there and just heard it |
| `maxRecoil` | Maximum weapon recoil to compensate by pausing fire |
| `aimError` | (x, y, z) offsets to add aim error to bot aiming. Must contain exactly three values |

## Shipped Defaults

| Level (`yb_difficulty`) | `reaction` | `headshotChance` | `seenThruWallChance` | `heardThruWallChance` | `maxRecoil` | `aimError` |
|---|---|---|---|---|---|---|
| `0` Noob | `1.5, 2.0` | `15` | `0` | `0` | `40` | `20.0, 20.0, 40.0` |
| `1` Easy | `1.0, 1.5` | `20` | `0` | `0` | `35` | `15.0, 15.0, 30.0` |
| `2` Normal | `0.5, 1.0` | `25` | `0` | `25` | `30` | `10.0, 10.0, 20.0` |
| `3` Hard | `0.25, 0.5` | `50` | `50` | `50` | `25` | `5.0, 5.0, 10.0` |
| `4` Expert | `0.1, 0.25` | `75` | `75` | `75` | `20` | `0.0, 0.0, 0.0` |
