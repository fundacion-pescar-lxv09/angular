## Two-Way Data-Binding

La vinculación de datos y eventos es un concepto clave en Angular, que facilita la comunicación entre la lógica de la aplicación y la vista, permite crear aplicaciones interactivas y fáciles de mantener. Al comprender y aplicar correctamente estos conceptos, puedes construir interfaces de usuario dinámicas que respondan a las interacciones del usuario de manera fluida y eficiente.

* __Reactividad__: Cambios en el modelo se reflejan automáticamente en la vista y viceversa.
* __Simplicidad__: La sintaxis es clara y concisa, lo que facilita la comprensión.
* __Mantenimiento__: La separación de la lógica de negocio y la vista mejora el mantenimiento del código.
* __Pruebas__: La estructura modular de Angular permite realizar pruebas unitarias de forma efectiva.

## Vinculación de Datos

La vinculación de datos se refiere al proceso de conectar el modelo de datos de la aplicación (el componente) con la vista (la plantilla). Angular soporta varios tipos de vinculación de datos:

### Unidireccional

* __Interpolación__: Se utiliza para mostrar datos en la vista, accediendo a las propiedades del componente.
  ```html
  <h1>{{ titulo }}</h1>
  ```
* __Propiedades__: Establece propiedades en elementos del DOM a partir de propiedades del componente

  ```html
  <img [src]="urlImagen" alt="Imagen">
  ```

### Bidireccional

La vinculación bidireccional permite que los datos fluyan tanto desde el componente hacia la vista como de la vista hacia el componente. Esto se logra mediante el uso de `[(ngModel)]`.

```html
<input [(ngModel)]="nombre" placeholder="Ingrese su nombre">
<p>Hola, {{ nombre }}!</p>
```

### Vinculación de Eventos

La vinculación de eventos permite que las acciones del usuario en la vista desencadenen métodos en el componente. Angular facilita esto mediante la sintaxis de paréntesis `()`.

### Escuchando Eventos

```html
<button (click)="mostrarMensaje()">Click me!</button>
```

En este caso, al hacer clic en el botón, se ejecuta el método `mostrarMensaje()` del componente.

### Pasando Parámetros a Métodos

Puedes pasar parámetros a los métodos de los eventos.

```html
<button (click)="saludar(nombre)">Saludar</button>
```

En el componente:

```typescript
saludar(nombre: string) {
  console.log(`Hola, ${nombre}!`);
}
```