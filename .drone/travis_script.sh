#!/bin/bash

set -ex

section "Tests"

export C_FORCE_ROOT=1 # override warning about running Celery+pickle as root
make ${TEST_TARGET}

section_end "Tests"

section "Build.docs"

make html
mkdir -p target/doc
mv doc/_build target/doc/build

section_end "Build.docs"
