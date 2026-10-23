#!/bin/bash
set -e

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
git -c user.name="Ajay Tiwari" -c user.email="tiwariajay12351@gmail.com" commit -m "Deploy production build for GitHub Pages" || echo "No changes to commit"
cd - > /dev/null
git worktree remove "$WORKTREE_DIR"

echo "✅ 'main' branch contains build format only!"
echo "🚀 To publish live to GitHub Pages, run:"
echo "   git push -f origin main:gh-pages"
