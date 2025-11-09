# Apuntes de React (Basado en Videos)

---

## Temas Cubiertos

* ¿Qué es React?
* Create React App vs Vite vs Next.js
* ¿Qué hace Vite en React?
* ESLINT y PRETTIER
* Sintaxis JSX y TSX
* Componentes en React
* Métodos de Estilizado (Modules, Global, SCSS)
* Renderizado en React
* Estado (State) en React

---

## ¿Qué es React?

React es una **biblioteca de JavaScript** (o librería) que se utiliza para construir **interfaces de usuario**. A diferencia de un framework completo, React ofrece más flexibilidad y se enfoca únicamente en la vista.

Sus principios son:

* **Declarativo**: Le dices a React *qué* quieres mostrar (usando componentes y estado), y React se encarga de *cómo* actualizar el DOM (la estructura de la página web) de manera eficiente para que coincida con lo que declaraste.
* **Basado en componentes**: La interfaz se divide en piezas reutilizables e independientes llamadas componentes. Cada componente es una función que acepta datos (`props`) y devuelve una descripción de la UI (usando JSX).
* **"Aprende una vez, escríbelo donde sea"**: La misma lógica de componentes de React se puede usar para la web (con `react-dom`), aplicaciones móviles (con `React Native`) o de escritorio.

---

## Create React App vs Vite vs Next.js

Estas son herramientas que crean un proyecto de React listo para usar, configurando automáticamente herramientas complejas como transpiladores (Babel) y empaquetadores (Webpack).

* **Create React App (CRA)**:
    * Era la herramienta oficial original, pero ahora se considera **obsoleta**.
    * Utiliza **Webpack** y **Babel** por debajo.
    * Es **extremadamente lenta** para instalar dependencias y para iniciar el servidor de desarrollo.
    * Oculta toda la configuración, y para modificarla se requiere un proceso complejo llamado `eject`.

* **Vite**:
    * Es la herramienta moderna **recomendada** para la mayoría de proyectos.
    * Utiliza herramientas nativas de ES Modules, **esbuild** y **Rollup**.
    * Su principal característica es la **velocidad**: es **extremadamente rápido** tanto para instalar como para iniciar el servidor de desarrollo (casi instantáneo).
    * Crea un proyecto más limpio, ligero y fácil de configurar.

* **Next.js**:
    * Es un **framework completo** para producción, no solo un iniciador de proyectos.
    * Añade muchas características cruciales que React por sí solo no tiene, como **enrutamiento** (manejo de páginas) y la capacidad de hacer **Renderizado en el Servidor (SSR)**, lo cual es vital para el **SEO** (posicionamiento en buscadores).
    * Es la opción recomendada para proyectos serios, pero no para aprender React desde cero, ya que añade una capa de complejidad.

---

## ¿Qué hace Vite en React?

Vite es un constructor de proyectos y servidor de desarrollo. Su trabajo es tomar tu código fuente (archivos `.jsx`, `.css`, etc.) y servirlo al navegador de una manera que este entienda.

* **En Desarrollo (`npm run dev`)**: A diferencia de Webpack (CRA), Vite **no empaqueta la aplicación para desarrollo**. Levanta un servidor casi al instante y utiliza los módulos ES nativos del navegador. Solo transpila (transforma) el archivo específico que el navegador le pide en ese momento, "al vuelo", lo que lo hace increíblemente rápido.
* **En Producción (`npm run build`)**: Cuando preparas la aplicación para el despliegue, Vite sí **empaqueta, optimiza y minifica** todo tu código (JS, CSS) en un conjunto de archivos estáticos dentro de una carpeta `dist`, listos para subir a un servidor.

---

## ¿Qué es ESLINT y PRETTIER?

Son dos herramientas que ayudan a mantener la calidad y consistencia del código, especialmente cuando se trabaja en equipo.

* **ESLINT (Linter)**: Se enfoca en la **calidad del código** y en encontrar errores. Analiza *qué* estás escribiendo. Por ejemplo, te advierte si creas una variable que nunca usas o si estás escribiendo código que podría generar problemas.
* **PRETTIER (Formatter)**: Se enfoca únicamente en el **formato y la presentación** del código. Analiza *cómo* se ve tu código. Su único trabajo es reformatear tu código automáticamente para que cumpla reglas de estilo (comillas dobles o simples, espaciado, punto y coma, etc.).

> **Nota**: A veces sus reglas chocan. La solución es usar `eslint-config-prettier`, que hace que ESLINT deje de preocuparse por el formato y le ceda esa responsabilidad exclusivamente a Prettier.

---

## ¿Qué es la sintaxis JSX y TSX?

* **JSX (JavaScript XML)**: Es una extensión de sintaxis (o "azúcar sintáctico") usada por React que te permite **escribir una estructura similar a HTML dentro de tu código JavaScript**.
    * No es ni HTML ni JavaScript puro; el navegador no lo entiende.
    * Necesita ser **transpilado** (convertido) por una herramienta como Babel o esbuild.
    * Por ejemplo, `<h1>Hola</h1>` en JSX se convierte en `React.createElement('h1', null, 'Hola')` en JavaScript.
    * Te permite insertar lógica de JavaScript (como variables o funciones) directamente en tu "HTML" usando llaves `{}`.
    * Los atributos de HTML se escriben en `camelCase` (ej. `class` es `className`, `onclick` es `onClick`), porque `class` es una palabra reservada en JavaScript.

