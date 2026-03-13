const btn = document.getElementById("btn");
const animeCard = document.getElementById("animeCard");

btn.addEventListener("click", async () => {
  const response = await fetch("https://api.jikan.moe/v4/random/anime");
  const { data } = await response.json();

  const titulo = data.title_english || data.title;
  const generos = data.genres.map(g => g.name).join(", ");

  // Preencher os campos do card
  document.getElementById("animeTitle").innerText = titulo;
  document.getElementById("animeEpisodes").innerText = data.episodes;
  document.getElementById("animeDuration").innerText = data.duration;
  document.getElementById("animeScore").innerText = data.score;
  document.getElementById("animeGenres").innerText = generos;
  document.getElementById("animeStatus").innerText = data.status;
  document.getElementById("animeImage").src = data.images.jpg.image_url;
  document.getElementById("animeSynopsis").innerText = data.synopsis;

  // Mostrar o card com animação
  animeCard.classList.add("show");
});