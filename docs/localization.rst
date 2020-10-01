*********************
YaPB Localizing
*********************
Bot localization files are located inside ``addons/yapb/conf/lang`` folder.
Main localization are located inside ``**_lang.cfg`` where ``**`` is two-letter language code
For example: ``ru`` for Russian language, ``de`` for Deutsch language, etc.
At the moment, YaPB has four languages: English, Russian, Deutsch and Chinese

Also, in addition to localizing the main things of the bot, such as menus, pop-up messages, text in the console, etc. You can create a chat base and a list of nicknames in your language.
``**_chat.cfg`` for chat and ``**_names.cfg`` for nicknames respectively.

Main Localization
================================
To translate the bot into your language, you need to create a file ``**_lang.cfg``
Then open the file and insert the original bot strings after the [ORIGINAL] line.
Also insert translated strings after [TRANSLATED] line.

It should look like this::

	[ORIGINAL]
	Here are the original strings of the bot.

	[TRANSLATED]
	Here are the translated strings of the bot.

::

You can use for example ru_lang.cfg as a template for translation.

Chat Localization
================================
You just need to create a file ``**_chat.cfg`` for bot chat in your language.
You can use the file en_chat.cfg as an example.

Nickname Localization
================================
You just need to create a file ``**_names.cfg`` for bot nicknames in your language.
You can use the file en_names.cfg as an example
