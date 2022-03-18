******************************
Customization
******************************

Chat customization
================================
You can create a new chat base for your language or change the existing one.
It is located in the folder: ``addons/yapb/conf/lang``
To do this, create a file ``**_chat.cfg`` or open an existing one.

Bots can write chat messages depending on the situation: planting a bomb, killing an enemy, attacking teammates, etc.

Placeholders
--------------------------

* ``%v`` - inserts the nickname of the last killed player
* ``%f`` - inserts the nickname of the team leader
* ``%t`` - inserts the nickname of the alive teammate
* ``%e`` - inserts the nickname of the alive enemy
* ``%s`` - inserts the nickname of the random player
* ``%m`` - inserts the name of the current map
* ``%d`` - inserts the mod name from ``liblist.gam`` file (Counter-Strike or Condition Zero)

Action triggers
--------------------------
``[BOMBPLANT]`` - Sets a list of messages that bots will write after planting a bomb.

``[KILLED]`` - Sets a list of messages for bots that will write after killing an enemy.
Use the placeholder ``%v`` to write the nickname of the killed enemy.
Example::

	[KILLED]
	You're dead %v!

::

When the bot kills the enemy with the nickname "John Smith", he will write "You're dead John Smith!" using the line shown in the example.

``[WELCOME]`` - Sets the list of messages that the bot will write when it connects to server.

``[TEAMATTACK]`` - Sets the list of messages that the bot will write when attacked by a teammate.

``[TEAMKILL]`` - Sets the list of messages that the bot will write when it killed a teammate.

``[DEADCHAT]`` - Sets the list of messages that the bot will write when it is dead or is in spectator mode.

.. note:: Minimum number is 9! If you write less than 9 messages for this trigger, yapb will crash!

``[REPLIES]`` - Sets the list of messages that the bot will write in answer to another bot if it has an answer to the specified word
To set a word to which the answer will be, you need to set a key to specified words separated by commas
Example::

	[REPLIES]
	@KEY "WORD", "ANOTHER WORD"
	This is the answer to the given words.
	This is another answer to the given words.
	
	@KEY "KEYWORD"
	This is the answer to new key word.
	
::

This is how it will look in the game::

	John Smith: Bla bla bla word
	Ricardo Milos: This is answer to the given words.
	
	Keanu Reeves: Bla bla bla another word bla bla...
	Tommy Vercetti: This is another answer to the given words.
	
	Ryan Gosling: Answer me a new keyword.
	Soap MacTavish: This is the answer to new key word.
	
::

Bots can use these replies at random. 

.. warning:: Please note that the key words in the [REPLIES] trigger must be written in capital letters! In messages, they can be written in any format.

``[UNKNOWN]`` - Sets the list of messages that the bot will write in answer to another bot if it has no response in the [REPLIES] trigger

VoiceChat customization
================================
YaPB supports voice chat as well as zBot.
All paths for yapb voice chat audio files are in the file: ``chatter.cfg`` which located in the folder ``addons/yapb/conf``.

``RewritePath`` sets the folder where the voice chat audio files are located. By default it is ``sound/radio/bot``

Radio events
--------------------------
``Event Radio_***`` sets the name of the sound files that bot will speak instead of using a specific radio commands.

**Which of them:**

- ``Event Radio_CoverMe`` - "Cover Me!" radio command.
- ``Event Radio_YouTakePoint`` - "You Take the Point." radio command.
- ``Event Radio_HoldPosition`` - "Hold This Position." radio command.
- ``Event Radio_RegroupTeam`` - "Regroup Team." radio command.
- ``Event Radio_FollowMe`` - "Follow Me." radio command.
- ``Event Radio_TakingFire`` - "Taking Fire...Need Assistance!" radio command.
- ``Event Radio_GoGoGo`` - "Go go go!" radio command.
- ``Event Radio_Fallback`` - "Team, fall back!" radio command.
- ``Event Radio_StickTogether`` - "Stick together, team." radio command.
- ``Event Radio_GetInPosition`` - "Get in position and wait for my go." radio command.
- ``Event Radio_StormTheFront`` - "Storm the Front!" radio command.
- ``Event Radio_ReportTeam`` - "Report in, team." radio command.
- ``Event Radio_Affirmative`` - "Affirmative./Roger that." radio command.
- ``Event Radio_EnemySpotted`` - "Enemy spotted." radio command.
- ``Event Radio_NeedBackup`` - "Need backup." radio command.
- ``Event Radio_SectorClear`` - "Sector clear." radio command.
- ``Event Radio_InPosition`` - "I'm in position." radio command.
- ``Event Radio_ReportingIn`` - "Reporting in." radio command.
- ``Event Radio_ShesGonnaBlow`` - "Get out of there, it's gonna blow!" radio command.
- ``Event Radio_Negative`` - "Negative." radio command.
- ``Event Radio_EnemyDown`` - "Enemy down." radio command.

You can comment out these lines if you want the bot to use standard radio commands.

