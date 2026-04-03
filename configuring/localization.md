# Localization

YaPB localization files are located inside `addons/yapb/conf/lang` folder. Main localization files are located inside `**_lang.cfg` where `**` is the language code.

At the moment, YaPB has four languages:

- `en` -- English
- `ru` -- Russian
- `de` -- Deutsch
- `chs` -- Chinese (Simplified)

To select a language, you must use one of the suggested language codes as the value of the `yb_language` CVAR, or enter your own if you have created a new config with a translation to another language.

You can change the `yb_language` value in `addons/yapb/conf/yapb.cfg`.

Also, in addition to localizing the main things of the bot, such as menus, pop-up messages, text in the console, etc., you can create a chat base and a list of nicknames in your language. Use `**_chat.cfg` for chat and `**_names.cfg` for nicknames respectively.

---

## Main Localization

To translate the bot into your language, you need to create a file `**_lang.cfg`. Then open the file and insert the original bot strings after the `[ORIGINAL]` line. Also insert translated strings after the `[TRANSLATED]` line.

It should look like this:

```ini
[ORIGINAL]
Here are the original strings of the bot.

[TRANSLATED]
Here are the translated strings of the bot.
```

You can use `ru_lang.cfg` as a template for translation.

---

## Chat Localization

You just need to create a file `**_chat.cfg` for bot chat in your language. You can use the file `en_chat.cfg` as an example.

See the [Customization](customization.md) section for details.

---

## Nickname Localization

You just need to create a file `**_names.cfg` for bot nicknames in your language. You can use the file `en_names.cfg` as an example.
