**************************
Introduction
**************************

What is YaPB?
-----------------
YaPB stands for Yet another Ping of Death Bot. It's a deriviate of a Counter-Strike famous bot. - **PODBot**, based on it's source code release by Count-Floyd back in 2003.
It's adding computer-controlled (AI) players to Counter-Strike games based on GoldSource engine.

Why is it called YaPB?
-----------------
It's called "Yet another PODBot" because when fork was started, there was so many other PODBot clones floating around like **PODBot MM**, **e[POD]bot**, **IvPBot**, **POXBot** etc. So the reason was to save the original name, and clarify that bot is derived from the original PODBot.

And POD is an abbreviation for **Ping of Death**. It's called that way because it was derived from the **High Ping Bastard Bot** Botman was doing. And if you look at the Bots Ping they always have a Ping of 5 in the days of Counter-Strike 1.5 and the very first generation of bots did Headshots all the time. 

What are Bots able to do?
------------------
The Bots will automatically know the goals of the map. Counter-Terrorists will go for hostages or defuse the bomb, Terrorists will plant the bomb. VIP Bots will try to reach the Rescue Points. The goal selection is done dynamically and will be affected by several factors like Personality, Health, Teammates nearby & Items the Bot is carrying. The Bots will also try to support teammates and take cover when they think it's needed. They also can use some elevators.

What mods are supported?
------------------
YaPB currently supports only Counter-Strike (since Beta 6.5 to 1.6) and Condition Zero mods for Half-Life.

- Supported engines:

  + Official Valve's GoldSrc Engine on Windows, Linux and Mac OS X.
  + Flying with Gauss Xash3D Engine on Windows, Linux, Mac OS X and Android.
  + ReHLDS & ReGameDLL on Windows and Linux.
  + WON version of Valve's GoldSrc Engine on Windows, Linux. Minimum engine version is 1.1.0.4.

YaPB supports running on a listenserver (when the players hosts game itself), as well as on HLDS (dedicated server).

Why does YaPB need waypoints?
------------------
Is there a Bot who is doing great without any kind of navigational help like waypoints, wayzones or navmesh? It's almost certain you won't find any. Actually, at the time of original development, waypointed navigation was the most widely-used and simple method. Bots are currently navgiating flawlessly, so changing it to navmesh or any other stuff is not planned. YaPB maintains big list of waypoints on the github repository_ which is constantly replenished, so probably we already have the waypoint for your map...

If you would like a waypoint for your map, you can do a issue-request_ on the github repository.
But it's better to make waypoints yourself than to wait for someone to make waypoints for you.

.. _repository: https://github.com/yapb/graph
.. _issue-request: https://github.com/yapb/graph/issues/new

What types of maps are supported?
------------------
- Supported game scenarios:

  + Aim Training (aim_* maps).
  + Escape (es_* maps).
  + Knife Arena (ka_* maps).
  + Deathmatch (dm_* maps).
  + Fight Yard (fy_* maps).
  + Gun Game (gg_* maps).
  + Grenade Wars (he_* maps).
  + Prepared Assault (pa_* maps)
  + VIP Assasination (as_* maps).
  + Sniper Wars (awp_* maps).
  + Hostage Rescue (cs_* maps).
  + Bomb Plant/Defuse (de_* maps).
  + Hostage Rescue/Bomb Plant/Defuse (csde_* maps).
  + Speed Strike (sp_* maps).

What mods are supported for Counter-Strike?
------------------
YaPB officially supports CSDM and CSDM FFA mods for Counter-Strike. Other mods should add their own support for bots.
