@echo off
color 0A
echo =======================================================
echo    AUTOSUBIDA A GITHUB - PELUQUERIA ESTIL
echo    (Por favor, espera unos segundos...)
echo =======================================================
echo.

set PATH=%PATH%;C:\Program Files\GitHub CLI\

echo [1/3] Configurando credenciales de Git...
git config --global user.name "Peluqueria Admin"
git config --global user.email "admin@peluqueria.test"
git init
git add .
git commit -m "Lanzamiento V1: Landing Page Peluqueria Estil"

echo.
echo [2/3] Creando repositorio oficial y subiendo codigo a la nube...
gh repo create peluqueria-estil --public --source=. --remote=origin --push

echo.
echo =======================================================
echo [3/3] FINALIZADO EXITOSAMENTE
echo =======================================================
echo Todo ha sido guardado. Ya puedes entrar a tu web de Github.
echo.
pause
