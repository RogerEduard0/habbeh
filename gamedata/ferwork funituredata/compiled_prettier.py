import os
import json

# Obtiene todos los archivos .json en el directorio actual
json_files = [f for f in os.listdir('.') if f.endswith('.json') and not f.endswith('_compiled.json') and not f.endswith('_prettier.json')]

for file_name in json_files:
    with open(file_name, 'r', encoding='utf-8') as f:
        try:
            data = json.load(f)
        except json.JSONDecodeError as e:
            print(f"Error al leer {file_name}: {e}")
            continue

    # Archivo compactado
    compiled_name = file_name.replace('.json', '_compiled.json')
    with open(compiled_name, 'w', encoding='utf-8') as f:
        json.dump(data, f, separators=(',', ':'))  # sin espacios

    # Archivo embellecido
    prettier_name = file_name.replace('.json', '_prettier.json')
    with open(prettier_name, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, separators=(',', ': '), ensure_ascii=False)  # con indentación bonita

    print(f"Procesado: {file_name} → {compiled_name}, {prettier_name}")
