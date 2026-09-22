@echo off
title Fruitopia Agrowisata - Preview Server
echo ========================================================
echo   Menjalankan Preview Fruitopia Agrowisata
echo ========================================================
echo.

if not exist "node_modules" (
    echo Menginstal dependencies yang dibutuhkan...
    call npm.cmd install
    if errorlevel 1 (
        echo Gagal menginstal dependencies. Pastikan koneksi internet aktif.
        pause
        exit /b 1
    )
)

echo Membuka browser dan menjalankan dev server di http://localhost:5173/ ...
call npm.cmd run dev
pause
