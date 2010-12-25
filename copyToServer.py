#!/usr/bin/env python

# Script to automate the scp-ing of the website's files to the
# MIT server. Only scp's the html, js, and css files because
# those change often. Binary files like pdfs and images must
# still be copied over manually.
# (The latter group changes much less often so it's a waste to
# copy them over every time one of the ASCII files changes)

import os

if __name__ == '__main__':
    cmd = "scp " + "*.html minified/*.css minified/*.js" \
          " rahulraj@linerva.mit.edu:" + \
          "/afs/athena.mit.edu/user/r/a/rahulraj/www" 
    os.system("echo " + cmd)
    os.system(cmd)
