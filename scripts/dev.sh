#!/usr/bin/env bash

yarn dev &
PIDS[0]=$!
modd --file=./modd.conf &
PIDS[1]=$!

trap "kill ${PIDS[*]}" SIGINT SIGTERM

for pid in ${PIDS[*]}; do
    wait $pid
done
