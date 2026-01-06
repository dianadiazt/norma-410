import DefaultTheme from 'vitepress/theme'
import { CONSTANTES } from '../constants'

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        // Mantiene lo del tema por defecto (si existiera)
        if (DefaultTheme.enhanceApp) DefaultTheme.enhanceApp({ app })

        // ✅ Disponible en templates (.md) como __C__
        app.config.globalProperties.__C__ = CONSTANTES

        // ✅ También disponible por inject si lo necesitas
        app.provide('__C__', CONSTANTES)
    },
}
