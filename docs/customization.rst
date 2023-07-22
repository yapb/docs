******************************
Персонализация
******************************

Персонализация чата
================================
Вы можете создать базу чата для вашего языка, или изменить существующую.
Она находится в папке: ``addons/yapb/conf/lang``
Чтобы сделать это, создайте файл ``**_chat.cfg`` или откройте существующий.

Боты могут писать сообщения в чате в зависимости от ситуации: закладка бомбы, убийство противника, атака тиммейтов, и т.д.

Заполнители
--------------------------

* ``%v`` - вставляет ник последнего убитого игрока
* ``%f`` - вставляет ник лидера команды
* ``%t`` - вставляет ник живого тиммейта
* ``%e`` - вставляет ник живого противника
* ``%s`` - вставляет ник случайного игрока
* ``%m`` - вставляет название текущей карты
* ``%d`` - вставляет название мода из файла ``liblist.gam`` (Counter-Strike или Condition Zero)

Разделы чата
--------------------------
``[BOMBPLANT]`` - Задаёт список сообщений которые будут писать боты после закладки бомбы.

``[KILLED]`` - Задаёт список сообщений которые будут писать боты после убийства врага.
Используйте заполнитель ``%v`` чтобы написать ник убитого врага.
Пример::

	[KILLED]
	Ты мертв %v!

::

Когда бот убивает врага с ником "Иван Петров", он напишет "Ты мёртв Иван Петров!" используя строку указанную в примере.

``[WELCOME]`` - Задаёт список сообщений которые будут писать боты после подключения к серверу.

``[TEAMATTACK]`` - Задаёт список сообщений которые будут писать боты когда их атакуют товарищи по команде.

``[TEAMKILL]`` - Задаёт список сообщений которые будут писать боты когда они убили товарища по команде.

``[DEADCHAT]`` - Задаёт список сообщений которые будут писать боты когда они мертвы или находятся в режиме наблюдателя.

.. note:: Минимальное количество сообщений - 9! Если вы напишете менее 9-ти сообщений для этого триггера, у yapb будет сбой!

``[REPLIES]`` - Задаёт список сообщений которые будут писать боты в ответ другому боту если у него есть ответ на указанное слово.
Чтобы задать слово на которое будет ответ, вам нужно задать ключ к указанным словам разделенными запятыми.
Пример::

	[REPLIES]
	@KEY "СЛОВО", "ДРУГОЕ СЛОВО"
	Это ответ на указанные слова.
	Это другой ответ к указанным словам.
	
	@KEY "КЛЮЧЕВОЕ СЛОВО"
	Это ответ на новое ключевое слово.
	
::

Вот как это будет выглядеть в игре::

	Иван Петров: Бла бла бла слово
	Рикардо Милос: Это ответ на указанные слова.
	
	Киану Ривз: Бла бла бла другое слово бла бла...
	Томми Версетти: Это другой ответ к указанным словам.
	
	Райан Гослинг: Скажи мне ответ на новое ключевое слово.
	Соуп Мактавиш: Это ответ на новое ключевое слово.
	
::

Боты могут использовать эти ответы в случайном порядке. 

.. warning:: Обратите внимание, что ключевые слова в триггере [REPLIES] должны быть написаны заглавными буквами! В сообщениях они могут быть написаны в любом формате.

``[UNKNOWN]`` - Задаёт список сообщений которые будут писать боты в ответ другому боту, если его сообщение не содержит ключевых слов из триггера [REPLIES]

Персонализация голосового чата
================================
YaPB поддерживает голосовой чат также как и zBot.
Все пути к звуковым файлам голосового чата yapb находятся в файле: ``chatter.cfg`` который находится в папке ``addons/yapb/conf``.

``RewritePath`` задаёт путь к папке где находятся звуковые файлы для голосового чата. По умолчанию это ``sound/radio/bot``

События радио
--------------------------
``Event Radio_***`` задаёт имена звуковых файлов которые будет произносить бот вместо использования определённых радиокоманд.

**Которые из них:**

- ``Event Radio_CoverMe`` - радиокоманда "Прикройте меня!".
- ``Event Radio_YouTakePoint`` - радиокоманда "Возьмите эту точку на себя.".
- ``Event Radio_HoldPosition`` - радиокоманда "Удерживайте эту позицию.".
- ``Event Radio_RegroupTeam`` - радиокоманда "Перегруппируйтесь.".
- ``Event Radio_FollowMe`` - радиокоманда "Следуйте за мной.".
- ``Event Radio_TakingFire`` - радиокоманда "Я под огнём...нужна поддержка!".
- ``Event Radio_GoGoGo`` - радиокоманда "Пошли, пошли, пошли!".
- ``Event Radio_Fallback`` - радиокоманда "Команда, отступаем!".
- ``Event Radio_StickTogether`` - радиокоманда "Команда, держимся вместе.".
- ``Event Radio_GetInPosition`` - радиокоманда "Займите позицию и ждите моего сигнала.".
- ``Event Radio_StormTheFront`` - радиокоманда "Штурмуйте фронт!".
- ``Event Radio_ReportTeam`` - радиокоманда "Доложите обстановку.".
- ``Event Radio_Affirmative`` - радиокоманда "Понял./Так точно.".
- ``Event Radio_EnemySpotted`` - радиокоманда "Вижу противника.".
- ``Event Radio_NeedBackup`` - радиокоманда "Нужно подкрепление.".
- ``Event Radio_SectorClear`` - радиокоманда "Сектор чист.".
- ``Event Radio_InPosition`` - радиокоманда "Я на позиции.".
- ``Event Radio_ReportingIn`` - радиокоманда "Докладываю.".
- ``Event Radio_ShesGonnaBlow`` - радиокоманда "Уходим отсюда, она сейчас взорвётся!".
- ``Event Radio_Negative`` - радиокоманда "Никак нет.".
- ``Event Radio_EnemyDown`` - радиокоманда "Противник убит.".

