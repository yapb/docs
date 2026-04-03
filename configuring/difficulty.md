# Bot Difficulty Configuration

You can fine-tune the bots thanks to the difficulty configuration file. It contains the values of reaction time, headshot and wallshot probabilities, recoil control values, and aim offset axes.

Each of these values is tied to each difficulty level.

The bots difficulty configuration file is located at `addons/yapb/conf/difficulty.cfg`.

## Format

```
Level = minReactionTime(s),maxReactionTime(s),headshotProbability,seenThruWallChance,heardThruWallChance,maxWeaponRecoil,aimError
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `minReactionTime` | Minimal time in seconds from when the bot first saw the enemy to when it can recognize it |
| `maxReactionTime` | Same as above, but upper cap of the limit |
| `headshotProbability` | The probability that the bot will aim at the head instead of body, if both body and head are visible |
| `seenThruWallChance` | Chance that the bot will attack the enemy if it believes that it is there and just saw it |
| `heardThruWallChance` | Chance that the bot will attack the enemy if it believes that it is there and just heard it |
| `maxWeaponRecoil` | Maximum weapon recoil to compensate by pausing fire |
| `aimError` | (x, y, z) offsets to add aim error to bot aiming |

## Example

```
Expert = 0.1, 0.2, 100, 90, 90, 21, 0.0, 0.0, 0.0
```
