# Персонализация

## Персонализация чата

Вы можете создать новую базу чата для вашего языка или изменить существующую. Она находится в папке: `addons/yapb/conf/lang`.

Для этого создайте файл `**_chat.cfg` или откройте существующий.

Боты могут писать сообщения в чате в зависимости от ситуации: закладка бомбы, убийство противника, атака тиммейтов и т.д.

### Заполнители

| Заполнитель | Описание |
|-------------|----------|
| `%v` | Вставляет ник последнего убитого игрока |
| `%f` | Вставляет ник лидера команды |
| `%t` | Вставляет ник живого тиммейта |
| `%e` | Вставляет ник живого противника |
| `%s` | Вставляет ник случайного игрока |
| `%m` | Вставляет название текущей карты |
| `%d` | Вставляет название мода из файла `liblist.gam` (Counter-Strike или Condition Zero) |

### Разделы чата

**`[BOMBPLANT]`** -- Задаёт список сообщений, которые будут писать боты после закладки бомбы.

**`[KILLED]`** -- Задаёт список сообщений для ботов, которые будут писать после убийства врага. Используйте заполнитель `%v`, чтобы написать ник убитого врага.

Пример:

```ini
[KILLED]
Ты мёртв %v!
```

Когда бот убивает врага с ником "Иван Петров", он напишет "Ты мёртв Иван Петров!", используя строку, указанную в примере.

**`[WELCOME]`** -- Задаёт список сообщений, которые бот будет писать при подключении к серверу.

**`[TEAMATTACK]`** -- Задаёт список сообщений, которые бот будет писать, когда его атакуют товарищи по команде.

**`[TEAMKILL]`** -- Задаёт список сообщений, которые бот будет писать, когда он убил товарища по команде.

**`[DEADCHAT]`** -- Задаёт список сообщений, которые бот будет писать, когда он мёртв или находится в режиме наблюдателя.

> **Внимание:** Минимальное количество сообщений - 9! Если вы напишете менее 9 сообщений для этого триггера, YaPB будет работать некорректно!

**`[REPLIES]`** -- Задаёт список сообщений, которые бот будет писать в ответ другому боту, если у него есть ответ на указанное слово. Чтобы задать слово, на которое будет ответ, вам нужно задать ключ к указанным словам, разделённым запятыми.

Пример:

```ini
[REPLIES]
@KEY "СЛОВО", "ДРУГОЕ СЛОВО"
Это ответ на указанные слова.
Это другой ответ к указанным словам.

@KEY "КЛЮЧЕВОЕ СЛОВО"
Это ответ на новое ключевое слово.
```

Вот как это будет выглядеть в игре:

```
Иван Петров: Бла бла бла слово
Рикардо Милос: Это ответ на указанные слова.

Киану Ривз: Бла бла бла другое слово бла бла...
Томми Версетти: Это другой ответ к указанным словам.

Райан Гослинг: Скажи мне ответ на новое ключевое слово.
Соуп Мактавиш: Это ответ на новое ключевое слово.
```

Боты могут использовать эти ответы в случайном порядке.

> **Внимание:** Обратите внимание, что ключевые слова в триггере `[REPLIES]` должны быть написаны заглавными буквами! В сообщениях они могут быть написаны в любом формате.

**`[UNKNOWN]`** -- Задаёт список сообщений, которые бот будет писать в ответ другому боту, если его сообщение не содержит ключевых слов из триггера `[REPLIES]`.

---

## Персонализация голосового чата

YaPB поддерживает голосовой чат, аналогично ZBot. Все пути к звуковым файлам голосового чата YaPB находятся в файле: `chatter.cfg`, который находится в папке `addons/yapb/conf`.

`RewritePath` задаёт папку, где находятся звуковые файлы для голосового чата. По умолчанию это `sound/radio/bot`.

### События радио

`Event Radio_***` задаёт имена звуковых файлов, которые будет произносить бот вместо использования определённых радиокоманд.

