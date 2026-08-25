build:
	docker build -t nodejs-simple-04-2026-k8s .

tag:
	docker tag nodejs-simple-04-2026-k8s nlapshin/nodejs-simple-04-2026-k8s:1.0.2

push:
	docker push nlapshin/nodejs-simple-04-2026-k8s:1.0.2

publish:
	make build && make tag && make push
