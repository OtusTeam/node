#!/bin/sh
set -eu

# kubectl + minikube для вебинара Node.js + Kubernetes
# Требуется: Docker, sudo, curl
# Запуск: chmod +x install.sh && ./install.sh

ARCH="$(dpkg --print-architecture 2>/dev/null || uname -m)"
case "$ARCH" in
  amd64|x86_64) ARCH="amd64" ;;
  arm64|aarch64) ARCH="arm64" ;;
  *)
    printf 'Unsupported architecture: %s\n' "$ARCH"
    exit 1
    ;;
esac

if ! command -v docker >/dev/null 2>&1; then
  printf 'Docker is required. Install it first (see 25-docker/INSTALL.md).\n'
  exit 1
fi

if ! command -v curl >/dev/null 2>&1; then
  printf 'Installing curl...\n'
  sudo apt-get update
  sudo apt-get install -y curl
fi

printf '\nInstalling kubectl dependencies...\n\n'
sudo apt-get update
sudo apt-get install -y ca-certificates conntrack socat

printf '\nInstalling kubectl...\n\n'
KUBECTL_VERSION="$(curl -fsSL https://dl.k8s.io/release/stable.txt)"
curl -fsSLo /tmp/kubectl "https://dl.k8s.io/release/${KUBECTL_VERSION}/bin/linux/${ARCH}/kubectl"
sudo install -o root -g root -m 0755 /tmp/kubectl /usr/local/bin/kubectl
rm -f /tmp/kubectl

printf '\nInstalling minikube...\n\n'
curl -fsSLo /tmp/minikube "https://github.com/kubernetes/minikube/releases/latest/download/minikube-linux-${ARCH}"
sudo install -o root -g root -m 0755 /tmp/minikube /usr/local/bin/minikube
rm -f /tmp/minikube

if ! groups | grep -q '\bdocker\b'; then
  printf '\nAdding %s to the docker group...\n' "${USER}"
  sudo usermod -aG docker "${USER}"
  printf 'Re-login or run: newgrp docker\n'
fi

printf '\nInstalled versions:\n'
kubectl version --client
minikube version

printf '\nStart the cluster with:\n'
printf '  minikube start --driver=docker\n'
printf '  minikube status\n'
printf '  kubectl get nodes\n\n'
