Examen Programacion 3
=====================

Enunciado:

Realizar una app de Next 13 para gestionar una pokedex

Historias de usuario:
* Como usuario no logueado, quiero poder ver el listado de pokemons en forma de tarjetas, mostrando su nombre, imagen y tipos. El color de la tarjeta debe ser correspondiente a su tipo principal
* Como usuario no logueado, quiero poder ver el detalle de un pokemon, mostrando su nombre, imagen, tipos, altura, peso, habilidades y estadísticas
* Como usuario no logueado, quiero poder buscar pokemons por nombre
* Como usuario no logueado, quiero poder crear una cuenta ingresando un nombre de usuario (no email, único) y contraseña. Requisito no funcional: Dicha contraseña debe ser almacenada de manera segura
* Como usuario no logueado, quiero poder iniciar sesión ingresando mi nombre de usuario y contraseña
* Como usuario logueado, quiero poder cerrar sesión
* Como usuario logueado, quiero poder crear registros en el listado de pokemons. Para esto puedo ingresar un número, realizar una busqueda de los datos de dicho pokemon en una API externa, y popular los campos necesarios para crear el registro. Además debería poder subir una imagen para el mismo

Ejemplo API externa: https://pokeapi.co/api/v2/pokemon/1