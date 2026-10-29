---
title: "Custom Configuration File"
---

A custom config file that allows you to change some hard-coded things in the bot code.

It's located in `addons/yapb/conf/custom.cfg`.

:::note
All changes to this file take effect only on server restart.
:::

:::note
Keys may live either inside their section (as in the shipped config) or at the root level of the file -- both layouts are accepted.
:::

## Connectivity

| Setting | Default | Description |
|---------|---------|-------------|
| `CheckConnectivityHost` | `google.com:443` | Specifies the hostname the bot will attempt to connect to for checking network availability and enabling graph download/upload features. An optional `:port` suffix is supported (default 80), e.g. `google.com:443`. |

## Game

| Setting | Default | Description |
|---------|---------|-------------|
| `C4ModelName` | `c4.mdl` | Sets a custom name for the C4 model, for servers that replace the C4 model with their own. By default it's `c4.mdl` (the models/path is omitted), so if you need to use `models/mybomb/mybomb.mdl`, you should specify `mybomb/mybomb.mdl`. |
| `AMXParachuteCvar` | `sv_parachute` | Sets a custom CVAR name for parachute handling. There are various plugins that handle parachutes (AMX Parachute, AMX Parachute Lite, etc.), you can specify the needed CVAR here. |

## Mods

| Setting | Default | Description |
|---------|---------|-------------|
| `CustomCSDMSpawnPoint` | `view_spawn` | Sets a custom spawn point classname for CSDM mods that add custom spawn points other than `info_player_start` and `info_player_deathmatch`. So bots will be able to join the game without default spawn entities. |
| `CSDMDetectCvar` | `csdm_active` | Sets a CVAR to detect the CSDM mod if it is activated in the game. |
| `ZMDetectCvar` | `zp_delay,zp_on` | Sets CVARs to detect the Zombie mod. Multiple CVARs can be listed comma-separated; the mod is considered active if any of them exists on the server. |
| `ZMDelayCvar` | `zp_delay` | Sets a CVAR that deals with time before any game mode starts. |
| `ZMInfectedTeam` | `T` | Determines the team on which infected players are on. Valid values: `T`, `CT`. |

## Features

| Setting | Default | Description |
|---------|---------|-------------|
| `EnableFakeBotFeatures` | `no` | Decides if fake features (like a fake time, fake SID (avatar), fakeping) should be enabled within bot code on a dedicated server. By default it's off. To enable it you should provide a variable with: `i'm confident for what i'm doing` as the value. Its value doesn't affect the listen server. |
| `DisableLogFile` | `no` | Disables any writing activity to log files. All errors and warnings are just sent to the server console. |
| `DisableSpawnControl` | `no` | Disables enforcement of player spawn limits during bot creation and quota management, allowing the use of custom spawn editors. |
| `UnlockThinkFPS` | `no` | Allows to control the bot's think rate (tick rate) with the `yb_think_fps` CVAR. By default the bot's tick rate is locked to the internal value, and `yb_think_fps` is ignored. |

## Mode Walls

The `ModeWalls` section supports map-restricting plugins (e.g. AMXX "Mode 2x2"), which seal off parts of the map with wall entities when online is low.

| Setting | Default | Description |
|---------|---------|-------------|
| `ModeWallClassname` | `test_effect` | Classname of the wall entities the plugin spawns (default `test_effect`). Bots treat entities with this classname and solid bbox as blockers for pathfinding. |

## Bot

| Setting | Default | Description |
|---------|---------|-------------|
| `BlockedClientCommands` | `lastinv` | Comma or space separated list of client commands that bots must never be forced to execute. The default `lastinv` avoids a gamedll `SelectLastItem` crash on a stale weapon pointer. |

## Graph Database Endpoints

The `GraphDatabase` section holds the endpoints behind the `@aliases` of the `yb_graph_url` / `yb_graph_url_upload` CVARs (see [CVARs](/docs/en/configuring/cvars/)). Change them here to relocate the graph database without rebuilding the bot.

| Setting | Default | Description |
|---------|---------|-------------|
| `GraphGithubDownload` | `https://raw.githubusercontent.com/yapb/graph/refs/heads/master` | Download base behind `@github` of `yb_graph_url` (CDN raw over https). |
| `GraphRussiaDownload` | `https://sourcecraft.dev/api/file/yapb/graph` | Download base behind `@russia` of `yb_graph_url` (sourcecraft over https). |
| `GraphWorkersUpload` | `https://graph-worker.yapb.workers.dev` | Upload base behind `@workers` of `yb_graph_url_upload` (cloudflare worker over https). |
| `GraphRussiaWorker` | `https://d5d5lttn6kg3uqou32ei.g4vq2kuy.apigw.yandexcloud.net` | Upload base behind `@russia` of `yb_graph_url_upload` (yandex worker copy over https). |
| `GraphLegacyBase` | `http://yapb.jeefo.net` | Base behind `@http` / `@legacy` (legacy plain http server). |
| `GraphLegacyUpload` | `http://yapb.jeefo.net/upload` | Upload base used as a no-TLS fallback for `@workers` and `@russia`. |

Downloads append `graph/<map>.graph` to the base URL; uploads POST the graph file to the base URL as-is. Automatic collection is only available over https.
