---
title: "Bot CVARs"
---

Full reference of all bot console variables (CVARs).

## General

### yb_aim_trace_consider_glass

Bots will consider glass when deciding to shoot enemies. Required for very special maps only.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `0` |

### yb_attack_monsters

Allows or disallows bots to attack monsters. Useful for mods like Halloween Mod.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `0` |

### yb_autokill_delay

Specifies amount of time in seconds when bots will be killed if no humans left alive.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `90` |
| Default | `0` |

### yb_autovacate

If not zero, bots will automatically leave to make room for human players when they join the server.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `1` |

### yb_autovacate_keep_slots

How many slots the autovacate feature should keep for human players.

| Property | Value |
|----------|-------|
| Min | `1` |
| Max | `8` |
| Default | `1` |

### yb_avoid_grenades

Allows bots to partially avoid grenades.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `1` |

### yb_bind_menu_key

Binds the specified key to open the bot menu.

| Property | Value |
|----------|-------|
| Default | `=` |

### yb_botbuy

If not zero, bots will be able to buy weapons and inventory.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `1` |

### yb_bots_kill_on_endround

Allows the use of classic bot kill when issuing the end-round command in menus, instead of the gamedll endround.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `0` |

### yb_botskin_t

Specifies the bots wanted skin for Terrorists team.

| Value | Skin |
|-------|------|
| `0` | Any class |
| `1` | Phoenix Connexion |
| `2` | Elite Crew |
| `3` | Arctic Avengers |
| `4` | Guerilla Warfare |
| `5` | Midwest Militia **(Condition Zero only!)** |

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `5` |
| Default | `0` |

### yb_botskin_ct

Specifies the bots wanted skin for Counter-Terrorists team.

| Value | Skin |
|-------|------|
| `0` | Any class |
| `1` | Seal Team 6 |
| `2` | GSG-9 |
| `3` | SAS |
| `4` | GIGN |
| `5` | Spetsnaz **(Condition Zero only!)** |

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `5` |
| Default | `0` |

### yb_breakable_health_limit

Specifies the maximum health of a breakable object that the bot will consider destroying.

| Property | Value |
|----------|-------|
| Min | `1` |
| Max | `3000` |
| Default | `500` |

### yb_camping_allowed

If not zero, bots will try to pick up camp points as their goals and will camp there for some time based on their personality.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `1` |

### yb_camping_time_min

Lower bound of time from which time for camping is calculated.

| Property | Value |
|----------|-------|
| Min | `5` |
| Max | `90` |
| Default | `15` |

### yb_camping_time_max

Upper bound of time until which time for camping is calculated.

| Property | Value |
|----------|-------|
| Min | `15` |
| Max | `120` |
| Default | `45` |

### yb_chat

If not zero, bots will be able to chat to each other and players while they are dead.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `1` |

### yb_chat_percent

Bot chances to send random dead chat when killed.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `100` |
| Default | `30` |

### yb_check_darkness

Allows or disallows bot to check the environment for darkness, thus allows or not to use flashlights or NVG.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `1` |

### yb_check_enemy_invincibility

Enables or disables checking enemy invincibility. Useful for some mods.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `0` |

### yb_check_enemy_rendering

Allows checking enemy rendering before taking a victim. This is useful to enable when you play CSDM mod with spawn protection enabled. Bots will not try to select just-spawned players, as they are not vulnerable.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `0` |

### yb_csdm_mode

Enables or disables CSDM / FFA mode for bots.

| Value | Mode |
|-------|------|
| `0` | CSDM / FFA mode is auto-detected |
| `1` | CSDM mode enabled, FFA disabled |
| `2` | CSDM and FFA mode enabled |
| `3` | CSDM and FFA mode disabled |

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `3` |
| Default | `0` |

### yb_chatter_path

Points to location where chatter (from official csbot for example) is located.

| Property | Value |
|----------|-------|
| Default | `sound/radio/bot` |

### yb_debug

If not zero, enables useful messages about bot states. Not required for end users.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `4` |
| Default | `0` |

### yb_debug_goal

Forces all alive bots to build a path and go to the specified graph node.

| Property | Value |
|----------|-------|
| Min | `-1` |
| Max | `4096` |
| Default | `-1` |

### yb_destroy_breakables_around

Allows bots to destroy breakables around them, even without touching them.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `1` |

### yb_difficulty

Specifies the difficulty of all bots. Changing at runtime will affect already created bots.

