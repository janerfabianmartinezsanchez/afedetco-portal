import os
import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import parse_xml, OxmlElement
from docx.oxml.ns import nsdecls, qn

doc = docx.Document()

# Margenes estrechas de 0.5 pulgadas para que quepa todo en una sola pagina elegante
sections = doc.sections
for section in sections:
    section.top_margin = Inches(0.4)
    section.bottom_margin = Inches(0.4)
    section.left_margin = Inches(0.5)
    section.right_margin = Inches(0.5)

# Paleta Raizal FEDETCO
C_AZUL = RGBColor(10, 40, 80)      # Azul institucional
C_CIAN = RGBColor(6, 140, 160)     # Cian raizal
C_GRIS = RGBColor(80, 80, 80)

def set_cell_background(cell, fill_hex):
    tcPr = cell._tc.get_or_add_tcPr()
    shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{fill_hex}"/>')
    tcPr.append(shd)

def set_cell_margins(cell, top=60, bottom=60, left=100, right=100):
    tcPr = cell._tc.get_or_add_tcPr()
    tcMar = parse_xml(f'<w:tcMar {nsdecls("w")}><w:top w:w="{top}" w:type="dxa"/><w:bottom w:w="{bottom}" w:type="dxa"/><w:left w:w="{left}" w:type="dxa"/><w:right w:w="{right}" w:type="dxa"/></w:tcMar>')
    tcPr.append(tcMar)

# 1. ENCABEZADO INSTITUCIONAL
p_head = doc.add_paragraph()
p_head.alignment = WD_ALIGN_PARAGRAPH.CENTER
p_head.paragraph_format.space_before = Pt(0)
p_head.paragraph_format.space_after = Pt(2)

run_sub = p_head.add_run("REPÚBLICA DE COLOMBIA • ORGANIZACIÓN SINDICAL MAGISTERIAL DE PRIMER GRADO\n")
run_sub.font.name = "Arial"
run_sub.font.size = Pt(8.5)
run_sub.font.bold = True
run_sub.font.color.rgb = C_CIAN

run_title = p_head.add_run("FEDERACIÓN DE ETNOEDUCADORES DE COLOMBIA - FEDETCO\n")
run_title.font.name = "Arial"
run_title.font.size = Pt(13)
run_title.font.bold = True
run_title.font.color.rgb = C_AZUL

run_lema = p_head.add_run("Educación · Cultura · Identidad · Territorio • Memoria Raizal, Afrocolombiana y Palenquera\n")
run_lema.font.name = "Arial"
run_lema.font.size = Pt(8.5)
run_lema.font.italic = True
run_lema.font.color.rgb = C_GRIS

run_contacto = p_head.add_run("Personería y Registro Sindical Oficial • WhatsApp Afiliaciones: +57 316 904 0090 • Correo: contacto@fedetco.org")
run_contacto.font.name = "Arial"
run_contacto.font.size = Pt(8)
run_contacto.font.color.rgb = C_GRIS

# 2. TITULO DEL FORMULARIO
p_form_title = doc.add_paragraph()
p_form_title.alignment = WD_ALIGN_PARAGRAPH.CENTER
p_form_title.paragraph_format.space_before = Pt(4)
p_form_title.paragraph_format.space_after = Pt(4)

run_f = p_form_title.add_run("FORMATO ÚNICO NACIONAL DE AFILIACIÓN SINDICAL\nY AUTORIZACIÓN EXPRESA DE DESCUENTO POR NÓMINA")
run_f.font.name = "Arial"
run_f.font.size = Pt(10.5)
run_f.font.bold = True
run_f.font.color.rgb = RGBColor(20, 20, 20)

p_leg = doc.add_paragraph()
p_leg.alignment = WD_ALIGN_PARAGRAPH.CENTER
p_leg.paragraph_format.space_before = Pt(0)
p_leg.paragraph_format.space_after = Pt(6)
r_leg = p_leg.add_run("(Amparado por los Artículos 38 y 39 de la Constitución Política de Colombia, Convenios 87 y 98 de la OIT y Código Sustantivo del Trabajo)")
r_leg.font.name = "Arial"
r_leg.font.size = Pt(7.5)
r_leg.font.italic = True
r_leg.font.color.rgb = C_GRIS

# 3. TABLA 1: DATOS PERSONALES DEL DOCENTE
p_s1 = doc.add_paragraph()
p_s1.paragraph_format.space_before = Pt(2)
p_s1.paragraph_format.space_after = Pt(2)
r_s1 = p_s1.add_run("1. INFORMACIÓN PERSONAL DEL DOCENTE")
r_s1.font.name = "Arial"
r_s1.font.size = Pt(8.5)
r_s1.font.bold = True
r_s1.font.color.rgb = C_AZUL

table1 = doc.add_table(rows=4, cols=4)
table1.alignment = WD_TABLE_ALIGNMENT.CENTER
table1.autofit = False

