**************************
Сборка бота
**************************

.. contents:: Содержание

Прежде чем вы начнёте
======================
Если у вас есть все требуемые пакеты, вы можете пропустить этот шаг.

.. Note:: Вам нужно собрать 32-битную библиотеку, так как Valve прекратила поддержку 64-битного режима HLDS.

Установка пакетов Windows
-----------------------------------
- Установите последнюю версию Visual Studio с https://visualstudio.microsoft.com/
- Запустите Visual Studio Installer, выберите требуемую редакцию Visual Studio и установите все необходимые компоненты для разработки на C/C++.
- Установите последнюю версию Git для Windows с https://git-scm.com/download/windows/
- Запустите установщик, и следуйте его указаниям. 
- Установите последнюю версию Python с https://www.python.org/downloads/windows/
- Запустите установщик, и следуйте его указаниям.
- Установите Meson и Ninja используя pip, введя следующую команду в окне командной строки или powershell ``pip install meson ninja``.
- Готово!

Установка пакетов Linux
-----------------------------------
- Установите последнюю версию GCC или Clang, введя следующую команду в окне терминала ``sudo apt install gcc``, или ``sudo apt install clang``.
- Установите последнюю версию Git, введя следующую команду в окне терминала ``sudo apt install git``.
- Установите последнюю версию Python, введя следующую команду в окне терминала ``sudo apt install python3``.
- Установите пакеты gcc-multilib и g++-multilib, введя следующую команду в окне терминала ``sudo apt install gcc-multilib g++-multilib``.
- Установите Meson и Ninja используя pip, введя следующую команду в окне терминала ``pip install meson ninja``.
- Готово!

Сборка на Windows
=======================
- Клонируйте репозиторий YaPB, введя следующую команду в окне Visual Studio Developer PowerShell или Visual Studio Developer Command Prompt ``git clone --recursive https://github.com/yapb/yapb``
- Войдите в папку с проектом YaPB: ``cd yapb``
- Сконфигурируйте этот проект используя Meson: ``meson setup build``
- Скомпилируйте DLL библиотеку: ``meson compile -C build``
- Готово! Скомпилированная библиотека находится в ``build/yapb.dll``

Сборка на Linux
=======================
- Клонируйте репозиторий YaPB, введя следующую команду в окне терминала ``git clone --recursive https://github.com/yapb/yapb``
- Войдите в папку с проектом YaPB: ``cd yapb``
- Сконфигурируйте этот проект используя Meson: ``meson setup build``
- Скомпилируйте .so библиотеку: ``meson compile -C build``
- Готово! Скомпилированная библиотека находится в ``build/yapb.so``
