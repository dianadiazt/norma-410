---
title: Anexo E7 - Plan de Reversa (Rollback)
---

# Anexo_E7_Plan_Reversa
## Plan de Reversa (Rollback)

### 1. Datos generales
| Campo | Información |
|---|---|
| Sistema / Requerimiento |  |
| Versión |  |
| Fecha |  |
| Responsable |  |

### 2. Escenarios de reversa
| Escenario | Criterio de activación | Acción |
|---|---|---|
| Error crítico en producción | caída / pérdida función crítica | Ejecutar rollback + restaurar versión anterior |

### 3. Pasos de reversa
1. Detener despliegue.
2. Volver a versión anterior (tag/release).
3. Ejecutar rollback BD si aplica.
4. Validar smoke test.
5. Registrar incidente y causa.

### 4. Responsables
| Rol | Nombre |
|---|---|
| DTI |  |
| DBA (si aplica) |  |
| Infra (si aplica) |  |


## 📎 Documento descargable

[📥Documento oficial](https://epmmop365-my.sharepoint.com/:w:/r/personal/diana_diaz_epmmop_gob_ec/Documents/DESARROLLO/NORMATIVA/ANEXOS/ETAPA%207%20%E2%80%93%20Paso%20a%20Producci%C3%B3n/Anexo_E7_Plan_Reversa.docx?d=w5a1423474f5d49b7a37eaa645c10cf7d&csf=1&web=1&e=2DkSKl)

> El formato oficial se encuentra alojado en el repositorio institucional de documentos (SharePoint),
> garantizando control de versiones, trazabilidad y seguridad de la información.
