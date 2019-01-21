#!/usr/bin/env bash

yarn dev &
P1=$!
modd --file=./modd.conf &
P2=$!
wait $P1 $P2
