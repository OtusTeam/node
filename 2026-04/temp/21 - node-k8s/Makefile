build:
	docker build -t nodejs-simple-08-2025-k8s .

tag:
	docker tag nodejs-simple-08-2025-k8s nlapshin/nodejs-simple-08-2025-k8s

push:
	docker push nlapshin/nodejs-simple-08-2025-k8s

publish:
	make build && make tag && make push
