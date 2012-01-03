(ns ajaxify.macros)

(comment
(defmacro get-this
  "Returns the this reference (used for various purposes in JavaScript)
   Uses a macro because we don't need to do any computation at runtime."
  []
  `(do
    (println "expanding get-this")
    (js* "this")))
)

(defmacro say-hello []
  `(console/log "Hello from a macro updated again"))

(defmacro object-call
  "Macro to abstract over no argument method calls to objects.
   Writing (.html my-object) does not return the html in my-object;
   it instead returns a reference to the html function in my-object.
   This makes sense, I guess, but it forces us to write
   (. my-object (html)) instead which is clunkier.
   With this macro, it becomes possible to write (object-get my-object html).
  
   This has to be a macro, not a higher-order function, because the function
   equivalent would compile into
   ajaxify.main.object_get.call(null, my_object, ajaxify.main.html);
   which points to a nonexistent function in the current namespace.
  "
  [object no-argument-method]
  `(. ~object (~no-argument-method)))

(defmacro wait-for
  "C# 5.0 and later lets programmers replace
   AsynchronousFunction(arg1, arg2, (result) =>
    DoSomething();
    WithResult(result);
    // this is ok for a short example like this, but if we have a bunch
    // of functions to do sequentially it gets really messy.
  );
  with
  var result = await AsynchronousFunction(arg1, arg2);
  DoSomething();
  WithResult(result);
  (the syntax may be wrong, I haven't used C# for any projects)

  In this macro I attempt to port this feature over to ClojureScript!
  (the name 'await' was taken so it's called 'wait-for' instead)

  Usage:
  (wait-for [(asynchronous-function1 arg1 arg2) :as result1
             (asynchronous-function2 arg3) ; no result to pass through
             (asynchronous-function3) :as result2]
    (do-something)
    (with-results result1 result2))

  Current status - handles one asynchronous function with no result"
  [[asynchronous-functions] & body]
  ; Each element in asynchronous-functions is a (function arg1 arg2) list
  `(let [the-function# ~(first asynchronous-functions)]
     (the-function# fn[]
       ~@body)))

; Gets mangled, don't use
(defmacro get-this []
  (list ('js* "this")))