t1_data = [
    [("Nombres y Apellidos Completos:", 3), ("", 0), ("", 0), ("C.C. / T.I. No.:", 1)],
    [("Lugar y Fecha de Expedición:", 2), ("", 0), ("Fecha de Nacimiento:", 1), ("Género: [ ] M  [ ] F  [ ] Otro", 1)],
    [("Comunidad Étnica: [ ] Negra  [ ] Afro  [ ] Raizal  [ ] Palenquera", 2), ("", 0), ("Teléfono Móvil / WhatsApp:", 1), ("Teléfono Fijo / Respaldo:", 1)],
    [("Correo Electrónico Personal / Institucional:", 2), ("", 0), ("Dirección de Residencia:", 1), ("Municipio y Departamento:", 1)]
]

for row_idx, row in enumerate(t1_data):
    for col_idx, (text, colspan) in enumerate(row):
        if colspan > 0:
            cell = table1.cell(row_idx, col_idx)
            set_cell_background(cell, "F8FAFC" if row_idx % 2 == 0 else "FFFFFF")
            set_cell_margins(cell, top=40, bottom=40, left=60, right=60)
            p = cell.paragraphs[0]
            p.paragraph_format.space_before = Pt(0)
            p.paragraph_format.space_after = Pt(0)
            run = p.add_run(text)
            run.font.name = "Arial"
            run.font.size = Pt(8)
            run.font.bold = ("No.:" in text or "Completos:" in text)

# Merge de celdas
table1.cell(0, 0).merge(table1.cell(0, 2))
table1.cell(1, 0).merge(table1.cell(1, 1))
table1.cell(2, 0).merge(table1.cell(2, 1))
table1.cell(3, 0).merge(table1.cell(3, 1))

# 4. TABLA 2: DATOS LABORALES E INSTITUCIONALES
p_s2 = doc.add_paragraph()
p_s2.paragraph_format.space_before = Pt(4)
p_s2.paragraph_format.space_after = Pt(2)
r_s2 = p_s2.add_run("2. INFORMACIÓN LABORAL E INSTITUCIONAL (DATOS DE LA ESCUELA)")
r_s2.font.name = "Arial"
r_s2.font.size = Pt(8.5)
r_s2.font.bold = True
r_s2.font.color.rgb = C_AZUL

table2 = doc.add_table(rows=3, cols=4)
table2.alignment = WD_TABLE_ALIGNMENT.CENTER
table2.autofit = False

t2_data = [
    [("Secretaría de Educación Pagadora (Dpto/Mpio):", 2), ("", 0), ("Institución Educativa o Centro Rural:", 2), ("", 0)],
    [("Municipio y Corregimiento / Vereda de la Escuela:", 2), ("", 0), ("Código DANE de la Sede Educativa:", 1), ("Zona: [ ] Rural  [ ] Urbana", 1)],
    [("Cargo: [ ] Docente Aula  [ ] Directivo  [ ] Orientador", 2), ("", 0), ("Régimen: [ ] Dec. 2277  [ ] Dec. 1278  [ ] Provisionalidad / Contrato", 2), ("", 0)]
]

for row_idx, row in enumerate(t2_data):
    for col_idx, (text, colspan) in enumerate(row):
        if colspan > 0:
            cell = table2.cell(row_idx, col_idx)
            set_cell_background(cell, "F8FAFC" if row_idx % 2 == 0 else "FFFFFF")
            set_cell_margins(cell, top=40, bottom=40, left=60, right=60)
            p = cell.paragraphs[0]
            p.paragraph_format.space_before = Pt(0)
            p.paragraph_format.space_after = Pt(0)
            run = p.add_run(text)
            run.font.name = "Arial"
            run.font.size = Pt(8)

table2.cell(0, 0).merge(table2.cell(0, 1))
table2.cell(0, 2).merge(table2.cell(0, 3))
table2.cell(1, 0).merge(table2.cell(1, 1))
table2.cell(2, 0).merge(table2.cell(2, 1))
table2.cell(2, 2).merge(table2.cell(2, 3))

# 5. CLAUSULA JURIDICA OBLIGATORIA DE AFILIACION Y DESCUENTO
p_s3 = doc.add_paragraph()
p_s3.paragraph_format.space_before = Pt(5)
p_s3.paragraph_format.space_after = Pt(2)
r_s3 = p_s3.add_run("3. MANIFESTACIÓN VOLUNTARIA DE AFILIACIÓN Y AUTORIZACIÓN DE DESCUENTO POR NÓMINA")
r_s3.font.name = "Arial"
r_s3.font.size = Pt(8.5)
r_s3.font.bold = True
r_s3.font.color.rgb = C_AZUL

table3 = doc.add_table(rows=1, cols=1)
cell3 = table3.cell(0, 0)
set_cell_background(cell3, "F1F5F9")
set_cell_margins(cell3, top=50, bottom=50, left=80, right=80)
p3 = cell3.paragraphs[0]
p3.paragraph_format.space_before = Pt(0)
p3.paragraph_format.space_after = Pt(0)
p3.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY

