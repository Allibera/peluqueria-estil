@echo off
color 0b
echo ===========================================================
echo       ACTUALIZADOR DE GITHUB - PELUQUERIA ESTIL
echo       Guardando los ultimos cambios en la nube...
echo ===========================================================
echo.

set PATH=%PATH%;C:\Program Files\GitHub CLI\

git add .
git commit -m "Actualizacion: Configuracion oficial para despliegue en Netlify"
git push origin master

echo.
echo ===========================================================
echo ¡ACTUALIZACION COMPLETADA CON EXITO!
echo ===========================================================
pause
