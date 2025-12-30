/**
 * ============================================================
 * CONSTANTES GLOBALES
 * Norma 410 – Gestión de Requerimientos y Desarrollo de Sistemas
 * Dirección de Tecnología de la Información (DTI)
 * ============================================================
 */

/* ============================================================
 * REPOSITORIOS DE CÓDIGO FUENTE
 * ============================================================ */
export const REPOS_CODIGO = {
  SISTEMA_PRINCIPAL: 'https://github.com/epmmop/sistema-principal',
  SISTEMA_REQUERIMIENTOS: 'https://github.com/epmmop/gestion-requerimientos',
  DOCUMENTACION_TECNICA: 'https://github.com/epmmop/docs-norma410',
}

/* ============================================================
 * REPOSITORIOS DE DOCUMENTACIÓN (VITEPRESS)
 * ============================================================ */
export const REPOS_DOCUMENTACION = {
  NORMA_410: 'https://github.com/epmmop/norma-410',
  PROCEDIMIENTOS_TIC: 'https://github.com/epmmop/procedimientos-tic',
}

/* ============================================================
 * SHAREPOINT – ANEXOS OFICIALES (FORMATOS FIRMADOS)
 * ============================================================ */
export const SHAREPOINT_ANEXOS = {
  ROOT:
    'https://epmmop365-my.sharepoint.com/:f:/r/sites/DTI/Documentos/Norma410/Anexos',

  /* Etapa Principal */
  EP01_ROLES_RESPONSABILIDADES:
    'https://epmmop365-my.sharepoint.com/.../EP01_Asignacion_Roles_y_Responsabilidades.docx',

  /* Etapa 0 – Sistema Nuevo */
  E0_ACTA_INICIO_SISTEMA:
    'https://epmmop365-my.sharepoint.com/.../E0_Acta_Inicio_Sistema_Nuevo.docx',

  /* Etapa 1 – Planificación */
  E1_PLAN_SISTEMA:
    'https://epmmop365-my.sharepoint.com/.../E1_Plan_del_Sistema.docx',

  /* Etapa 2 – Sistemas existentes */
  E2_SOLICITUD_REQUERIMIENTO:
    'https://epmmop365-my.sharepoint.com/.../E2_Solicitud_Formal_Requerimiento.docx',
  E2_REGISTRO_CAMBIOS:
    'https://epmmop365-my.sharepoint.com/.../E2_Registro_Cambios_Sistema.xlsx',

  /* Etapa 3 – Requerimientos */
  E3_RF:
    'https://epmmop365-my.sharepoint.com/.../E3_Requerimientos_Funcionales.docx',
  E3_RNF:
    'https://epmmop365-my.sharepoint.com/.../E3_Requerimientos_No_Funcionales.docx',
  E3_TRAZABILIDAD:
    'https://epmmop365-my.sharepoint.com/.../E3_Matriz_Trazabilidad.xlsx',

  /* Etapa 4 – Diseño */
  E4_DISENO_BD:
    'https://epmmop365-my.sharepoint.com/.../E4_Diseno_Base_Datos.docx',
  E4_MOCKUPS:
    'https://epmmop365-my.sharepoint.com/.../E4_Mockups_Pantallas.pdf',
  E4_ACTA_APROBACION_DISENO:
    'https://epmmop365-my.sharepoint.com/.../E4_Acta_Aprobacion_Diseno.docx',

  /* Etapa 5 – Desarrollo */
  E5_CRONOGRAMA_DETALLADO:
    'https://epmmop365-my.sharepoint.com/.../E5_Cronograma_Detallado.xlsx',

  /* Etapa 6 – Pruebas */
  E6_PLAN_PRUEBAS:
    'https://epmmop365-my.sharepoint.com/.../E6_Plan_Pruebas.docx',
  E6_EVIDENCIAS:
    'https://epmmop365-my.sharepoint.com/.../E6_Evidencias_Pruebas',
  E6_NO_CONFORMIDADES:
    'https://epmmop365-my.sharepoint.com/.../E6_No_Conformidades.xlsx',
  E6_INFORME_PRUEBAS:
    'https://epmmop365-my.sharepoint.com/.../E6_Informe_Consolidado_Pruebas.docx',

  /* Etapa 7 – Producción */
  E7_ACTA_PASO_PRODUCCION:
    'https://epmmop365-my.sharepoint.com/.../E7_Acta_Paso_Produccion.docx',
  E7_RESULTADO_PRODUCCION:
    'https://epmmop365-my.sharepoint.com/.../E7_Resultado_Paso_Produccion.docx',
  E7_ACEPTACION_USUARIO:
    'https://epmmop365-my.sharepoint.com/.../E7_Aceptacion_Usuario.docx',
  E7_ACEPTACION_QA:
    'https://epmmop365-my.sharepoint.com/.../E7_Aceptacion_QA.docx',
  E7_PLAN_REVERSA:
    'https://epmmop365-my.sharepoint.com/.../E7_Plan_Reversa.docx',

  /* Etapa 8 – Entrega */
  E8_ACTA_ENTREGA:
    'https://epmmop365-my.sharepoint.com/.../E8_Acta_Entrega_Sistema.docx',
  E8_MANUAL_USUARIO:
    'https://epmmop365-my.sharepoint.com/.../E8_Manual_Usuario.pdf',
  E8_MANUAL_TECNICO:
    'https://epmmop365-my.sharepoint.com/.../E8_Manual_Tecnico.pdf',
  E8_ACTA_CAPACITACION:
    'https://epmmop365-my.sharepoint.com/.../E8_Acta_Capacitacion.docx',

  /* Etapa 9 – Evaluación */
  E9_INFORME_EVALUACION:
    'https://epmmop365-my.sharepoint.com/.../E9_Informe_Evaluacion_Post.docx',
  E9_PLAN_MEJORAS:
    'https://epmmop365-my.sharepoint.com/.../E9_Plan_Mejoras.xlsx',
}

/* ============================================================
 * SOPORTE Y GOBERNANZA
 * ============================================================ */
export const SOPORTE = {
  MESA_AYUDA: 'https://soporte.epmmop.gob.ec',
  CORREO_TIC: 'mailto:soporte.ti@epmmop.gob.ec',
}

export const NORMATIVA = {
  NORMA_410:
    'https://www.contraloria.gob.ec/documentos/normas-control-interno-410',
  POLITICA_SEGURIDAD:
    'https://intranet.epmmop.gob.ec/politicas/seguridad-informacion',
}

/* ============================================================
 * INFORMACIÓN INSTITUCIONAL
 * ============================================================ */
export const INSTITUCION = {
  NOMBRE: 'Empresa Pública Metropolitana de Movilidad y Obras Públicas',
  SIGLA: 'EPMMOP',
  AREA: 'Dirección de Tecnología de la Información',
  DOCUMENTO: 'GESTIÓN DE REQUERIMIENTOS DE DESARROLLO',
  VERSION: '1.0',
  FECHA: 'Diciembre 2025',
}
