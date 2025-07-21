#!/bin/bash

# Usage: ./compare_dirs.sh /path/to/dir1 /path/to/dir2

DIR1="$1"
DIR2="$2"

if [[ -z "$DIR1" || -z "$DIR2" ]]; then
  echo "Usage: $0 /path/to/dir1 /path/to/dir2"
  exit 1
fi

# Exclude patterns
EXCLUDES=("--exclude=node_modules" "--exclude=.git" "--exclude=__pycache__")

# Create temp files for storing file lists
TMP1=$(mktemp)
TMP2=$(mktemp)

# List files in each dir (relative paths), skipping excluded dirs
rsync -a -n "${EXCLUDES[@]}" --out-format='%n' "$DIR1"/ "$DIR2" | sort > "$TMP1"
rsync -a -n "${EXCLUDES[@]}" --out-format='%n' "$DIR2"/ "$DIR1" | sort > "$TMP2"

# Compare: files in DIR2 but not in DIR1
echo "Files in $DIR2 but not in $DIR1:"
comm -23 "$TMP2" "$TMP1"

# Clean up
rm "$TMP1" "$TMP2"
