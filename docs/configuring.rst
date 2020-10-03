******************************
Configuring the Bot
******************************
Bot CVARS are located inside yapb.cfg and parsed on every level change. So new config will be applied on map change or by issuing ``exec addons/yapb/conf/yapb.cfg`` inside the server console.

CVARs can be changed on the fly by typing them into the console.

Bot CVARS
================================

yb_autokill_delay
--------------------------------

Specifies amount of time in seconds when bots will be killed if no humans left alive.

Minimum value is ``0``, Maximum value is ``90``, Default value is ``0``.


yb_autovacate
--------------------------------

If not zero, bots will automatically leave to make room for human players, when they join the server.

Minimum value is ``0``, Maximum value is ``1``, Default value is ``1``.


yb_bind_menu_key
--------------------------------

Bind's specified key for opening bots menu.

Default value is ``=``.


yb_botbuy 
--------------------------------

If not zero, bots will be able to buy weapons and inventory.

Minimum value is ``0``, Maximum value is ``1``, Default value is ``1``.


yb_botskin_t
--------------------------------

Specifies the bots wanted skin for Terrorists team.

Allowed values:

* ``0`` - Any class
* ``1`` - Phoenix Connexion
* ``2`` - Elite Crew
* ``3`` - Arctic Avengers
* ``4`` - Guerilla Warfare
* ``5`` - Midwest Militia **(Condition Zero only!)**

Minimum value is ``0``, Maximum value is ``5``, Default value is ``0``.


yb_botskin_ct
--------------------------------

Specifies the bots wanted skin for Counter-Terrorists team.

Allowed values:

* ``0`` - Any class
* ``1`` - Seal Team 6
* ``2`` - GSG-9
* ``3`` - SAS
* ``4`` - GIGN
* ``5`` - Spetsnaz **(Condition Zero only!)**

Minimum value is ``0``, Maximum value is ``5``, Default value is ``0``.


yb_camping_allowed
--------------------------------

If not zero, bots will try to pickup camp points as their goals, and will camp there for some time based on their personality.

Minimum value is ``0``, Maximum value is ``1``, Default value is ``1``.


yb_chat
--------------------------------

If not zero, bots will be able to chat to each other and players while they are dead.

Minimum value is ``0``, Maximum value is ``1``, Default value is ``1``.


yb_check_enemy_rendering
--------------------------------

Allows to check enemy rendering before taking a victim. This is useful to enable when you plays CSDM mod with spawn protection enabled. Bots will not try to select just-spawned players, as they are not vulnerable.

Minimum value is ``0``, Maximum value is ``1``, Default value is ``0``.

yb_csdm_mode
--------------------------------

Enables or disables CSDM / FFA mode for bots.

* If set to ``0``, CSDM / FFA mode is auto-detected.
* If set to ``1``, CSDM mode is enabled, but FFA is disabled.
* If set to ``2``, CSDM and FFA mode is enabled.
* If set to ``3``, CSDM and FFA mode is disabled.

Minimum value is ``0``, Maximum value is ``3``, Default value is ``0``.
   

yb_chatter_path
--------------------------------

Points to location where chatter (from official csbot for example) is located.

Minimum value is ``-``, Maximum value is ``-``, Default value is ``sound/radio/bot``.


yb_communication_type
--------------------------------

Specifies the way bots are talking to each other and player. 

If set to ``0`` bots will not communicate at all.
If set to ``1`` bots will use only the radio.
If set to ``2`` bots will use chatter.

.. Note::  Chatter will be used only if bot will find valid wave files in specified in ``yb_chatter_path`` directory.

Minimum value is ``0``, Maximum value is ``2``, Default value is ``2``.


yb_debug
--------------------------------

If not zero, enables useful messages about bot states. Not required for end users.

Minimum value is ``0``, Maximum value is ``1``, Default value is ``0``.


yb_debug_goal
--------------------------------

