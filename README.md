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

Están resaltados en amarillo en las páginas (clase `ph`). Buscar `class="ph"` para encontrarlos todos.

| Marcador | Dónde | Qué poner |
| :--- | :--- | :--- |
| `[NOMBRE LEGAL DEL RESPONSABLE]` | `index.html` (§1 y §15), `terms.html` (§17) | Nombre de la persona o razón social detrás de DonP |
| `[PERSONA NATURAL O EMPRESA]` | `index.html` §15, `terms.html` §17 | Tipo de titular |
| `[DIRECCIÓN POSTAL]` | `index.html` §15, `terms.html` §17 | Domicilio (Japón exige dirección del vendedor o darla a quien la pida) |
| `[TELÉFONO, O "SE FACILITA SIN DEMORA A QUIEN LO PIDA POR CORREO"]` | `terms.html` §17 | Teléfono o esa frase |
| `[CORREO DE CONTACTO]` | las cuatro páginas | Correo de soporte y privacidad |
| `[PAÍS/LEY APLICABLE]` | `terms.html` §16 | País cuya ley rige los términos |
| `[REGIÓN DE LOS SERVIDORES DE UNITY GAMING SERVICES]` | `index.html` §11 | Región del proyecto de Unity Cloud (p. ej. "Estados Unidos") |
| `[OPCIONAL: ... cuentas sin actividad ...]` | `index.html` §12 | Plazo de borrado por inactividad, o quitar la frase |
| `[PLAZO DE RESPUESTA, P. EJ. 30 DÍAS]` | `delete-account.html` §2 | Plazo para responder peticiones por correo |
| `[PLAZO DE CONSERVACIÓN EN COPIAS DE SEGURIDAD DE UNITY]` | `delete-account.html` §4 | Lo que diga Unity, o quitar la frase |

Cuando estén todos puestos, quitar también el estilo `.ph` si se quiere (o dejarlo: sin marcadores no se usa).

> Orientación preparada durante el desarrollo, no asesoría legal. Conviene que un abogado la revise antes de publicar
> (ver `ANALISIS_LEGAL_PAISES.md` en el repositorio del juego).
