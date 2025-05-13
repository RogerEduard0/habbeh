import os
import re

# Carpeta donde están los íconos
carpeta_icons = "icons"

if not os.path.exists(carpeta_icons):
    print(f"❌ La carpeta '{carpeta_icons}' no existe.")
    exit()

archivos = os.listdir(carpeta_icons)

print("🧼 Corrigiendo nombres para dejar solo *_icon.png...\n")

for nombre in archivos:
    if not nombre.lower().endswith(".png"):
        continue

    ruta_actual = os.path.join(carpeta_icons, nombre)
    nombre_sin_ext = nombre[:-4]  # quitar .png

    # Expresión regular: elimina cualquier combinación de _icon, _TEMP#, _icon al final
    nombre_base = re.sub(r"(_icon)+(_TEMP\d+)?(_icon)*$", "", nombre_sin_ext, flags=re.IGNORECASE)

    # Reconstruir el nombre correcto
    nombre_final = f"{nombre_base}_icon.png"
    ruta_final = os.path.join(carpeta_icons, nombre_final)

    # Solo renombrar si hay diferencia real
    if ruta_actual != ruta_final:
        if os.path.exists(ruta_final):
            print(f"🗑️ Reemplazando archivo existente: {nombre_final}")
            os.remove(ruta_final)

        os.rename(ruta_actual, ruta_final)
        print(f"✅ Renombrado: {nombre} -> {nombre_final}")

print("\n🎯 Todos los archivos fueron limpiados correctamente a *_icon.png.")
