#!/bin/sh

DOCKER_COMPOSE_VERSION=1.29.2

# Docker uninstall

printf 'Docker uninstall.\n\n'
sleep 2

sudo apt-get purge -y docker-engine docker docker.io docker-ce  \
  && sudo apt-get autoremove -y --purge docker-engine docker docker.io docker-ce \
  && sudo rm -rf /var/lib/docker \
  && sudo rm /etc/apparmor.d/docker \
  && sudo groupdel docker \
  && sudo rm -rf /var/run/docker.sock \
  && printf '\n\nDocker uninstall successfull.\n\n'

# Docker install

printf '\n\nDocker preinstall.\n\n'
sleep 2

sudo apt-get update \
  && sudo apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common \
  && curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add - \
  && sudo apt-key fingerprint 0EBFCD88 \
  && sudo add-apt-repository \
    "deb [arch=$(dpkg --print-architecture)] https://download.docker.com/linux/ubuntu \
    $(lsb_release --codename --short) \
    stable" \
  && printf '\n\nDocker preinstalled successfully\n\n'

printf '\n\nDocker install.\n\n'
sleep 2

sudo apt update \
  && sudo apt --yes --no-install-recommends install docker-ce \
  && sudo usermod -aG docker ${USER} \
  && sudo systemctl enable docker \
  && printf '\n\nDocker installed successfully\n\n'

printf '\n\nDocker compose install.\n\n'
sleep 2

sudo curl -L "https://github.com/docker/compose/releases/download/${DOCKER_COMPOSE_VERSION}/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose \
  && sudo chmod +x /usr/local/bin/docker-compose

printf '\n\nEnvironment initialization completed.\n\n'