r3_text = (
    "Yo, el (la) suscrito(a) docente cuyos datos figuran en el presente documento, en pleno goce de mis facultades legales "
    "y en ejercicio del derecho fundamental de asociación consagrado en el Artículo 39 de la Constitución Política de Colombia, "
    "manifiesto de manera libre, consciente y voluntaria mi decisión de AFILIARME como miembro activo a la FEDERACIÓN DE "
    "ETNOEDUCADORES DE COLOMBIA (FEDETCO).\n"
    "Asimismo, me comprometo a respetar y acatar los Estatutos vigentes, las directrices del Comité Ejecutivo Nacional y "
    "participar en las actividades gremiales. Por medio de la presente, AUTORIZO de forma expresa, permanente e irrevocable "
    "al respectivo Pagador / Tesorería de la Secretaría de Educación pagadora para que, a partir de la fecha de radicación de "
    "esta solicitud, descuente mensualmente por nómina de mi asignación básica el valor correspondiente a la CUOTA SINDICAL "
    "ordinaria estatutaria, y sea girada a la cuenta bancaria oficial de FEDETCO."
)
run3 = p3.add_run(r3_text)
run3.font.name = "Arial"
run3.font.size = Pt(7.8)

# 6. SECCION DE FIRMA DEL DOCENTE Y HUELLA
p_s4 = doc.add_paragraph()
p_s4.paragraph_format.space_before = Pt(4)
p_s4.paragraph_format.space_after = Pt(2)
r_s4 = p_s4.add_run("4. FIRMA DEL DOCENTE, HUELLA Y CONSTANCIA")
r_s4.font.name = "Arial"
r_s4.font.size = Pt(8.5)
r_s4.font.bold = True
r_s4.font.color.rgb = C_AZUL

table4 = doc.add_table(rows=1, cols=3)
table4.alignment = WD_TABLE_ALIGNMENT.CENTER

# Celda Firma
c_firma = table4.cell(0, 0)
set_cell_margins(c_firma, top=60, bottom=60, left=60, right=60)
pf = c_firma.paragraphs[0]
pf.alignment = WD_ALIGN_PARAGRAPH.CENTER
pf.add_run("\n\n_____________________________________\n").font.size = Pt(8)
rf1 = pf.add_run("FIRMA DEL DOCENTE AFILIADO\n")
rf1.font.bold = True
rf1.font.size = Pt(8)
pf.add_run("C.C. No. ________________ de ____________\n").font.size = Pt(7.5)
pf.add_run("Fecha de Diligenciamiento: ____ / ____ / 202__").font.size = Pt(7.5)

# Celda Huella
c_huella = table4.cell(0, 1)
set_cell_margins(c_huella, top=40, bottom=40, left=40, right=40)
ph = c_huella.paragraphs[0]
ph.alignment = WD_ALIGN_PARAGRAPH.CENTER
ph.add_run("\n┌────────────────┐\n│                │\n│     HUELLA     │\n│    DACTILAR    │\n│                │\n└────────────────┘\n").font.size = Pt(7.5)
rh1 = ph.add_run("Índice Derecho")
rh1.font.size = Pt(7)

# Celda Constancia FEDETCO
c_fedetco = table4.cell(0, 2)
set_cell_background(c_fedetco, "F8FAFC")
set_cell_margins(c_fedetco, top=40, bottom=40, left=50, right=50)
p_fed = c_fedetco.paragraphs[0]
p_fed.alignment = WD_ALIGN_PARAGRAPH.CENTER
p_fed.add_run("RADICACIÓN FEDETCO\n(Uso exclusivo del sindicato)\n").font.bold = True
p_fed.paragraphs_format = Pt(7)
p_fed.add_run("Fecha Radicado: ____ / ____ / 202__\nNo. Folio: FED-__________\n\n___________________________\n").font.size = Pt(7)
rfed1 = p_fed.add_run("Luz Minia Carabalí Montaño\nPresidenta FEDETCO\n")
rfed1.font.bold = True
rfed1.font.size = Pt(7)
rfed2 = p_fed.add_run("Jeiler Bejarano Córdoba\nFiscal Nacional FEDETCO")
rfed2.font.bold = True
rfed2.font.size = Pt(7)

# Rutas de guardado
desktop_path = r"C:\Users\px\Desktop\Formulario_Oficial_Afiliacion_FEDETCO.docx"
portal_docs_path = r"C:\Users\px\.gemini\antigravity\scratch\afedetco-portal\public\documents\formulario-afiliacion-fedetco.docx"
brain_path = r"C:\Users\px\.gemini\antigravity\brain\e5e83f38-fd04-4f4d-800a-cf8308ae6af5\Formulario_Oficial_Afiliacion_FEDETCO.docx"

os.makedirs(os.path.dirname(portal_docs_path), exist_ok=True)

doc.save(desktop_path)
doc.save(portal_docs_path)
doc.save(brain_path)

print("Formulario generado exitosamente en Desktop, Portal y Brain!")
