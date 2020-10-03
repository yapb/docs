**************************
Installation
**************************

.. contents:: Table of Contents

Brief information
==========================

Before you begin
--------------------------
Unlike many other podbot flavours, YaPB is able to run as metamod plugin as well as standalone dll for every platform it supports (except Android) without changing so/dll/dylib. 

.. Important:: If you have some mods like AMX Mod X installed, you should consider installing bots as a metamod plugin, not as standalone dll. In other situations there is **no** requirement to install metamod before installing YaPB.

Installation docs only cover installing bot on genuine Steam version of Counter-Strike. Assuming that if you run something special, you know how to install bot or bot as metamod plugin.

.. Note:: Only 32-bit binary is available, as Valve has dropped support for 64-bit mode HLDS.


Installing bot on Windows
==========================
YaPB supports installing both on listen and dedicated server under Windows. Many people are using it as their main operating system, so the bot has a simple installer, that could assist you in adding bots to game. If you don't want to install manually, please use an installer.

Installing using setup program
--------------------------
- Download the latest YaPB bot installer from https://latest.yapb.ru/ (example: ``yapb-4.0.481-windows.exe``)
- Run program. Note that it's not signed with certificate. So accept warning.
- Press ``Browse`` and point to where ``hl.exe``/``hlds.exe`` is located.
- Press ``Install`` to install bot.
- You're done!

.. Important:: Installer program automatically detects whether you use metamod, and will patch ``plugins.ini`` file automatically for you, adding entry to point to ``yapb.dll``. If there is no metamod, installer will patch the ``liblist.gam`` file to point to ``yapb.dll``

.. Caution:: Installer has a feature for detecting Counter-Strike game folders. It's looks up all directories where selected ``hl.exe``/``hlds.exe`` is located and checks the library for containing export symbols ``weapon_ak47`` and ``weapon_m4a1``, and if so asssuming that this folder contains some Counter-Strike version, and installs bot to this directory automatically.

Installing without metamod
--------------------------
Assuming that your Counter-Strike is located at: ``c:\steam\steamapps\common\half-life\cstrike``.

.. Note:: If you're installing for Condition Zero, than change ``cstrike`` folder to ``czero`` folder.

- Download latest ``ZIP`` YaPB package from https://latest.yapb.ru/ (example: ``yapb-4.0.481-windows.zip``)
- Unzip downloaded package to ``c:\steam\steamapps\common\half-life\cstrike`` directory.
- Open a file called ``liblist.gam`` in Notepad or any other text editor. (located in ``c:\steam\steamapps\common\half-life\cstrike``.)
- Locate the entry ``gamedll``. It should point to ``dlls\mp.dll``.
- Change entry from ``gamedll "dlls\mp.dll"`` to ``gamedll "addons\yapb\bin\yapb.dll"``.
- Save the changes.
- You're done!

Installing as metamod plugin
--------------------------
Assuming that your Counter-Strike is located at: ``c:\steam\steamapps\common\half-life\cstrike``.

.. Note:: If you're installing for Condition Zero, than change ``cstrike`` folder to ``czero`` folder.

- Download latest ``ZIP`` YaPB package from https://latest.yapb.ru/ (example: ``yapb-4.0.481-windows.zip``)
- Unzip downloaded package to ``c:\steam\steamapps\common\half-life\cstrike`` directory.
- Open a file called ``plugins.ini`` in Notepad or any other text editor. (located in ``c:\steam\steamapps\common\half-life\cstrike\addons\metamod``.)
- Append the following entry: ``win32 addons/yapb/bin/yapb.dll``.
- Save the changes.
- You're done!

Installing bot on Linux
==========================
YaPB supports installing both on listen and dedicated server under Linux. No installer provided for the Linux.

Installing without metamod
--------------------------
Assuming that your Counter-Strike is located at: ``/usr/steam/steamapps/common/half-life/cstrike``.

.. Note:: If you're installing for Condition Zero, than change ``cstrike`` folder to ``czero`` folder.

