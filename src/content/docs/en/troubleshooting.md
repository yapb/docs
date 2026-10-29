---
title: "Troubleshooting"
description: "Fix the most common YaPB problems: bots not joining, missing graphs, menus, AMXX module, plugins."
---

Most problems fall into a few buckets. Work through the list that matches your symptom.

## Bots don't join the server

1. Type `yb version` in the server console. If the command is unknown, the bot is not installed correctly - redo [Installation](/docs/en/getting-started/installation/) (MetaMod plugin vs standalone `liblist.gam`).
2. Type `yb list`. If it is empty, check the quota: `yb_quota` must be above `0`.
3. If `yb_join_after_player` is `1` and no human is on the server, bots wait on purpose. Either join a team yourself or set it to `0`.
4. After a map change bots rejoin after `yb_join_delay` seconds (default `5`). Wait a little before concluding anything.
5. On a listen server, make sure you didn't cap the players with `maxplayers` so low that no slot is left.

## Bots join but stand still

- `yb_freeze_bots` must be `0`, `yb_dont_shoot` must be `0` (unless you set them on purpose).
- `yb_ignore_enemies 1` makes bots run objectives without fighting - intended for special setups only.

## No graph for the map

1. By default YaPB downloads a missing graph automatically (`yb_graph_url`) and, if that fails, builds one itself (`yb_graph_analyze_auto_start` is `1` by default). Both need a few round restarts and work best with a couple of bots in game.
2. Check what you have: `yb graph stats` and `yb graph fileinfo`.
3. If nothing appears, look at the console for download errors (no network, no TLS support in the build, or an empty `yb_graph_url`) and see [Graph Installation](/docs/en/waypointing/#graph-installation).
4. You can always waypoint the map yourself - see [Graph Editing](/docs/en/waypointing/).

## Bot menus won't open

- On a listen server press `=` (or whatever `yb_bind_menu_key` holds).
- On a dedicated server you need remote access: set `yb_password` and `yb_password_key` in the server console, then run `setinfo <key> <password>` in your game console. See [Bot Management on a Dedicated Server](/docs/en/configuring/botusage/#bot-management-on-a-dedicated-server).
- Graph commands additionally need `yb g acquire_editor` (and `yb g release_editor` when you are done).

## Scoreboard extras don't work (ping, avatars, fake players)

These need help from the game DLL. On a **dedicated** server set in `addons/yapb/conf/custom.cfg`:

```ini
EnableFakeBotFeatures = i'm confident for what i'm doing
```

then restart the server (custom.cfg applies on restart only). On a listen server it works out of the box. Details: `yb_enable_query_hook`, `yb_show_latency`, `yb_show_avatars`.

## AMXX module (`yapb_amxx`) won't load

1. `amxx modules` must list the `YaPB API` module as running. If it shows an error, open the AMXX logs - the module logs exactly why it failed.
2. Checklist: `yapb_amxx` is enabled in `modules.ini`; `yapb_amxx.dll` / `yapb_amxx_i386.so` sits in `addons/amxmodx/modules/`; the bot itself is installed at `addons/yapb/bin/` (the module loads it from there at runtime); `yapb.inc` matches the module version.
3. Full setup: [Scripting](/docs/en/scripting/).

## Chat AI stays silent

1. `amxx plugins` must show `yapb_chat_ai.amxx` running, and `amxx modules` must show **both** `yapb_amxx` and `easy_http`. The EasyHttp module comes from [AmxxEasyHttp releases](https://github.com/Next21Team/AmxxEasyHttp/releases) and is installed separately.
2. Check `yb_chat_ai_url`, `yb_chat_ai_model`, and `yb_chat_ai_api_key` (only needed for keyed endpoints).
3. Set `yb_chat_ai_debug 1`, reproduce, then read `addons/amxmodx/logs/yapb_chat_ai.log` - it logs the resolved config, block reasons, HTTP codes, and replies.
4. Remember the trigger rules: by default a human message must start with the bot's name (`yb_chat_ai_addressed 1`).

## Takeover doesn't trigger

1. The plugin needs **ReAPI** (hence ReHLDS + ReGameDLL) - without it the plugin neither compiles nor runs.
2. You must be dead and spectating a **teammate** bot in first-person (`eye`) or free chase (`chase`) mode, then press `N` (or `E` when `yb_takeover_use_key 1`).
3. VIP bots, already-controlled bots, and stale/dead bots can't be taken. Per-round limits come from `yb_takeover_max_uses`.
4. With `yb_takeover_log 1` the reasons land in `yapb_takeover.log`.

## Where to look for errors

- Server console output during map start.
- Bot logs: `addons/yapb/logs/`.
- AMXX logs: `addons/amxmodx/logs/` (module load errors, plugin runtime errors, `yapb_chat_ai.log`, `yapb_takeover.log` when enabled).
