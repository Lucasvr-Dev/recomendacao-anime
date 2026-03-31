const btn = document.getElementById("btn");
const animeCard = document.getElementById("animeCard");
const loading = document.getElementById("loading");
const hardwareInfo = document.getElementById("hardwareInfo");

function falarAnime(titulo, episodios) {
  if ("speechSynthesis" in window) {

    window.speechSynthesis.cancel();

    const mensagem = new SpeechSynthesisUtterance(
      `O anime sorteado foi ${titulo}. Ele possui ${episodios || "número desconhecido"} episódios.`
    );

    mensagem.lang = "pt-BR";
    mensagem.rate = 1;
    mensagem.pitch = 1;

    window.speechSynthesis.speak(mensagem);

    hardwareInfo.innerText += " Voz ativada\n";

  } else {
    hardwareInfo.innerText += " Voz não suportada\n";
  }
}

btn.addEventListener("click", async () => {

  loading.style.display = "block";
  animeCard.classList.remove("show");
  hardwareInfo.innerText = "";

  try {
    const response = await fetch("https://api.jikan.moe/v4/random/anime");

    if (!response.ok) {
      throw new Error("Erro na API");
    }

    const { data } = await response.json();

    const titulo = data.title_english || data.title;
    const generos = data.genres.map(g => g.name).join(", ");

    document.getElementById("animeTitle").innerText = titulo;
    document.getElementById("animeEpisodes").innerText = data.episodes || "Desconhecido";
    document.getElementById("animeDuration").innerText = data.duration || "Desconhecido";
    document.getElementById("animeScore").innerText = data.score || "N/A";
    document.getElementById("animeGenres").innerText = generos || "Não informado";
    document.getElementById("animeStatus").innerText = data.status || "Desconhecido";
    document.getElementById("animeImage").src = data.images.webp.image_url;
    document.getElementById("animeSynopsis").innerText = data.synopsis || "Sem sinopse disponível.";

    falarAnime(titulo, data.episodes);

    if ("vibrate" in navigator) {
      navigator.vibrate([200, 100, 200]);
      hardwareInfo.innerText += " Vibração ativada\n";
    }


    if ("hardwareConcurrency" in navigator) {
      hardwareInfo.innerText += 
        ` Núcleos CPU: ${navigator.hardwareConcurrency}\n`;
    }


    if ("deviceMemory" in navigator) {
      hardwareInfo.innerText += 
        `Memória estimada: ${navigator.deviceMemory}GB\n`;
    }

    animeCard.classList.add("show");

  } catch (error) {
    alert("Erro ao buscar anime");
    console.error(error);
  }

  loading.style.display = "none";
});


if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js")
      .catch(err => console.log("Erro ao registrar SW:", err));
  });
}