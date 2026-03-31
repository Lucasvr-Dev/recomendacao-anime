<div align="center">

# 🎌 Qual Anime Vou Assistir Hoje?

### *Pare de gastar horas decidindo. Deixa o destino escolher por você!* 🎲

<br/>

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Jikan API](https://img.shields.io/badge/Jikan%20API-2E51A2?style=for-the-badge&logo=myanimelist&logoColor=white)](https://jikan.moe/)

[![Licença MIT](https://img.shields.io/badge/Licença-MIT-brightgreen?style=flat-square)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Ativo-success?style=flat-square)]()
[![API](https://img.shields.io/badge/API-Jikan%20v4-blue?style=flat-square)](https://docs.api.jikan.moe/)

</div>

---

## 🌟 Sobre o Projeto
 
**Qual Anime Vou Assistir Hoje?** é um sorteador de animes que consome a [Jikan API v4](https://jikan.moe/) — API não-oficial do MyAnimeList — e te entrega um anime completamente aleatório com um único clique.
 
Chega de abrir 10 abas, perguntar no grupo e não decidir nada. Um clique. Um anime. Simples assim.
 
<div align="center">
 
<img src="https://t.ctcdn.com.br/Z6uhyd8DKac3e9gM5LHzlH-Ii8g=/340x265:1654x1005/900x675/smart/i521747.jpeg" alt="Logo" width="400">
 
</div>
 
---
 
## ✨ Funcionalidades
 
| | Feature | Descrição |
|---|---|---|
| 🎲 | **Sorteio Aleatório** | Busca um anime aleatório direto do MyAnimeList |
| 🖼️ | **Capa Oficial** | Exibe a imagem do anime sorteado |
| 📊 | **Ficha Completa** | Episódios, duração, nota, gêneros e status |
| 📖 | **Sinopse** | Descrição completa da obra |
| 🔊 | **Efeito Sonoro** | Toca um som a cada sorteio |
| 📳 | **Vibração** | Feedback tátil ao sortear (mobile) |
| 📱 | **Responsivo** | Funciona em mobile, tablet e desktop |
| 🎨 | **UI Animada** | Gradiente animado e transições suaves |
| 📲 | **PWA** | Instalável como app no celular e desktop |
 
---
 
## 🚀 Como Rodar
 
```bash
# Clone o repositório
git clone https://github.com/Lucasvr-Dev/recomendacao-anime.git
 
# Entre na pasta
cd recomendacao-anime
 
# Abra no navegador
start index.html        # Windows
open index.html         # macOS
xdg-open index.html     # Linux
```
 
> 💡 **VS Code?** Use a extensão **Live Server** e clique em **Go Live**. O projeto já está configurado na porta `5501`.
 
---
 
## 📲 Instale como App (PWA)
 
Este projeto é uma **Progressive Web App**. Para instalar:
 
- **Android/Chrome:** Menu do navegador → *Adicionar à tela inicial*
- **Desktop (Chrome/Edge):** Clique no ícone de instalação na barra de endereços
 
Após instalado, o app funciona de forma nativa e com suporte offline para os assets em cache.
 
---
 
## 📁 Estrutura
 
```
📦 recomendacao-anime/
 ┣ 📄 index.html           ← Estrutura da página
 ┣ 🎨 style.css            ← Estilos e responsividade
 ┣ ⚙️  script.js            ← Lógica e consumo da API
 ┣ 📄 manifest.json        ← Configuração do PWA
 ┣ ⚙️  service-worker.js    ← Cache offline (PWA)
 ┣ 🔊 sorteando_anime.mp3  ← Efeito sonoro do sorteio
 ┣ 🖼️  icon-192.png         ← Ícone PWA (192x192)
 ┣ 🖼️  icon-512.png         ← Ícone PWA (512x512)
 ┗ 📄 README.md            ← Você está aqui!
```
 
---
 
## 🔌 API
 
Endpoint utilizado:
 
```
GET https://api.jikan.moe/v4/random/anime
```
 
Dados exibidos na aplicação:
 
| Campo da API | O que exibe |
|---|---|
| `title_english` / `title` | Título do anime |
| `episodes` | Número de episódios |
| `duration` | Duração por episódio |
| `score` | Nota no MyAnimeList |
| `genres[].name` | Gêneros |
| `status` | Status de exibição |
| `images.webp.image_url` | Capa |
| `synopsis` | Sinopse |
 
---
 
## 🛠️ Tecnologias
 
- **HTML5** — Estrutura semântica
- **CSS3** — Gradiente animado, Flexbox, Media Queries
- **JavaScript ES6+** — Fetch API, async/await, manipulação do DOM
- **[Jikan API v4](https://docs.api.jikan.moe/)** — Dados do MyAnimeList
- **PWA** — Web App Manifest + Service Worker para instalação e cache offline
 
---
 
## 🤝 Contribuindo
 
1. 🍴 Faça um **fork**
2. 🌿 Crie sua branch → `git checkout -b feature/MinhaFeature`
3. 💾 Commit → `git commit -m 'feat: Adiciona MinhaFeature'`
4. 📤 Push → `git push origin feature/MinhaFeature`
5. 🔁 Abra um **Pull Request**
 
---
 
## 📜 Licença
 
Distribuído sob a licença **MIT**. Veja [`LICENSE`](LICENSE) para mais detalhes.
 
---
 
<div align="center">
 
**Feito por [Lucas Vinicius](https://github.com/Lucasvr-Dev)**
 
⭐ **Gostou? Deixa uma estrela no repositório!** ⭐
 
</div>>
