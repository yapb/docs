# Building from Source

> **Note:** You need to build a 32-bit library, since Valve has dropped support for 64-bit HLDS.

## Installing the Windows Packages

1. Install the latest version of Visual Studio from <https://visualstudio.microsoft.com/>
2. Launch the Visual Studio Installer, select the required Visual Studio edition and install all necessary components for C/C++ development
3. Install the latest version of Git for Windows from <https://git-scm.com/download/windows/>
4. Run the installer, and follow the installation instructions
5. Install the latest version of Python from <https://www.python.org/downloads/windows/>
6. Run the installer, and follow the installation instructions
7. Install Meson and Ninja using pip, by entering the following command in your cmd or powershell window:

   ```
   pip install meson ninja
   ```

8. You're done!

## Installing the Linux Packages

1. Install the latest version of GCC or Clang:

   ```bash
   sudo apt install gcc
   # or
   sudo apt install clang
   ```

2. Install the latest version of Git:

   ```bash
   sudo apt install git
   ```

3. Install the latest version of Python:

   ```bash
   sudo apt install python3
   ```

4. Install the gcc-multilib and g++-multilib packages:

   ```bash
   sudo apt install gcc-multilib g++-multilib
   ```

5. Install Meson and Ninja using pip:

   ```bash
   pip install meson ninja
   ```

6. You're done!

## Building on Windows

1. Clone the YaPB repository:

   ```powershell
   git clone --recursive https://github.com/yapb/yapb
   ```

2. Enter the YaPB project directory:

   ```powershell
   cd yapb
   ```

3. Configure the project using Meson:

   ```powershell
   meson setup build
   ```

4. Compile the DLL library:

   ```powershell
   meson compile -C build
   ```

5. You're done! The compiled library is located at `build/yapb.dll`

## Building on Linux

1. Clone the YaPB repository:

   ```bash
   git clone --recursive https://github.com/yapb/yapb
   ```

2. Enter the YaPB project directory:

   ```bash
   cd yapb
   ```

3. Configure the project using Meson:

   ```bash
   meson setup build
   ```

4. Compile the .so library:

   ```bash
   meson compile -C build
   ```

5. You're done! The compiled library is located at `build/yapb.so`