| Событие | Описание |
|---------|----------|
| `Event Radio_CoverMe` | "Прикройте меня!" |
| `Event Radio_YouTakePoint` | "Возьмите эту точку на себя." |
| `Event Radio_HoldPosition` | "Удерживайте эту позицию." |
| `Event Radio_RegroupTeam` | "Перегруппируйтесь." |
| `Event Radio_FollowMe` | "Следуйте за мной." |
| `Event Radio_TakingFire` | "Я под огнём... нужна поддержка!" |
| `Event Radio_GoGoGo` | "Пошли, пошли, пошли!" |
| `Event Radio_Fallback` | "Команда, отступаем!" |
| `Event Radio_StickTogether` | "Команда, держимся вместе." |
| `Event Radio_GetInPosition` | "Займите позицию и ждите моего сигнала." |
| `Event Radio_StormTheFront` | "Штурмуйте фронт!" |
| `Event Radio_ReportTeam` | "Доложите обстановку." |
| `Event Radio_Affirmative` | "Понял./Так точно." |
| `Event Radio_EnemySpotted` | "Вижу противника." |
| `Event Radio_NeedBackup` | "Нужно подкрепление." |
| `Event Radio_SectorClear` | "Сектор чист." |
| `Event Radio_InPosition` | "Я на позиции." |
| `Event Radio_ReportingIn` | "Докладываю." |
| `Event Radio_ShesGonnaBlow` | "Уходим отсюда, она сейчас взорвётся!" |
| `Event Radio_Negative` | "Никак нет." |
| `Event Radio_EnemyDown` | "Противник убит." |

Вы можете закомментировать эти строки, если хотите, чтобы боты использовали стандартные радиокоманды.

### События переговоров

`Event Chatter_***` задаёт имена звуковых файлов, которые будет произносить бот во время переговоров.

