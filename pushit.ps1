
gh repo create

$repo_name= Read-Host -Prompt "Enter Project Nam"
$comment = Read-Host -Prompt "Enter First Commit Comment"

git init
git add .
git commit -m $comment
git branch -M main
git remote add origin https://gamesBrown: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@github.com/gamesBrown/$repo_name.git

git push -u origin main