const btn = document.getElementById("btn");
const animeCard = document.getElementById("animeCard");
const loading = document.getElementById("loading");

btn.addEventListener("click", async () => {

  loading.style.display = "block";
  animeCard.classList.remove("show");

  try {
    const response = await fetch("https://api.jikan.moe/v4/random/anime");
    const { data } = await response.json();

    const titulo = data.title_english || data.title;
    const generos = data.genres.map(g => g.name).join(", ");

    document.getElementById("animeTitle").innerText = titulo;
    document.getElementById("animeEpisodes").innerText = data.episodes;
    document.getElementById("animeDuration").innerText = data.duration;
    document.getElementById("animeScore").innerText = data.score;
    document.getElementById("animeGenres").innerText = generos;
    document.getElementById("animeStatus").innerText = data.status;
    document.getElementById("animeImage").src = data.images.jpg.image_url;
    document.getElementById("animeSynopsis").innerText = data.synopsis;

    // Vibração (hardware)
    if ("vibrate" in navigator) {
      navigator.vibrate([100, 50, 100]);
    }

    // Geolocalização (hardware)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => console.log("Localização obtida"),
        () => console.log("Permissão negada")
      );
    }

    animeCard.classList.add("show");

  } catch (error) {
    alert("Erro ao buscar anime");
  }

  loading.style.display = "none";
});

// Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js")
    .then(() => console.log("PWA ativo"));
}