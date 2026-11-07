@echo off
setlocal enabledelayedexpansion
title Deploy Andrei Gutierrez Portfolio to GitHub
color 0b

echo ==============================================================================
echo       ANDREI SHIN GUTIERREZ - GRAPHIC DESIGN PORTFOLIO DEPLOYMENT
echo              City College of Calamba (CCC) - Class 3CS4
echo ==============================================================================
echo.
echo GitHub Username : LotteIlse747
echo Target Repo     : https://github.com/LotteIlse747/portfolio
echo Live Link       : https://lotteilse747.github.io/portfolio/
echo.
echo ------------------------------------------------------------------------------
echo [Step 1/3] Staging and committing all project files...
echo ------------------------------------------------------------------------------

git add .
git commit -m "Complete Graphic Design Portfolio - Andrei Gutierrez (3CS4)"

echo.
echo ------------------------------------------------------------------------------
echo [Step 2/3] Setting branch and remote origin...
echo ------------------------------------------------------------------------------

git branch -M main
git remote remove origin 2>nul
git remote add origin https://github.com/LotteIlse747/portfolio.git

echo Remote origin configured:
git remote -v

echo.
echo ------------------------------------------------------------------------------
echo [Step 3/3] Pushing to GitHub...
echo ------------------------------------------------------------------------------
echo.
echo IMPORTANT: If you have not created the repository on GitHub yet:
echo A browser window will now open to https://github.com/new to create it.
echo Simply make sure the repository name is: portfolio
echo and click the green 'Create repository' button!
echo.
pause

start https://github.com/new?name=portfolio^&description=Graphic+Design+Portfolio+-+City+College+of+Calamba+(3CS4)^&visibility=public

echo.
echo Once the repository is created on GitHub, press any key to push your code!
pause

echo.
echo Pushing code to GitHub (Git Credential Manager may prompt you to sign in once)...
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ==============================================================================
    echo                     SUCCESSFULLY PUSHED TO GITHUB!
    echo ==============================================================================
    echo.
    echo Next step to activate GitHub Pages (Takes 30 seconds):
    echo 1. Open: https://github.com/LotteIlse747/portfolio/settings/pages
    echo 2. Under 'Build and deployment' ^> 'Source', choose: Deploy from a branch
    echo 3. Under 'Branch', select 'main' and '/ (root)' ^> Click 'Save'
    echo.
    echo YOUR PUBLIC SUBMISSION URL:
    echo ------------------------------------------------------------------------------
    echo   https://lotteilse747.github.io/portfolio/
    echo ------------------------------------------------------------------------------
    echo.
    echo Opening GitHub Pages settings in your browser now...
    start https://github.com/LotteIlse747/portfolio/settings/pages
) else (
    echo.
    echo [NOTE] If git push asked you to sign in, please complete the sign-in prompt.
    echo If the repository was just created, you can re-run this script anytime!
)

echo.
pause
