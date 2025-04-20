import os
import json

# Ruta de la carpeta con archivos .nitro
carpeta = "furniturefaltante"

# Obtener todos los nombres de archivos .nitro sin la extensión
items = [os.path.splitext(f)[0] for f in os.listdir(carpeta) if f.endswith(".nitro")]

# ID inicial
start_id = 1710200000

# Genera archivo malboroloco.json
furniture_data = []
for i, item in enumerate(items):
    item_id = start_id + i  # Asignar ID incremental a partir de start_id
    furniture_data.append({
        "id": item_id,
        "classname": item,
        "revision": 0,
        "category": "unknown",
        "defaultdir": 0,
        "xdim": 0,
        "ydim": 0,
        "partcolors": {
            "color": []
        },
        "name": item,
        "description": f"malboro está loco etc",
        "adurl": "",
        "offerid": item_id,
        "buyout": False,
        "rentofferid": -1,
        "rentbuyout": False,
        "bc": False,
        "excludeddynamic": False,
        "customparams": "",
        "specialtype": 0,
        "canstandon": False,
        "cansiton": False,
        "canlayon": False,
        "furniline": "",
        "environment": "",
        "rare": False
    })

# Guardar el archivo malboroloco.json
with open("malboroloco.json", "w", encoding="utf-8") as f:
    json.dump(furniture_data, f, indent=2, ensure_ascii=False)

print("malboroloco.json generado.")

# Genera archivo SQL
with open("malboroloco.sql", "w", encoding="utf-8") as sql_file:
    for i, item in enumerate(items):
        item_id = start_id + i
        # Insert into items_base
        sql_file.write(f"INSERT INTO items_base (id, sprite_id, item_name, public_name) VALUES ('{item_id}', '{item_id}', '{item}', '{item}');\n")
        # Insert into catalog_items
        sql_file.write(f"INSERT INTO catalog_items (item_ids, page_id, offer_id, song_id, order_number, catalog_name) VALUES ('{item_id}', 'REVISAR', '{item_id}', '0', '1', '{item}');\n")

print("malboroloco.sql generado.")
