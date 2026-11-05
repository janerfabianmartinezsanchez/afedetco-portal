import os

file_path = r'C:\Users\px\.gemini\antigravity\scratch\afedetco-portal\src\data\initialData.js'
with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# Sequential replacements for double-encoded mojibake
patterns = [
    ('ÃƒÂ³', 'ó'),
    ('ÃƒÂ¡', 'á'),
    ('ÃƒÂ©', 'é'),
    ('ÃƒÂ­', 'í'),
    ('ÃƒÂº', 'ú'),
    ('ÃƒÂ±', 'ñ'),
    ('Ãƒâ€œ', 'Ó'),
    ('Ãƒâ€°', 'É'),
    ('ÃƒÂ', 'Á'),
    ('Ãƒâ€˜', 'Ñ'),
    ('Ã¢â‚¬Â¢', '•'),
    ('Ã³', 'ó'),
    ('Ã¡', 'á'),
    ('Ã©', 'é'),
    ('Ã­', 'í'),
    ('Ãº', 'ú'),
    ('Ã±', 'ñ'),
    ('Ã“', 'Ó'),
    ('Ã‰', 'É'),
    ('Ãš', 'Ú'),
    ('Ã‘', 'Ñ'),
    ('Â¢â‚¬Â¢', '•'),
    ('Â', '')
]

for old, new in patterns:
    text = text.replace(old, new)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(text)

print('Done fixing initialData.js')
