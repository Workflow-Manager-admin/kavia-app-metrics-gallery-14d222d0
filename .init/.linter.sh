#!/bin/bash
cd /home/kavia/workspace/code-generation/kavia-app-metrics-gallery-14d222d0/gallery_backend
npm run lint
LINT_EXIT_CODE=$?
if [ $LINT_EXIT_CODE -ne 0 ]; then
  exit 1
fi

