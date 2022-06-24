
$repo_name= Read-Host -Prompt "Enter Project Name"

mkdir $repo_name

copy index.html $repo_name
copy styles.css $repo_name


code $repo_name
cd $repo_name



