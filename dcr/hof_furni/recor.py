from PIL import Image, UnidentifiedImageError
import os

carpeta = "icons"

for archivo in os.listdir(carpeta):
    if not archivo.lower().endswith(".png"):
        continue

    ruta = os.path.join(carpeta, archivo)

    try:
        imagen = Image.open(ruta)

        # Asegurar que tenga canal alfa
        if imagen.mode != "RGBA":
            imagen = imagen.convert("RGBA")

        bbox = imagen.getbbox()

        if bbox:
            recortada = imagen.crop(bbox)
            recortada.save(ruta)
            print(f"✅ Recortado: {archivo} -> {recortada.size}")
        else:
            print(f"⚠️ {archivo} está completamente transparente. No se modificó.")
    except UnidentifiedImageError:
        print(f"❌ No se pudo abrir como imagen: {archivo}")
    except Exception as e:
        print(f"❌ Error inesperado con {archivo}: {e}")

print("\n🎉 Todas las imágenes válidas han sido recortadas.")
