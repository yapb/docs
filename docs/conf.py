## conf.py

# Set the project name, version and master file for documentation
html_title = 'Официальная документация YaPB'
master_doc = 'index'
project = u'Официальная документация YaPB'
version = 'latest'
release = 'latest'
htmlhelp_basename = 'Официальная документация YaPB'
copyright = u'YaPB Project Developers <yapb@jeefo.net>'

# These folders are copied to the documentation's HTML output
html_static_path = ['_static']

# These paths are either relative to html_static_path
# or fully qualified paths (eg. https://...)
html_css_files = ['css/fontstyles.css']

# Use the original Read the Docs theme
extensions = ['sphinx_rtd_theme']
html_theme = "sphinx_rtd_theme"
