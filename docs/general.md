## Caracteristicas

Angular es un __framework robusto y versátil__ para el desarrollo de aplicaciones web modernas y escalables, debido a que Los componentes funcionan como una combinación de __vista y controlador__, mientras que los servicios manejan la _lógica de negocio y la manipulación de datos_. Esta separación ayuda a mantener una arquitectura limpia y escalable.

* __Componentes__: Son las unidades fundamentales de la interfaz de usuario. Cada componente encapsula su lógica y su plantilla, lo que promueve la reutilización y el mantenimiento del código
* __Inyección de Dependencias__: Permite gestionar y mantener servicios y objetos en la aplicación de manera eficiente, promoviendo un diseño desacoplado
* __Ruteo Avanzado__: Permite crear aplicaciones de una sola página (SPA) con navegación fluida y dinámicas, soportando parámetros en las rutas y la carga perezosa de módulos
* __Data Binding__: Soporta el enlace bidireccional de datos, lo que permite sincronizar automáticamente el modelo y la vista, mejorando la interacción del usuario
* __Programación Reactiva__: Utiliza RxJS para manejar eventos asíncronos y flujos de datos, proporcionando un enfoque más efectivo y limpio para trabajar con datos en tiempo real
* __Sistema de Plantillas__: Permite mezclar HTML y lógica de presentación. Las directivas y los pipes permiten modificar la estructura y el formato de los datos de manera sencilla
* __Soporte Mobile__: Optimizado para el desarrollo de aplicaciones móviles, permitiendo crear aplicaciones rápidas y responsivas que funcionan bien en dispositivos móviles
* __Optimización de Rendimiento__: Reduce de la carga inicial de la aplicación, la carga perezosa de módulos y la actualización eficiente del DOM a través de su motor de detección de cambios.
* __CLI (Command Line Interface)__: Ofrece una herramienta de línea de comandos que simplifica la creación, gestión y optimización de proyectos, facilitando tareas comunes como la generación de componentes y servicios.
* __Soporte y Comunidad__: Al ser mantenido por Google, cuenta con un sólido respaldo y una comunidad activa

## Arquitectura

La __arquitectura MVC (Modelo-Vista-Controlador)__ no se aplica de manera estricta como en otras tecnologías. Sin embargo, utiliza un enfoque más moderno y basado en componentes, pero la esencia de la separación de preocupaciones de MVC se mantiene. Al usar componentes para _la vista y la lógica, y servicios_ para el manejo de datos, Angular permite construir aplicaciones escalables y mantenibles.

| Elemento | Descripcion |
|-|-|
| __Modelo__ | Representa los datos de la aplicación y la lógica de negocio. Puede incluir servicios que gestionan la comunicación con APIs, así como modelos de datos que definen la estructura de los datos |
| __Vista__ | Se encarga de la presentación de la interfaz de usuario. Se crean usando componentes y plantillas HTML. Angular utiliza el binding de datos para conectar la vista con el modelo |
| __Controlador__ | Maneja la lógica de la aplicación y la interacción entre el modelo y la vista. Los componentes actúan como controladores, gestionando el estado y la lógica para la vista correspondiente |

[Volver](../readme.md)