#!/usr/bin/env python
# This is a HUGE hack. Do not emulate it. Try wrestling with Leiningen instead.
import os

def main():
  """
  OK, here's the story.

  I would like the ability to use macros in my ClojureScript. As the
  language currently stands, you have to write them in Clojure then
  make cljsc aware of them. Unfortunately this is easier said than done.

  I need to set the classpath so the compiler will find the macros file 
  in it. I tried some of the build tools but it didn't work out. As I write
  this there doesn't seem to be a step-by-step tutorial, just some
  codebases to imitate. Here I am setting the variable before calling
  the REPL. Hopefully I figure out a cleaner way to do this later.
  """

  # Called (System/getProperty "java.class.path") and copy-pasted
  old_classpath = "/home/rahulraj/dls/clojurescript/lib/goog.jar:/home/rahulraj/dls/clojurescript/lib/compiler.jar:/home/rahulraj/dls/clojurescript/lib/clojure.jar:/home/rahulraj/dls/clojurescript/lib/js.jar:/home/rahulraj/dls/clojurescript/src/clj:/home/rahulraj/dls/clojurescript/src/cljs:/home/rahulraj/dls/clojurescript/test/cljs"

  # Add the directories for this project
  classpath_with_ajaxify_macros = old_classpath + ":/home/rahulraj/Documents/www/src/clj:/home/rahulraj/Documents/www/src/cljs"

  #classpath_with_ajaxify_macros = old_classpath

  print """
      If you're not Rahul Rajagopalan, you'll need to edit
      cljsRepl.py. Set old_classpath to the result you get by
      invoking (System/getProperty) and also update
      classpath_with_ajaxify_macros to point to where the ajaxify code is.
      """
  # Might as well rlwrap it while we're at it
  command = "rlwrap java -server -cp %s clojure.main" % \
      (classpath_with_ajaxify_macros,)

  print """ \
      In this REPL, compile the code by calling
      (require '[cljs.closure :as cljsc])
      (cljsc/build "src" {:output-dir "out" :output-to "ajaxify.js"})
      """
  print """
      You can compile with optimizations by writing
      (cljs/build "src" {:output-dir "out" :output-to "ajaxify.js"
       :optimizations :advanced :externs ["externs.js"]})

      Have fun!
      """
  print command
  os.system(command)

if __name__ == '__main__':
  main()