- Download latest ``TAR.GZ`` YaPB package from https://latest.yapb.ru/ (example: ``yapb-4.0.481-linux.tar.gz``)
- Uncompress downloaded package to ``/usr/steam/steamapps/common/half-life/cstrike`` directory.
- Open a file called ``liblist.gam`` in your favourite editor. (located in ``/usr/steam/steamapps/common/half-life/cstrike``)
- Locate the entry ``gamedll_linux``. It should point to ``dlls/cs.so``.
- Change entry from ``gamedll_linux "dlls/cs.so"`` to ``gamedll_linux "addons/yapb/bin/yapb.so"``.
- Save the changes.
- You're done!

Installing as metamod plugin
--------------------------
Assuming that your Counter-Strike is located at: ``/usr/steam/steamapps/common/half-life/cstrike``.

.. Note:: If you're installing for Condition Zero, than change ``cstrike`` folder to ``czero`` folder.

- Download latest ``TAR.GZ`` YaPB package from https://latest.yapb.ru/ (example: ``yapb-4.0.481-linux.tar.gz``)
- Unzip downloaded package to ``/usr/steam/steamapps/common/half-life/cstrike`` directory.
-  Open a file called ``plugins.ini`` in your favourite editor. (located in ``/usr/steam/steamapps/common/half-life/cstrike/addons/metamod``.)
- Append the following entry: ``linux addons/yapb/bin/yapb.so``.
- Save the changes.
- You're done!

Installing bot on Mac OS X
==========================
YaPB can be installed on listen servers only if you use Mac OS X.

.. Note:: There is unofficial binary called ``hlds_osx`` provided by AlliedModders LLC allowing you to run HLDS under OSX. You can try download it here_.

.. _here: https://forums.alliedmods.net/showpost.php?p=2041538&postcount=11

.. Note:: Valve hasn't updated GoldSrc games to support OS X Catalina, and Apple has dropped 32-bit support, so Counter-Strike isn't playable on latest OSX releases. YaPB still provides binaries for pre-Catalina users. As soon as Valve (if ever) release Counter-Strike for OS X Catalina, YaPB 64bit binaries will be available.

Installing without metamod
--------------------------
Assuming that your Counter-Strike is located at: ``/Users/user/Library/Application Support/Steam/steamapps/common/Half-Life/cstrike``.

.. Note:: If you're installing for Condition Zero, than change ``cstrike`` folder to ``czero`` folder.

- Download latest ``ZIP`` YaPB package from https://latest.yapb.ru/ (example: ``yapb-4.0.481-macos.zip``)
- Uncompress downloaded package to ``/Users/user/Library/Application Support/Steam/steamapps/common/Half-Life/cstrike`` directory.
- Open a file called ``liblist.gam`` in your favourite editor. (located in ``/Users/user/Library/Application Support/Steam/steamapps/common/Half-Life/cstrike``.)
- Locate the entry ``gamedll_osx``. It's should point to ``dlls/cs.dylib``.
- Change entry from ``gamedll_osx "dlls/cs.dylib"`` to ``gamedll_osx "addons/yapb/bin/yapb.dylib"``.
- Save the changes.
- You're done!

Installing as metamod plugin
--------------------------
Assuming that your Counter-Strike is located at: ``/Users/user/Library/Application Support/Steam/steamapps/common/Half-Life/cstrike``.

.. Note:: If you're installing for Condition Zero, than change ``cstrike`` folder to ``czero`` folder.

- Download latest ``ZIP`` YaPB package from https://latest.yapb.ru/ (example: ``yapb-4.0.481-macos.zip``)
- Unzip downloaded package to ``/Users/user/Library/Application Support/Steam/steamapps/common/Half-Life/cstrike`` directory.
- Open a file called ``plugins.ini`` in your favourite editor. (located in ``/Users/user/Library/Application Support/Steam/steamapps/common/Half-Life/cstrike/addons/metamod``)
- Append the following entry: ``osx addons/yapb/bin/yapb.dylib``.
- Save the changes.
- You're done!