Forces all alive bots to build path and go to the specified here graph node.

Minimum value is ``-1``, Maximum value is ``2048``, Default value is ``-1``.


yb_debug_heuristic_type
--------------------------------

Selects the heuristic function mode. For debug purposes only.

Minimum value is ``0``, Maximum value is ``4``, Default value is ``0``.


yb_destroy_breakables_around
--------------------------------

Allows bots to destroy breakables around him, even without touching with them.

Minimum value is ``0``, Maximum value is ``1``, Default value is ``1``.


yb_difficulty
--------------------------------

Specifies the difficulty of all bots. Changing at runtime will affect already created bots.

List of bot difficulties:

* ``0`` - Newbie,
* ``1`` - Average,
* ``2`` - Normal,
* ``3`` - Professional,
* ``4`` - Godlike.

Minimum value is ``0``, Maximum value is ``4``, Default value is ``4``.


yb_difficulty_min
--------------------------------

Lower bound of random difficulty on bot creation. Only affects newly created bots. ``-1`` means yb_difficulty only used.

Minimum value is ``-1``, Maximum value is ``4``, Default value is ``-1``.


yb_difficulty_max
--------------------------------

Upper bound of random difficulty on bot creation. Only affects newly created bots. ``-1`` means yb_difficulty only used.

Minimum value is ``-1``, Maximum value is ``4``, Default value is ``-1``.


yb_difficulty_auto
--------------------------------

Enables each bot balances own difficulty based kd-ratio of team.

Minimum value is ``0``, Maximum value is ``1``, Default value is ``0``.


yb_display_welcome_text
--------------------------------

Specifies if the bot dll will display welcome text on first listenserver startup.

Minimum value is ``0``, Maximum value is ``1``, Default value is ``1``.


yb_display_menu_text
--------------------------------

Enables or disables display menu text, when players asks for menu. Useful only for Android.

Minimum value is ``0``, Maximum value is ``1``, Default value is ``1``.


yb_economics_rounds
--------------------------------

If not zero, bots will use "team" economics, if more than 70% of players don't have money to buy preferred weapon no-one buy anything to save money for the next round. This usually causes bots running with default pistols on first round.

Minimum value is ``0``, Maximum value is ``1``, Default value is ``1``.


yb_enable_query_hook
--------------------------------

Enables fake server queries response, that shows bots as real players in server browser.

Minimum value is ``0``, Maximum value is ``1``, Default value is ``0``.


yb_freeze_bots
--------------------------------

If not zero, bots think function is paused and bots stays at the place where he was been before activating these cvar.

Minimum value is ``0``, Maximum value is ``1``, Default value is ``0``.


yb_graph_fixcamp
--------------------------------

Specifies whether bot should not 'fix' camp directions of camp waypoints when loading old PWF format.

Minimum value is ``0``, Maximum value is ``1``, Default value is ``1``.


yb_graph_url
--------------------------------

Sepcifies the host where graph database is located. They must be in ``/graph`` path on the server.
Set to empty, if you don't want downloads

Allowed values: Valid DNS hostname with HTTP server listening on port 80. Default value is ``yapb.ru``.


yb_ignore_cvars_on_changelevel
--------------------------------
Comma separated list of bot cvars to ignore on changelevel.

Bots reads ``yapb.cfg`` every changelevel, and the values of bot cvars are overwritten with those located in config. This cvar allows server admin to ignore values of specified here cvars from ``yapb.cfg`` if they were changed by hand from server console.

For example: Server started with ``yb_quota`` set to ``10`` in ``yapb.cfg`` and ``yb_quota`` is specified in ``yb_ignore_cvars_on_changelevel``. Time passed, server admine decide that ``yb_quota`` should be set to ``12`` and set it via server console. Next time server will change map, value of ``yb_quota`` will not be changed while reading ``yapb.cfg`` and will stay ``12``.

