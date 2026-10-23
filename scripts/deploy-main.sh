#!/bin/bash
set -e

LAST_COMMIT_MSG=$(git log -1 --pretty=%B | head -n 1)
echo "🔨 Building latest production bundle..."
npm run build

echo "📦 Packaging build format into 'main' branch..."
WORKTREE_DIR=$(mktemp -d /tmp/portfolio-dist-XXXXXX)
git worktree add -B main "$WORKTREE_DIR"

# Clean worktree completely including hidden files
find "$WORKTREE_DIR" -mindepth 1 -maxdepth 1 ! -name ".git" -exec rm -rf {} +

# Copy distribution build files
cp -r dist/* "$WORKTREE_DIR"/
cp dist/.nojekyll "$WORKTREE_DIR"/ 2>/dev/null || true

cd "$WORKTREE_DIR"
git add -A
git -c user.name="Ajay Tiwari" -c user.email="tiwariajay12351@gmail.com" commit -m "Deploy: $LAST_COMMIT_MSG (Location: India, no phone)" || echo "No changes to commit"
cd - > /dev/null
git worktree remove "$WORKTREE_DIR"

echo "✅ 'main' branch contains build format only!"
