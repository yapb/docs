---
title: "Weapons Configuration"
---

Main config where most stuff regarding weapon handling is defined. The filename is `weapon.cfg` and is located in the `addons/yapb/conf` directory.

Weapons are referenced by name (`Knife`, `USP`, `Glock18`, `Deagle`, `P228`, `Elite`, `FiveSeven`, `M3`, `XM1014`, `MP5`, `TMP`, `P90`, `MAC10`, `UMP45`, `AK47`, `SG552`, `M4A1`, `Galil`, `Famas`, `AUG`, `Scout`, `AWP`, `G3SG1`, `SG550`, `M249`, `Shield`), so you never need to know the internal weapon numbering.

:::note
All changes to this file take effect only on server restart.
:::

## Team Availability Tables

The `Standard` block specifies which team is allowed to buy a weapon on a regular map. The `AS` block does the same for `as_` (VIP assassination) maps. Remember that some weapons are team-specific and can't be bought by another team.

Possible values:

- `banned` — disallow buying for any team
- `terrorist` — Terrorist team only (alias: `t`)
- `ct` — CT team only
- `both` — can be bought by both teams

Only the weapons you list here are overridden; the rest keep their defaults from `gamedef.cfg`.

```ini
// Standard Weapon Tab for CS & DE Maps
Standard {
   Knife = banned
   USP = terrorist
   Deagle = both
   AK47 = terrorist
   M4A1 = ct
   AWP = both
}

// Weapon Tab for AS Maps
AS {
   Knife = banned
   Deagle = both
   M3 = ct
   AK47 = terrorist
   M4A1 = ct
}
```

## Grenade Buying Percentage

Grenade buying percentage, per grenade type.

```ini
Grenades {
   HE = 98
   Flash = 75
   Smoke = 60
}
```

## Bot Economics

Money thresholds that control what bots are willing to buy.

```ini
Economy {
   primary = 1550          // bot needs at least this to consider buying a primary weapon
   smgCT = 2100            // above this amount CTs stop buying SMGs (MP5, MAC10, TMP, P90, UMP45, Scout)
   smgT = 2100             // above this amount Ts stop buying SMGs
   shotgun = 4000          // above this amount shotguns (M3, XM1014) become available
   shotgunMax = 6000       // above this amount shotguns are skipped in favor of better weapons
   heavy = 7000            // above this amount heavy weapons (AWP, SG550, G3SG1, M249) become available
   heavyMax = 16000        // above this amount heavy weapons are always affordable
   prostockNormal = 1200   // money reserved (prostock) for the Normal personality
   prostockRusher = 800    // money reserved (prostock) for the Rusher personality
   prostockCareful = 1100  // money reserved (prostock) for the Careful personality
   shield = 3000           // above this amount the shield becomes available
}
```

## Semi-Auto Fire Delays

Final delay between trigger pulls is `base + random (min[slot], max[slot])`. Slot index is `abs (skill / 20 - 5)`: `0` = expert ... `5` = noob. Pistols cycle much faster than pump shotguns / bolt snipers, hence the split tables. The game itself enforces the real refire rate, so faster values here never overclock shotguns/snipers, they only unthrottle pistols.

```ini
FireDelay {
   pistolBase = 0.05     // base delay added to every pistol shot
   pistolMin = 0.02, 0.04, 0.06, 0.08, 0.12, 0.16
   pistolMax = 0.08, 0.10, 0.13, 0.16, 0.20, 0.26
   otherBase = 0.10      // base delay for other semi-auto weapons (shotguns, snipers)
   otherMin = 0.0, 0.1, 0.2, 0.3, 0.4, 0.6
   otherMax = 0.1, 0.2, 0.3, 0.4, 0.5, 0.7
   deagleExtra = 0.08    // extra delay for deagle's heavier cycle
}
```

## Weapon Priorities

These tables store the weapon priorities of the bots depending on personality (it affects buying and picking up better weapons from the ground).

Weapons are listed from most preferred to least preferred. Every weapon must be listed exactly once, otherwise an error is logged and defaults are used.

:::note
Knife should be the "worst" (last) weapon in these tables, otherwise things get messed up.
:::