| Событие | Описание |
|---------|----------|
| `Chatter_DiePain` | Звуки смерти бота |
| `Chatter_GoingToPlantBomb` | Бот говорит, что собирается ставить бомбу |
| `Chatter_GoingToGuardVIPSafety` | Бот говорит, что собирается охранять зону побега VIP |
| `Chatter_RescuingHostages` | Бот говорит, что спасает заложников |
| `Chatter_TeamKill` | Реакция бота на убийство товарища по команде |
| `Chatter_GuardingVipSafety` | Бот говорит, что охраняет зону побега VIP |
| `Chatter_PlantingC4` | Бот говорит, что ставит бомбу |
| `Chatter_InCombat` | Бот говорит, что прямо сейчас сражается с противником |
| `Chatter_SeeksEnemy` | Бот говорит, что ждёт врага |
| `Chatter_Nothing` | Бот говорит, что в этом секторе никого нет |
| `Chatter_EnemyDown` | Бот говорит, что убил противника |
| `Chatter_UseHostage` | Бот говорит, что взял заложника |
| `Chatter_WonTheRound` | Реакция бота на победу |
| `Chatter_QuicklyWonTheRound` | Реакция бота на быструю победу |
| `Chatter_NoEnemiesLeft` | Бот говорит, что больше нет оставшихся противников |
| `Chatter_FoundBombPlace` | Бот говорит, что нашёл место с заложенной бомбой |
| `Chatter_WhereIsTheBomb` | Бот спрашивает, где находится бомба |
| `Chatter_DefendingBombSite` | Бот говорит, что защищает место закладки бомбы |
| `Chatter_BarelyDefused` | Реакция бота на едва обезвреженную бомбу |
| `Chatter_NiceshotCommander` | Реакция бота на хороший выстрел игрока |
| `Chatter_ReportingIn` | Бот говорит, что докладывает |
| `Chatter_SpotTheBomber` | Бот говорит, что заметил террориста с бомбой |
| `Chatter_VIPSpotted` | Бот говорит, что заметил VIP |
| `Chatter_FriendlyFire` | Реакция бота, когда он атакован товарищем по команде |
| `Chatter_GotBlinded` | Реакция бота на светошумовую гранату |
| `Chatter_GuardingPlantedC4` | Бот говорит, что охраняет установленную C4 |
| `Chatter_GuardingEscapeZone` | Бот сообщает, что охраняет зону побега террористов |
| `Chatter_GoingToGuardEscapeZone` | Бот говорит, что собирается охранять зону побега террористов |
| `Chatter_GoingToGuardRescueZone` | Бот говорит, что собирается охранять зону спасения заложников |
| `Chatter_DefusingC4` | Бот говорит, что обезвреживает C4 |
| `Chatter_FoundC4` | Бот говорит, что нашёл C4 |
| `Chatter_ScaredEmotion` | Реакция бота, когда он встретил несколько противников и поблизости нет союзников |
| `Chatter_HeardEnemy` | Бот говорит, что слышал противника |
| `Chatter_SpottedOneEnemy` | Бот говорит, что заметил одного противника |
| `Chatter_SpottedTwoEnemies` | Бот говорит, что заметил двух противников |
| `Chatter_SpottedThreeEnemies` | Бот говорит, что заметил трёх противников |
| `Chatter_TooManyEnemies` | Бот говорит, что заметил много противников (четыре или более) |
| `Chatter_SniperWarning` | Бот предупреждает о снайпере |
| `Chatter_SniperKilled` | Бот сообщает, что убил снайпера |
| `Chatter_OneEnemyLeft` | Бот говорит, что остался только один противник |
| `Chatter_TwoEnemiesLeft` | Бот говорит, что осталось два противника |
| `Chatter_ThreeEnemiesLeft` | Бот говорит, что осталось три противника |
| `Chatter_NiceshotPall` | Реакция бота на хороший выстрел другого бота |
| `Chatter_GoingToGuardHostages` | Бот говорит, что собирается охранять заложников |
| `Chatter_GoingToGuardDroppedBomb` | Бот говорит, что собирается охранять брошенную бомбу |
| `Chatter_OnMyWay` | Бот говорит, что скоро придёт |
| `Chatter_LeadOnSir` | Бот говорит игроку, что будет следовать за ним |
| `Chatter_Pinned_Down` | Бот просит помощи у союзников, когда они находятся поблизости |
| `Chatter_GottaFindTheBomb` | Бот говорит, что нашёл бомбу |
| `Chatter_You_Heard_The_Man` | Бот отвечает на фразы из `Chatter_NewRound` (в данный момент не используется) |
| `Chatter_Lost_The_Commander` | Бот говорит, что командир (игрок) был убит (в данный момент не используется) |
| `Chatter_NewRound` | Бот говорит о начале раунда (в данный момент не используется) |
| `Chatter_CoverMe` | Бот просит, чтобы его прикрыли |
| `Chatter_BehindSmoke` | Бот говорит, что находится за дымом (в данный момент не используется) |
| `Chatter_BombSiteSecured` | Бот говорит, что обезвредил бомбу |
| `Chatter_GoingToCamp` | Бот говорит, что собирается кемперить (охранять территорию) |
| `Chatter_Camp` | Бот говорит, что кемперит |
| `Chatter_OnARoll` | Бот хвастается убийством большого количества противников за короткое время |

### Пример chatter.cfg