Minimum value is ``-``, Maximum value is ``-``, Default value is ``yb_quota,yb_autovacate``.


yb_ignore_enemies
--------------------------------

If not zero, bots will run all over the map, and doing golas but will not search for enemies.

Minimum value is ``0``, Maximum value is ``1``, Default value is ``0``.


yb_jasonmode
--------------------------------

If not zero, bots will use only knives while fighting against enemies. This also disabling buying.

Minimum value is ``0``, Maximum value is ``1``, Default value is ``0``.


yb_join_after_player
--------------------------------

If not zero, bots will join he server only when some human player already joined the team.

Minimum value is ``0``, Maximum value is ``1``, Default value is ``0``.


yb_join_team
--------------------------------

Forces all bots to join team specified in this cvars.

Valid values: ``ct``,``te``,``any``, Default value is ``any``.


yb_join_delay
--------------------------------

Specifies after how many seconds bots should start to join the game after the changelevel.

Minimum value is ``0.0``, Maximum value is ``30.0``, Default value is ``5.0``.


yb_language
--------------------------------

Sets the bot language for menus, names, chat and messages.

Valid values: ``ru``, ``en``, ``de``, ``chs``, Default value is ``en``.


yb_latency_display
--------------------------------

If set to ``0`` there will be no anything in scoreboard about bot ping.
If set to ``1`` there will be "BOT" displayed for every bot in scoreboard.
If set to  `2`` there will be "fake" ping displayed for every bot in scoreboard.

Minimum value is ``0``, Maximum value is ``2``, Default value is ``2``.


yb_name_prefix
--------------------------------

This cvar contains a string that will be prepended to every added bot name. Something like a clantag.

By default this value is not set.


yb_password_key
--------------------------------

Specifies the password key for ``setinfo`` command, to gain remote control to ``yb`` command and bot menus.

Default value is: ``_ybpw``.


yb_password
--------------------------------

Specifies the actual password for ``setinfo`` command, to gain remote control to ``yb`` command and bot menus.

To gain access to bot command remotely, user should open console and enter ``setinfo key password``, when ``key`` is value from from ``yb_password_key`` and password is value from ``yb_password``.

By default this value is not set.


yb_ping_base_min
--------------------------------

Lower bound for base bot ping shown in scoreboard. Affects only on newly created bots.

Minimum value is ``0``, Maximum value is ``100``, Default value is ``7``.


yb_ping_base_max
--------------------------------

Upper bound for base bot ping shown in scoreboard. Affects only on newly created bots.

Minimum value is ``0``, Maximum value is ``100``, Default value is ``34``.


yb_quota
--------------------------------

Determines the total number of bots in the game.

Minimum value is ``0``, Maximum value is ``32``, Default value is ``9``.


yb_quota_mode
--------------------------------

Determines the type of how ``yb_quota`` works.

If set ``fill``, the server will adjust bots to keep N players in the game, where N is ``yb_quota``.
If set ``match``, the server will maintain a 1:N ratio of humans to bots, where N is ``yb_quota``.
If set ``normal``, this variable does not affect ``yb_quota``.

Allowed values is ``normal``, ``fill`` and ``match``, Default value is ``normal``.


yb_quota_match
--------------------------------

Determines the total number of bots in the game, when the ``yb_quota_mode`` is set to ``match``, i.e. for every human, N bots join.

Minimum value is ``0``, Maximum value is ``32``, Default value is ``0``.


yb_restricted_weapons
--------------------------------

A list of individual weapons that are restricted for bot to buy. Separated by semicolon.

The list of weapons for Counter-Strike 1.6::

    usp - HK USP .45 Tactical
    glock - Glock18 Select Fire
    deagle - Desert Eagle .50AE
    p228 - SIG P228
    elite - Dual Beretta 96G Elite
    fn57 - FN Five-Seven
    m3 - Benelli M3 Super90
    xm1014 - Benelli XM1014
    mp5 - HK MP5-Navy
    tmp - Steyr Tactical Machine Pistol
    p90 - FN P90
    mac10 - Ingram MAC-10
    ump45 - HK UMP45
    ak47 - Automat Kalashnikov AK-47
    galil - IMI Galil
    famas - GIAT FAMAS
    sg552 - Sig SG-552 Commando
    m4a1 - Colt M4A1 Carbine
    aug - Steyr Aug
    scout - Steyr Scout
    awp - AI Arctic Warfare/Magnum
    g3sg1 - HK G3/SG-1 Sniper Rifle
    sg550 - Sig SG-550 Sniper
    m249 - FN M249 Para
    flash - Concussion Grenade
    hegren - High-Explosive Grenade
    sgren - Smoke Grenade
    vest - Kevlar Vest
    vesthelm - Kevlar Vest and Helmet
    defuser - Defuser Kit
    shield - Tactical Shield

By default this value is not set.


yb_shoots_thru_walls
--------------------------------

Determines the method how bots checks if wall/obstacle is penetrable.

If set to ``1`` bots will try too shoot thru walls more active, even unrealistically.
If set to ``2`` bots will use algorithm from original PODBot, and shoot thru walls less.

The ``2`` method is consuming a bit more CPU power than the ``1`` method.

Minimum value is ``1``, Maximum value is ``2``, Default value is ``2``.


yb_show_avatars
--------------------------------

Enables or disables displaying bot avatars in front of their names in scoreboard. Note, that is currently you can see only avatars of your steam friends.

Minimum value is ``0``, Maximum value is ``1``, Default value is ``0``.


yb_spraypaints
--------------------------------

If not zero, bots will spray some paints all over the map.

Minimum value is ``0``, Maximum value is ``1``, Default value is ``1``.


yb_stab_close_enemies
--------------------------------

If not zero, bots will stab the enemy with knife if bot is in good condition.

Minimum value is ``0``, Maximum value is ``1``, Default value is ``1``.


yb_think_fps
--------------------------------

Determines how many times per second the rest of bot AI is executed. Higher values will give more smooth movement, but will cause CPU waste, and may cause problems with dedicated servers that have more than 500 fps.

Minimum value is ``30.0``, Maximum value is ``90.0``, Default value is ``30.0``.


yb_tkpunish
--------------------------------

If not zero, bots will punish teammates that attacks the bot.

Minimum value is ``0``, Maximum value is ``1``, Default value is ``1``.


yb_user_follow_percent
--------------------------------

Determines how many bots will try to automatically follow the leader. Bots treats bomb guy, vip and human players as leader.

Minimum value is ``0``, Maximum value is ``100``, Default value is ``20``.


yb_user_max_followers
--------------------------------

Determines how many bots can respond to human player on ``Follow Me`` command and follow the human.

Minimum value is ``0``, Maximum value is ``16``, Default value is ``1``.


yb_walking_allowed
--------------------------------

If not zero, bots will use "shift" or walking when hearing the nearby enemy.

Minimum value is ``0``, Maximum value is ``1``, Default value is ``1``.


yb_whose_your_daddy
--------------------------------

Enable some non-human reaction timers allowing beat almost every player on this planet.

Minimum value is ``0``, Maximum value is ``1``, Default value is ``0``.


Weapons Configuration
================================
Main config whene most stuff regarding weapon handling is defined. The filename is ``weapon.cfg`` and located at ``addons/yapb/conf`` directory.

To edit this file you need to know the weapon numbering.

MapStandard Field
----------------------------
This field is by default used on all maps except VIP scenario.

Following is tables which specify which Team is allowed to buy a weapon on a Map. You can also use it to allow/disallow Weapons for a Team or a Map/Gamemode (remember that some Weapons are team-specific and can't be bought by another team).

Weapon buy flags::

    -1 = Disallow Buying for any Team
    0 = Terrorist Team only
    1 = CT Team only
    2 = Can be bought by both Teams

Example::

    MapStandard = -1,0,-1,2,-1,0,1,2,2,2,-1,2,-1,-1,0,0,1,0,1,1,2,2,0,1,2,1

MapAS Field
----------------------------
This field is by default used only on VIP scenario maps.

Following is tables which specify which Team is allowed to buy a weapon on a Map. You can also use it to allow/disallow Weapons for a Team or a Map/Gamemode (remember that some Weapons are team-specific and can't be bought by another team).

Weapon buy flags::

    -1 = Disallow Buying for any Team
    0 = Terrorist Team only
    1 = CT Team only
    2 = Can be bought by both Teams

Example::

    MapAS = -1,-1,-1,2,-1,0,1,1,1,1,1,1,0,2,0,-1,1,0,1,1,0,0,-1,1,1,1


Grenade buying percentage
----------------------------
Specifies the buying percents for grenade inventory.

From left to right::

    1 - HE grenade.
    2 - Flashbang.
    3 - Smoke grenade.

Example::

    GrenadePercent = 98,75,60


Bot Economics
----------------------------
Specifies economics values for buying the weapons.

From left to right::

    1 - If bot's money more than the value specified here. He can buy the primary weapon.
    2 - If bot's money more than the value specified here he will not buy SMGs (MP5,  MAC10, TMP, P90, UMP45, SCOUT) (only for CTs) (+ 8/9/10)
    3 - If bot's money more than the value specified here it will not buy SMGs (MP5, MAC10, TMP, P90, UMP45, SCOUT) (only for Ts) (+ 8/9/10))
    4 - If bot's money more than the value specified here he can buy shotguns (M3, XM1014).
    5 - If bot's money less than the value specified here he cannot buy shotguns (M3, XM1014).
    6 - If bot's money more than the value specified here he can buy AWM, SG550, G3SG1, M249.
    7 - If bot's money less than the value specified here he cannot buy AWM, SG550, G3SG1, M249.
    8 - How much money bot leaves a prostock, at purchase of the primary weapon (only for type of behaviour - Normal)
    9 - How much money bot leaves a prostock, at purchase of the primary weapon (only for type of behaviour - Rusher).
    10 - How much money bot leaves a prostock, at purchase of the primary weapon  (only for type of behaviour - Careful).
    11 - If bot's money more than the value specified here. He can buy the shield.

Example::

    Economics = 1550,2100,2100,4000,6000,7000,16000,1200,800,1100,3000

Weapon Priorities
-----------------------------
This tables stores the Weapon Priorities of the Bots depending on Personality (it affects buying & picking up better weapons from the ground).

Numbering of the weapons::

    0 - KNIFE
    1 - USP
    2 - GLOCK18
    3 - DEAGLE
    4 - P228
    5 - ELITE
    6 - FIVESEVEN
    7 - M3
    8 - XM1014
    9 - MP5NAVY
    10 - TMP
    11 - P90
    12 - MAC10
    13 - UMP45
    14 - AK47
    15 - SG552
    16 - M4A1
    17 - GALIL
    18 - FAMAS
    19 - AUG
    20 - SCOUT
    21 - AWP
    22 - G3SG1
    23 - SG550
    24 - M249
    25 - SHIELD

From left to right. Top right values is a most wanted bot weapon. Top left value is most worst weapon.

.. Note:: Knife should most "worst" weapon in this tables, otherwise things are messed up.

Examples::

    PersonalityNormal = 00,02,01,04,05,06,03,12,10,24,25,13,11,08,07,22,23,20,21,09,19,15,17,18,14,16
    PersonalityRusher = 00,02,04,05,01,06,03,24,25,22,23,20,10,12,13,07,08,21,11,09,15,19,17,18,16,14
    PersonalityCareful = 00,02,01,04,05,06,03,07,08,12,10,13,11,09,18,17,15,19,16,14,20,22,25,23,24,21  