```ini
Preferences {
   Normal {
      M4A1, AK47, Famas, Galil, SG552, AUG,
      MP5, AWP, Scout, SG550, G3SG1,
      M3, XM1014, P90, UMP45,
      Shield, M249, TMP, MAC10,
      Deagle, FiveSeven, Elite, P228,
      USP, Glock18, Knife
   }

   Rusher {
      AK47, M4A1, Famas, Galil, AUG, SG552,
      MP5, P90, AWP,
      XM1014, M3,
      UMP45, MAC10, TMP,
      Scout, SG550, G3SG1, Shield, M249,
      Deagle, FiveSeven, USP,
      Elite, P228,
      Glock18, Knife
   }

   Careful {
      AWP, M249, SG550, Shield, G3SG1, Scout,
      AK47, M4A1, AUG, SG552, Galil, Famas,
      MP5, P90, UMP45, TMP, MAC10, XM1014, M3,
      Deagle, FiveSeven, Elite, P228,
      USP, Glock18, Knife
   }
}
```

Individual weapons can also be forbidden via the `yb_restricted_weapons` CVAR (semicolon-separated buy-menu aliases, e.g. `awp;g3sg1`).

## Game Definitions (`gamedef.cfg`)

The `gamedef.cfg` file in the same directory holds data shared by the weapon logic: sound classification templates and the built-in weapon definitions (class names, prices, buy-menu positions, team availability). The `Standard`/`AS` tables in `weapon.cfg` override the team availability from here.

:::note
All changes to this file take effect only on game restart.
:::

### Sound Templates (`HearableSounds`)

Every block name is a sound sample prefix (relative to the `sound/` directory); the first matching prefix wins, so more specific entries go before generic ones. This section fully replaces the built-in defaults when present.

Values:

- `flags` — noise classification (one or more, comma separated): `HitFall`, `Pickup`, `Zoom`, `Ammo`, `Hostage`, `Broke`, `Door`, `Defuse`, `SGDetonate`, `WeaponFire`, `Footstep`, `Explosion`, `Ricochet`, `Misc`
- `radius` — base hear radius, in units (scaled by volume/attenuation)
- `duration` — how long the sound stays in bot's memory, in seconds

```ini
HearableSounds {
   "weapons/c4_explode" {
      flags = Defuse
      radius = 4096.0
      duration = 4.00
   }

   // weapon fire catch-all (after all other weapons/ overrides)
   "weapons/" {
      flags = WeaponFire
      radius = 2048.0
      duration = 2.00
   }
}
```

### Weapon Definitions (`Weapons`)

Every block name is a weapon id (`Knife`, `USP`, `Glock18`, `Deagle`, `P228`, `Elite`, `FiveSeven`, `M3`, `XM1014`, `MP5`, `TMP`, `P90`, `MAC10`, `UMP45`, `AK47`, `SG552`, `M4A1`, `Galil`, `Famas`, `AUG`, `Scout`, `AWP`, `G3SG1`, `SG550`, `M249`, `Shield`); unknown ids are reported and ignored. Missing values are inherited from the built-in defaults, so partial overrides are allowed. The order of weapons inside this section doesn't matter, entries are matched by id.

Values:

- `name` — classname used to select the weapon
- `model` — `p_` model name to separate cs weapons
- `alias` — buy-menu alias of the weapon, used by the weapon restrictions
- `fullName` — full weapon name for display (e.g. `HK USP .45 Tactical`)
- `price` — price when buying
- `minPrimaryAmmo` — minimum primary ammo to buy
- `teamStandard` — team availability on standard maps: `none`, `terrorist`, `ct`, `both`
- `teamAS` — team availability on `as_` maps
- `buyGroup` / `buySelect` — group and item in the buy menu (standard maps)
- `buySelectT` / `buySelectCT` — item to select in the v1.6 buy menu (terrorists / CTs)
- `penetratePower` — wall penetration power
- `maxClip` — max ammo in clip
- `type` — weapon class: `melee`, `pistol`, `shotgun`, `zoomrifle`, `rifle`, `smg`, `sniper`, `heavy`
- `primaryFireHold` — hold down the primary fire button to use (`yes`/`no`)

```ini
Weapons {
   Deagle {
      name = weapon_deagle
      alias = deagle
      fullName = Desert Eagle .50AE
      price = 650
      teamStandard = ct
      teamAS = ct
      type = pistol
   }
}
```

### Welcome Sentences (`Sentences`)

Sentences spoken by the bots (through the `speak` console command) when a listenserver player connects. One sentence per line; this section fully replaces the built-in defaults when present.

```ini
Sentences {
   hello user,communication is acquired
   your presence is acknowledged
}
```
