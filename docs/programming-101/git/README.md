# Using Git for Personal Projects

[Git](https://git-scm.com/) is what is known as version control software. In other words, it helps you keep track of changes to your software. It's used throughout the industry to simplify working on projects with multiple people.

Git works by tracking the directory with your code in it. When a folder is monitored by Git, it's called a `repository`. Git will keep a log of changes made to a repository, and will allow you to add new changes, and even revert old ones.

Setting up a repository is easy. 
1. [Install Git](https://git-scm.com/downloads) if you haven't already. Then create a folder that you want to put your code in. 
2. In a terminal program, such as [Window's PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/getting-started/getting-started-with-windows-powershell?view=powershell-7) and navigate to the folder you want to become your repo. *GitBash works too if you installed on Windows*
3. Execute the following command in the terminal window
```bash
git init
```

Now that you're repo is setup and your changes are being tracked, you'll want to setup your first commit.

## git add

In order to commit changes, we need to tell Git to add them to the current commit. We do this with the `git add` command. This command takes a list of files we want to add to our commit. For example, imagine I have a folder called `project` with the following structure.

```yml
project:
    - index.html
    - README.md
    src:
        - index.js
        - hello.js
```

The following command

```bash
git add README.md index.html src/ 
```

will add `README.md`, `index.html`, and the `src/` directory and everything in it to the commit. If I run `git status` before `git add` I get the following.

```bash
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	README.md
	index.html
	src/

nothing added to commit but untracked files present (use "git add" to track)
```

Once I run `git add README.md index.html src/`, I'll get 
the following.

```bash
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

	new file:   README.md
	new file:   index.html
	new file:   src/hello.js
	new file:   src/index.js
```

*Note: Since the project is super simple I could have used `git add .`, and that would have added everything in the current directory to the commit.*

Now I can finish the commit.


## git commit

A commit is a chunk of work. It represents the work you've done since you're last commit. All the changes to your repo are done in commits. If you don't commit, Git won't remember what changes you've made, so "commit early, and often".

To make a commit we simple have to run `git commit` command. This will open up a terminal based text editor. We use this editor write our `commit message`. The commit message helps us remember what we've committed in the past. 

The terminal text editor is kinda weird to use, so we can specify the commit message directly from `git commit` using the `-m` option.

```bash
git commit -m "example commit message"
```

If everything worked correctly, doing `git status` should yield the following.

```bash
On branch master
nothing to commit, working tree clean
```

## Github

We're currently storing our code locally, but it would make since to make a backup of it somewhere. We might want to work on our project from a different computer (possible because we got a new one). If we want to have other people help us on our project, there going to need a way to get to it.

This is where [Github](https://github.com/) comes in. Github is a place where we can store Git repositories so that we (and potentially other teammates) can access them. If you want to use Github, you'll have to create an account, but it's well worth it.

I won't go over the steps of creating a new repo as [Github has a setup wizard](https://github.com/new) for that.

*There are [alternatives to Github](https://alternativeto.net/software/github/), such as [Gitlab](https://about.gitlab.com/). I've mostly used Github in my career, but it's good to know what's available.*


## git push

`git push` will *push* your most recent commits up to you're Github repository.

## git branch

A branch is a series of commits that diverge from the `master` branch (which is the default branch) or some other branch. Having multiple branches is essential for a project that has multiple people working on it.

You can create a new branch with the `git branch <BRANCH_NAME>` command. For example, if I want to create a `dev` branch, I would use the following.

```bash
git branch dev
```

Most professional projects will have at least 2 branches. The `master` branch and a `dev` branch. 
* `master` represents the stable version of your project. It's the thing that customers/clients will get. It should only receive changes via `git merge`, or [pull requests](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests). You should rarely if ever directly commit to the `master` branch.
* `dev` is the *development* branch. It tends to be unstable, and can receive direct commits, but it's often better to merge in changes for temporary feature branches.
* It's not uncommon to have a `staging` branch. While not strictly necessary, it can be useful to have a branch dedicated to preparing the current version of the project for release. This branch is where you'd do a lot of your Q&A.

If you want to push your current changes to the remote version of your current branch on Github you use the `git push` command after you've `git commit`ted. If you've haven't push on this branch before, you'll need to use the following.

```bash
git push -u origin <BRANCH_NAME>
```

## git clone

Git clone will copy a remote repository to a folder on your machine. For example to clone the Makerspace website code you'd run

```bash
git clone https://github.com/sotrh/makerspace.git
```

If you want to make changes to a repo you've 

## git checkout

`git checkout` is primarily used to change what branch you're currently on. For example if we are on the `master` branch and we want to work on the `dev` branch, we can use

```bash
git checkout dev
```

If we want to get back to `master` we can do `git checkout master`, or we can use `git checkout -` which will take us to the most recently used branch (in this case `master).

You can also use `git checkout` to checkout versions of files, but that's it's own can of worms. Checkout the [documentation](https://git-scm.com/docs/git-checkout) if you want to see all of the options.

*Note: Any changes that you haven't committed will transfer with you when you checkout a different branch. This includes staged changes, as well as untracked files.*

## git reset

You shouldn't have to use `git reset` a lot. This command will unstage all changes you've made since your last commit. The changes are still there, they're just won't be included when you `git commit`.

If you want to want to hard reset your changes, you can use the following command.

```bash
git reset --hard HEAD
```

*Note: this will reset your repository to what it was since your last commit. Any work that you've done **will** be lost. AFAIK, there is no way to undo this, so use it sparingly.*

## git revert

A nicer version of `git reset --hard HEAD`, `git revert` will create a new commit reverting the changes of the previous commit. *You can specify how far back you want to revert. Check the [documentation](https://git-scm.com/docs/git-revert) for details.* You should still use this sparingly, but it's nicer than `git reset`, as it keeps the history of the unwanted changes intact.

*Note: `git revert` only works on **committed** changes.*

## .gitignore

The `.gitignore` file is a file that you can use to tell git what files and directories it should ignore. Here's an example `.gitignore` below.

```
# Build files
/node_modules/

# Files that shouldn't be distributed by Github
secret_api_keys.txt

# Files created by running the project
output.png

# You can select multiple files using a glob pattern
# The following will ignore any files with the .backup extension
*.backup
```

Different kinds of projects will need to ignore different kinds of things, so I can't really give a comprehensive guide. Check the [documentation](https://git-scm.com/docs/gitignore) if you want to know more.