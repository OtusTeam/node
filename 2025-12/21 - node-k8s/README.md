https://kubernetes.io/docs/tasks/tools/ - установка kubectl
https://minikube.sigs.k8s.io/docs/start/?arch=%2Flinux%2Fx86-64%2Fstable%2Fbinary+download - установка minikube


# Minikube

minikube start             # Запускает локальный Kubernetes-кластер
minikube stop              # Останавливает кластер
minikube status            # Показывает состояние (работает ли кластер)
minikube ip                # Показывает IP-адрес кластера

# Deployment

kubectl apply -f deployment.yaml    # Применить Deployment (создание Pod'ов)
kubectl get pods                    # Посмотреть список Pod'ов
kubectl describe pod <pod-name>     # Подробности по Pod'у (события, ошибки)
kubectl logs <pod-name>             # Логи приложения внутри Pod'а

# Service

kubectl apply -f service.yaml       # Применить Service (доступ к приложению)
kubectl get svc nodejs-simple-service  # Посмотреть информацию о Service
minikube service nodejs-simple-service # Открыть сервис в браузере

# Scaling

kubectl scale deployment nodejs-simple-deployment --replicas=0   # Остановить все Pod'ы
kubectl get deployments                                           # Проверить состояние Deployment'а
kubectl scale deployment nodejs-simple-deployment --replicas=3   # Запустить 3 Pod'а
kubectl get pods                                                  # Убедиться, что Pod'ы работают
kubectl logs <pod-name>                                           # Проверить логи после запуска

# Delete

kubectl delete deployment <deployment-name>

# DB

kubectl apply -f mongodb.yaml
kubectl get svc mongo-service

# Force Rollout

kubectl rollout restart deployment nodejs-simple-deployment
