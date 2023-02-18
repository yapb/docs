**************************
Building the Bot
**************************

.. contents:: Table of Contents

Before you begin
======================
If you have all the required packages, you can skip this section.

.. Note:: You need to build 32-bit library, since Valve has dropped support for 64-bit mode HLDS.

Installing the Windows Packages
-----------------------------------
- Install the latest version of Visual Studio from https://visualstudio.microsoft.com/
- Launch the Visual Studio Installer, select the required Visual Studio edition and install all necessary components for C/C++ development.
- Install the latest version of Git for Windows from https://git-scm.com/download/windows/
- Run the installer, and follow the installation instructions. 
- Install the latest version of Python from https://www.python.org/downloads/windows/
- Run the installer, and follow the installation instructions.
- Install the Meson and Ninja using pip, by entering the following command in your cmd or powershell window ``pip install meson ninja``.
- You're done!

Installing the Linux Packages
-----------------------------------
- Install the latest version of GCC or Clang, by entering the following command in your terminal window ``sudo apt install gcc``, or ``sudo apt install clang``.
- Install the latest version of Git, by entering the following command in your terminal window ``sudo apt install git``.
- Install the latest version of Python, by entering the following command in your terminal window ``sudo apt install python3``.
- Install the gcc-multilib and g++-multilib package, by entering the following command in your terminal window ``sudo apt install gcc-multilib g++-multilib``.
- Install the Meson and Ninja using pip, by entering the following command in your terminal window ``pip install meson ninja``.
- You're done!

Building on Windows
=======================
- Clone the YaPB repository, by entering the following command in your Visual Studio Developer PowerShell or Command Prompt window ``git clone --recursive https://github.com/yapb/yapb``
- Enter to the YaPB project directory: ``cd yapb``
- Configure this project using Meson: ``meson setup build``
- Compile the DLL library: ``meson compile -C build``
- You're done! The compiled library is located at ``build/yapb.dll``

Building on Linux
=======================
- Clone the YaPB repository, by entering the following command in your terminal window ``git clone --recursive https://github.com/yapb/yapb``
- Enter to the YaPB project directory: ``cd yapb``
- Configure this project using Meson: ``meson setup build``
- Compile the .so library: ``meson compile -C build``
- You're done! The compiled library is located at ``build/yapb.so``
