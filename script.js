const btn = document.getElementById("btn");
const animeCard = document.getElementById("animeCard");
const loading = document.getElementById("loading");

const audio = new Audio();
audio.src = "./sorteando_anime.mp3";
audio.preload = "auto";

btn.addEventListener("click", async () => {
  try {
    audio.muted = false;
    audio.currentTime = 0;
    audio.play().catch(() => {});
  } catch (e) {
    console.log("Erro ao tocar áudio:", e);
  }

  loading.style.display = "block";
  animeCard.classList.remove("show");

  try {
    const response = await fetch("https://api.jikan.moe/v4/random/anime");

    if (!response.ok) {
      throw new Error("Erro na API");
    }

    const { data } = await response.json();

    const titulo = data.title_english || data.title;
    const generos = data.genres?.map(g => g.name).join(", ") || "Não informado";

    document.getElementById("animeTitle").innerText = titulo;
    document.getElementById("animeEpisodes").innerText = data.episodes || "Desconhecido";
    document.getElementById("animeDuration").innerText = data.duration || "Desconhecido";
    document.getElementById("animeScore").innerText = data.score || "N/A";
    document.getElementById("animeGenres").innerText = generos;
    document.getElementById("animeStatus").innerText = data.status || "Desconhecido";
    document.getElementById("animeImage").src = data.images?.webp?.image_url || "";
    document.getElementById("animeSynopsis").innerText =
      data.synopsis || "Sem sinopse disponível.";

    animeCard.classList.add("show");

    if ("vibrate" in navigator) {
      navigator.vibrate(200);
    }

  } catch (error) {
    alert("Erro ao buscar anime");
    console.error(error);
  }

  loading.style.display = "none";
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js")
      .catch(err => console.log("Erro ao registrar SW:", err));
  });
}