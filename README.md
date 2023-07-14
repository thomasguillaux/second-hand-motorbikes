# second-hand-motorbikes

This project uses Husky and commitlint to ensure that all commit messages adhere to the Conventional Commits standard.

Commit Message Format
Commit messages should follow the Conventional Commits standard, which has the following format:

<type>(optional scope): <description>
<type>: This represents the type of change being made. It should be one of the following:

feat: A new feature
fix: A bug fix
docs: Changes to documentation
style: Changes that do not affect the meaning of the code (white-space, formatting, etc)
refactor: A code change that neither fixes a bug nor adds a feature
perf: A code change that improves performance
test: Adding missing tests or correcting existing tests
chore: Changes to the build process or auxiliary tools and libraries such as documentation generation
(optional scope): This is an optional field that can be used to provide additional context. For example, if your change is related to a specific component or feature, you can mention it here.

<description>: This is a brief description of the change being made.

Examples
Here are some examples of valid commit messages:

feat: add new button to homepage
fix: correct typo in blog post
docs: add usage section to README
style: format code with prettier
refactor: simplify API call function
perf: optimize image loading
test: add tests for user registration
chore: update package.json scripts
Husky and commitlint
Before each commit, Husky will run the pre-commit hook, which currently runs npm test. If the tests fail, the commit will be aborted.

When you attempt to commit, Husky will also run commitlint on your commit message. If your commit message doesn't follow the Conventional Commits standard, the commit will be aborted and you'll get an error message telling you what's wrong.

By following these rules, we can maintain a clean and understandable commit history. Thank you for adhering to these conventions!
