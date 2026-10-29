---
title: "Common Waypointing Mistakes"
description: "Typical graph mistakes: unwaypointed areas, bad connections, radii, flags - and how to fix them."
---

Most broken graphs fail for the same handful of reasons. Walk through this list before sharing your work - and run `yb graph check` and `yb graph fix` first, they catch the mechanical part automatically.

## Node mistakes

### Unwaypointed areas

Bots mostly stick to nodes, but in combat they switch to free movement: chasing, retreating, falling off a ledge. When the fight ends in an area with no nodes nearby, the bot gets stuck looking for a way back. Cover the whole playable map - every room, balcony, and corner a player can reach. The only acceptable exception is a spot bots physically can't enter (then don't waypoint it at all, including the way there).

### Unnecessary nodes

More nodes is not better. A straight doorway needs exactly two nodes (one on each side) plus a connection - a chain of five nodes in a row adds nothing and makes bots block each other while believing they take "different" paths. If a connection already spans the whole passage, the nodes in between are dead weight: delete them or lower the autopath distance and let the editor draw fewer, longer links.

### Nodes too close together

A bot counts a node as reached within a small hardcoded radius around it. Place two nodes closer than that and the bot "reaches" both in the same frame without moving - precise movement falls apart, and two bots sent to the two nodes collide instead of spreading out. As a rule of thumb, keep normal nodes at least a body width apart.

### Bad crouch chains

Bots crouch when approaching a crouch node and stand up when the next node is a standing one. A single crouch node in a doorway means the bot stands up right in the door frame. Always terminate a crouch passage with another crouch node on the far side, and draw the connections through doors manually - an auto-drawn standing-to-standing link across the door bypasses your crouch chain entirely.

### Badly placed important nodes

- One important node per area is enough; a cluster of them in one room adds nothing.
- Don't put important nodes of both teams next to each other - both teams will rush the same spot and turn tactics into a deathmatch.
- Don't put them on top of the map goal (hostages, rescue zone, bomb spots). Bots go there anyway; an important node there only distorts the rest of their decisions.

## Connection mistakes

### Missing ladder and stair links

The classic: bots climb down a ladder but can never get back up. The editor usually connects the bottom automatically, but the top ladder node needs a manually added outgoing link toward the upper floor - check both directions. Same for stairs: nodes placed over step edges often get a one-way link down and nothing up. Walk the stairs in both directions and watch the link colors.

### Wrong auto-drawn links

Auto-drawn connections don't understand walls: after placing jump nodes, the editor may add plain walking links from the jump start/end to nearby nodes, sending bots into a wall forever. Turn autopath off (`0` in the autopath menu or `yb graph off auto`) before drawing jump connections, then inspect the surroundings for yellow lines that shouldn't be there. Same story for narrow ledges: waypoint the ground below first with a generous autopath distance, then lower it so far that no link can span the gap, and waypoint the ledge itself.

### Sloppy links through doors and around corners

The most common error of all. If a link cuts a corner or hugs a door frame, bots will bump into geometry every time. Test it yourself: walk exactly along the link line - if you collide, the link is bad. Through doorways, place a node dead center on each side so the link crosses at 90 degrees; around corners, keep visible clearance between the link and the wall.

### Overlapping connections

A chain of nodes where every node links to every other node (typical in vents) forces bots onto "different" routes that physically overlap - they block each other. Link chains node-to-node (1-2, 2-3, 3-4) and delete the long overlapping links. Lowering the autopath distance prevents most of these.

### No jump links where they belong

Bots *can* scramble up crates over plain two-way links, but they do it by bumping into the obstacle and jumping blindly - slow, clumsy, sometimes falling back down. Wherever a bot must leave the ground (crates, barrels, gaps), use a real jump connection instead (`9. Jump` in the Node Type menu or `yb g path_create_jump`).

## Radius mistakes

The editor computes the radius from nearby tall obstacles, capped at 128 - and it knows nothing about holes. Nodes next to pits, shafts, or bridge edges get huge radii and bots happily walk off the edge thinking it's all walkable floor. Shrink these radii by hand, down to zero in the worst spots. Same around narrow doorways and breaches: even a "small" auto radius is usually too generous there, set it to zero so bots thread the needle exactly.

## Flag mistakes

### Missing NoHostage flags (cs_ maps)

On hostage maps, flag every route where hostages can't follow: ladders, vents, windows, jumps - and preferably camp nodes too, so a bot escorting hostages doesn't go sit in a corner while the clock runs out. When in doubt whether hostages fit through, walk the route yourself leading them, without bots.

### NoHostage on the goal routes

The reverse error: blocking the only sane path to the rescue zone forces the escort bot into absurd detours. Flag the spots hostages can't pass, not the whole area.