| Value | Difficulty |
|-------|-----------|
| `0` | Newbie |
| `1` | Average |
| `2` | Normal |
| `3` | Professional |
| `4` | Godlike |

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `4` |
| Default | `3` |

### yb_difficulty_auto_balance_interval

Interval in which bots will balance their difficulty.

| Property | Value |
|----------|-------|
| Min | `30` |
| Max | `240` |
| Default | `30` |

### yb_difficulty_min

Lower bound of random difficulty on bot creation. Only affects newly created bots. `-1` means `yb_difficulty` only is used.

| Property | Value |
|----------|-------|
| Min | `-1` |
| Max | `4` |
| Default | `-1` |

### yb_difficulty_max

Upper bound of random difficulty on bot creation. Only affects newly created bots. `-1` means `yb_difficulty` only is used.

| Property | Value |
|----------|-------|
| Min | `-1` |
| Max | `4` |
| Default | `-1` |

### yb_difficulty_auto

Enables each bot to balance its own difficulty based on the KD-ratio of the team.

| Value | Behavior |
|-------|----------|
| `0` | Difficulty auto-balancing is disabled |
| `1` | All bots balance their difficulty |
| `2` | Only bots in the team with human players balance their difficulty (bot-only team stays at configured difficulty) |

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `2` |
| Default | `0` |

### yb_display_welcome_text

Specifies if the bot DLL will display welcome text when adding bots.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `1` |

### yb_display_menu_text

Enables or disables display of menu text when players ask for a menu. Useful only for Android.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `1` |

### yb_dont_shoot

If enabled, bots are not allowed to press the attack button, thus forbidding them from shooting.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `0` |

### yb_economics_disrespect_percent

Allows bots to ignore the economics and buy weapons with disrespect of it.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `100` |
| Default | `25` |

### yb_economics_rounds

If not zero, bots will use "team" economics. If more than 70% of players don't have money to buy their preferred weapon, no-one buys anything to save money for the next round. This usually causes bots to run with default pistols on the first round.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `1` |

### yb_enable_bullet_spread

Enables or disables bullet spread for bots on servers running without metamod.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `0` |

### yb_enable_fake_steamids

Allows or disallows bots to return a fake Steam ID.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `0` |

### yb_enable_query_hook

Enables fake server query responses that show bots as real players in the server browser.

:::note
If you run bots on a dedicated server, make sure you have `EnableFakeBotFeatures` enabled in `custom.cfg` for this feature to work.
:::

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `0` |

### yb_first_human_restart

Restart the game if the first human player joins a bot game.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `0` |

### yb_freeze_bots

If not zero, bots think the function is paused and bots stay at the place where they were before activating this CVAR.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `0` |

### yb_fun_mode

Enables classic podbot fun modes for everyone on the server.

| Value | Mode |
|-------|------|
| `imsober` | Normal gameplay (fun modes off) |
| `off` | Fun modes off |
| `tronisback` | Tron mode |
| `itsnewyear` | New Year mode |
| `imhaunted` | Haunted mode |
| `itstoodark` | Darkness mode |
| `stonedagain` | Stoned mode |
| `imonmars` | Mars (low gravity) mode |

| Property | Value |
|----------|-------|
| Default | `imsober` |

### yb_graph_analyze_auto_save

Automatically saves the analysis results to a graph file and adds bots again.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `1` |

### yb_graph_analyze_auto_start

Starts the map auto-analyzer if the graph is not present in the local storage or database.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `1` |

### yb_graph_analyze_clean_paths_on_finish

Specifies if the analyzer should clean unnecessary paths upon finishing.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `1` |

### yb_graph_analyze_distance

Specifies the minimum distance to keep nodes from each other.

| Property | Value |
|----------|-------|
| Min | `42` |
| Max | `128` |
| Default | `64` |

### yb_graph_analyze_fps

Specifies the FPS at which the analyzer process runs. This keeps the game from freezing during analysis.

| Property | Value |
|----------|-------|
| Min | `25` |
| Max | `99` |
| Default | `30` |

### yb_graph_analyze_mark_goals_on_finish

Specifies if the analyzer should mark nodes as map goals automatically upon finish.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `1` |

### yb_graph_analyze_max_jump_height

Specifies the max jump height to test if the next node will be unreachable.

| Property | Value |
|----------|-------|
| Min | `44` |
| Max | `64` |
| Default | `44` |

