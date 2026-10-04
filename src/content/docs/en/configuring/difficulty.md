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
   Reaction = 0.15, 0.3
   HeadshotChance = 80
   SeenThruWallChance = 75
   HeardThruWallChance = 75
   MaxRecoil = 21
   AimError = 0.0, 0.0, 0.0
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `Reaction` | Min,max reaction time (seconds) from when the bot first saw the enemy to when it can recognize it. Must contain exactly two values |
| `HeadshotChance` | Probability that the bot will aim at the head instead of body, if both body and head are visible |
| `SeenThruWallChance` | Chance that the bot will attack the enemy if it believes that it is there and just saw it |
| `HeardThruWallChance` | Chance that the bot will attack the enemy if it believes that it is there and just heard it |
| `MaxRecoil` | Maximum weapon recoil to compensate by pausing fire |
| `AimError` | (x, y, z) offsets to add aim error to bot aiming. Must contain exactly three values |

## Shipped Defaults

| Level (`yb_difficulty`) | `Reaction` | `HeadshotChance` | `SeenThruWallChance` | `HeardThruWallChance` | `MaxRecoil` | `AimError` |
|---|---|---|---|---|---|---|
| `0` Noob | `1.0, 1.4` | `20` | `10` | `10` | `34` | `12.0, 12.0, 20.0` |
| `1` Easy | `0.7, 1.0` | `35` | `25` | `25` | `30` | `8.0, 8.0, 14.0` |
| `2` Normal | `0.5, 0.7` | `50` | `40` | `40` | `27` | `5.0, 5.0, 10.0` |
| `3` Hard | `0.3, 0.45` | `65` | `60` | `60` | `24` | `2.0, 2.0, 4.0` |
| `4` Expert | `0.15, 0.3` | `80` | `75` | `75` | `21` | `0.0, 0.0, 0.0` |
