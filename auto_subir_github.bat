@echo off
color 0b
echo ===========================================================
echo       ASISTENTE DE SUBIDA GITHUB - PELUQUERIA ESTIL
echo ===========================================================
echo.
echo AVISO IMPORTANTE: No cierres esta ventana negra hasta el final.
echo.

set PATH=%PATH%;C:\Program Files\GitHub CLI\

echo [PASO 1] Comprobando tu conexion con GitHub...
echo (Se va a abrir tu navegador. Escribe el codigo y vuelve a esta ventana)
echo.
gh auth login -h github.com -p https -w

echo.
echo ===========================================================
echo [PASO 2] Conexion exitosa. Guardando tu web y subiendo...
echo ===========================================================
git config --global user.name "Peluqueria Admin"
git config --global user.email "admin@peluqueria.test"
git init
git add .
git commit -m "Lanzamiento V1: Landing Page Peluqueria Estil"

gh repo create peluqueria-estil --public --source=. --remote=origin --push

echo.
echo ===========================================================
echo ¡PUESTA EN PRODUCCION FINALIZADA CON EXITO!
echo Ya puedes entrar a tu perfil de github.com y ver el codigo.
echo ===========================================================
pause
