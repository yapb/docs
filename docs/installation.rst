**************************
Установка
**************************

.. contents:: Содержание

Краткая информация
==========================

Прежде чем вы начнёте
--------------------------
В отличие от многих других разновидностей podbot, YaPB может работать как плагин metamod также как и отдельный dll для всех поддерживаемых платформ (кроме Android) без изменений so/dll/dylib.

.. Important:: Если у вас установлены некоторые моды, такие как AMX Mod X, вам следует рассмотреть возможность установки ботов как плагин metamod, а не как отдельную dll. В других ситуациях **нет** требования к установке metamod перед установкой YaPB.

Документы по установке охватывают только установку бота на подлинную Steam-версию Counter-Strike. Предполагая, что если вы запускаете что-то особенное, вы знаете, как установить бота как отдельную dll библиотеку или как плагин metamod.

.. Note:: Доступен только 32-битный бинарный файл, так как Valve прекратила поддержку 64-битного HLDS.


Установка бота на Windows
==========================
YaPB поддерживает установку на локальном и выделенном сервере под Windows. Многие используют её в качестве основной операционной системы, поэтому у бота есть простой установщик, который может помочь вам добавить ботов в игру. Если вы не хотите устанавливать вручную, используйте установщик.

Установка с помощью программы установки
-----------------------------------------
- Скачайте последнюю версию установщика YaPB из https://yapb.jeefo.net/latest (например: ``yapb-4.2.637-windows.exe``)
- Запустите программу. Заметьте, что она не подписана сертификатом. Так что примите предупреждение.
- Нажмите ``Обзор`` и укажите где находится ``hl.exe``/``hlds.exe``.
- Нажмите ``Установить`` чтобы установить бота.
- Готово!

.. Important:: Программа установки автоматически определит, используете ли вы metamod, и автоматически исправит файл ``plugins.ini`` добавив запись указывающую на ``yapb.dll``. Если metamod отсутствует, установщик исправит файл ``liblist.gam`` чтобы он указывал на ``yapb.dll``

.. Caution:: Установщик имеет функцию обнаружения папок игры Counter-Strike. Он просматривает все каталоги, где находится выбранный ``hl.exe``/``hlds.exe`` и проверяет библиотеку на наличие символов экспорта ``weapon_ak47`` и ``weapon_m4a1``, и, если это так, при условии, что эта папка содержит какую-то версию Counter-Strike, он автоматически устанавливает бота в эту папку.

Установка без metamod
--------------------------
Предположим, что ваш Counter-Strike находится в: ``c:\steam\steamapps\common\half-life\cstrike``.

.. Note:: Если вы устанавливаете для Condition Zero, тогда измените папку с ``cstrike`` на ``czero``.

- Скачайте последнюю версию ``ZIP`` архива YaPB из https://yapb.jeefo.net/latest (например: ``yapb-4.2.637-windows.zip``)
- Распакуйте скачанный архив в папку ``c:\steam\steamapps\common\half-life\cstrike``.
- Откройте файл названный ``liblist.gam`` в блокноте или любом другом текстовом редакторе. (находящийся в ``c:\steam\steamapps\common\half-life\cstrike``.)
- Найдите запись ``gamedll``. Она должна указывать на ``dlls\mp.dll``.
- Измените запись с ``gamedll "dlls\mp.dll"`` на ``gamedll "addons\yapb\bin\yapb.dll"``.
- Сохраните изменения.
- Готово!

Установка в качестве metamod плагина
--------------------------------------
Предположим, что ваш Counter-Strike находится в: ``c:\steam\steamapps\common\half-life\cstrike``.

.. Note:: Если вы устанавливаете для Condition Zero, тогда измените папку с ``cstrike`` на ``czero``.

- Скачайте последнюю версию ``ZIP`` архива YaPB из https://yapb.jeefo.net/latest (например: ``yapb-4.2.637-windows.zip``)
- Распакуйте скачанный архив в папку ``c:\steam\steamapps\common\half-life\cstrike``.
- Откройте файл названный ``plugins.ini`` в блокноте или любом другом текстовом редакторе. (находящийся в ``c:\steam\steamapps\common\half-life\cstrike\addons\metamod``.)
- Добавьте следующую запись: ``win32 addons/yapb/bin/yapb.dll``.
- Сохраните изменения.
- Готово!

Установка бота на Linux
==========================
YaPB поддерживает установку на локальном и выделенном сервере под Linux. Установщик не предоставляется для Linux.

Установка без metamod
--------------------------
Предположим, что ваш Counter-Strike находится в: ``/usr/steam/steamapps/common/half-life/cstrike``.