```ini
RewritePath sound/radio/bot

Event Radio_CoverMe = cover_me, cover_me2
// Event Radio_YouTakePoint =
// Event Radio_HoldPosition =
// Event Radio_RegroupTeam =
// Event Radio_FollowMe =
Event Radio_TakingFire = taking_fire_need_assistance2, i_could_use_some_help, i_could_use_some_help_over_here, help, need_help, need_help2, im_in_trouble

// Event Radio_GoGoGo =
// Event Radio_Fallback =
// Event Radio_StickTogether =
// Event Radio_GetInPosition =
// Event Radio_StormTheFront =
Event Radio_ReportTeam = report_in_team, anyone_see_them, anyone_see_anything, where_are_they, where_could_they_be

Event Radio_Affirmative = affirmative, roger_that, me_too, ill_come_with_you, ill_go_with_you, ill_go_too, i_got_your_back, i_got_your_back2, im_with_you, im_with_you, sounds_like_a_plan, good_idea
// Event Radio_EnemySpotted =
// Event Radio_NeedBackup =
Event Radio_SectorClear = clear, clear2, clear3, clear4, area_clear, all_clear_here, nothing_moving_over_here, all_quiet, nothing_happening_over_here, i_got_nothing, nothing, nothing_here, theres_nobody_home
Event Radio_InPosition = lets_wait_here, lets_hold_up_here_for_a_minute, im_gonna_hang_back, im_going_to_wait_here, im_waiting_here
Event Radio_ReportingIn = reporting_in
// Event Radio_ShesGonnaBlow =
Event Radio_Negative = ahh_negative, negative, no2, negative2, i_dont_think_so, naa, no_thanks, no, nnno_sir, no_sir
Event Radio_EnemyDown = enemy_down, enemy_down2

// end of radio, begin some voices (NOT SORTED)
Event Chatter_SpotTheBomber = i_see_the_bomber, theres_the_bomber, hes_got_the_bomb, hes_got_the_bomb2, hes_got_the_package, spotted_the_delivery_boy
Event Chatter_FriendlyFire = cut_it_out, what_are_you_doing, stop_it, ow_its_me, ow, ouch, im_on_your_side, hold_your_fire, hey, hey2, ouch, ouch, ouch
Event Chatter_DiePain = pain2, pain4, pain5, pain8, pain9, pain10
Event Chatter_GotBlinded = ive_been_blinded, my_eyes, i_cant_see, im_blind
Event Chatter_GoingToPlantBomb = im_gonna_go_plant, im_gonna_go_plant_the_bomb
Event Chatter_RescuingHostages = the_hostages_are_with_me, taking_the_hostages_to_safety, ive_got_the_hostages, i_have_the_hostages
Event Chatter_GoingToCamp = im_going_to_camp
Event Chatter_TeamKill = what_happened, noo, oh_my_god, oh_man, oh_no_sad, what_have_you_done
Event Chatter_ReportingIn = reporting_in
Event Chatter_GuardingPlantedC4 = bombsite_secure, bombsite_under_control
Event Chatter_Camp = im_waiting_here
Event Chatter_PlantingC4 = planting_the_bomb, planting
Event Chatter_DefusingC4 = defusing, defusing_bomb, defusing_bomb_now
Event Chatter_InCombat = attacking, attacking_enemies, engaging_enemies, in_combat, in_combat2, returning_fire
Event Chatter_SeeksEnemy = lets_wait_here, lets_hold_up_here_for_a_minute, im_gonna_hang_back, im_going_to_wait_here, im_waiting_here
Event Chatter_Nothing = nothing_here, nothing
Event Chatter_EnemyDown = hes_dead, hes_down, got_him, dropped_him, killed_him, ruined_his_day, wasted_him, made_him_cry, took_him_down, took_him_out2, took_him_out, hes_broken, hes_done
Event Chatter_UseHostage = talking_to_hostages, rescuing_hostages
Event Chatter_FoundC4 = bombs_on_the_ground, bombs_on_the_ground_here, the_bomb_is_down, the_bomb_is_on_the_ground, they_dropped_the_bomb
Event Chatter_WonTheRound = good_job_team, nice_work_team, way_to_be_team, well_done
Event Chatter_QuicklyWonTheRound = i_am_dangerous, do_not_mess_with_me, we_owned_them, they_never_knew_what_hit_them, thats_the_way_this_is_done, and_thats_how_its_done, owned, yesss, yesss2, yea_baby, whoo, whoo2, oh_yea, oh_yea2
Event Chatter_ScaredEmotion = whoa, uh_oh, oh_no, yikes, oh, oh_boy, oh_boy2, aah
Event Chatter_HeardEnemy = i_hear_them, hang_on_i_heard_something, i_hear_something, i_heard_them, i_heard_something_over_there
Event Chatter_SpottedOneEnemy = one_guy
Event Chatter_SpottedTwoEnemies = two_of_them
Event Chatter_SpottedThreeEnemies = three, three_of_them
Event Chatter_TooManyEnemies = a_bunch_of_them, they're_all_over_the_place2, they're_everywhere2, theres_too_many_of_them, theres_too_many, too_many2, the_actions_hot_here, its_a_party
Event Chatter_SniperWarning = sniper, sniper2, watch_it_theres_a_sniper
Event Chatter_SniperKilled = got_the_sniper, got_the_sniper2, sniper_down, took_out_the_sniper, the_sniper_is_dead
Event Chatter_VIPSpotted = i_see_our_target, target_spotted, target_acquired
Event Chatter_GuardingEscapeZone = watching_the_escape_zone, watching_the_escape_route, they_will_not_escape, im_at_the_escape_zone, guarding_the_escape_zone, guarding_the_escape_zone2
Event Chatter_GuardingVipSafety = watching_the_escape_route, im_at_the_escape_zone, watching_the_escape_zone, guarding_the_escape_zone, guarding_the_escape_zone2
Event Chatter_GoingToGuardEscapeZone = im_going_to_keep_an_eye_on_the_escape, im_going_to_watch_the_escape_zone, im_going_to_cover_the_escape_zone
Event Chatter_GoingToGuardRescueZone = im_going_to_watch_the_rescue_zone, im_going_to_keep_an_eye_on_the_rescue
Event Chatter_GoingToGuardVIPSafety = im_going_to_cover_the_escape_zone, im_going_to_watch_the_escape_zone, im_going_to_keep_an_eye_on_the_escape, heading_to_the_escape_zone
Event Chatter_OneEnemyLeft = one_guy_left, theres_one_left
Event Chatter_TwoEnemiesLeft = two_enemies_left, two_to_go
Event Chatter_ThreeEnemiesLeft = three_left, three_to_go, three_to_go2
Event Chatter_NoEnemiesLeft = that_was_the_last_one, that_was_it, that_was_the_last_guy
Event Chatter_FoundBombPlace = theres_the_bomb, theres_the_bomb2
Event Chatter_WhereIsTheBomb = wheres_the_bomb, wheres_the_bomb2, wheres_the_bomb3, where_is_it
Event Chatter_DefendingBombSite = bombsite_secured, bombsite_under_control
Event Chatter_BarelyDefused = i_wasnt_worried_for_a_minute, that_was_a_close_one, well_done, whew_that_was_close
Event Chatter_NiceshotCommander = good_one_sir, good_one_sir2, nice_shot_sir, nice_one_sir
Event Chatter_NiceshotPall = good_one, good_one2, nice_shot, nice_shot2, good_shot, good_shot2, nice, nice2, very_nice
Event Chatter_GoingToGuardHostages = camping_hostages, im_going_to_camp_the_hostages, im_going_to_guard_the_hostages, im_going_to_guard_the_hostages2
Event Chatter_GoingToGuardDroppedBomb = im_going_to_guard_the_bomb, im_going_to_guard_the_bomb2, im_going_to_keep_an_eye_on_the_bomb, im_going_to_watch_the_bomb
Event Chatter_OnMyWay = on_my_way, on_my_way2, im_coming, hang_on_im_coming, be_right_there
Event Chatter_LeadOnSir = lead_on_sir, lead_the_way_sir, lead_the_way, ok_sir_lets_go, lead_on_commander, lead_the_way_commander, ok_cmdr_lets_go
Event Chatter_Pinned_Down = they_got_me_pinned_down_here, im_pinned_down
Event Chatter_GottaFindTheBomb = theres_the_bomb, theres_the_bomb2
Event Chatter_Lost_The_Commander = weve_lost_the_commander, the_commander_is_down, the_commander_is_down_repeat
Event Chatter_CoverMe = cover_me, cover_me2
Event Chatter_BombSiteSecured = i_wasnt_worried_for_a_minute, that_was_a_close_one, well_done, whew_that_was_close
Event Chatter_OnARoll = i_got_more_where_that_came_from, who_wants_some_more, i_am_on_fire, look_out_brag, thats_right, whos_the_man
```
