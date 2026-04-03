# Weapons Configuration

Main config where most stuff regarding weapon handling is defined. The filename is `weapon.cfg` and is located in the `addons/yapb/conf` directory.

To edit this file you need to know the weapon numbering.

## Weapon Numbers

| # | Weapon | # | Weapon |
|---|--------|---|--------|
| 0 | KNIFE | 13 | UMP45 |
| 1 | USP | 14 | AK47 |
| 2 | GLOCK18 | 15 | SG552 |
| 3 | DEAGLE | 16 | M4A1 |
| 4 | P228 | 17 | GALIL |
| 5 | ELITE | 18 | FAMAS |
| 6 | FIVESEVEN | 19 | AUG |
| 7 | M3 | 20 | SCOUT |
| 8 | XM1014 | 21 | AWP |
| 9 | MP5NAVY | 22 | G3SG1 |
| 10 | TMP | 23 | SG550 |
| 11 | P90 | 24 | M249 |
| 12 | MAC10 | 25 | SHIELD |

## MapStandard Field

This field is by default used on all maps except VIP scenario.

### Weapon buy flags

| Value | Meaning |
|-------|---------|
| `-1` | Disallow buying for any team |
| `0` | Terrorist team only |
| `1` | CT team only |
| `2` | Can be bought by both teams |

### Example

```
MapStandard = -1,0,-1,2,-1,0,1,2,2,2,-1,2,-1,-1,0,0,1,0,1,1,2,2,0,1,2,1
```

## MapAS Field

This field is by default used only on VIP scenario maps.

### Weapon buy flags

| Value | Meaning |
|-------|---------|
| `-1` | Disallow buying for any team |
| `0` | Terrorist team only |
| `1` | CT team only |
| `2` | Can be bought by both teams |

### Example

```
MapAS = -1,-1,-1,2,-1,0,1,1,1,1,1,1,0,2,0,-1,1,0,1,1,0,0,-1,1,1,1
```

## Grenade Buying Percentage

Specifies the buying percents for grenade inventory.

From left to right:

| Position | Grenade |
|----------|---------|
| 1 | HE grenade |
| 2 | Flashbang |
| 3 | Smoke grenade |

### Example

```
GrenadePercent = 98,75,60
```

## Bot Economics

Specifies economics values for buying weapons.

From left to right:

| Position | Description |
|----------|-------------|
| 1 | If bot has more money than this value, it can buy the primary weapon |
| 2 | If bot has more money than this value, it will not buy SMGs (MP5, MAC10, TMP, P90, UMP45, SCOUT) (only for CTs) (+ 8/9/10) |
| 3 | If bot has more money than this value, it will not buy SMGs (MP5, MAC10, TMP, P90, UMP45, SCOUT) (only for Ts) (+ 8/9/10) |
| 4 | If bot has more money than this value, it can buy shotguns (M3, XM1014) |
| 5 | If bot has less money than this value, it cannot buy shotguns (M3, XM1014) |
| 6 | If bot has more money than this value, it can buy AWP, SG550, G3SG1, M249 |
| 7 | If bot has less money than this value, it cannot buy AWP, SG550, G3SG1, M249 |
| 8 | How much money bot leaves in stock at purchase of the primary weapon (Normal behavior) |
| 9 | How much money bot leaves in stock at purchase of the primary weapon (Rusher behavior) |
| 10 | How much money bot leaves in stock at purchase of the primary weapon (Careful behavior) |
| 11 | If bot has more money than this value, it can buy the shield |

### Example

```
Economics = 1550,2100,2100,4000,6000,7000,16000,1200,800,1100,3000
```

## Weapon Priorities

This table stores the Weapon Priorities of the Bots depending on Personality (it affects buying & picking up better weapons from the ground).

From left to right. Rightmost value is the most wanted bot weapon. Leftmost value is the worst weapon.

> **Note:** Knife should be the "worst" weapon in this table, otherwise things get messed up.

### Examples

```
PersonalityNormal = 00,02,01,04,05,06,03,12,10,24,25,13,11,08,07,22,23,20,21,09,19,15,17,18,14,16
PersonalityRusher = 00,02,04,05,01,06,03,24,25,22,23,20,10,12,13,07,08,21,11,09,15,19,17,18,16,14
PersonalityCareful = 00,02,01,04,05,06,03,07,08,12,10,13,11,09,18,17,15,19,16,14,20,22,25,23,24,21
```
