#!/usr/bin/env python

# Python version of the build script for increased portability

import os

if __name__ == '__main__':
    os.system('jsmin <colors.js> minified/colors.js "Copyright (c) 2010 Rahul Rajagopalan"')
    print 'jsmin <colors.js> minified/colors.js "Copyright (c) 2010 Rahul Rajagopalan"'
    os.system('jsmin <highlightNav.js> minified/highlightNav.js "Copyright (c) 2010 Rahul Rajagopalan"')
    print 'jsmin <highlightNav.js> minified/highlightNav.js "Copyright (c) 2010 Rahul Rajagopalan"'
    os.system('jsmin <showHide.js> minified/showHide.js "Copyright (c) 2010 Rahul Rajagopalan"')
    print 'jsmin <showHide.js> minified/showHide.js "Copyright (c) 2010 Rahul Rajagopalan"'
    # yuiCompress.py already prints the command for us, so we
    # don't need to do it here
    os.system('yuiCompress.py -o minified/firstStyle.css firstStyle.css')
    os.system('yuiCompress.py -o minified/jsStyle.css jsStyle.css')
