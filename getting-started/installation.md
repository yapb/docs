# Установка

## Прежде чем вы начнёте

В отличие от многих других разновидностей PODBot, YaPB может работать как плагин metamod, так и как отдельная DLL для всех поддерживаемых платформ (кроме Android) без изменений so/dll/dylib.

> **Важно:** Если у вас установлены некоторые моды, такие как AMX Mod X, вам следует рассмотреть возможность установки ботов как плагин metamod, а не как отдельную DLL. В других ситуациях **нет** требования к установке metamod перед установкой YaPB.

Документация по установке охватывает только установку бота на подлинную Steam-версию Counter-Strike. Предположим, что если вы запускаете что-то особенное, то вы знаете, как установить бота как отдельную DLL библиотеку или как плагин metamod.

> **Примечание:** Доступен только 32-битный бинарный файл, так как Valve прекратила поддержку 64-битного HLDS.

---

## Установка бота на Windows

YaPB поддерживает установку на локальном и выделенном сервере под Windows. Многие используют её в качестве основной операционной системы, поэтому у бота есть простой установщик, который может помочь вам добавить ботов в игру. Если вы не хотите устанавливать вручную, используйте установщик.

### Использование программы установки

1. Скачайте последнюю версию установщика YaPB из <https://yapb.jeefo.net/latest> (например: `yapb-4.4.957-windows.exe`)
2. Запустите программу
3. Нажмите `Обзор` и укажите, где находится `hl.exe`/`hlds.exe`
4. Нажмите `Установить` для установки бота
5. Готово!

> **Важно:** Программа установки автоматически определит, используете ли вы metamod, и автоматически исправит файл `plugins.ini`, добавив запись, указывающую на `yapb.dll`. Если metamod отсутствует, установщик исправит файл `liblist.gam`, чтобы он указывал на `yapb.dll`.

> **Внимание:** Установщик имеет функцию обнаружения папок игры Counter-Strike. Он просматривает все каталоги, где находится выбранный `hl.exe`/`hlds.exe` и проверяет библиотеку на наличие символов экспорта `weapon_ak47` и `weapon_m4a1`, и, если это так, при условии, что эта папка содержит какую-то версию Counter-Strike, он автоматически устанавливает бота в эту папку.

### Установка без Metamod

Предположим, что ваш Counter-Strike находится в: `C:\Steam\steamapps\common\Half-Life\cstrike`.

> **Примечание:** Если вы устанавливаете для Condition Zero, тогда установите его в папку `czero`

1. Скачайте последнюю версию `ZIP` архива YaPB из <https://yapb.jeefo.net/latest> (например: `yapb-4.4.957-windows.zip`)
2. Распакуйте скачанный архив в папку `C:\Steam\steamapps\common\Half-Life\cstrike`
3. Откройте файл под названием `liblist.gam` в блокноте или любом другом текстовом редакторе (находящийся в `C:\Steam\steamapps\common\Half-Life\cstrike`)
4. Найдите запись `gamedll`. Она должна указывать на `dlls\mp.dll`
5. Измените запись с `gamedll "dlls\mp.dll"` на `gamedll "addons\yapb\bin\yapb.dll"`
6. Сохраните изменения
7. Готово!

### Установка в качестве metamod плагина

Предположим, что ваш Counter-Strike находится в: `C:\Steam\steamapps\common\Half-Life\cstrike`.

> **Примечание:** Если вы устанавливаете для Condition Zero, тогда установите его в папку `czero`

1. Скачайте последнюю версию `ZIP` архива YaPB из <https://yapb.jeefo.net/latest> (например: `yapb-4.4.957-windows.zip`)
2. Распакуйте скачанный архив в папку `C:\Steam\steamapps\common\Half-Life\cstrike`
3. Откройте файл под названием `plugins.ini` в блокноте или любом другом текстовом редакторе (находящийся в `C:\Steam\steamapps\common\Half-Life\cstrike\addons\metamod`)
4. Добавьте следующую запись: `win32 addons/yapb/bin/yapb.dll`
5. Сохраните изменения
6. Готово!

---

## Установка бота на Linux

YaPB поддерживает установку на локальном и выделенном сервере под Linux. Установщик не предоставляется для Linux.

### Установка без Metamod

Предположим, что ваш Counter-Strike находится в: `/usr/Steam/steamapps/common/Half-Life/cstrike`.

> **Примечание:** Если вы устанавливаете для Condition Zero, тогда установите его в папку `czero`

1. Скачайте последнюю версию `TAR.XZ` архива YaPB из <https://yapb.jeefo.net/latest> (например: `yapb-4.4.957-linux.tar.xz`)
2. Распакуйте скачанный архив в папку `/usr/Steam/steamapps/common/Half-Life/cstrike`
3. Откройте файл под названием `liblist.gam` в любом текстовом редакторе (находящийся в `/usr/Steam/steamapps/common/Half-Life/cstrike`)
4. Найдите запись `gamedll_linux`. Она должна указывать на `dlls/cs.so`
5. Измените запись с `gamedll_linux "dlls/cs.so"` на `gamedll_linux "addons/yapb/bin/yapb.so"`
6. Сохраните изменения
7. Готово!

