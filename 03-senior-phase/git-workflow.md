# GitHub Workflow

## Feature Branches

High level overview: pull latest main, make a branch, commit changes, push to GitHub, make a PR, get it approved, merge it to main. Rinse and repeat.

1. Make issue corresponding to feature
2. `git checkout main`
3. `git pull` to get main up to date
4. `git checkout -b YOUR-NEW-BRANCH-NAME` to switch to a new branch
5. Make commits for a given feature.
  - Use semantic commit messages: `type(scope): message` e.g. `feat(client): switch to React-Redux`
  - Keep commits related to that feature branch. If you need to make other commits, **go back to main**, make a new branch, add those separate commits etc.
6. When you are done, `git push -u origin YOUR-NEW-BRANCH-NAME`
7. Navigate to GitHub
8. Select "open pull request"
9. Refer to any issues the PR will close, e.g. `Closes #32, closes #46`. You need to use "closes" for each issue separately.
10. Request a review
11. Address review comments by pushing more commits
12. When all checks pass, merge to `main`
13. On your local machine, `git checkout main`
14. `git pull`
15. Start the cycle again

## Merge Conflicts

GitHub has an online merge conflict resolution tool, but you _can_ and _should_ learn how to fix merge conflicts locally too.

1. On your local machine, `git checkout main`
2. `git pull`
3. `git checkout YOUR-FEATURE-BRANCH`
4. `git merge main`
5. `git status`
6. Find all conflicts and fix them manually. Collaborate / communicate with teammates to decide how best to do so!
7. `git add -A`
8. `git commit`
9. `git push`
10. Check that the PR now has no conflicts.
