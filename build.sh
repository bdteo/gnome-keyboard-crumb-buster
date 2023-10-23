#!/bin/bash

# Check if git is installed
if ! command -v git &> /dev/null; then
  echo "Git is not installed. Exiting."
  exit 1
fi

# Get the list of files tracked by git
git_files=$(git ls-files)

# Create the ZIP file only if git_files is not empty
if [ -z "$git_files" ]; then
  echo "No files tracked by git. Nothing to do."
else
  zip -r my-extension.zip $git_files
  echo "ZIP file created: my-extension.zip"
fi
