---
title: "Building from Source"
---

:::note
The default build target is a 32-bit library, since Valve has dropped support for 64-bit HLDS.
:::

## Requirements

| Tool | Purpose |
|------|---------|
| Git | To clone the repository with submodules |
| CMake 3.28+ | Configure the build |
| Ninja | Build backend |
| GCC or Clang (gcc/g++ or clang/clang++) | Host compiler |
| [Zig](https://ziglang.org/download/) | Only for cross builds (it ships its own libc) |
| Visual Studio 2015+ (C/C++ tools) | Windows native builds only |

:::note
The build never installs anything itself. The `build.sh` helper probes the environment and prints distro-specific install hints when something is missing.
:::

## Getting the Source

```bash
git clone --recursive https://github.com/yapb/yapb
cd yapb
```

The submodules (`crlib`, `linkage`, `mbedtls`) are required. If you already cloned without `--recursive`, run `git submodule update --init --recursive`.

## Building with build.sh (Recommended)

`build.sh` is a helper script that wraps CMake presets:

```bash
# native dev build (host compiler, no zig needed)
./build.sh

# cross build for a specific target via zig
./build.sh --arch=linux-x86

# native build with clang, tuned for this machine, 8 parallel jobs
./build.sh -c=clang --native -j=8
```

Available options:

| Option | Description |
|--------|-------------|
| `--arch=<preset>` | Build preset (default: `release`). Cross presets need zig on PATH |
| `-c=` / `--compiler=` | Host C/C++ compiler for native builds (`gcc` or `clang`) |
| `-j=` / `--jobs=` | Parallel build jobs (default: ninja auto-detects) |
| `--native` | Tune for this machine (`-march=native`) |
| `--skip-checks` | Skip environment probing |
| `-D<Var>=<Val>` | Extra CMake defines forwarded to the configure step |

## Building with CMake Directly

The presets mirror the CI matrix, so you can drive CMake yourself:

```bash
# native development build
cmake --preset release
cmake --build --preset release
```

Preset groups:

- **Local presets** (host compiler, no zig needed): `release`, `dist`, `linux-amd64-asan`, `linux-x86-asan`
- **Cross presets** (need zig on PATH): `ci-linux-x86`, `ci-linux-amd64`, `ci-linux-x86-nosimd`, `ci-linux-arm64`, `ci-linux-riscv64`, `ci-apple-amd64`, `ci-windows-x86-clang`, `ci-windows-amd64`
- **CI-only presets** (their runners, not for local use): `ci-apple-arm64`, `ci-windows-x86`, `ci-windows-x86-clang-cl`, `ci-windows-x86-msvc-xp`

See `CMakePresets.json` for the full matrix.

## Building on Linux

1. Install the requirements:

   ```bash
   sudo apt update
   sudo apt install git cmake ninja-build gcc g++ gcc-multilib g++-multilib
   ```

   :::note
   The default target is x86 (32-bit), so the host compiler needs multilib/32-bit libc support. Without multilib, cross-build through zig instead: `./build.sh --arch=linux-x86`
   :::

2. Get the source (see above)
3. Build:

   ```bash
   ./build.sh
   ```

4. You're done! The compiled library is located at `release/yapb.so` (each preset builds into a directory named after itself)

## Building on Windows

1. Install Visual Studio with the C/C++ workload
2. Get the source (see above)
3. Either open `vc/yapb.sln` in Visual Studio and build, or use the cross presets through [Zig](https://ziglang.org/download/) from a bash shell (Git Bash/WSL):

   ```bash
   ./build.sh --arch=windows-x86-clang
   ```

4. You're done! The compiled library is located at `release/yapb.dll` for native builds, or `windows-x86-clang/yapb.dll` for the cross preset

## Build Options

These CMake options can be passed with `-D<Var>=<Val>` (or through `build.sh -D<Var>=<Val>`):

| Option | Default | Description |
|--------|---------|-------------|
| `64BIT` | `OFF` | Build as 64-bit binary |
| `NATIVE` | `OFF` | Configure compiler for a native machine build (`-march=native`) |
| `WINXP` | `OFF` | Configure MSVC build for a Windows XP compatible binary |
| `NOSIMD` | `OFF` | Disable all SIMD/NEON optimizations |
| `STATIC_LINKENT` | `OFF` | Use predefined entity link list |
| `LTO` | `ON` | Enable link-time optimization |
| `SANITIZE` | (empty) | Enable sanitizers, e.g. `address` or `address,undefined` (dev builds) |
| `WITH_TLS` | `ON` | Enable HTTPS support via vendored mbedtls |
