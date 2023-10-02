# React App: Reto front end 

Este proyecto es una aplicación web construida con React y  TypeScript, para manejar los estilos usa  SASS y la librería '@mui-material'. A continuación, se detallan las principales características y razones para el uso de estas tecnologías y herramientas.

## Descripción del Proyecto

La aplicación es una interfaz de usuario moderna y receptiva construida con React y TypeScript. Utiliza estilos personalizados escritos en SASS para una apariencia única y atractiva. La interfaz de usuario se desarrolla con la biblioteca de componentes Material-UI, que proporciona componentes preestablecidos y un conjunto de herramientas para el diseño y desarrollo eficientes. 

## Principales Tecnologías Utilizadas

### React
#### Descripción: React es una biblioteca de JavaScript para construir interfaces de usuario. Es mantenida por Facebook y se utiliza para construir componentes reutilizables y gestionar el estado de la aplicación de manera eficiente.
Razones para el Uso: React proporciona un enfoque declarativo para el desarrollo de interfaces de usuario, facilitando la creación y el mantenimiento de componentes. La creación de aplicaciones con React también facilita la adopción de TypeScript y el desarrollo más estructurado.
TypeScript
#### Descripción: TypeScript es un superconjunto de JavaScript que agrega tipado estático a la sintaxis de JavaScript. Permite la detección temprana de errores y proporciona herramientas de desarrollo más sólidas.
#### Razones para el Uso: TypeScript mejora la mantenibilidad y escalabilidad del código al agregar tipado estático. Proporciona autocompletado en el desarrollo, facilitando la comprensión del código y reduciendo errores.

### SASS
#### Descripción: SASS (Syntactically Awesome Stylesheets) es un preprocesador de CSS que extiende la sintaxis de CSS. Permite el uso de variables, anidamiento y funciones, lo que facilita el mantenimiento y la escritura de estilos más complejos.
#### Razones para el Uso: SASS mejora la eficiencia en el desarrollo de estilos al proporcionar características como variables y anidamiento, lo que hace que el código sea más modular y fácil de mantener.

### Material-UI
#### Descripción: Material-UI es una biblioteca de componentes React que implementa el diseño de Material Design de Google. Proporciona una amplia variedad de componentes personalizables y preestablecidos.
#### Razones para el Uso: Material-UI acelera el desarrollo proporcionando componentes estilizados y funcionales listos para usar. La biblioteca sigue las pautas de diseño de Material Design, lo que garantiza una apariencia moderna y coherente en la interfaz de usuario.

# Configuración del Proyecto

## Instalación de Dependencias:
npm install

## Ejecución del Proyecto en Modo de Desarrollo:
npm start
## Generación de la Versión de Producción:

### `npm run build`
Crea la versión optimizada para producción en la carpeta build.

## Estructura del Proyecto
La estructura del proyecto sigue una organización típica de una aplicación React, con carpetas para componentes, estilos y otros recursos.
/src
  /assets
  /components
  /hooks
  /icons
  /sass
  /pages
  /services
  /typins
  /utils
  App.tsx
  index.tsx
  
- /assets: Guarda código relacionado a typografías e imágenes .   
- /components: Contiene componentes React reutilizables.
- /hooks: Contiene funciones que permiten manejar el estado de react.
- /icons: Almacena componentes con los iconos necesarios 
- /sass: Almacena archivos SASS para estilos globales y modulares.
- /pages: Contiene componentes específicos de páginas.
- typins: modelos de datos 
- /utils: Utilidades y funciones auxiliares.
- /services: Contiene archivos con codigo relacionado al consumo de APIS.

  ## Notas importantes:
- Con respecto al manejo de los estilos es necesario acotar que dentro del proyecto existen dos maneras de cargar los estilos, ambas son correctas y como no está especificado en las consideraciones, son con fines de mostrarlo en la prueba técnica :

  1. Importando los estilos desde un módulo:
     #### Principales ventajas
     Namespacing: Los estilos de un módulo se encuentran dentro de un espacio de nombres específico (el objeto styles en este caso), lo que puede ayudar a prevenir colisiones de 
     nombres de clases.
     
  2. Importar los archivos directamente desde un archivo
   #### Principales ventajas
     Importar estilos directamente es simple y directo.

  El uso de estilos de módulo (importar desde un módulo) es generalmente recomendado para proyectos más grandes o equipos colaborativos, ya que ayuda a evitar colisiones de nombres y hace que el código sea más mantenible. Proporciona una buena encapsulación y modularidad.
   
La elección realmente depende del contexto y de los estándares y acuerdos del equipo de desarrollo.

- Para compartir los datos fuese sido mejor hacerlo a través de un estado global , pero por razones de tiempo preferí pasar los datos con la ayuda del react-router-dom.
- Tambien he visto que puedo seguir modularizando más mis componentes, esto con el fin de contribuir al clean code, hacer mantenibles los componentes y por su puesto que facilite la comprensión del código para otros devs.
- El entorno de pruebas unitarias esta listo para empezar a realizarlas.
  






