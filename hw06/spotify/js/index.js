const search = (ev) => {
    console.log(document.querySelector('input').value);
    let url = 'https://www.apitutor.org/spotify/simple/v1/search?q=' + String(document.querySelector('#search-input').value) + '&type=track';
    fetch(url)
        .then(response => response.json())
        .then(displayResults);
};

const displayResults = (data) => {
    console.log(data);
    document.querySelector('#output').innerHTML = JSON.stringify(data, null, 4);
    document.querySelector('#output').innerHTML = "";
    for (var result of data){
      const template =
      `<div class = "card">
          <img src = '${result.album.image_url}' class = "photo">
          <audio controls class = audio>
            <source src = '${result.preview_url}'>
          </audio>
          <p class = songtitle> '${result.name}' </p>
          <p class = artist> ${result.artist.name} </p>
          <p class = album> ${result.album.name} </p>
        </div>`;
        document.querySelector('#output').innerHTML += template;
        }
};

document.querySelector('#search').onclick = search;
