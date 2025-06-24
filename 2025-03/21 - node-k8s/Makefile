build:
	docker build -t nodejs-simple-k8s .

tag:
	docker tag nodejs-simple-k8s nlapshin/nodejs-simple-k8s

push:
	docker push nlapshin/nodejs-simple-k8s

publish:
	make build && make tag && make push
