#!/usr/bin/env bash

# calls pandoc on the raw slide which creates the pdf output
pandoc src/raw-slides/slides.md -o output/slides.pdf