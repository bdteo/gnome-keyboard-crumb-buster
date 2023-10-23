#!/bin/bash

# Check if git is installed
if ! command -v git &> /dev/null; then
  echo "Git is not installed. Exiting."
  exit 1
fi

# Get the list of files tracked by git
git_files=$(git ls-files)

# Create the ZIP file containing only the git-tracked files
zip -r bdteo-crumb-buster.zip "$git_files"

echo "ZIP file created: bdteo-crumb-buster.zip"
