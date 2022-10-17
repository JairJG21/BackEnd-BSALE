# Backend💻

## Objetivo:

El objetivo de esta API es poder consultar los diferentes productos que se encuentran alojados en la base de datos, dependiendo de la peticion que hace el cliente es como devuelve datos el servidor.

## Lenguajes y Modulos Usados:

- NodeJS
- Express
- Express-MyConnection
- Nodemon

***NodeJS*** fue usado como lenguaje de programación para el backend de la mano de ***Express*** el cual nos ayudo a hacer las peticiones a la base de datos mas rapido y con menos codigo; De igual forma gracias a ***Express-MyConnection*** nos conectamos a una BD MySQL, y por ultimo ***Nodemon*** el cual solo lo usamos para el desarrollo, el cual nos ayudo a hacer mas como la forma de correr el servidor de manera local.

## Detalles del API

Cuando el cliente quiere obtener todos los productos tiene que usar ***/productos*** de esta forma el servidor le devuelve todos los datos.

![Obtener todos los productos](https://i.ibb.co/BVv4zjk/API-1.png)

El cliente puede consultar todas las categorias usando ***/categorias***

![Consultar todas las categorias](https://i.ibb.co/8sN6XXc/API-2.png)

El cliente puede consultar los productos por categoria, utilizando ***/categoria/:id*** enviando el id en ***:id*** de la categoria para consultar los datos.

![Consultar productos por categoria](https://i.ibb.co/TRtMRqB/API-3.png)

Cuando el cliente quiere buscar un producto expecifico puede usar **/buscador/:busqueda*** enviando el nombre del producto a buscar en ***/busqueda***.

![Consultando producto expecifico](https://i.ibb.co/FDFFywW/API-4.png)

El cliente puede ordenar los productos alfabeticamente usando ***/ordenarProducto/:order/:categoria*** enviando en el ***/:order*** lo siguiente:

- Si quieres ordenar de A-Z usas ***ASC***
- Si quieres ordenar de Z-A usas ***DESC***

En categorias puedes enviar lo siguiente:

- Bebida Energetica = ***1***
- Pisco = ***2***
- Ron = ***3***
- Bebida = ***4***
- Snack = ***5***
- Cerveza = ***6***
- Vodka = ***7***

**La categoria puede ser enviada o no**

![Ordenar productos alfabeticamente y por categoria](https://i.ibb.co/89WrZPL/API-5.png)