---
title: Anexo E3 - Requerimientos Funcionales
---

# Anexo_E3_Requerimientos_Funcionales
## Documento de Requerimientos Funcionales (formato)

### 1. Datos generales

| Campo | Información |
|---|---|
| Sistema / Requerimiento |  |
| Versión | V01 |
| Fecha |  |
| PO |  |
| Responsable DTI |  |

### 2. Lista de requerimientos funcionales (RF)

| ID | Nombre | Prioridad | Descripción (qué hace) | Criterios de aceptación (resultado verificable) |
|---|---|---|---|---|
| RF-01 | WS listar usuarios | Alta | Exponer servicio que lista usuarios activos | Retorna 200, paginación, filtros, PO valida |

### 3. Detalle por requerimiento (repetir por cada RF)

**Identificador:** RF-__  
**Nombre:** __  
**Prioridad:** Alta/Media/Baja  
**Módulo:** __  
**Actor / usuario:** __  

**Descripción**  
Redactar la funcionalidad.  
Ejemplo: “El sistema permitirá consultar usuarios activos para consumo del frontend Vue.”

**Entrada**  
Campos/params esperados.  
Ejemplo: `page`, `limit`, `status=active`.

**Salida**  
Respuesta esperada.  
Ejemplo: JSON: `data[]`, `total`, `page`.

**Reglas / validaciones**
Ejemplo:
- “Si no hay permisos, retornar 403.”
- “limit máximo 100.”

**Criterios de aceptación**
Ejemplo:
- “Dado un usuario autenticado con rol X, cuando consulta, entonces obtiene usuarios activos.”
- “Se registra auditoría del consumo (si aplica).”

### 4. Firmas
| Nombre | Cargo | Fecha | Firma |
|---|---|---|---|
|  | Elaborado (DTI) |  |  |
|  | PO (Aprobación) |  |  |



## 📎 Documento descargable

[📥Documento oficial](https://epmmop365-my.sharepoint.com/:w:/g/personal/diana_diaz_epmmop_gob_ec/IQAwmb5HnNWmSpQ-zb-qZT3YAfDxPjl4hJfn0NraMslIWtQ?e=TvfGT3)

> El formato oficial se encuentra alojado en el repositorio institucional de documentos (SharePoint),
> garantizando control de versiones, trazabilidad y seguridad de la información.
