const search = (ev) => {
    console.log(document.querySelector('input').value);
    let url = 'https://www.apitutor.org/yelp/simple/v3/businesses/search?location=' + String(document.querySelector('#search-input').value);
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
        <img src = '${result.image_url}' class = "photo">
        <p class = "name" > ${result.name}</p>
        <p class = "rating" > ${result.rating} stars </p>
        <p class = "price" > ${result.price} </p>
        <p class = "address" > ${result.display_address} </p>
        <p class = "reviews" > Reviews: ${result.review_count} </p>
      </div>`;
    document.querySelector('#output').innerHTML += template;
    }
};

document.querySelector('#search').onclick = search;
