#!/bin/bash

set -e

echo "Checking Apache2 installation..."
if ! command -v apache2 &> /dev/null; then
    sudo apt update
    sudo apt install apache2 -y
fi

echo "Checking Apache2 service..."
sudo systemctl start apache2

echo "Cleaning Apache web directory..."
sudo rm -rf /var/www/html/*

echo "Cleaning old temp repo..."
sudo rm -rf /tmp/linux-practice-commands

cd /tmp

echo "Cloning repository..."
sudo git clone https://github.com/saurabhtomar52/linux-practice-commands.git

echo "Deploying website..."
sudo cp -r /tmp/linux-practice-commands/html/* /var/www/html/

echo "Setting permissions..."
sudo chown -R www-data:www-data /var/www/html
sudo chmod -R 755 /var/www/html

echo "Restarting Apache..."
sudo systemctl restart apache2

echo "Deployment completed successfully!"
