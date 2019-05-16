(ns acme.frontend.app)

(defn init []
  (println "Hello World. Time for coffee!!!!"))

(defn reload[done]
	(init)
	(done))