### yb_graph_analyze_optimize_nodes_on_finish

Specifies if the analyzer should merge some near-placed nodes with many connections together.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `1` |

### yb_graph_auto_collect_db

Allows the bot to scan the `graph` folder and upload every `.graph` file to the database if they are not there. This is done in a separate thread and does not block the server process.

:::note
It works only at server startup, not at map change. Also it does not work on the currently started map.
:::

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `1` |

### yb_graph_auto_save_count

Every N graph nodes placed on the map, the graph will be saved automatically (without checks). If you want to disable autosave, set this CVAR to `0`.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `4096` |
| Default | `15` |

### yb_graph_draw_distance

Maximum distance to draw graph nodes from the editor viewport.

| Property | Value |
|----------|-------|
| Min | `64` |
| Max | `3072` |
| Default | `400` |

### yb_graph_fixcamp

Specifies whether the bot should not 'fix' camp directions of camp waypoints when loading old PWF format.

:::note
This option was made to fix camp directions when using waypoints from PODBot 2.5, old YaPB versions or other PODBot clones that do not allow setting a horizontal camp direction. If you are using PWF waypoints from PODBot 3.0, this CVAR should be disabled, as it can break the directions of the camp nodes.
:::

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `0` |

### yb_graph_slope_height

Determines the maximum slope height change between the current and next node to consider the current link as a jump link. Only for analyzer.

| Property | Value |
|----------|-------|
| Min | `18` |
| Max | `45` |
| Default | `24` |

### yb_graph_url

Specifies the base URL from which bots download a missing graph. The `graph/<map>.graph` path is appended automatically. Set to empty to disable downloads.

Allowed values: `@github`, `@russia`, `@http` (or `@legacy`), or any full base URL.

- `@github` -- CDN raw download over https (unavailable on builds without TLS)
- `@russia` -- sourcecraft download over https, for regions with github issues (unavailable on builds without TLS)
- `@http` -- legacy server over plain http

The endpoints behind the aliases can be remapped in `custom.cfg`, see [Custom Configuration File](/docs/en/configuring/custom-config/).

| Property | Value |
|----------|-------|
| Default | `@github` |

### yb_graph_url_upload

Specifies the base URL to which bots upload graph files. The file is POSTed to the base URL as-is. Set to empty to disable uploads.

Allowed values: `@workers`, `@russia`, `@http` (or `@legacy`), or any full base URL.

- `@workers` -- cloudflare worker over https (falls back to `@http` on builds without TLS)
- `@russia` -- yandex worker copy over https (falls back to `@http` on builds without TLS)
- `@http` -- legacy server over plain http

Automatic graph collection is requested from the server root and requires https, otherwise it's skipped.

The endpoints behind the aliases can be remapped in `custom.cfg`, see [Custom Configuration File](/docs/en/configuring/custom-config/).

| Property | Value |
|----------|-------|
| Default | `@workers` |

### yb_grenadier_mode

If enabled, bots will not apply throwing conditions on grenades.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `0` |

### yb_has_team_semiclip

When enabled, bots will not try to avoid teammates on their way. Assuming that some semiclip plugins are in use.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `0` |

### yb_ignore_cvars_on_changelevel

Comma-separated list of bot CVARs to ignore on changelevel.

Bots read `yapb.cfg` every changelevel, and the values of bot CVARs are overwritten with those located in the config. This CVAR allows the server admin to ignore values of specified CVARs from `yapb.cfg` if they were changed by hand from the server console.

For example: Server started with `yb_quota` set to `10` in `yapb.cfg` and `yb_quota` is specified in `yb_ignore_cvars_on_changelevel`. Time passes, the server admin decides that `yb_quota` should be set to `12` and sets it via the server console. Next time the server changes the map, the value of `yb_quota` will not be changed while reading `yapb.cfg` and will stay `12`.

If you want to disable ignoring reading CVARs from `yapb.cfg`, leave the value empty: `yb_ignore_cvars_on_changelevel ""` in `yapb.cfg`.

| Property | Value |
|----------|-------|
| Default | `yb_quota,yb_autovacate` |

### yb_ignore_enemies

If not zero, bots will run all over the map doing goals but will not search for enemies.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `0` |

### yb_ignore_enemies_after_spawn_time

Makes bots ignore enemies for a specified time in seconds on a new round. Useful for Zombie Plague mods.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `540` |
| Default | `0` |

### yb_ignore_map_prefix_game_mode

