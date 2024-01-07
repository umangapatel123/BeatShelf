var radioButtons = document.getElementsByName("explicit");
var maxDuration = 0;
var apiUrl = "";
var explicit_check = "";
const setBg = () => {
    // const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.resultItem.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
}

const form = document.getElementById('search-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchTerm = document.getElementById('search-term').value;
    maxDuration = document.getElementById("duration").value;
    radioButtons = document.getElementsByName("explicit");
    search(searchTerm);
});
form.addEventListener('clear', (event) => {
    event.preventDefault();
    const searchTerm = document.getElementById('search-term').value;
    maxDuration = "";
    radioButtons = document.getElementsByName("explicit");
    search(searchTerm);
});
function fun()
{
    const searchTerm = document.getElementById('search-term').value;
    document.getElementById("search-form").reset();
    var input_box=document.getElementById("search-term");
    input_box.value=searchTerm;
    maxDuration = document.getElementById("duration").value;
    radioButtons = document.getElementsByName("explicit");
    search(searchTerm);

}
function filter() {
    if (radioButtons[0].checked) {
        explicit_check = "yes";
    } else if (radioButtons[1].checked) {
        explicit_check = "no";
    } else {
        explicit_check = "none";
    }
    if (explicit_check == "yes") {
        if(maxDuration == ""){
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => displayResults(data.results.filter(result => result.trackExplicitness == "explicit")))
            .catch(error => console.error(error));
        }
        else
        {
            fetch(apiUrl)
            .then(response => response.json())
            .then(data => displayResults(data.results.filter(result => result.trackExplicitness == "explicit" && result.trackTimeMillis <= (maxDuration*60000))))
            .catch(error => console.error(error));
        }
    }
    if (explicit_check == "no") {
        if(maxDuration =="")
        {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => displayResults(data.results.filter(result => result.trackExplicitness == "notExplicit")))
            .catch(error => console.error(error));
        }
        else
        {
            fetch(apiUrl)
            .then(response => response.json())
            .then(data => displayResults(data.results.filter(result => result.trackExplicitness == "notExplicit" && result.trackTimeMillis <= (maxDuration*60000))))
            .catch(error => console.error(error));
        }
    }
    if (explicit_check == "none") {
        if(maxDuration == ""){
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => displayResults(data.results))
            .catch(error => console.error(error));
        }
        else
        {
            fetch(apiUrl)
            .then(response => response.json())
            .then(data => displayResults(data.results.filter(result => result.trackTimeMillis <= (maxDuration*60000))))
            .catch(error => console.error(error));
        }
    }
}
function search(searchTerm) {
    apiUrl = `https://itunes.apple.com/search?term=${searchTerm}&entity=song`;

    filter();
}



function displayResults(results) {
    const resultList = document.getElementById('result-list');
    resultList.innerHTML = '';

    if (results.length === 0) {
        const message = document.createElement('p');
        message.textContent = 'No results found';
        resultList.appendChild(message);
        return;
    }

    for (let i = 0; i < Math.min(10, results.length); i++) {

        const resultItem = document.createElement('li');
        resultItem.classList.add('result-item');

        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        resultItem.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;


        const artworkUrl = results[i].artworkUrl100.replace('100x100', '200x200');
        const artworkImg = document.createElement('img');
        artworkImg.setAttribute('src', artworkUrl);
        resultItem.appendChild(artworkImg);

        const trackName = results[i].trackName;
        const trackNameHeading = document.createElement('h3');
        trackNameHeading.textContent = trackName;
        resultItem.appendChild(trackNameHeading);

        const artistName = results[i].artistName;
        const artistNameParagraph = document.createElement('p');
        artistNameParagraph.textContent = artistName;
        resultItem.appendChild(artistNameParagraph);

        if (results[i].kind === 'song') {
            const audioPreviewUrl = results[i].previewUrl;
            const audioPlayer = document.createElement('audio');
            audioPlayer.setAttribute('src', audioPreviewUrl);
            audioPlayer.setAttribute('controls', 'controls');
            resultItem.appendChild(audioPlayer);
        }

        resultList.appendChild(resultItem);
    };
}


