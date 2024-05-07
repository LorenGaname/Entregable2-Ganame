document.addEventListener("DOMContentLoaded", function () {
  // Preguntar nombre y edad al usuario
  const name = prompt("Por favor, ingresa tu nombre:");
  const age = prompt("Por favor, ingresa tu edad:");

  // Guardar nombre y edad en el LocalStorage
  localStorage.setItem("userName", name);
  localStorage.setItem("userAge", age);

  const container = document.createElement("div");
  container.classList.add("container");

  const title = document.createElement("h1");
  title.textContent = "Selector de Género y Artista";

  const genreSelectWrapper = document.createElement("div");
  genreSelectWrapper.classList.add("genre-select-wrapper");

  const genreLabel = document.createElement("label");
  genreLabel.textContent = "Selecciona un género musical:";
  genreLabel.setAttribute("for", "genre-select");

  const genreSelect = document.createElement("select");
  genreSelect.id = "genre-select";
  genreSelect.innerHTML = `
    <option value="">Selecciona un género</option>
    <option value="rock">Rock</option>
    <option value="pop">Pop</option>
    <option value="electronic">Electrónica</option>
    <option value="hiphop">Hip Hop</option>
    <option value="jazz">Jazz</option>
    <!-- Añade más géneros aquí -->
  `;

  genreSelectWrapper.appendChild(genreLabel);
  genreSelectWrapper.appendChild(genreSelect);

  container.appendChild(title);
  container.appendChild(genreSelectWrapper);

  document.body.appendChild(container);

  // Crear sección de artistas
  const artistSection = document.createElement("div");
  artistSection.id = "artist-section";
  artistSection.style.display = "none";

  const artistLabel = document.createElement("label");
  artistLabel.textContent = "Selecciona un artista:";
  artistLabel.setAttribute("for", "artist-select");

  const artistSelect = document.createElement("select");
  artistSelect.id = "artist-select";
  const defaultArtistOption = document.createElement("option");
  defaultArtistOption.value = "";
  defaultArtistOption.textContent = "Selecciona un artista";
  artistSelect.appendChild(defaultArtistOption);

  artistSection.appendChild(artistLabel);
  artistSection.appendChild(artistSelect);

  container.appendChild(artistSection);

  // Crear contenedor para la imagen del artista
  const artistImageContainer = document.createElement("div");
  artistImageContainer.id = "artist-image-container";
  artistImageContainer.style.display = "none";

  const artistImage = document.createElement("img");
  artistImage.id = "artist-image";
  artistImage.alt = "Foto del artista";
  artistImage.style.maxWidth = "100%";
  artistImage.style.display = "block";

  artistImageContainer.appendChild(artistImage);
  container.appendChild(artistImageContainer);

  // Evento de cambio en el selector de género
  genreSelect.addEventListener("change", function () {
    const selectedGenre = genreSelect.value;
    if (!selectedGenre) {
      artistSection.style.display = "none";
      artistImageContainer.style.display = "none";
    } else {
      artistSection.style.display = "block";
      fillArtists(selectedGenre, artistSelect);
    }
  });

  // Evento de cambio selector de artista
  artistSelect.addEventListener("change", function () {
    const selectedArtist = artistSelect.value;
    if (selectedArtist) {
      const userName = localStorage.getItem("userName");
      alert(`Perfecto ${userName}, tu artista favorito es: ${selectedArtist}`);

      localStorage.setItem("favoriteArtist", selectedArtist);

      artistImage.src = artistImages[selectedArtist];
      artistImageContainer.style.display = "block";
    } else {
      artistImageContainer.style.display = "none";
    }
  });

  // Función llenar el selector de artistas basado en el género seleccionado
  function fillArtists(genre, artistSelect) {
    artistSelect.innerHTML = "";

    const artists = {
      rock: ["The Beatles", "Queen", "Led Zeppelin"],
      pop: ["Michael Jackson", "Madonna", "Beyoncé"],
      electronic: ["Daft Punk", "Calvin Harris", "The Chemical Brothers"],
      hiphop: ["2pac", "Notorius B.I.G", "50Cent"],
      jazz: ["Duke Ellington", "Charlie Parker", "Ella Fitzgerald"],
    };
    artists[genre].forEach((artist) => {
      const option = document.createElement("option");
      option.value = artist;
      option.textContent = artist;
      artistSelect.appendChild(option);
    });
  }

  const artistImages = {
    "The Beatles": "IMG/TheBeatles.jpg",
    Queen: "IMG/Queen.jpg",
    "Led Zeppelin": "IMG/LedZeppelin.jpg",
    "Michael Jackson": "IMG/MichaelJackson.jpg",
    Madonna: "IMG/Madonna.jpg",
    Beyoncé: "IMG/Beyonce.jpg",
    "Daft Punk": "IMG/DaftPunk.jpg",
    "Calvin Harris": "IMG/CalvinHarris.jpg",
    "The Chemical Brothers": "IMG/TheChemicalBrothers.jpg",
    "2pac": "IMG/2pac.jpg",
    "Notorius B.I.G": "IMG/NotoriusBIG.jpg",
    "50Cent": "IMG/50cent.jpg",
    "Duke Ellington": "IMG/DukeEllington.jpg",
    "Charlie Parker": "IMG/CharlieParker.jpg",
    "Ella Fitzgerald": "IMG/EllaFitzgerald.jpg",
  };
});