If enabled, bots will not apply game modes based on map name prefix (fy_ and ka_ specifically).

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `0` |

### yb_ignore_objectives

Allows or disallows bots to do map objectives, i.e. plant/defuse bombs, and save hostages.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `0` |

### yb_jasonmode

If not zero, bots will use only knives while fighting against enemies. This also disables buying.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `0` |

### yb_join_after_player

If not zero, bots will join the server only when some human player has already joined the team.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `0` |

### yb_join_team

Forces all bots to join the team specified in this CVAR.

| Property | Value |
|----------|-------|
| Valid values | `ct`, `t`, `any` |
| Default | `any` |

### yb_join_delay

Specifies after how many seconds bots should start to join the game after the changelevel.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `30` |
| Default | `5` |

### yb_kick_after_player_connect

Kick the bot immediately when a human player joins the server (`yb_autovacate` must be enabled).

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `1` |

### yb_language

Sets the bot language for menus, names, chat and messages.

| Property | Value |
|----------|-------|
| Valid values | `en`, `ru`, `de`, `chs`, `cht` |
| Default | `en` |

### yb_max_nodes_for_predict

Maximum number for path length to predict the enemy.

| Property | Value |
|----------|-------|
| Min | `15` |
| Max | `256` |
| Default | `22` |

### yb_move_during_throw

Allows bots to keep moving while throwing grenades. Unset by default (bots stop to throw).

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `-` |

### yb_name_prefix

This CVAR contains a string that will be prepended to every added bot name. Something like a clantag. By default this value is not set.

### yb_object_destroy_radius

The radius in which the bot destroys breakables around it when not touching them.

| Property | Value |
|----------|-------|
| Min | `64` |
| Max | `1024` |
| Default | `400` |

### yb_object_pickup_radius

The radius in which the bot searches the world for new objects, items, and weapons.

| Property | Value |
|----------|-------|
| Min | `64` |
| Max | `1024` |
| Default | `450` |

### yb_password_key

Specifies the password key for the `setinfo` command to gain remote control to the `yb` command and bot menus.

| Property | Value |
|----------|-------|
| Default | `_ybpw` |

### yb_password

Specifies the actual password for the `setinfo` command to gain remote control to the `yb` command and bot menus.

To gain access to bot commands remotely, the user should open the console and enter `setinfo key password`, where `key` is the value from `yb_password_key` and `password` is the value from `yb_password`.

By default this value is not set.

### yb_path_astar_post_smooth

Enables post-smoothing for A*. Reduces zig-zags on paths at the cost of some CPU cycles.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `0` |

### yb_path_dijkstra_simple_distance

Use simple distance path calculation instead of running a full Dijkstra path cycle. Used only when Floyd matrices are unavailable due to memory limits.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `1` |

### yb_path_floyd_memory_limit

Limit maximum Floyd-Warshall memory (megabytes). Use Dijkstra if memory exceeds this limit.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `32` |
| Default | `6` |

### yb_path_heuristic_mode

Selects the heuristic function mode. For debug purposes only.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `4` |
| Default | `0` |

### yb_path_turn_penalty

Penalty weight for sharp turns in pathfinding (`0` = off, higher = smoother paths).

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `2` |
| Default | `0.5` |

### yb_pickup_ammo_and_kits

Allows bots to pick up mod items like ammo, health kits and suits.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `0` |

### yb_pickup_best

Allows or disallows bots to pick up the best weapons. (Disabling can be useful for some mods with non-pickable weapons.)

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `1` |

### yb_pickup_custom_items

Allows or disallows bots to pick up custom items.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `0` |

### yb_ping_base_min

Lower bound for base bot ping shown in scoreboard. Affects only newly created bots.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `100` |
| Default | `5` |

### yb_ping_base_max

Upper bound for base bot ping shown in scoreboard. Affects only newly created bots.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `100` |
| Default | `20` |

### yb_ping_count_real_players

Count player pings when calculating the average ping for bots. If not, a random ping is chosen for bots.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `1` |

### yb_ping_updater_interval

Interval in seconds at which the fake ping gets updated in the scoreboard.

| Property | Value |
|----------|-------|
| Min | `0.1` |
| Max | `10` |
| Default | `1.25` |

### yb_preferred_personality

Sets the default personality when creating bots with quota management. If `none` is set, random personality is chosen.

| Property | Value |
|----------|-------|
| Valid values | `none`, `normal`, `careful`, `rusher` |
| Default | `none` |

