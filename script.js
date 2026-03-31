const btn = document.getElementById("btn");
const animeCard = document.getElementById("animeCard");
const loading = document.getElementById("loading");
const resultBox = document.getElementById("resultBox");

const audio = new Audio("./sorteando_anime.mp3");
audio.preload = "auto";

btn.addEventListener("click", async () => {

  audio.currentTime = 0;
  audio.play().catch(() => {});

  resultBox.classList.add("active");
  loading.style.display = "block";
  animeCard.style.display = "none";

  try {
    const response = await fetch("https://api.jikan.moe/v4/random/anime");
    const { data } = await response.json();

    document.getElementById("animeTitle").innerText =
      data.title_english || data.title;

    document.getElementById("animeEpisodes").innerText =
      data.episodes || "Desconhecido";

    document.getElementById("animeDuration").innerText =
      data.duration || "Desconhecido";

    document.getElementById("animeScore").innerText =
      data.score || "N/A";

    document.getElementById("animeGenres").innerText =
      data.genres?.map(g => g.name).join(", ") || "Não informado";

    document.getElementById("animeStatus").innerText =
      data.status || "Desconhecido";

    document.getElementById("animeImage").src =
      data.images?.webp?.image_url || "";

    document.getElementById("animeSynopsis").innerText =
      data.synopsis || "Sem sinopse disponível.";

    animeCard.style.display = "block";

    if ("vibrate" in navigator) {
      navigator.vibrate(200);
    }

  } catch (error) {
    alert("Erro ao buscar anime");
  }

  loading.style.display = "none";
});