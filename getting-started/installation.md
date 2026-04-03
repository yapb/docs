# Installation

## Before you begin

Unlike many other PODBot flavours, YaPB is able to run as a metamod plugin as well as a standalone DLL for every platform it supports (except Android) without changing the so/dll/dylib.

> **Important:** If you have some mods like AMX Mod X installed, you should consider installing bots as a metamod plugin, not as a standalone DLL. In other situations there is **no** requirement to install metamod before installing YaPB.

Installation docs only cover installing the bot on a genuine Steam version of Counter-Strike. Assuming that if you run something special, you know how to install the bot as a standalone DLL or as a metamod plugin.

> **Note:** Only 32-bit binary is available, since Valve has dropped support for 64-bit HLDS.

---

## Installing on Windows

YaPB supports installing both on listen and dedicated server under Windows. Many people are using it as their main operating system, so the bot has a simple installer that could assist you in adding bots to the game. If you don't want to install manually, please use an installer.

### Using the setup program

1. Download the latest YaPB bot installer from <https://yapb.jeefo.net/latest> (example: `yapb-4.4.957-windows.exe`)
2. Run the program
3. Press `Browse` and point to where `hl.exe`/`hlds.exe` is located
4. Press `Install` to install the bot
5. You're done!

> **Important:** The installer program automatically detects whether you use metamod, and will patch the `plugins.ini` file automatically for you, adding an entry to point to `yapb.dll`. If there is no metamod, the installer will patch the `liblist.gam` file to point to `yapb.dll`.

> **Caution:** The installer has a feature for detecting Counter-Strike game folders. It looks up all directories where the selected `hl.exe`/`hlds.exe` is located and checks the library for containing export symbols `weapon_ak47` and `weapon_m4a1`, and if so assumes that this folder contains some Counter-Strike version, it will install the bot to this directory automatically.

### Without Metamod

Assuming that your Counter-Strike is located at: `C:\Steam\steamapps\common\Half-Life\cstrike`.

> **Note:** If you're installing the bot for Condition Zero, then install it to the `czero` folder instead.

1. Download the latest `ZIP` YaPB package from <https://yapb.jeefo.net/latest> (example: `yapb-4.4.957-windows.zip`)
2. Unzip the downloaded package to `C:\Steam\steamapps\common\Half-Life\cstrike` directory
3. Open a file called `liblist.gam` in Notepad or any other text editor (located in `C:\Steam\steamapps\common\Half-Life\cstrike`)
4. Locate the entry `gamedll`. It should point to `dlls\mp.dll`
5. Change entry from `gamedll "dlls\mp.dll"` to `gamedll "addons\yapb\bin\yapb.dll"`
6. Save the changes
7. You're done!

### As a Metamod plugin

Assuming that your Counter-Strike is located at: `C:\Steam\steamapps\common\Half-Life\cstrike`.

> **Note:** If you're installing the bot for Condition Zero, then install it to the `czero` folder instead.

1. Download the latest `ZIP` YaPB package from <https://yapb.jeefo.net/latest> (example: `yapb-4.4.957-windows.zip`)
2. Unzip the downloaded package to `C:\Steam\steamapps\common\Half-Life\cstrike` directory
3. Open a file called `plugins.ini` in Notepad or any other text editor (located in `C:\Steam\steamapps\common\Half-Life\cstrike\addons\metamod`)
4. Append the following entry: `win32 addons/yapb/bin/yapb.dll`
5. Save the changes
6. You're done!

---

## Installing on Linux

YaPB supports installing both on listen and dedicated server under Linux. No installer is provided for Linux.

### Without Metamod

Assuming that your Counter-Strike is located at: `/usr/Steam/steamapps/common/Half-Life/cstrike`.

> **Note:** If you're installing the bot for Condition Zero, then install it to the `czero` folder instead.

1. Download the latest `TAR.XZ` YaPB package from <https://yapb.jeefo.net/latest> (example: `yapb-4.4.957-linux.tar.xz`)
2. Extract the downloaded package to `/usr/Steam/steamapps/common/Half-Life/cstrike` directory
3. Open a file called `liblist.gam` in any text editor (located in `/usr/Steam/steamapps/common/Half-Life/cstrike`)
4. Locate the entry `gamedll_linux`. It should point to `dlls/cs.so`
5. Change entry from `gamedll_linux "dlls/cs.so"` to `gamedll_linux "addons/yapb/bin/yapb.so"`
6. Save the changes
7. You're done!

