# Ultimate Next.js Project

Este proyecto es una plantilla robusta para construir aplicaciones web modernas utilizando Next.js y un conjunto de tecnologías y herramientas clave.

## Tecnologías Principales

- **Next.js**: Framework de React para renderizado del lado del servidor y generación de sitios estáticos.
- **TypeScript**: Lenguaje tipado para un desarrollo más seguro y escalable.
- **Tailwind CSS**: Framework CSS utilitario para un diseño rápido y responsivo.
- **ESLint**: Herramienta de linting para mantener la calidad del código.
- **Prettier**: Formateador de código para asegurar un estilo consistente.
- **pnpm**: Gestor de paquetes rápido y eficiente.

## Dependencias Clave

El proyecto incluye una variedad de librerías para funcionalidades comunes:

- `@radix-ui/*`: Componentes UI accesibles.
- `cmdk`: Componente de paleta de comandos.
- `date-fns`: Utilidades para manejo de fechas.
- `embla-carousel-react`: Carrusel táctil y responsivo.
- `lucide-react`: Iconos.
- `next-auth`: Autenticación para Next.js.
- `next-themes`: Manejo de temas (claro/oscuro).
- `react-hook-form`: Manejo de formularios con hooks.
- `sonner`: Componentes de Toast.
- `zod`: Validación de esquemas.

## Configuración de Desarrollo

- **ESLint**: Configurado con `eslint-config-standard`, `eslint-plugin-n`, `eslint-plugin-promise`, `eslint-plugin-tailwindcss`, y `eslint-config-prettier` para asegurar un código limpio y con buen estilo.
- **PostCSS**: Configurado con `@tailwindcss/postcss`.
- **TypeScript**: Configuración estándar para un proyecto Next.js.

### Instalación de ESLint y Reglas de Estilo

Para configurar ESLint y las reglas de estilo recomendadas, sigue estos pasos:

1.  Instala `eslint-config-standard`:

    ```bash
    pnpm i eslint-config-standard -D
    ```

2.  Instala los plugins para Node y Promises:

    ```bash
    pnpm i eslint-plugin-n eslint-plugin-promise -D
    ```

3.  Instala el plugin para Tailwind CSS:

    ```bash
    pnpm i eslint-plugin-tailwindcss -D
    ```

4.  Instala la configuración para integrar Prettier con ESLint:

    ```bash
    pnpm i eslint-config-prettier -D
    ```

5.  Instala Prettier:

    ```bash
    pnpm i prettier -D
    ```

**Nota:** Asegúrate de agregar `-D` a los comandos de instalación para guardar estas dependencias como dependencias de desarrollo.

## Cómo Empezar

1.  Clona el repositorio:

    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd ultimate-nextjs
    ```

2.  Instala las dependencias usando pnpm:

    ```bash
    pnpm install
    ```

3.  Ejecuta el servidor de desarrollo:

    ```bash
    pnpm dev
    ```

    El proyecto estará disponible en `http://localhost:3000`.

## Scripts Disponibles

- `pnpm dev`: Inicia el servidor de desarrollo.
- `pnpm build`: Compila el proyecto para producción.
- `pnpm start`: Inicia el servidor de producción.
- `pnpm lint`: Ejecuta ESLint para revisar el código.
- `pnpm format`: Ejecuta Prettier para formatear el código.

## Estructura del Proyecto

(Aquí podrías añadir una breve descripción de la estructura de carpetas principal si lo deseas)

## Contribuir

(Aquí podrías añadir información sobre cómo contribuir si es un proyecto de código abierto)

## Licencia

(Aquí podrías añadir información sobre la licencia del proyecto)
