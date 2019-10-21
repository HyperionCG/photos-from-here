navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position.coords.latitude, position.coords.longitude);
  });
function fetchImages() {
fetch("https://cors-anywhere.herokuapp.com/https://flickr.com/services/rest/?api_key=b1eb5d94847cd564755c4fd618bf97fd&format=json&nojsoncallback=1&method=flickr.photos.search&safe_search=1&per_page=5&lat=47.754299499999995&lon=-116.8125449&text=lake")
    .then(responseObject => responseObject.json())
    .then(photoObj => {
        let photoNum = Math.floor(Math.random() * photoObj.photos.photo.length);
        constructImageTag(constructImageURL(photoObj, photoNum));
})
}

function constructImageURL (photoObj, photoNum) {
    return "https://farm" + photoObj.photos.photo[photoNum].farm +
            ".staticflickr.com/" + photoObj.photos.photo[photoNum].server +
            "/" + photoObj.photos.photo[photoNum].id + "_" + photoObj.photos.photo[photoNum].secret + ".jpg";
}


const img = document.createElement("img");
function constructImageTag(photoURL) {
    img.src = photoURL;
    let map = document.getElementById('map');
}
map.appendChild(img);


document.getElementById("button").addEventListener('click',fetchImages);