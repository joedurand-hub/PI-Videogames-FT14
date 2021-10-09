Proyecto Individual de Henry, para su desarrollo utilicé la api de Rawg que posee información de más de 500.000 videogames:

𝗡𝗼𝗱𝗲.𝗷𝘀 - 𝗘𝘅𝗽𝗿𝗲𝘀𝘀 𝗽𝗮𝗿𝗮 𝗲𝗹 𝗕𝗮𝗰𝗸𝗲𝗻𝗱:
- Ruta GET para traer 100 videojuegos
- Ruta GET para traer 15 juegos por coincidencia de nombre
- Ruta GET para traer un juego por ID
- Ruta GET para traer los géneros de videojuegos
- Ruta POST para crear un videojuego

𝗣𝗼𝘀𝘁𝗴𝗿𝗲𝗦𝗤𝗟 - 𝗦𝗲𝗾𝘂𝗲𝗹𝗶𝘇𝗲 𝗽𝗮𝗿𝗮 𝗹𝗮 𝗯𝗮𝘀𝗲 𝗱𝗲 𝗱𝗮𝘁𝗼𝘀:
- Tabla Videogame para almacenar los datos de un juego (id, nombre, rating, fecha de lanzamiento, imagen y plataforma)
- Implementé el uso de UUID para diferenciar un juego de la API a un juego de la Base de datos.
- Tabla Genre (géneros), para almacenar cada género de videojuego existente, y setearlo a la tabla Videogame a través de una tabla intermedia.

𝗥𝗲𝗮𝗰𝘁.𝗷𝘀 - 𝗥𝗲𝗱𝘂𝘅 𝗽𝗮𝗿𝗮 𝗲𝗹 𝗙𝗿𝗼𝗻𝘁𝗲𝗻𝗱:
- Landing Page
- Home
- Nav con rutas a Home y un formSearch para buscar juegos, y una ruta a Create.
- Renderizado de Cards, y un detalle para cada videogame
- Paginado de 15 Cards por página
- Opciones para filtrar por género, y ordenamiento Ascendente y Descendente tanto por rating como por orden alfabético, así como un filtro para diferenciar a los de la base de datos, de la API y todos.
- Formulario controlado para crear información de un videogame.
- 
<p align='left'>
    <iframe src='https://www.linkedin.com/posts/joeldurand0_hola-gente-les-presento-mi-proyecto-individual-activity-6828039138663530496--SrJ' </iframe>
</p>