* **TSX**: Es simplemente la extensión de archivo (`.tsx`) que se utiliza cuando escribes **sintaxis JSX** dentro de un archivo **TypeScript**.

---

## ¿Qué es un componente en React?

Un componente es la pieza fundamental de React. Es una porción de la interfaz de usuario **independiente y reutilizable**.

* En su forma más simple, un componente es una **función de JavaScript**.
* Esta función debe empezar con **Mayúscula** (PascalCase), por ejemplo `VideoItem`, para que React la distinga de etiquetas HTML nativas como `div`.
* Acepta un objeto de datos como entrada, llamado **`props`** (propiedades).
* **Devuelve JSX** (la estructura similar a HTML) que describe lo que ese componente debe renderizar en la pantalla.
* Un componente debe devolver **una única etiqueta raíz**. Si necesitas devolver varios elementos, debes envolverlos en un `div` o en un **Fragmento** (`<>...</>`).

---

## Diferencia entre los estilos Modules, global y style, SCSS y SASS

Son diferentes formas de aplicar estilos CSS a tus componentes en React:

* **`style` (Estilos en línea)**:
    * Se aplica directamente en la etiqueta JSX: `<div style={...}>`.
    * En React, la prop `style` no acepta un string, sino un **objeto JavaScript** con propiedades en `camelCase` (ej. `style={{ backgroundColor: 'red' }}`).
    * No se recomienda usarlo habitualmente.

* **CSS Global**:
    * Son archivos CSS normales (ej. `index.css`).
    * **Problema**: Todas las clases (`.container`, `.button`, etc.) son **globales**. Si dos componentes diferentes usan la misma clase, sus estilos **colisionarán** y se sobrescribirán.
    * Se usan principalmente para estilos base de toda la aplicación (resets, estilos para `<body>`, etc.).

* **CSS Modules**:
    * Es la **solución recomendada** para evitar colisiones.
    * Se usa nombrando el archivo como `NombreComponente.module.css`.
    * Al importarlo (ej. `import styles from './Button.module.css'`), React te da un **objeto**.
    * Las clases se aplican usando ese objeto: `className={styles.container}`.
    * **Cómo funciona**: El empaquetador (Vite) **renombra automáticamente** cada clase para que sea **única** en toda la aplicación (ej. `.container` se convierte en `.Button_container_a1b2c`). Esto garantiza que los estilos de un componente están **aislados**.

* **SASS / SCSS**:
    * No son una alternativa a los anteriores, sino **preprocesadores** de CSS ("CSS con superpoderes").
    * Permiten escribir CSS de forma más avanzada usando anidamiento, variables y funciones.
    * Se pueden usar perfectamente **en conjunto con CSS Modules** (ej. `Button.module.scss`) para tener tanto el aislamiento de los módulos como la potencia de SASS.

---

## ¿Qué es el renderizado en React?

El renderizado es el proceso que usa React para "dibujar" tu interfaz. Involucra al **Virtual DOM** (una copia ligera de la interfaz en la memoria de JavaScript).

1.  **Renderizado Inicial (Mounting)**:
    * La primera vez que carga la aplicación, React **ejecuta las funciones** de todos tus componentes (empezando por `<App>`).
    * Con el JSX que devuelven, construye el **Virtual DOM** completo.
    * Finalmente, toma ese Virtual DOM y lo "pinta" en el **DOM real** del navegador.

2.  **Re-renderizado (Re-rendering)**:
    * Esto ocurre cuando algo cambia, principalmente cuando se actualiza un **estado**.
    * React **vuelve a ejecutar** solo la función del componente cuyo estado cambió (y las de sus hijos).
    * Esto genera un **nuevo Virtual DOM** (o una parte de él).
    * React **compara** el nuevo Virtual DOM con el anterior (proceso llamado "reconciliación").
    * Detecta las **diferencias mínimas** y aplica **únicamente esos cambios** en el DOM real del navegador. Esto es lo que hace que React sea tan rápido y eficiente.

---

## ¿Qué es el estado en React?

El estado (o *state*) es el concepto más importante en React; es lo que hace que las aplicaciones sean dinámicas e interactivas.

* Si las `props` son datos que un componente *recibe* (como el texto de un botón), el **estado** es la **memoria interna** de un componente: son datos que el componente *maneja* y que **pueden cambiar con el tiempo** (ej. un contador, si un menú está abierto o cerrado).
* No se pueden usar variables normales (ej. `let contador = 0`), porque aunque la variable cambie, React no se entera y **no vuelve a renderizar** la interfaz.

### El Hook `useState`

Para crear un estado, se usa el *Hook* **`useState`**:

1.  Se importa de React y se llama dentro del componente: `useState(0)` (el `0` es el valor inicial).
2.  `useState` devuelve un array con dos cosas, que se obtienen usando desestructuración:
    1.  El **valor actual** del estado (ej. `likes`).
    2.  Una **función para actualizar** ese estado (ej. `setLikes`).

    ```javascript
    import { useState } from 'react';

    // Dentro del componente:
    const [likes, setLikes] = useState(0);
    ```

3.  Cuando quieres cambiar el estado (ej. tras un clic), **debes llamar a la función actualizadora** (ej. `setLikes(likes + 1)`).
4.  Al llamar a `setLikes()`, React hace dos cosas:
    1.  Actualiza el valor de `likes`.
    2.  Automáticamente **provoca un nuevo renderizado** (un *re-render*) del componente, "repintando" la interfaz con el nuevo valor.