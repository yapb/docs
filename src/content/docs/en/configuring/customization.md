---
title: "Customization"
---

## Chat Customization

You can create a new chat base for your language or change the existing one. Chat files are located in the `addons/yapb/conf/lang` folder and are named `**_chat.cfg`, where `**` is the language code (e.g. `en_chat.cfg`). The file for the language set in `yb_language` is loaded.

Bots can write chat messages depending on the situation: planting a bomb, killing an enemy, attacking teammates, etc.

:::note
If the chat config is missing or broken, bot chat is disabled automatically (`yb_chat` is reset to `0`).
:::

### Format

The file has a single root `Chat` block. Inside it, every chat section is a block with `raw` keyword — its lines are taken verbatim, one message per line. The order of messages is randomized by the bot itself.

```ini
Chat {
   raw Killed {
      %v, you're no match for me!
      Sorry, %v. You got in my way.
      That'll teach you, %v!
   }
}
```

### Placeholders

| Placeholder | Description |
|-------------|-------------|
| `%v` | Inserts the nickname of the last player killed by the bot |
| `%f` | Inserts the nickname of the top-fragging player |
| `%t` | Inserts the nickname of a random alive teammate |
| `%e` | Inserts the nickname of a random alive enemy |
| `%s` | Inserts the nickname of the player the bot is replying to (or the top-fragging player) |
| `%m` | Inserts the name of the current map |
| `%d` | Inserts the game name (`Counter-Strike`/`CS` or `Condition Zero`/`CZ`) |
| `%r` | Inserts the remaining round time in `mm:ss` format |
| `%g` | Inserts the author of the current graph file |

No more than six placeholders are substituted in a single message. Unknown markers are kept as-is.

### Chat Sections

| Section | Description |
|---------|-------------|
| `BombPlant` | Messages bots write after the bomb is planted |
| `Killed` | Messages bots write after killing an enemy. Use the `%v` placeholder to insert the nickname of the killed enemy |
| `DeadChat` | Messages bots write when they are dead or in spectator mode |
| `Welcome` | Messages bots write when they connect to the server |
| `TeamAttack` | Messages bots write when attacked by a teammate |
| `TeamKill` | Messages bots write when they killed a teammate |
| `Unknown` | Fallback answers used when no reply matched the chat keyword (see `Replies` below) |

Example — when the bot kills the enemy with the nickname "John Smith", it can write "You're dead John Smith!" using the line `You're dead %v!` from the `Killed` section.

### Replies

The `Replies` block sets the messages that bots write in answer to a player's chat when it contains a known keyword. Every reply group is a block (the name is arbitrary) with one or more `key = "..."` entries and an anonymous `raw` block holding the replies verbatim.

```ini
Chat {
   Replies {
      AIMBOT {
         key = "AIMBOT"
         key = "WALLHACK"

         raw {
            %s, are you cheating?
            Aimbots are cool, shut up %s!
            I saw %f peeking through walls. Coincidence? I think not.
         }
      }

      AGAIN {
         key = " AGAIN "

         raw {
            %s, things are always repeating - aren't they?
            Here we go again. Deja vu.
         }
      }
   }
}
```

This is how it will look in the game:

```
John Smith: Bla bla bla aimbot
Ricardo Milos: John Smith, are you cheating?

Keanu Reeves: Bla bla bla again bla bla...
Tommy Vercetti: Here we go again. Deja vu.
```

Bots can use these replies at random. Keywords are matched case-insensitively against the chat text; enclose a key with spaces (e.g. `" AGAIN "`) to match it as a whole word.

:::note
Write the keys in capital letters — they are stored uppercase. In players' messages they can be written in any format.
:::

---

## Voice Chat Customization

YaPB supports voice chat as well as ZBot. All paths for YaPB voice chat audio files are in the file: `chatter.cfg` which is located in the folder `addons/yapb/conf`.

:::note
Chatter is only used when `yb_radio_mode` is set to `2`. All changes to this file take effect only on server restart.
:::

### Format

The file has a single root `Chatter` block. Every event inside it is a block named after the chatter event, holding sound file names (without the `sound/` prefix and extension) one per line. A comma-separated scalar value is also accepted:

```ini
Chatter {
   RewritePath = sound/radio/bot

   CoverMe {
      cover_me
      cover_me2
   }

   EnemyDown = enemy_down, enemy_down2
}
```

`RewritePath` sets the folder where the voice chat audio files are located. By default it is `sound/radio/bot`. It can be placed inside or outside the `Chatter` block.

Missing sound files are reported to the console. If more than ten files are missing, chatter is disabled and bots fall back to standard radio (`yb_radio_mode` is reset to `1`).

### Chatter Events