.. Note:: Если вы устанавливаете для Condition Zero, тогда измените папку с ``cstrike`` на ``czero``.

- Скачайте последнюю версию ``TAR.GZ`` архива YaPB из https://yapb.jeefo.net/latest (например: ``yapb-4.2.637-linux.tar.gz``)
- Распакуйте скачанный архив в папку ``/usr/steam/steamapps/common/half-life/cstrike``.
- Откройте файл названный ``liblist.gam`` в вашем любимом редакторе. (находящийся в ``/usr/steam/steamapps/common/half-life/cstrike``)
- Найдите запись ``gamedll_linux``. Она должна указывать на ``dlls/cs.so``.
- Измените запись с ``gamedll_linux "dlls/cs.so"`` на ``gamedll_linux "addons/yapb/bin/yapb.so"``.
- Сохраните изменения.
- Готово!

Установка в качестве metamod плагина
--------------------------------------
Предположим, что ваш Counter-Strike находится в: ``/usr/steam/steamapps/common/half-life/cstrike``.

.. Note:: Если вы устанавливаете для Condition Zero, тогда измените папку с ``cstrike`` на ``czero``.

- Скачайте последнюю версию ``TAR.GZ`` архива YaPB из https://yapb.jeefo.net/latest (например: ``yapb-4.2.637-linux.tar.gz``)
- Распакуйте скачанный архив в папку ``/usr/steam/steamapps/common/half-life/cstrike``.
- Откройте файл названный ``plugins.ini`` в вашем любимом редакторе. (находящийся в ``/usr/steam/steamapps/common/half-life/cstrike/addons/metamod``.)
- Добавьте следующую запись: ``linux addons/yapb/bin/yapb.so``.
- Сохраните изменения.
- Готово!

Установка бота на Mac OS X
==========================
YaPB может быть установлен только на локальном сервере, если вы используете Mac OS X.

.. Note:: Существует неофициальный бинарный файл ``hlds_osx`` предоставленный AlliedModders LLC, позволяющий вам запускать HLDS под OSX. Вы можете попробовать скачать его отсюда_.

.. _отсюда: https://forums.alliedmods.net/showpost.php?p=2041538&postcount=11

.. Note:: Valve не обновляла игры GoldSrc для поддержки OS X Catalina, а Apple отказалась от поддержки 32-битных программ, поэтому в Counter-Strike невозможно играть на последних выпусках OSX. YaPB по прежнему предоставляет бинарные файлы для пользователей старых версий идущих перед Catalina. Как только Valve (если вообще когда-либо) выпустит Counter-Strike для OS X Catalina, будут доступны 64-битные бинарные файлы YaPB.

Установка без metamod
--------------------------
Предположим, что ваш Counter-Strike находится в: ``/Users/user/Library/Application Support/Steam/steamapps/common/Half-Life/cstrike``.

.. Note:: Если вы устанавливаете для Condition Zero, тогда измените папку с ``cstrike`` на ``czero``.

- Скачайте последнюю версию ``ZIP`` архива YaPB из https://yapb.jeefo.net/latest (например: ``yapb-4.2.637-macos.zip``)
- Распакуйте скачанный архив в папку ``/Users/user/Library/Application Support/Steam/steamapps/common/Half-Life/cstrike``.
- Откройте файл названный ``liblist.gam`` в вашем любимом редакторе. (находящийся в ``/Users/user/Library/Application Support/Steam/steamapps/common/Half-Life/cstrike``.)
- Найдите запись ``gamedll_osx``. Она должна указывать на ``dlls/cs.dylib``.
- Измените запись с ``gamedll_osx "dlls/cs.dylib"`` на ``gamedll_osx "addons/yapb/bin/yapb.dylib"``.
- Сохраните изменения.
- Готово!

Установка в качестве metamod плагина
--------------------------------------
Предположим, что ваш Counter-Strike находится в: ``/Users/user/Library/Application Support/Steam/steamapps/common/Half-Life/cstrike``.

.. Note:: Если вы устанавливаете для Condition Zero, тогда измените папку с ``cstrike`` на ``czero``.

- Скачайте последнюю версию ``ZIP`` архива YaPB из https://yapb.jeefo.net/latest (например: ``yapb-4.2.637-macos.zip``)
- Распакуйте скачанный архив в папку ``/Users/user/Library/Application Support/Steam/steamapps/common/Half-Life/cstrike``.
- Откройте файл названный ``plugins.ini`` в вашем любимом редакторе. (находящийся в ``/Users/user/Library/Application Support/Steam/steamapps/common/Half-Life/cstrike/addons/metamod``)
- Добавьте следующую запись: ``osx addons/yapb/bin/yapb.dylib``.
- Сохраните изменения.
- Готово!
