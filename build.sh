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
  exit 1
fi

# Specify the ZIP file name
zip_name="bdteo-crumb-buster.zip"

# Create an empty ZIP file
zip $zip_name -@ < /dev/null

# Add each git-tracked file to the ZIP
for file in $git_files; do
  zip -u $zip_name "$file"
done

echo "ZIP file created: $zip_name"
