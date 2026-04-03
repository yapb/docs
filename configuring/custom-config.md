# Custom Configuration File

A custom config file that allows you to change some hard-coded things in the bot code.

It's located in `addons/yapb/conf/custom.cfg`.

## Available Settings

| Setting | Description |
|---------|-------------|
| `C4ModelName` | Sets a custom name for the C4 model, for servers that replace the C4 model with their own. By default it's `c4.mdl` (the models/path is omitted), so if you need to use `models/mybomb/mybomb.mdl`, you should specify `mybomb/mybomb.mdl`. |
| `AMXParachuteCvar` | Sets a custom CVAR name for parachute handling. There are various plugins that handle parachutes (AMX Parachute, AMX Parachute Lite, etc.), you can specify the needed CVAR here. |
| `CustomCSDMSpawnPoint` | Sets a custom spawn point classname for CSDM mods that add custom spawn points other than `info_player_start` and `info_player_deathmatch`. So bots will be able to join the game without default spawn entities. |
| `CSDMDetectCvar` | Sets a CVAR to detect the CSDM mod if it is activated in the game. |
| `ZMDetectCvar` | Sets a CVAR to detect the Zombie mod. |
| `ZMDelayCvar` | Sets a CVAR that deals with time before any game mode starts. |
| `ZMInfectedTeam` | Determines the team on which infected players are on. Valid values: `T`, `CT`. |
| `EnableFakeBotFeatures` | Decides if fake features (like a fake time, fake SID (avatar), fakeping) should be enabled within bot code on a dedicated server. By default it's off. To enable it you should provide a variable with: `i'm confident for what i'm doing` as the value. Its value doesn't affect the listen server. |
