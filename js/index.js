
const API = 'https://api.themoviedb.org/3';
const TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTJjYTAwZDYxZWIzOTEyYjZlNzc4MDA4YWQ3ZmNjOCIsInN1YiI6IjYyODJmNmYwMTQ5NTY1MDA2NmI1NjlhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4MJSPDJhhpbHHJyNYBtH_uCZh4o0e3xGhZpcBIDy-Y8"
const OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: TOKEN
    }
};

const cargarPeliculasTendencia = async () => {
    // Realizamos una petición fetch a la API para obtener las películas populares
    const response = await fetch(`${API}/movie/top_rated`, OPTIONS);
    const data = await response.json(); // Convertimos la respuesta a JSON
    const movies = data.results;// Extraemos las películas de la respuesta
    console.log(movies);
    const novedadesContainer = document.getElementById('novedades');// Seleccionamos el contenedor de películas de tendencia en el DOM, la section que tiene dentro el div peliculas
    novedadesContainer.innerHTML = '';// Limpiamos el contenido previo del contenedor

    // <div class="card card-block mx-2" style="min-width: 300px;">
    //         <div class="peliculaItem">
    //           <img class="imgAclamada" src="./images/elementos.jpg" alt="aclamada_1" loading="lazy">
    //         </div>
    //       </div>

    movies.forEach(movie => {
        console.log(movie)
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card')
        cardContainer.classList.add('card-block')
        cardContainer.classList.add('mx-2')
        cardContainer.style.minWidth = "15%"
        
        

        const itemMovie = document.createElement('div');
        itemMovie.classList.add('item-movie');

        const img = document.createElement('img');
        img.classList.add('imgNovedades');
        img.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
        img.alt = movie.title;
        img.loading = 'lazy';
        img.style.height = "25rem"
             
        // Relación de Nodos
        itemMovie.appendChild(img);
        cardContainer.appendChild(itemMovie);
        novedadesContainer.appendChild(cardContainer);
    });
};


document.addEventListener('DOMContentLoaded', () => {
    cargarPeliculasTendencia();
});