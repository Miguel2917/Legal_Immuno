# Documentos legales de Immuno Frontline

Páginas públicas que pide Google Play para el juego Android **Immuno Frontline** (DonP, `com.immunofrontline.game`).
Se publican con GitHub Pages mediante GitHub Actions (`.github/workflows/pages.yml`).

**Ubicación en el equipo:** `C:\Users\RYZEN\Documents\Legal_Immuno` (fuera del repositorio del juego, que está en
`C:\Users\RYZEN\Documents\Juego TD`). Cualquier actualización de estos documentos se hace en esta carpeta.

| Página | Archivo | URL prevista |
| :--- | :--- | :--- |
| Política de privacidad | `index.html` | `https://<usuario>.github.io/<repo>/` |
| Términos y condiciones | `terms.html` | `https://<usuario>.github.io/<repo>/terms.html` |
| Eliminar cuenta y datos | `delete-account.html` | `https://<usuario>.github.io/<repo>/delete-account.html` |
| Aviso para familias | `families.html` | `https://<usuario>.github.io/<repo>/families.html` |

## Publicar

1. Crear el repositorio en GitHub (público, para Pages gratis) y subir esta carpeta a la rama `main`.
2. En el repositorio: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Cada `push` a `main` publica las páginas (también se puede lanzar a mano en **Actions → Publicar en GitHub Pages**).

## Marcadores que hay que completar

Ninguno. Si se añade otro, se marca con la clase `ph` (resaltado en amarillo) y se apunta aquí.

Resueltos el 22/11/2026 (tarde), con lo que publica Unity:
- Región (`index.html` §11): "Estados Unidos y otros países donde Unity tiene servidores". Unity no deja elegir la
  región y su artículo de soporte no detalla Authentication, Cloud Save, Cloud Code ni Leaderboards.
- Inactividad (`index.html` §12): frase quitada; el juego no borra cuentas inactivas.
- Copias de Unity (`delete-account.html` §4): registros técnicos hasta 30 días (privacidad de Cloud Code); para las
  copias internas, "el tiempo limitado que fija su política", porque Unity no publica el plazo.

Resueltos el 22/11/2026: titular, tipo de titular, domicilio, teléfono, correo (en las cuatro páginas), ley aplicable
(Ecuador) y plazo de respuesta (10 días hábiles; la LOPDP de Ecuador fija un máximo de 15 días).

Cuando estén todos puestos, quitar también el estilo `.ph` si se quiere (o dejarlo: sin marcadores no se usa).

> Orientación preparada durante el desarrollo, no asesoría legal. Conviene que un abogado la revise antes de publicar
> (ver `ANALISIS_LEGAL_PAISES.md` en el repositorio del juego).
