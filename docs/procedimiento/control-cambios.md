---
title: Control de Cambios
---

# Control de Cambios del Sistema

## Objetivo

Establecer el proceso formal para registrar, evaluar, aprobar y controlar los cambios solicitados sobre sistemas informáticos en producción o en desarrollo, asegurando la trazabilidad, el control del impacto y la mitigación de riesgos operativos y tecnológicos.

---

## Alcance

El control de cambios aplica a:
- Sistemas en producción.
- Requerimientos en desarrollo.
- Cambios correctivos, evolutivos, legales o técnicos.

Este proceso es obligatorio para todos los cambios que puedan afectar:
- Funcionalidad
- Seguridad
- Datos
- Cronograma
- Entregables aprobados

---

## Principios del Control de Cambios

- Todo cambio debe estar **registrado formalmente**.
- Ningún cambio se implementará sin **evaluación previa**.
- Los cambios deben contar con **aprobación según su impacto**.
- Todo cambio debe ser **trazable** hasta su implementación.
- Debe existir **capacidad de reversa (rollback)** cuando aplique.

---

## Flujo General del Control de Cambios

1. Registro del cambio solicitado.
2. Análisis del impacto técnico, funcional y operativo.
3. Evaluación del impacto en cronograma y entregables.
4. Aprobación del cambio por las instancias correspondientes.
5. Implementación controlada del cambio.
6. Ejecución de pruebas asociadas.
7. Actualización de registros y cierre del cambio.

---

## Roles Involucrados

| Rol | Responsabilidad |
|---|---|
| Área requirente | Solicitar y justificar el cambio |
| Product Owner (PO) | Evaluar impacto funcional y priorizar |
| DTI | Analizar impacto técnico, implementar y probar |
| Comité Funcional | Aprobar cambios de alto impacto |
| Control Interno / Auditoría | Verificar cumplimiento del procedimiento |

---

## Clasificación de Cambios

| Tipo de cambio | Descripción |
|---|---|
| Correctivo | Corrección de errores |
| Evolutivo | Mejora o nueva funcionalidad |
| Legal | Ajuste por normativa |
| Técnico | Ajuste interno sin impacto funcional |

---

## Registro de Cambios

Todo cambio deberá registrarse en el **Registro de Cambios del Sistema**, el cual debe incluir como mínimo:
- Descripción del cambio
- Justificación
- Tipo de cambio
- Impacto en cronograma
- Impacto en entregables
- Responsable
- Estado del cambio
- Aprobación correspondiente

---

## Aprobación de Cambios

- Cambios de bajo impacto: aprobación PO + DTI.
- Cambios de impacto medio: aprobación PO + DTI + área requirente.
- Cambios críticos: aprobación del Comité Funcional.

---

## Relación con el Procedimiento General

El control de cambios se integra transversalmente a las siguientes etapas:
- Etapa 2: Identificación Preliminar del Requerimiento
- Etapa 5: Desarrollo Iterativo
- Etapa 6: Pruebas
- Etapa 7: Paso a Producción

---

## Consideración de Control Interno

Ningún cambio podrá ser implementado sin registro, evaluación y aprobación formal.  
El incumplimiento de este proceso podrá generar observaciones de auditoría y riesgos operativos para la institución.
