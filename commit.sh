#!/bin/bash

# Stage all files
git add .

# Prompt for a commit message
echo "Enter a commit message:"
read commit_message

# Check if a message was entered
if [ -z "$commit_message" ]; then
  echo "Commit message cannot be empty. Aborting."
  exit 1
fi

# Commit the changes with the provided message
git commit -m "$commit_message"

# Push changes to the current branch
git push

echo "Code has been pushed successfully!"
