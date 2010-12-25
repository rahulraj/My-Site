#!/usr/bin/env python

# Expanded version of push.py that pushes ALL files that the
# website uses to the MIT server, including the binary-format files.

import os

if __name__ == '__main__':
    os.system("./push.py")
    cmd = "scp " + "rasmaller.jpg mit_logo_shrunk.png ResumeRahul.pdf" \
          " rahulraj@linerva.mit.edu:" + \
          "/afs/athena.mit.edu/user/r/a/rahulraj/www" 
    os.system("echo " + cmd)
    os.system(cmd)
