# Сборка из исходного кода

> **Примечание:** Вам нужно собрать 32-битную библиотеку, так как Valve прекратила поддержку 64-битного HLDS.

## Установка пакетов Windows

1. Установите последнюю версию Visual Studio с <https://visualstudio.microsoft.com/>
2. Запустите Visual Studio Installer, выберите требуемую редакцию Visual Studio и установите все необходимые компоненты для разработки на C/C++
3. Установите последнюю версию Git для Windows с <https://git-scm.com/download/windows/>
4. Запустите установщик и следуйте его указаниям
5. Установите последнюю версию Python с <https://www.python.org/downloads/windows/>
6. Запустите установщик и следуйте его указаниям
7. Установите Meson и Ninja используя pip, введя следующую команду в окне командной строки или powershell:

   ```
   pip install meson ninja
   ```

8. Готово!

## Установка пакетов Linux

1. Установите последнюю версиу GCC или Clang:

   ```bash
   sudo apt install gcc
   # или
   sudo apt install clang
   ```

2. Установите последнюю версию Git:

   ```bash
   sudo apt install git
   ```

3. Установите последнюю версию Python:

   ```bash
   sudo apt install python3
   ```

4. Установите пакеты gcc-multilib и g++-multilib:

   ```bash
   sudo apt install gcc-multilib g++-multilib
   ```

5. Установите Meson и Ninja используя pip:

   ```bash
   pip install meson ninja
   ```

6. Готово!

## Сборка на Windows

1. Клонируйте репозиторий YaPB:

   ```powershell
   git clone --recursive https://github.com/yapb/yapb
   ```

2. Войдите в папку с проектом YaPB:

   ```powershell
   cd yapb
   ```

3. Сконфигурируйте проект используя Meson:

   ```powershell
   meson setup build
   ```

4. Скомпилируйте DLL библиотеку:

   ```powershell
   meson compile -C build
   ```

5. Готово! Скомпилированная библиотека находится в `build/yapb.dll`

## Сборка на Linux

1. Клонируйте репозиторий YaPB:

   ```bash
   git clone --recursive https://github.com/yapb/yapb
   ```

2. Войдите в папку с проектом YaPB:

   ```bash
   cd yapb
   ```

3. Сконфигурируйте проект используя Meson:

   ```bash
   meson setup build
   ```

4. Скомпилируйте .so библиотеку:

   ```bash
   meson compile -C build
   ```

5. Готово! Скомпилированная библиотека находится в `build/yapb.so`
