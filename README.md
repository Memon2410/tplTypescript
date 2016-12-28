# Template Jade, Typescript, SASS
Template realizado con Jade, Typescript y SASS.

## Instalación
Se requiere tener instalado Node. https://nodejs.org

Las configuraciones de instalación del proyecto están en `package.json`. Para la instalación solo se necesita correr desde el terminal

```
npm install
```


## Como se usa
El proyecto se organiza principalmente en dos carpetas. `/src` para los archivos fuente y `/public` para los archivos compilados.

Como es usual, las configuraciones del proyecto gulp están en `gulpfile.js`.

Para compilar desde el terminal utilizamos los tasks

```
// Jade
gulp jade

// sass | scss
gulp sass

// ts
gulp typescript
```
Se puede automatizar la compilación observando cuando se modifica y guarda un archivo dentro de la estructura de `/src`

```
gulp watch
```
