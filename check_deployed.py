import urllib.request
import re

req = urllib.request.Request('https://fedetco.vercel.app', headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')
js_files = re.findall(r'/assets/index-[^\"]+\.js', html)
print('JS files:', js_files)
for js in js_files:
    js_url = f'https://fedetco.vercel.app{js}'
    js_content = urllib.request.urlopen(js_url).read().decode('utf-8', errors='ignore')
    print('Banner de Portada in JS:', 'Banner de Portada' in js_content)
    print('Panel de Administracion in JS:', 'Panel de Administración' in js_content or 'Panel de Administraci' in js_content)
