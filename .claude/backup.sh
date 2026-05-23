#!/bin/bash
# Sync Marquis Overhead website to FreeAgent D external drive
# Usage: bash .claude/backup.sh

DRIVE="/Volumes/FreeAgent D"
SOURCE="/Users/aaron/Desktop/Marquis Overhead/Web Site"
DEST="$DRIVE/MarquisOverhead-Website-Backup"

if [ ! -d "$DRIVE" ]; then
  echo "❌  FreeAgent D is not mounted. Plug in the drive and try again."
  exit 1
fi

echo "🔄  Syncing to $DEST ..."
rsync -av --delete \
  --exclude='.next/' \
  --exclude='node_modules/' \
  --exclude='.DS_Store' \
  "$SOURCE/" "$DEST/"

echo "✅  Backup complete — $(date)"
