#!/usr/bin/env bash

cd client_ui && npm install && npm run launch_client &
cd platform_api && npm install && npm run start &
cd simulator && npm install && npm run start &


