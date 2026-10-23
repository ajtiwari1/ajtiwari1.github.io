#!/bin/bash
set -e

echo "🔨 Building latest production bundle..."
npm run build

echo "📦 Updating 'main' branch with build files only..."
WORKTREE_DIR=$(mktemp -d /tmp/portfolio-dist-XXXXXX)
git worktree add -B main "$WORKTREE_DIR"
rm -rf "$WORKTREE_DIR"/*
cp -r dist/* "$WORKTREE_DIR"/
cp dist/.nojekyll "$WORKTREE_DIR"/ 2>/dev/null || true
cd "$WORKTREE_DIR"
git add -A
git -c user.name="Ajay Tiwari" -c user.email="tiwariajay12351@gmail.com" commit -m "Deploy production build for GitHub Pages (main branch)" || echo "No changes to commit"
cd - > /dev/null
git worktree remove "$WORKTREE_DIR"

echo "✅ 'main' branch updated with build format only!"
echo "🚀 To publish to GitHub, run:"
echo "   git push origin main"
