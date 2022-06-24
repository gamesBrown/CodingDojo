

$repo_name= Read-Host -Prompt "Enter Project Nam"
$comment = Read-Host -Prompt "Enter First Commit Comment"


git add .
git commit -m $comment
git push origin -m main https://gamesBrown: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@github.com/gamesBrown/$repo_name.git