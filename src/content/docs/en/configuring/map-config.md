---
title: "Map-Specific Configuration"
---

Map specific configs store user-configured CVARs. The filename is `<mapname>.cfg` where "mapname" is the name of the map for which this config was created, e.g. `de_dust2.cfg` for the de_dust2 map. This file is located in the `addons/yapb/conf/maps` directory.

You can use any of the [Bot CVARs](\/docs\/en/configuring/cvars/) in this config. It is executed automatically via the engine `exec` command when the matching map starts.

By default YaPB does not ship any configs for maps — the `maps` directory only contains a `.gitkeep` placeholder. Create a file named after your map to override CVARs on it.

Example `addons/yapb/conf/maps/fy_pool_day.cfg`:

```ini
yb_quota 12
yb_botbuy 0
```
