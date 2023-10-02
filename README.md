# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

1. Importar estilos desde un módulo:
jsx
Copy code
import styles from "styles.module.scss";
Ventajas:

Namespacing: Los estilos de un módulo se encuentran dentro de un espacio de nombres específico (el objeto styles en este caso), lo que puede ayudar a prevenir colisiones de nombres de clases.
Intellisense/autocomplete: Al importar estilos de un módulo, algunos editores de código pueden proporcionar funciones de autocompletado para las clases disponibles.
Consideraciones:

Nombres de Clases Dinámicos: Algunas veces, si necesitas generar dinámicamente nombres de clases en tiempo de ejecución, puede ser un poco más complejo con estilos de módulo.
2. Importar estilos directamente desde un archivo:
jsx
Copy code
import './component.scss';
Ventajas:

Simplicidad: Importar estilos directamente es simple y directo.
Consideraciones:

Colisiones de Nombres: Si estás trabajando en un proyecto grande o colaborativo, puede haber riesgos de colisión de nombres de clases, ya que todas las clases se agregan al mismo espacio de nombres global.
Menos Estricto: No hay namespacing, lo que significa que todas las clases están disponibles globalmente.
Recomendación Personal:
El uso de estilos de módulo (importar desde un módulo) es generalmente recomendado para proyectos más grandes o equipos colaborativos, ya que ayuda a evitar colisiones de nombres y hace que el código sea más mantenible. Proporciona una buena encapsulación y modularidad.

En proyectos más pequeños o individuales, donde la simplicidad puede ser más valiosa, importar estilos directamente puede ser suficiente.

La elección realmente depende del contexto y de tus preferencias personales, así que elige el enfoque que se ajuste mejor a tu situación.
