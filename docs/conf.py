## conf.py

# Set the project name, version and master file for documentation
html_title = 'Official YaPB Documentation'
master_doc = 'index'
project = u'Official YaPB Documentation'
version = 'latest'
release = 'latest'
htmlhelp_basename = 'Official YaPB Documentation'
copyright = u'YaPB Project Developers <yapb@jeefo.net>'

# These folders are copied to the documentation's HTML output
html_static_path = ['_static']

# These paths are either relative to html_static_path
# or fully qualified paths (eg. https://...)
html_css_files = ['css/fontstyles.css']

# Use the original Read the Docs theme
extensions = ['sphinx_rtd_theme']
html_theme = "sphinx_rtd_theme"