### yb_quota

Determines the total number of bots in the game.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `32` |
| Default | `9` |

### yb_quota_mode

Determines the type of how `yb_quota` works.

| Value | Behavior |
|-------|----------|
| `fill` | The server will adjust bots to keep N players in the game, where N is `yb_quota` |
| `match` | The server will maintain a 1:N ratio of humans to bots, where N is `yb_quota` |
| `normal` | This variable does not affect `yb_quota` |

| Property | Value |
|----------|-------|
| Default | `normal` |

### yb_quota_match

Determines the total number of bots in the game when `yb_quota_mode` is set to `match`, i.e. for every human, N bots join.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `32` |
| Default | `0` |

### yb_radio_mode

Specifies the way bots talk to each other and the player.

| Value | Mode |
|-------|------|
| `0` | Bots will not communicate at all |
| `1` | Bots will use only the radio |
| `2` | Bots will use chatter |

:::note
Chatter will be used only if the bot finds valid wave files in the directory specified in `yb_chatter_path`.
:::

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `2` |
| Default | `2` |

### yb_random_knife_attacks

Allows or disallows the ability for random knife attacks when the bot is rushing and no enemy is nearby.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `1` |

### yb_restricted_weapons

A list of individual weapons that are restricted for bots to buy. Separated by semicolon.

The list of weapons for Counter-Strike 1.6:

| Weapon ID | Weapon Name |
|-----------|-------------|
| `usp` | HK USP .45 Tactical |
| `glock` | Glock18 Select Fire |
| `deagle` | Desert Eagle .50AE |
| `p228` | SIG P228 |
| `elite` | Dual Beretta 96G Elite |
| `fn57` | FN Five-Seven |
| `m3` | Benelli M3 Super90 |
| `xm1014` | Benelli XM1014 |
| `mp5` | HK MP5-Navy |
| `tmp` | Steyr Tactical Machine Pistol |
| `p90` | FN P90 |
| `mac10` | Ingram MAC-10 |
| `ump45` | HK UMP45 |
| `ak47` | Automat Kalashnikov AK-47 |
| `galil` | IMI Galil |
| `famas` | GIAT FAMAS |
| `sg552` | Sig SG-552 Commando |
| `m4a1` | Colt M4A1 Carbine |
| `aug` | Steyr Aug |
| `scout` | Steyr Scout |
| `awp` | AI Arctic Warfare/Magnum |
| `g3sg1` | HK G3/SG-1 Sniper Rifle |
| `sg550` | Sig SG-550 Sniper |
| `m249` | FN M249 Para |
| `flash` | Concussion Grenade |
| `hegren` | High-Explosive Grenade |
| `sgren` | Smoke Grenade |
| `vest` | Kevlar Vest |
| `vesthelm` | Kevlar Vest and Helmet |
| `defuser` | Defuser Kit |
| `shield` | Tactical Shield |

By default this value is not set.

### yb_rotate_bots

Randomly disconnects and connects bots, simulating players join/quit.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `0` |

### yb_rotate_stay_max

Specifies maximum amount of seconds a bot keeps connected if rotation is active.

| Property | Value |
|----------|-------|
| Min | `1800` |
| Max | `14400` |
| Default | `3600` |

### yb_rotate_stay_min

Specifies minimum amount of seconds a bot keeps connected if rotation is active.

| Property | Value |
|----------|-------|
| Min | `120` |
| Max | `7200` |
| Default | `360` |

### yb_save_bots

Allows saving bot data upon changelevel, so bots will be restored after a map change.

| Value | Behavior |
|-------|----------|
| `0` | Nothing is saved |
| `1` | Only quota is saved |
| `2` | Full bot data is saved |

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `2` |
| Default | `1` |

### yb_shoots_thru_walls

Determines the method how bots check if a wall/obstacle is penetrable.

| Value | Behavior |
|-------|----------|
| `1` | Bots will try to shoot through walls more actively, even unrealistically |
| `2` | Bots will use the algorithm from original PODBot, and shoot through walls less |

The `2` method consumes a bit more CPU power than the `1` method.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `3` |
| Default | `2` |

### yb_show_avatars

Enables or disables displaying bot avatars in front of their names in the scoreboard. Note that currently you can see only avatars of your Steam friends.

:::note
If you run bots on a dedicated server, make sure you have `EnableFakeBotFeatures` enabled in `custom.cfg` for this feature to work.
:::

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `0` |

