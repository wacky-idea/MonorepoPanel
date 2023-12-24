@echo off
@REM 设置 utf8 编码
chcp 65001 > nul
setlocal

echo 请选择要拉取代码的仓库：
echo 1. GitHub
echo 2. Gitee
set /p choice=请输入选项：

if "%choice%"=="1" (
    call :clone_github_repos
) else if "%choice%"=="2" (
    call :clone_gitee_repos
) else (
    echo 无效的选项
)

goto :eof

:clone_github_repos
echo 正在从 GitHub 拉取代码...
@REM git clone https://github.com/your-github-repo1.git
@REM git clone https://github.com/your-github-repo2.git
@REM 添加更多 GitHub 仓库...

goto :eof

:clone_gitee_repos
echo 正在从 Gitee 拉取代码...
@REM git clone https://gitee.com/your-gitee-repo1.git
@REM git clone https://gitee.com/your-gitee-repo2.git
@REM 添加更多 Gitee 仓库...

goto :eof