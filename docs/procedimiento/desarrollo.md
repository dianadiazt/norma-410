---
title: Desarrollo (Etapas)
---

# 4. Desarrollo

## ETAPA PRINCIPAL – Gobernanza y asignación de roles y responsabilidades

**Objetivo**  
Establecer la estructura de gobernanza, roles, responsabilidades y niveles de decisión que regirán todo el ciclo, garantizando segregación de funciones, trazabilidad y cumplimiento.

**Aplicabilidad**  
Obligatoria para:
- Sistemas nuevos
- Requerimientos o mejoras a sistemas existentes

**Actividades**
1. Identificación del área requirente y del área propietaria del sistema.
2. Asignación formal del PO y su reemplazo.
3. Identificación del equipo técnico responsable (DTI).
4. Determinación de Comité Funcional (según impacto o criticidad).
5. Definición de roles de verificación y control.
6. Registro formal de roles y responsabilidades.

**Roles y Responsabilidades (referencial)**

| Rol | Responsabilidad |
|---|---|
| Área Requirente | Identificar y justificar la necesidad institucional. |
| Product Owner | Validar alcance funcional, priorizar y aceptar entregables. |
| DTI | Diseñar, desarrollar, probar e implementar la solución. |
| Comité Funcional | Aprobar sistemas nuevos y cambios de alto impacto. |
| Auditoría / Control Interno | Verificar cumplimiento y evidencias documentales. |

**Entregables**
| N° | Entregable | Código de anexo |
|---:|---|---|
| 1 | Acta de Asignación de Roles y Responsabilidades | Anexo_EP01_Asignacion_Roles_y_Responsabilidades |

**Control interno**  
No se inicia ninguna etapa posterior sin esta etapa documentada.

---

## ETAPA 0 – Identificación y aprobación del sistema nuevo (solo sistemas nuevos)

**Objetivo**  
Autorizar formalmente el sistema nuevo validando necesidad, viabilidad, alineación estratégica, impacto y alcance inicial.

**Actividades**
1. Identificación y documentación de la necesidad institucional.
2. Análisis de impacto organizacional.
3. Evaluación de viabilidad: Técnica / Operativa / Legal / Presupuestaria.
4. Alcance macro (módulos, exclusiones).
5. Ratificación de roles definidos en la Etapa Principal.
6. Alineación estratégica institucional.
7. Riesgos iniciales y controles.

**Entregables**
| N° | Entregable | Código de anexo |
|---:|---|---|
| 1 | Acta de Inicio del Sistema Nuevo | Anexo_E0_Acta_Inicio_Sistema_Nuevo |

**Control interno**  
No pasa a Etapa 1 sin el acta aprobada.

---

## ETAPA 1 – Planificación del sistema (solo sistemas nuevos)

**Objetivo**  
Planificar el sistema nuevo: metodología, arquitectura base, cronograma macro, riesgos y estrategias mínimas.

**Actividades**
- Roadmap (fases/hitos/entregas).
- Arquitectura base (componentes/integraciones/ambientes).
- Metodología (ágil o híbrida).
- Cronograma macro.
- Riesgos y mitigación.
- Estrategia de pruebas (mínimo funcional + validación de usuario).
- Estrategia de seguridad (mínimo control de accesos y protección).

**Entregables**
| N° | Entregable | Código de anexo |
|---:|---|---|
| 1 | Plan del Sistema | Anexo_E1_Plan_Sistema |

**Nota MVP**  
Puede ser simplificado, manteniendo alcance, cronograma macro, riesgos y controles mínimos.

---

## ETAPA 2 – Identificación Preliminar del Requerimiento (solo sistemas existentes)

**Objetivo**  
Registrar, clasificar y priorizar el requerimiento antes del levantamiento detallado.

**Actividades**
1. Recepción y registro formal de la solicitud.
2. Viabilidad inicial (técnica/operativa/normativa).
3. Priorización por impacto/urgencia/alineación.
4. Confirmación PO y reemplazo.
5. Clasificación: Correctivo / Evolutivo / Legal / Emergente.

**Entregables**
| N° | Entregable | Código de anexo |
|---:|---|---|
| 1 | Solicitud Formal de Requerimiento | Anexo_E2_Solicitud_Requerimiento |
| 2 | Registro de Cambios del Sistema | Anexo_E2_Registro_Cambios_Sistema |

---

## ETAPA 3 – Levantamiento y Análisis de Requerimientos

**Objetivo**  
Levantar, analizar y documentar requerimientos con criterios de aceptación y trazabilidad.

**Actividades**
1. Revisión de procesos actuales.
2. Identificación de brechas.
3. Requerimientos funcionales (historias/requerimientos).
4. Criterios de aceptación.
5. No funcionales (solo obligatorio en sistemas nuevos).
6. Matriz de trazabilidad (req → diseño → prueba).

