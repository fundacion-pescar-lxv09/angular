## TypeScript

Es un superconjunto de JavaScript, __desarrollado por Microsoft__, que agrega _tipado estático_ y otras características avanzadas al Lenguaje. Se utiliza para desarrollar _aplicaciones más robustas y escalables_. Permite detectar errores en tiempo de compilación y mejorar la autocompletación en editores.

TypeScript __se transpila a JavaScript__, es decir que, se traduce y luego es compilado a código JavaScript estándar que puede ser ejecutado por cualquier navegador o entorno que soporte JavaScript.

### Características:

* __Tipado Estático__: Permite definir tipos para mejorar la legibilidad y la detección de errores.
    ```ts
    function sum(a:number, b:number):number {
        return a + b
    }
    const result:number = sum(5,10)
    ```
* __Interfaces__: Permiten definir la forma de un objeto, mejorando la estructura de los datos.
    ```ts
    interface Product {
        id: number;
        name: string;
        price: number;
    }
    const producto:Product = {
        id: 1,
        name: 'Teclado',
        price: 8999.99
    }
    ```
* __Clases y Herencia__: Soporta la programación orientada a objetos.
    ```ts
    abstract class Animal {
    constructor(public name:string){}
        makeSound() {
        return `${this.name} emite un sonido.`
    }}
    class Dog extends Animal {
        makeSound() {
        return `${this.name} ladra.`;
    }}
    const pet = new Dog('Rex');
    ```
* __Decoradores__ Característica que permiten modificar clases y propiedades en tiempo de diseño.
    ```ts
    function Log(constructor:Function) {
        console.log(`Clase creada: ${constructor.name}`);
    }
    @Log class Person {
        constructor(public name: string) {}
    }
    const person = new Person('Cristian');
    ```

[Volver](../readme.md)