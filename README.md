Proyecto Individual de Henry, para su desarrollo utilicรฉ la api de Rawg que posee informaciรณn de mรกs de 500.000 videogames:

๐ก๐ผ๐ฑ๐ฒ.๐ท๐ - ๐๐๐ฝ๐ฟ๐ฒ๐๐ ๐ฝ๐ฎ๐ฟ๐ฎ ๐ฒ๐น ๐๐ฎ๐ฐ๐ธ๐ฒ๐ป๐ฑ:
- Ruta GET para traer 100 videojuegos
- Ruta GET para traer 15 juegos por coincidencia de nombre
- Ruta GET para traer un juego por ID
- Ruta GET para traer los gรฉneros de videojuegos
- Ruta POST para crear un videojuego

๐ฃ๐ผ๐๐๐ด๐ฟ๐ฒ๐ฆ๐ค๐ - ๐ฆ๐ฒ๐พ๐๐ฒ๐น๐ถ๐๐ฒ ๐ฝ๐ฎ๐ฟ๐ฎ ๐น๐ฎ ๐ฏ๐ฎ๐๐ฒ ๐ฑ๐ฒ ๐ฑ๐ฎ๐๐ผ๐:
- Tabla Videogame para almacenar los datos de un juego (id, nombre, rating, fecha de lanzamiento, imagen y plataforma)
- Implementรฉ el uso de UUID para diferenciar un juego de la API a un juego de la Base de datos.
- Tabla Genre (gรฉneros), para almacenar cada gรฉnero de videojuego existente, y setearlo a la tabla Videogame a travรฉs de una tabla intermedia.

๐ฅ๐ฒ๐ฎ๐ฐ๐.๐ท๐ - ๐ฅ๐ฒ๐ฑ๐๐ ๐ฝ๐ฎ๐ฟ๐ฎ ๐ฒ๐น ๐๐ฟ๐ผ๐ป๐๐ฒ๐ป๐ฑ:
- Landing Page
- Home
- Nav con rutas a Home y un formSearch para buscar juegos, y una ruta a Create.
- Renderizado de Cards, y un detalle para cada videogame
- Paginado de 15 Cards por pรกgina
- Opciones para filtrar por gรฉnero, y ordenamiento Ascendente y Descendente tanto por rating como por orden alfabรฉtico, asรญ como un filtro para diferenciar a los de la base de datos, de la API y todos.
- Formulario controlado para crear informaciรณn de un videogame.
Link de LinkedIn con video del proyecto: https://www.linkedin.com/posts/joeldurand0_hola-gente-les-presento-mi-proyecto-individual-activity-6828039138663530496--SrJ
