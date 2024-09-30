## CommonModule

__Modulo central__ que proporciona _funcionalidades básicas_ para la mayoría de las aplicaciones Angular. Incluye directivas, pipes y servicios que son fundamentales para el desarrollo de componentes. Se utiliza principalmente en módulos no raíz, permitiendo que los componentes tengan acceso a funcionalidades comunes sin importar su ubicación en la estructura del proyecto.

Son una forma poderosa de crear y gestionar el comportamiento de componentes en la aplicación. Con una correcta organización y clasificación, facilitan la reutilización de código y la creación de interfaces dinámicas y mantenibles.

### Directivas de Componente

Permiten manejar la lógica de presentación en los componentes de Angular de manera eficiente, facilitando la creación de interfaces interactivas y dinámicas. Se utilizan para encapsular una parte de la UI y su comportamiento. Son directivas que crean componentes de Angular. 

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-componente',
  template: `<h1>{{ titulo }}</h1>`,
})
export class MiComponente {
  titulo: string = 'Hola, Mundo!';
}
```

### Directivas Estructurales

Alteran la estructura del DOM al agregar o eliminar elementos según condiciones específicas. Permiten manejar la lógica de presentación en los componentes de Angular de manera eficiente, facilitando la creación de interfaces interactivas y dinámicas.

* __ngIf__: Muestra o oculta un elemento según una expresión booleana.
  ```html
  <div *ngIf="isLoggedIn">Bienvenido, usuario.</div>
  ```
* __ngFor__: Itera sobre una colección y renderiza un elemento por cada item.
  ```html
  <ul>
    <li *ngFor="let product of products">{{ product.name }}</li>
  </ul>
  ```
* __ngSwitch__: Muestra un elemento basado en el valor de una expresión.
  ```html
  <div [ngSwitch]="status">
    <p *ngSwitchCase="'active'">Activo</p>
    <p *ngSwitchCase="'inactive'">Inactivo</p>
    <p *ngSwitchDefault>Estado desconocido</p>
  </div>
  ```

### Directivas de Atributo

Permiten modificar el comportamiento y la apariencia, o estilos de los elementos existentes, brindando flexibilidad en la creación de interfaces interactivas y dinámicas. No alteran la estructura del DOM.

* __attr__: Establece atributos HTML de manera dinámica utilizando propiedades
  ```html
  <a [attr.href]="url">Enlace dinámico</a>
  ```
* __ngStyle__: Aplica estilos en línea de forma dinámica, utilizando expresiones
  ```html
  <p [ngStyle]="{'color': isRed ? 'red' : 'blue'}">Estilo dinamico</p>
  ```
* __ngClass__: Aplica o elimina clases CSS de un elemento basado en condiciones
  ```html
  <p [ngClass]="{ active: isActive }">Clase condicional</p>
  ```
* __ngModel__: Utilizado para la vinculación bidireccional de datos en formularios
  ```html
  <input [(ngModel)]="username" placeholder="ingrese su usuario">
  ```

[Volver](../readme.md)