Chatter events
--------------------------
``Event Chatter_***`` sets the names of sound files for bot's chatter that it will speak.
For example ``Event Chatter_HearSomething`` will contain the sounds that the bot will speak when it hears an enemy.

How this file should look like::

	RewritePath sound/radio/bot

	Event Radio_CoverMe = ("cover_me", "cover_me2");
	// Event Radio_YouTakePoint = (""); 
	// Event Radio_HoldPosition = ("");
	// Event Radio_RegroupTeam = ("");
	Event Radio_FollowMe = ("lead_on_sir", "lead_the_way_sir", "lead_the_way", "ok_sir_lets_go", "lead_on_commander", "lead_the_way_commander", "ok_cmdr_lets_go");
	Event Radio_TakingFire = ("taking_fire_need_assistance2", "i_could_use_some_help", "i_could_use_some_help_over_here", "help", "need_help", "need_help2", "im_in_trouble");

	// Event Radio_GoGoGo = ("");
	// Event Radio_Fallback = ("");
	// Event Radio_StickTogether = ("");
	// Event Radio_GetInPosition = ("");
	// Event Radio_StormTheFront = ("");
	Event Radio_ReportTeam = ("report_in_team", "anyone_see_them", "anyone_see_anything", "where_are_they", "where_could_they_be");

	Event Radio_Affirmative = ("affirmative", "no2", "roger_that", "me_too", "ill_come_with_you", "ill_go_with_you", "ill_go_too", "i_got_your_back", "i_got_your_back2", "im_with_you", "im_with_you", "sounds_like_a_plan", "good_idea");
	Event Radio_EnemySpotted = ("one_guy", "two_of_them", "theyre_all_over_the_place2", "the_actions_hot_here", "its_a_party");
	Event Radio_NeedBackup = ("taking_fire_need_assistance2", "i_could_use_some_help", "i_could_use_some_help_over_here", "help", "need_help", "need_help2", "im_in_trouble");
	Event Radio_SectorClear = ("clear", "clear2", "clear3", "clear4", "area_clear", "all_clear_here", "nothing_happening_over_here", "nothing_here", "theres_nobody_home");
	Event Radio_InPosition = ("lets_wait_here", "lets_hold_up_here_for_a_minute", "im_gonna_hang_back", "im_going_to_wait_here", "im_waiting_here");
	Event Radio_ReportingIn = ("reporting_in");
	// Event Radio_ShesGonnaBlow = ("");
	Event Radio_Negative = ("ahh_negative", "negative", "no2", "negative2", "i_dont_think_so", "naa", "no_thanks", "no", "nnno_sir", "no_sir");
	Event Radio_EnemyDown = ("enemy_down", "enemy_down2");

	// end of radio, begin some voices (NOT SORTED)
	Event Chatter_SpotTheBomber = ("i_see_the_bomber", "theres_the_bomber", "hes_got_the_bomb", "hes_got_the_bomb2", "hes_got_the_package", "spotted_the_delivery_boy");
	Event Chatter_FriendlyFire = ("cut_it_out", "what_are_you_doing", "stop_it", "ow_its_me", "ow", "ouch", "im_on_your_side", "hold_your_fire", "hey", "hey2", "ouch", "ouch", "ouch");
	Event Chatter_DiePain = ("pain2", "pain4", "pain5", "pain8", "pain9", "pain10");
	Event Chatter_GotBlinded = ("ive_been_blinded", "my_eyes", "i_cant_see", "im_blind");
	Event Chatter_GoingToPlantBomb = ("im_gonna_go_plant", "im_gonna_go_plant_the_bomb");
	Event Chatter_RescuingHostages = ("the_hostages_are_with_me", "taking_the_hostages_to_safety", "ive_got_the_hostages", "i_have_the_hostages");
	Event Chatter_GoingToCamp = ("im_going_to_camp");
	Event Chatter_HearSomething = ("hang_on_i_heard_something", "i_hear_something", "i_heard_them", "i_heard_something_over_there");
	Event Chatter_TeamKill = ("what_happened", "noo", "oh_my_god", "oh_man", "oh_no_sad", "what_have_you_done"); 
	Event Chatter_ReportingIn = ("reporting_in");
	Event Chatter_GuardDroppedC4 = ("bombsite", "bombsite2", "i_got_a_covered", "im_camping_c");
	Event Chatter_Camp = ("im_waiting_here");
	Event Chatter_PlantingC4 = ("planting_the_bomb", "planting");
	Event Chatter_DefusingC4 = ("defusing", "defusing_bomb", "defusing_bomb");
	Event Chatter_InCombat = ("attacking", "attacking_enemies", "engaging_enemies", "in_combat", "in_combat2", "returning_fire");
	Event Chatter_SeeksEnemy = ("lets_wait_here", "lets_hold_up_here_for_a_minute", "im_gonna_hang_back", "im_going_to_wait_here", "im_waiting_here");
	Event Chatter_Nothing = ("nothing_here", "nothing");
	Event Chatter_EnemyDown = ("hes_dead", "hes_down", "got_him", "dropped_him", "killed_him", "ruined_his_day", "wasted_him", "made_him_cry", "took_him_down", "took_him_out2", "took_him_out", "hes_broken", "hes_done");
	Event Chatter_UseHostage = ("talking_to_hostages", "rescuing_hostages");
	Event Chatter_FoundC4 = ("bombs_on_the_ground", "bombs_on_the_ground_here", "the_bomb_is_down", "the_bomb_is_on_the_ground", "they_dropped_the_bomb");
	Event Chatter_WonTheRound = ("good_job_team", "nice_work_team", "way_to_be_team", "well_done");
	Event Chatter_QuicklyWonTheRound = ("i_am_dangerous", "do_not_mess_with_me", "we_owned_them", "they_never_knew_what_hit_them", "thats_the_way_this_is_done", "and_thats_how_its_done", "owned", "yesss", "yesss2", "yea_baby", "whoo", "whoo2", "oh_yea");
	Event Chatter_ScaredEmotion = ("whoa", "uh_oh", "oh_no", "yikes", "oh", "oh_boy", "oh_boy2", "aah");
	Event Chatter_HeardEnemy = ("i_hear_them", "hang_on_i_heard_something", "i_hear_something", "i_heard_them", "i_heard_something_over_there");
	Event Chatter_SniperWarning = ("sniper", "sniper2", "watch_it_theres_a_sniper");
	Event Chatter_SniperKilled = ("got_the_sniper", "got_the_sniper2", "sniper_down", "took_out_the_sniper", "the_sniper_is_dead");
	Event Chatter_VIPSpotted = ("i_see_our_target", "target_spotted", "target_acquired");
	Event Chatter_GuardingVipSafety = ("watching_the_escape_route", "im_at_the_escape_zone", "watching_the_escape_zone", "guarding_the_escape_zone", "guarding_the_escape_zone2");
	Event Chatter_GoingToGuardVIPSafety = ("im_going_to_cover_the_escape_zone", "im_going_to_watch_the_escape_zone", "im_going_to_keep_an_eye_on_the_escape", "heading_to_the_escape_zone");
	Event Chatter_OneEnemyLeft = ("one_guy_left", "theres_one_left");
	Event Chatter_TwoEnemiesLeft = ("two_enemies_left", "two_to_go");
	Event Chatter_ThreeEnemiesLeft = ("three_left", "three_to_go", "three_to_go2");
	Event Chatter_NoEnemiesLeft = ("that_was_the_last_one", "that_was_it", "that_was_the_last_guy");
	Event Chatter_FoundBombPlace = ("theres_the_bomb", "theres_the_bomb2");
	Event Chatter_WhereIsTheBomb = ("wheres_the_bomb", "wheres_the_bomb2", "wheres_the_bomb3", "where_is_it");
	Event Chatter_DefendingBombSite = ("bombsite", "bombsite2", "im_camping_b", "heading_to_c");
	Event Chatter_BarelyDefused = ("i_wasnt_worried_for_a_minute", "that_was_a_close_one", "well_done", "whew_that_was_close");
	Event Chatter_NiceshotCommander = ("good_one_sir", "good_one_sir2", "nice_shot_sir", "nice_one_sir");
	Event Chatter_NiceshotPall = ("good_one", "good_one2", "nice_shot", "nice_shot2", "good_shot", "good_shot2", "nice", "nice2", "very_nice");
	Event Chatter_GoingToGuardHostages = ("camping_hostages", "im_going_to_camp_the_hostages", "im_going_to_guard_the_hostages", "im_going_to_guard_the_hostages2");
	Event Chatter_GoingToGuardDoppedBomb = ("im_going_to_guard_the_bomb", "im_going_to_guard_the_bomb2", "im_going_to_keep_an_eye_on_the_bomb", "im_going_to_watch_the_bomb");
	Event Chatter_OnMyWay = ("on_my_way", "on_my_way2", "im_coming", "hang_on_im_coming", "be_right_there");
	Event Chatter_LeadOnSir = ("lead_on_sir", "lead_the_way_sir", "lead_the_way", "ok_sir_lets_go", "lead_on_commander", "lead_the_way_commander", "ok_cmdr_lets_go");
	Event Chatter_Pinned_Down = ("they_got_me_pinned_down_here", "im_pinned_down");
	Event Chatter_GottaFindTheBomb = ("theres_the_bomb", "theres_the_bomb2");
	Event Chatter_Lost_The_Commander = ("weve_lost_the_commander", "the_commander_is_down", "the_commander_is_down_repeat");
	Event Chatter_CoverMe = ("cover_me", "cover_me2");
	Event Chatter_BombSiteSecured = ("i_wasnt_worried_for_a_minute", "that_was_a_close_one", "well_done", "whew_that_was_close");
	
::