### Установка в качестве metamod плагина

Предположим, что ваш Counter-Strike находится в: `/usr/Steam/steamapps/common/Half-Life/cstrike`.

> **Примечание:** Если вы устанавливаете для Condition Zero, тогда установите его в папку `czero`

1. Скачайте последнюю версию `TAR.XZ` архива YaPB из <https://yapb.jeefo.net/latest> (например: `yapb-4.4.957-linux.tar.xz`)
2. Распакуйте скачанный архив в папку `/usr/Steam/steamapps/common/Half-Life/cstrike`
3. Откройте файл под названием `plugins.ini` в любом текстовом редакторе (находящийся в `/usr/Steam/steamapps/common/Half-Life/cstrike/addons/metamod`)
4. Добавьте следующую запись: `linux addons/yapb/bin/yapb.so`
5. Сохраните изменения
6. Готово!

---

## Установка бота на macOS

YaPB может быть установлен только на локальном сервере, если вы используете macOS.

> **Примечание:** Поддержка macOS прекращена. Бинарный файл YaPB перемещён в пакет `extras` и находится в папке `darwin-x86`.

> **Примечание:** Существует неофициальный бинарный файл `hlds_osx`, предоставленный AlliedModders LLC, позволяющий вам запускать HLDS под macOS. Вы можете попробовать скачать его [отсюда](https://forums.alliedmods.net/showpost.php?p=2041538&postcount=11).

> **Примечание:** Valve не обновляла GoldSrc игры для поддержки macOS Catalina, и Apple отказалась от поддержки 32-битных программ, поэтому в Counter-Strike невозможно играть на последних выпусках macOS. YaPB по-прежнему предоставляет бинарные файлы для пользователей старых версий, идущих перед Catalina. Как только Valve (если вообще когда-либо) выпустит Counter-Strike для macOS Catalina, будут доступны 64-битные бинарные файлы YaPB.

### Установка без Metamod

Предположим, что ваш Counter-Strike находится в: `/Users/user/Library/Application Support/Steam/steamapps/common/Half-Life/cstrike`.

> **Примечание:** Если вы устанавливаете для Condition Zero, тогда установите его в папку `czero`

1. Скачайте последнюю версию пакета YaPB с сайта <https://yapb.jeefo.net/latest> (например: `yapb-4.4.957-windows.zip` или `yapb-4.4.957-linux.tar.xz`)
2. Скачайте последнюю версию пакета extras с сайта <https://yapb.jeefo.net/latest> (например: `yapb-4.4.957-extras.zip`)
3. Распакуйте скачанный пакет YaPB в директорию `/Users/user/Library/Application Support/Steam/steamapps/common/Half-Life/cstrike`
4. Распакуйте бинарный файл `yapb.dylib` из папки `darwin-x86` в скачанном пакете extras в директорию `/Users/user/Library/Application Support/Steam/steamapps/common/Half-Life/cstrike/addons/yapb/bin`
5. Откройте файл под названием `liblist.gam` в любом текстовом редакторе (находящийся в `/Users/user/Library/Application Support/Steam/steamapps/common/Half-Life/cstrike`)
6. Найдите запись `gamedll_osx`. Она должна указывать на `dlls/cs.dylib`
7. Измените запись с `gamedll_osx "dlls/cs.dylib"` на `gamedll_osx "addons/yapb/bin/yapb.dylib"`
8. Сохраните изменения
9. Готово!

### Установка в качестве metamod плагина

Предположим, что ваш Counter-Strike находится в: `/Users/user/Library/Application Support/Steam/steamapps/common/Half-Life/cstrike`.

> **Примечание:** Если вы устанавливаете для Condition Zero, тогда установите его в папку `czero`

1. Скачайте последнюю версию пакета YaPB с сайта <https://yapb.jeefo.net/latest> (например: `yapb-4.4.957-windows.zip` или `yapb-4.4.957-linux.tar.xz`)
2. Скачайте последнюю версию пакета extras с сайта <https://yapb.jeefo.net/latest> (например: `yapb-4.4.957-extras.zip`)
3. Распакуйте скачанный пакет YaPB в директорию `/Users/user/Library/Application Support/Steam/steamapps/common/Half-Life/cstrike`
4. Распакуйте бинарный файл `yapb.dylib` из папки `darwin-x86` в скачанном пакете extras в директорию `/Users/user/Library/Application Support/Steam/steamapps/common/Half-Life/cstrike/addons/yapb/bin`
5. Откройте файл под названием `plugins.ini` в любом текстовом редакторе (находящийся в `/Users/user/Library/Application Support/Steam/steamapps/common/Half-Life/cstrike/addons/metamod`)
6. Добавьте следующую запись: `osx addons/yapb/bin/yapb.dylib`
7. Сохраните изменения
8. Готово!