### yb_show_latency

Determines the type of bot ping displayed.

| Value | Behavior |
|-------|----------|
| `0` | There will be nothing in the scoreboard about bot ping |
| `1` | There will be "BOT" displayed for every bot in the scoreboard |
| `2` | There will be a "fake" ping displayed for every bot in the scoreboard |

:::note
If you run bots on a dedicated server, make sure you have `EnableFakeBotFeatures` enabled in `custom.cfg` for this feature to work.
:::

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `2` |
| Default | `0` |

### yb_smoke_grenade_checks

Determines the method of how smoke affects the bot's vision.

| Value | Behavior |
|-------|----------|
| `0` | The smoke won't affect the bot's vision |
| `1` | The smoke affection method from PODBot will be used |
| `2` | The smoke affection method from official CSBot (a.k.a. ZBot) will be used |

ZBot's method allows the bot to shoot at enemies in smoke clouds under certain circumstances, while PODBot's certainly cannot.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `2` |
| Default | `2` |

### yb_smoke_grenade_radius

Radius in units to check for smoke clouds around a detonated grenade.

| Property | Value |
|----------|-------|
| Min | `32` |
| Max | `320` |
| Default | `240` |

### yb_spraypaints

If not zero, bots will spray some paints all over the map.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `1` |

### yb_stab_close_enemies

If not zero, bots will stab the enemy with a knife if the bot is in good condition.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `1` |

### yb_think_fps

Determines how many times per second the rest of bot AI is executed. Higher values will give smoother movement but will cause CPU waste, and may cause problems with dedicated servers that have more than 500 fps.

:::note
Has effect only if `UnlockThinkFPS = yes` is set in `custom.cfg`.
:::

| Property | Value |
|----------|-------|
| Min | `10` |
| Max | `90` |
| Default | `40` |

### yb_think_fps_disable

Allows to completely disable think fps on Xash3D.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `1` |

### yb_threadpool_workers

Maximum number of threads the bot will run to process some tasks. `-1` means half of CPU cores are used.

| Property | Value |
|----------|-------|
| Min | `-1` |
| Max | `128` |
| Default | `-1` |

### yb_tkpunish

If not zero, bots will punish teammates that attack the bot.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `1` |

### yb_use_engine_pvs_check

Use engine to check potential visibility of an enemy. It reduces the number of calls to engine functions, thus reducing CPU usage. The side effect is that bots can fire through obstacles more blatantly.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `1` |

### yb_use_hitbox_enemy_targeting

Uses hitbox-based enemy targeting, instead of offset-based. Use with `yb_use_engine_pvs_check` enabled to reduce CPU usage.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `0` |

### yb_user_follow_percent

Determines the percentage of bots that will try to automatically follow the leader. Bots treat the bomb guy, VIP and human players as leaders.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `100` |
| Default | `20` |

### yb_user_max_followers

Determines how many bots can respond to a human player on the `Follow Me` command and follow the human.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `8` |
| Default | `1` |

### yb_version

Reports the bot version. Read-only, cannot be changed.

| Property | Value |
|----------|-------|
| Default | (bot version) |

### yb_walking_allowed

If not zero, bots will use "shift" or walking when hearing a nearby enemy.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `1` |

### yb_whose_your_daddy

Enables or disables extra hard difficulty for bots. It zeroes out any reaction or surprise timers and allows bots to ignore FOV when searching for enemies. It also forces the bots to aim their weapon at the enemy almost immediately.

| Property | Value |
|----------|-------|
| Min | `0` |
| Max | `1` |
| Default | `0` |

## Removed CVARs

These CVARs no longer exist in the bot. If you still have them in your configs, remove them:

| Removed CVAR | Replacement |
|--------------|-------------|
| `yb_count_players_for_fakeping` | Renamed to `yb_ping_count_real_players` (see also `yb_ping_updater_interval`) |
| `yb_logger_disable_logfile` | Replaced by the `DisableLogFile` setting in `custom.cfg` |
| `yb_path_heuristic_type` | Renamed to `yb_path_heuristic_mode` |
| `yb_path_danger_factor_min` / `yb_path_danger_factor_max` | Removed, no replacement |
| `yb_path_randomize_on_round_start` | Removed, no replacement |
| `yb_quota_adding_interval` / `yb_quota_maintain_interval` | Removed, no replacement |
| `yb_save_bots_names` | Replaced by `yb_save_bots` |
