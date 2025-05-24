#!/bin/bash

SRC_DIR="images"
DEST_DIR="images-crushed"

# Create the destination directory
mkdir -p "$DEST_DIR"

# Find and process all PNG files
find "$SRC_DIR" -type f -name "*.png" | while read img; do
  # Determine the relative path
  rel_path="${img#$SRC_DIR/}"
  # Create corresponding directory in destination
  mkdir -p "$DEST_DIR/$(dirname "$rel_path")"
  # Run pngcrush
  pngcrush -brute "$img" "$DEST_DIR/$rel_path"
done
