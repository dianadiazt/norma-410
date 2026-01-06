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

<a :href="__C__.SHAREPOINT_ANEXOS.E7_PLAN_REVERSA" target="_blank" rel="noopener">
  📥 Documento oficial
</a>

> El formato oficial se encuentra alojado en el repositorio institucional de documentos (SharePoint),
> garantizando control de versiones, trazabilidad y seguridad de la información.
