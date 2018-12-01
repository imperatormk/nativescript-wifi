#!/bin/bash
git add .
git commit -m "CI commit"
npm version patch
git push
npm publish
