const btn = document.getElementById("btn");
const animeCard = document.getElementById("animeCard");
const loading = document.getElementById("loading");
const hardwareInfo = document.getElementById("hardwareInfo");

btn.addEventListener("click", async () => {

  loading.style.display = "block";
  animeCard.classList.remove("show");
  hardwareInfo.innerText = "";

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

    // 📳 Vibração
    if ("vibrate" in navigator) {
      const vib = navigator.vibrate([200, 100, 200]);
      hardwareInfo.innerText += vib
        ? "📳 Vibração ativada\n"
        : "⚠️ Vibração bloqueada\n";
    } else {
      hardwareInfo.innerText += "❌ Vibração não suportada\n";
    }

    // 📍 Geolocalização
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          hardwareInfo.innerText += `📍 Local: ${pos.coords.latitude.toFixed(2)}, ${pos.coords.longitude.toFixed(2)}\n`;
        },
        () => {
          hardwareInfo.innerText += "❌ Localização negada\n";
        }
      );
    }

    // 🔋 Battery API
    if ("getBattery" in navigator) {
      navigator.getBattery().then(battery => {
        const nivel = Math.round(battery.level * 100);
        const carregando = battery.charging ? "⚡ Carregando" : "🔋 Não carregando";

        hardwareInfo.innerText += `🔋 Bateria: ${nivel}% (${carregando})`;
      });
    } else {
      hardwareInfo.innerText += "❌ Battery API não suportada";
    }

    animeCard.classList.add("show");

  } catch {
    alert("Erro ao buscar anime 😢");
  }

  loading.style.display = "none";
});

// PWA
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}