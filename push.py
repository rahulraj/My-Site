#!/usr/bin/env python

# Script to build the minified version of the js and css files,
# then push all ASCII files to the production server

import os

if __name__ == '__main__':	
    print "Minifying JavaScript and CSS"
    os.system("./build.py")
    print "scp-ing all ASCII files to the MIT server"
    os.system("./copyToServer.py")