### As a Metamod plugin

Assuming that your Counter-Strike is located at: `/usr/Steam/steamapps/common/Half-Life/cstrike`.

> **Note:** If you're installing the bot for Condition Zero, then install it to the `czero` folder instead.

1. Download the latest `TAR.XZ` YaPB package from <https://yapb.jeefo.net/latest> (example: `yapb-4.4.957-linux.tar.xz`)
2. Extract the downloaded package to `/usr/Steam/steamapps/common/Half-Life/cstrike` directory
3. Open a file called `plugins.ini` in any text editor (located in `/usr/Steam/steamapps/common/Half-Life/cstrike/addons/metamod`)
4. Append the following entry: `linux addons/yapb/bin/yapb.so`
5. Save the changes
6. You're done!

---

## Installing on macOS

YaPB can be installed on listen servers only if you use macOS.

> **Note:** macOS support is deprecated. YaPB binary moved to extras package and is located in the `darwin-x86` folder.

> **Note:** There is an unofficial binary called `hlds_osx` provided by AlliedModders LLC allowing you to run HLDS under macOS. You can try downloading it [here](https://forums.alliedmods.net/showpost.php?p=2041538&postcount=11).

> **Note:** Valve didn't update GoldSrc games to support macOS Catalina, and Apple has dropped 32-bit support, so Counter-Strike isn't playable on the latest macOS releases. YaPB still provides binaries for pre-Catalina users. As soon as Valve (if ever) releases Counter-Strike for macOS Catalina, YaPB 64-bit binaries will be available.

### Without Metamod

Assuming that your Counter-Strike is located at: `/Users/user/Library/Application Support/Steam/steamapps/common/Half-Life/cstrike`.

> **Note:** If you're installing the bot for Condition Zero, then install it to the `czero` folder instead.

1. Download the latest YaPB package from <https://yapb.jeefo.net/latest> (example: `yapb-4.4.957-windows.zip` or `yapb-4.4.957-linux.tar.xz`)
2. Download the latest extras package from <https://yapb.jeefo.net/latest> (example: `yapb-4.4.957-extras.zip`)
3. Unzip the downloaded YaPB package to `/Users/user/Library/Application Support/Steam/steamapps/common/Half-Life/cstrike` directory
4. Unzip the `yapb.dylib` binary from the `darwin-x86` folder in the downloaded extras package to `/Users/user/Library/Application Support/Steam/steamapps/common/Half-Life/cstrike/addons/yapb/bin` directory
5. Open a file called `liblist.gam` in any text editor (located in `/Users/user/Library/Application Support/Steam/steamapps/common/Half-Life/cstrike`)
6. Locate the entry `gamedll_osx`. It should point to `dlls/cs.dylib`
7. Change entry from `gamedll_osx "dlls/cs.dylib"` to `gamedll_osx "addons/yapb/bin/yapb.dylib"`
8. Save the changes
9. You're done!

### As a Metamod plugin

Assuming that your Counter-Strike is located at: `/Users/user/Library/Application Support/Steam/steamapps/common/Half-Life/cstrike`.

> **Note:** If you're installing the bot for Condition Zero, then install it to the `czero` folder instead.

1. Download the latest YaPB package from <https://yapb.jeefo.net/latest> (example: `yapb-4.4.957-windows.zip` or `yapb-4.4.957-linux.tar.xz`)
2. Download the latest extras package from <https://yapb.jeefo.net/latest> (example: `yapb-4.4.957-extras.zip`)
3. Unzip the downloaded YaPB package to `/Users/user/Library/Application Support/Steam/steamapps/common/Half-Life/cstrike` directory
4. Unzip the `yapb.dylib` binary from the `darwin-x86` folder in the downloaded extras package to `/Users/user/Library/Application Support/Steam/steamapps/common/Half-Life/cstrike/addons/yapb/bin` directory
5. Open a file called `plugins.ini` in any text editor (located in `/Users/user/Library/Application Support/Steam/steamapps/common/Half-Life/cstrike/addons/metamod`)
6. Append the following entry: `osx addons/yapb/bin/yapb.dylib`
7. Save the changes
8. You're done!
