#!/bin/sh

run () {
  RECORD=$1 node generate-records.js > records.json
  echo "$1 - spread"
  time node to-map-spread.js
  echo ""
  echo "$1 - assign"
  time node to-map-assign.js
  echo ""
  echo "-------------------"
}

run 100
run 500
run 1000
run 2000
run 5000
run 10000
