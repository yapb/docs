---
title: "Localization"
---

YaPB localization files are located inside `addons/yapb/conf/lang` folder. Main localization files are located inside `**_lang.cfg` where `**` is the language code.

At the moment, YaPB ships five languages:

- `en` -- English (built-in source strings, no `en_lang.cfg` needed)
- `ru` -- Russian
- `de` -- Deutsch
- `chs` -- Chinese (Simplified)
- `cht` -- Chinese (Traditional)

To select a language, you must use one of the suggested language codes as the value of the `yb_language` CVAR, or enter your own if you have created a new config with a translation to another language.

You can change the `yb_language` value in `addons/yapb/conf/yapb.cfg`.

Also, in addition to localizing the main things of the bot, such as menus, pop-up messages, text in the console, etc., you can create a chat base in your language. Use `**_chat.cfg` for chat. Bot nicknames are shared across all languages in `addons/yapb/conf/names.cfg` (merged from the old per-language name lists).

---

## Main Localization

To translate the bot into your language, create a file `**_lang.cfg` (you can use `ru_lang.cfg` as a template).

The file has a single root `Lang` block. Every entry inside it is a named block (the name is arbitrary) with two `raw` blocks: `Original` with the English source string and `Translated` with the translation. Lines inside `raw` blocks are taken verbatim and joined with newlines, so multi-line strings like menus are translated line by line.

```ini
Lang {
   YMainMenuW {
      raw Original {
         \yMain Menu\w
         1. Control bots
         2. Features
         3. Fill server
         4. End round
         0. Exit
      }

      raw Translated {
         \yГлавное меню\w
         1. Управление ботами
         2. Функции
         3. Заполнить сервер
         4. Конец раунда
         0. Выход
      }
   }
}
```

Strings are matched by the exact contents of the `Original` block (entry names don't matter). Both blocks must be non-empty, otherwise the entry is skipped.

### Missing Translations Workflow

The bot tracks strings that were shown during play but have no translation in the loaded language. You can complete the translation with the `yb debug` commands:

- `yb debug translate` -- lists untranslated strings collected during play
- `yb debug translate write` -- appends the collected strings to the language config (a `.bak` backup of the previous file is kept), then fill in the `Translated` blocks
- `yb debug translate reset` -- clears the list of collected strings

---

## Chat Localization

You just need to create a file `**_chat.cfg` for bot chat in your language. You can use the file `en_chat.cfg` as an example.

See the [Customization](\/docs\/en/configuring/customization/) section for details.

---

## Nickname Customization

Bot nicknames live in the shared `addons/yapb/conf/names.cfg` file (one nickname per line inside a `raw Names` block). To customize them, edit that file directly — it applies to all languages.