**Entregables**
| N° | Entregable | Código de anexo | Aplicabilidad |
|---:|---|---|---|
| 1 | Documento de Requerimientos Funcionales | Anexo_E3_Requerimientos_Funcionales | Todos |
| 2 | Documento de Requerimientos No Funcionales | Anexo_E3_Requerimientos_No_Funcionales | Solo nuevos |
| 3 | Matriz de Trazabilidad Req–Diseño–Prueba | Anexo_E3_Matriz_Trazabilidad | Todos |

---

## ETAPA 4 – Diseño de la Solución

**Objetivo**  
Definir la solución técnica/funcional: datos, flujos, interfaces y componentes.

**Actividades**
1. Diseño de BD (propuesta).
2. Mockups/prototipos de pantallas.
3. Diseño de interfaces/reportes.
4. Revisión y aprobación formal del diseño (con observaciones / rechazo / aprobación).

**Entregables**
| N° | Entregable | Código de anexo | Aplicabilidad |
|---:|---|---|---|
| 1 | Documento de Diseño de Base de Datos | Anexo_E4_Diseno_Base_Datos | Todos |
| 2 | Mockups / Prototipos de Pantallas | Anexo_E4_Mockups_Pantallas | Todos |
| 3 | Acta de Revisión y Aprobación del Diseño | Anexo_E4_Acta_Revision_Aprobacion_Diseno | Todos |

---

## ETAPA 5 – Desarrollo Iterativo

**Objetivo**  
Desarrollar incrementalmente con control de versiones y validación del PO.

**Actividades**
1. Desarrollo por iteraciones/sprints.
2. Entregas parciales (por defecto, quincenal).
3. Validación continua del PO.
4. Control de versiones.
5. Registro de cambios asociados al sprint.

**Entregables**
| N° | Entregable | Código de anexo | Aplicabilidad |
|---:|---|---|---|
| 1 | Código fuente / versiones funcionales | Ver repositorio | Todos |
| 2 | Registro de versiones | Sistema de gestión DTI | Todos |
| 3 | Cronograma detallado | Anexo_E5_Cronograma_Detallado_Desarrollo | Todos |

---

## ETAPA 6 – Pruebas

**Objetivo**  
Validar cumplimiento con un enfoque proporcional (mínimo para todos, completo para nuevos/críticos).

**Entregables**
| N° | Entregable | Código de anexo | Aplicabilidad |
|---:|---|---|---|
| 1 | Plan de Pruebas | Anexo_E6_Plan_Pruebas | Todos |
| 2 | Evidencias de Pruebas | Anexo_E6_Evidencias_Pruebas | Todos |
| 3 | Registro de No Conformidades | Anexo_E6_No_Conformidades | Cuando aplique |
| 4 | Informe Consolidado de Pruebas | Anexo_E6_Informe_Pruebas | MVP y nuevos |

---

## ETAPA 7 – Paso a Producción

**Objetivo**  
Liberar de forma controlada y con reversa, incluyendo scripts BD y roles/permisos cuando aplique.

**Entregables**
| N° | Entregable | Código de anexo | Aplicabilidad |
|---:|---|---|---|
| 1 | Acta de Paso a Producción (incluye scripts/roles) | Anexo_E7_Acta_Paso_Produccion | Todos |
| 2 | Acta de Resultado de Paso a Producción | Anexo_E7_Acta_Resultado_Paso_Produccion | Todos |
| 3 | Acta de Aceptación del Usuario | Anexo_E7_Acta_Acepta_Usuario | Todos |
| 4 | Acta de Aceptación de QA | Anexo_E7_Acta_Acepta_QA | Todos |
| 5 | Plan de Reversa (Rollback) | Anexo_E7_Plan_Reversa | MVP y nuevos |

---

## ETAPA 8 – Entrega y Capacitación

**Objetivo**  
Formalizar entrega y adopción.

**Entregables**
| N° | Entregable | Código de anexo | Aplicabilidad |
|---:|---|---|---|
| 1 | Acta de Entrega del Sistema/Requerimiento | Anexo_E8_Acta_Entrega_Sistema | Todos |
| 2 | Manual de Usuario | Anexo_E8_Manual_Usuario | MVP y nuevos |
| 3 | Manual Técnico | Anexo_E8_Manual_Tecnico | Solo nuevos |
| 4 | Acta de Capacitación | Anexo_E8_Acta_Capacitacion | Cuando aplique |

---

## ETAPA 9 – Evaluación y Mejora Continua

**Objetivo**  
Evaluar satisfacción y definir mejoras priorizadas.

**Entregables**
| N° | Entregable | Código de anexo | Aplicabilidad |
|---:|---|---|---|
| 1 | Informe de Evaluación Post Implementación | Anexo_E9_Informe_Evaluacion_Post | MVP y nuevos |
| 2 | Plan de Mejoras Priorizadas | Anexo_E9_Plan_Mejoras | Cuando aplique |