| Event | Description |
|-------|-------------|
| `CoverMe` | "Cover Me!" radio command |
| `YouTakePoint` | "You Take the Point." radio command |
| `HoldPosition` | "Hold This Position." radio command |
| `RegroupTeam` | "Regroup Team." radio command |
| `FollowMe` | "Follow Me." radio command |
| `TakingFire` | "Taking Fire...Need Assistance!" radio command |
| `GoGoGo` | "Go go go!" radio command |
| `Fallback` | "Team, fall back!" radio command |
| `StickTogether` | "Stick together, team." radio command |
| `GetInPosition` | "Get in position and wait for my go." radio command |
| `StormTheFront` | "Storm the Front!" radio command |
| `ReportTeam` | "Report in, team." radio command |
| `Affirmative` | "Affirmative./Roger that." radio command |
| `EnemySpotted` | "Enemy spotted." radio command |
| `NeedBackup` | "Need backup." radio command |
| `SectorClear` | "Sector clear." radio command |
| `InPosition` | "I'm in position." radio command |
| `ReportingIn` | "Reporting in." radio command |
| `ShesGonnaBlow` | "Get out of there, it's gonna blow!" radio command |
| `Negative` | "Negative." radio command |
| `EnemyDown` | "Enemy down." radio command |
| `DiePain` | Bot death sounds |
| `GoingToPlantBomb` | Bot says it's going to plant a bomb |
| `GoingToGuardVIPSafety` | Bot says that it is going to guard the VIP escape zone |
| `RescuingHostages` | Bot says that it is rescuing hostages |
| `TeamKill` | Bot reaction to killing a teammate |
| `GuardingEscapeZone` | Bot says that it is guarding the terrorist escape zone |
| `GuardingVipSafety` | Bot says that it is guarding the VIP escape zone |
| `PlantingC4` | Bot says it's planting a bomb |
| `InCombat` | Bot says that it is fighting with the enemy right now |
| `SeeksEnemy` | Bot says that it is waiting for the enemy |
| `Nothing` | Bot says that there is no one in this sector |
| `UseHostage` | Bot says that it took a hostage |
| `WonTheRound` | Bot's reaction to win |
| `QuicklyWonTheRound` | Bot's reaction to a quick win |
| `NoEnemiesLeft` | Bot says that there are no more remaining enemies |
| `FoundBombPlace` | Bot says that it found a place with a planted bomb |
| `WhereIsTheBomb` | Bot asks where the bomb is |
| `DefendingBombSite` | Bot says it's defending the bomb site |
| `BarelyDefused` | Bot's reaction to a barely defused bomb |
| `NiceShotCommander` | Bot's reaction to a nice shot by a player |
| `SpotTheBomber` | Bot says that it noticed a bomber |
| `VIPSpotted` | Bot says that it noticed the VIP |
| `FriendlyFire` | Bot reaction when attacked by a teammate |
| `GotBlinded` | Bot reaction to flashbang |
| `GuardingPlantedC4` | Bot says that it guards the planted C4 |
| `DefusingC4` | Bot says that it is defusing C4 |
| `FoundC4` | Bot says that it found the dropped C4 |
| `ScaredEmotion` | Bot reaction when it met several enemies and there are no teammates nearby |
| `HeardEnemy` | Bot says that it heard the enemy |
| `SpottedOneEnemy` | Bot says that it's spotted one enemy |
| `SpottedTwoEnemies` | Bot says that it's spotted two enemies |
| `SpottedThreeEnemies` | Bot says that it's spotted three enemies |
| `TooManyEnemies` | Bot says that it's spotted a lot of enemies (four or more) |
| `SniperWarning` | Bot warns about sniper |
| `SniperKilled` | Bot reports that it killed a sniper |
| `OneEnemyLeft` | Bot says that there is only one enemy left |
| `TwoEnemiesLeft` | Bot says that there are two enemies left |
| `ThreeEnemiesLeft` | Bot says that there are three enemies left |
| `NiceShotPall` | Bot's reaction to a nice shot from another bot |
| `GoingToGuardHostages` | Bot says that it is going to guard the hostages |
| `GoingToGuardDroppedBomb` | Bot says that it is going to guard the dropped bomb |
| `OnMyWay` | Bot says it will be here soon |
| `LeadOnSir` | Bot tells the player that it will follow him |
| `PinnedDown` | Bot asks for help from teammates when they are nearby |
| `GottaFindTheBomb` | Bot says that it is going to find the bomb |
| `YouHeardTheMan` | Bot responds to phrases from `NewRound` (currently not used) |
| `LostCommander` | Bot says that the commander (player) was killed (currently not used) |
| `NewRound` | Bot talks about the beginning of the round (currently not used) |
| `BehindSmoke` | Bot says that it is behind the smoke (currently not used) |
| `BombSiteSecured` | Bot says that it secured the bomb site |
| `GoingToCamp` | Bot says that it is going to camp (guard an area) |
| `Camp` | Bot says that it's camping |
| `OnARoll` | Bot brags about killing a large number of enemies in a small amount of time |

### Example chatter.cfg

```ini
Chatter {
   RewritePath = sound/radio/bot

   CoverMe {
      cover_me
      cover_me2
   }

   TakingFire {
      taking_fire_need_assistance2
      i_could_use_some_help
      i_could_use_some_help_over_here
      help
      need_help
      need_help2
      im_in_trouble
   }

   Affirmative = affirmative, roger_that, me_too, ill_come_with_you, ill_go_with_you, ill_go_too, i_got_your_back, i_got_your_back2, im_with_you, sounds_like_a_plan, good_idea

   SectorClear {
      clear
      clear2
      clear3
      area_clear
      all_clear_here
      nothing_moving_over_here
      all_quiet
      nothing
   }

   PlantingC4 = planting_the_bomb, planting

   DefusingC4 {
      defusing
      defusing_bomb
      defusing_bomb_now
   }
}
```