Вы можете закомментировать эти строки если хотите чтобы боты использовали стандартные радиокоманды.

События переговоров
--------------------------
``Event Chatter_***`` задаёт имена звуковых файлов которые будет произносить бот во время переговоров.

**Список событий переговоров:**

- ``Event Chatter_DiePain`` - звуки смерти бота.
- ``Event Chatter_GoingToPlantBomb`` - бот говорит, что он собирается ставить бомбу.
- ``Event Chatter_GoingToGuardVIPSafety`` - бот говорит, что он собирается охранять зону побега VIP.
- ``Event Chatter_RescuingHostages`` - бот говорит, что он спасает заложников.
- ``Event Chatter_TeamKill`` - реакция бота на убийство товарища по команде.
- ``Event Chatter_GuardingVipSafety`` - бот говорит, что он охраняет зону побега VIP.
- ``Event Chatter_PlantingC4`` - бот говорит, что он ставит бомбу.
- ``Event Chatter_InCombat`` - бот говорит, что он прямо сейчас сражается с противником.
- ``Event Chatter_SeeksEnemy``- бот говорит, что он ждёт врага.
- ``Event Chatter_Nothing`` - бот говорит, что в этом секторе никого нет.
- ``Event Chatter_EnemyDown`` - бот говорит, что он убил противника.
- ``Event Chatter_UseHostage`` - бот говорит, что он взял заложника.
- ``Event Chatter_WonTheRound`` - реакция бота на победу.
- ``Event Chatter_QuicklyWonTheRound`` - реакция бота на быструю победу.
- ``Event Chatter_NoEnemiesLeft`` - бот говорит, что больше нет оставшихся противников.
- ``Event Chatter_FoundBombPlace`` - бот говорит, что он нашёл место с заложенной бомбой.
- ``Event Chatter_WhereIsTheBomb`` - бот спрашивает, где находится бомба.
- ``Event Chatter_DefendingBombSite`` - бот говорит, что он защищает место закладки бомбы.
- ``Event Chatter_BarelyDefused`` - реакция бота на едва обезвреженную бомбу.
- ``Event Chatter_NiceshotCommander`` - реакция бота на хороший выстрел игрока.
- ``Event Chatter_ReportingIn`` - бот говорит, что он докладывает.
- ``Event Chatter_SpotTheBomber`` - бот говорит, что он нашёл террориста несущего бомбу.
- ``Event Chatter_VIPSpotted`` - бот говорит, что он заметил VIP.
- ``Event Chatter_FriendlyFire`` - реакция бота, когда он атакован товарищем по команде.
- ``Event Chatter_GotBlinded`` - реакция бота на светошумовую гранату.
- ``Event Chatter_GuardDroppedC4`` - бот говорит, что он охраняет брошенную C4.
- ``Event Chatter_DefusingC4`` - бот говорит, что он обезвреживает C4.
- ``Event Chatter_FoundC4`` - бот говорит, что он нашёл C4.
- ``Event Chatter_ScaredEmotion`` - реакция бота, когда он встретил несколько противников и поблизости нет союзников.
- ``Event Chatter_HeardEnemy`` - бот говорит, что он слышал противника.
- ``Event Chatter_SniperWarning`` - бот предупреждает о снайпере.
- ``Event Chatter_SniperKilled`` - бот сообщает, что он убил снайпера.
- ``Event Chatter_OneEnemyLeft`` - бот говорит, что остался только один противник.
- ``Event Chatter_TwoEnemiesLeft`` - бот говорит, что осталось два противника.
- ``Event Chatter_ThreeEnemiesLeft`` - бот говорит, что осталось три противника.
- ``Event Chatter_NiceshotPall`` - реакция бота на хороший выстрел другого бота.
- ``Event Chatter_GoingToGuardHostages`` - бот говорит, что он собирается охранять заложников.
- ``Event Chatter_GoingToGuardDroppedBomb`` - бот говорит, что он собирается охранять брошенную бомбу.
- ``Event Chatter_OnMyWay`` - бот говорит, что он скоро придёт.
- ``Event Chatter_LeadOnSir`` - бот говорит игроку, что он будет следовать за ним.
- ``Event Chatter_Pinned_Down`` - бот просит помощи у союзников когда они находятся поблизости.
- ``Event Chatter_GottaFindTheBomb`` - бот говорит, что он нашёл бомбу.
- ``Event Chatter_You_Heard_The_Man`` - бот говорит о начале раунда (в данный момент не используется).
- ``Event Chatter_Lost_The_Commander`` - бот говорит, что командира (игрока) убили, относится к режиму карьеры в Counter-Strike Condition Zero.
- ``Event Chatter_NewRound`` - то же, что и ``Chatter_You_Heard_The_Man`` (в данный момент не используется).
- ``Event Chatter_CoverMe`` - бот просит чтобы его прикрыли.
- ``Event Chatter_BehindSmoke`` - бот говорит, что он находится за дымом (в данный момент не используется).
- ``Event Chatter_BombSiteSecured`` - бот говорит, что он обезвредил бомбу.
- ``Event Chatter_GoingToCamp`` - бот говорит, что он собирается кемперить (охранять территорию).
- ``Event Chatter_Camp`` - бот говорит что он кемперит.

Вот примерно так должен выглядеть этот файл::

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
