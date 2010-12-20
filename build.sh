#!/usr/bin/env bash
# The YUI compressor compresses CSS (jsmin doesn't) but when I tried to
# use it to compress my JavaScript, it broke the functionality. So I use
# jsmin for JavaScript and YUI for CSS
jsmin <colors.js> minified/colors.js "Copyright (c) 2010 Rahul Rajagopalan"
jsmin <highlightNav.js> minified/highlightNav.js "Copyright (c) 2010 Rahul Rajagopalan"
jsmin <showHide.js> minified/showHide.js "Copyright (c) 2010 Rahul Rajagopalan"
yuiCompress.py -o minified/firstStyle.css firstStyle.css
yuiCompress.py -o minified/jsStyle.css jsStyle.css
