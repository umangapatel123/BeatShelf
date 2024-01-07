function update() {
    var song_flex = document.getElementsByClassName("song-flex");
    song_flex[0].innerHTML += `<div id="alert-box" class="alert-box">
    <div class="alert-content">
        <span id="alert-message"></span>
    </div>
</div>`
}

window.onload = update();


function showAlert(message, duration) {
    const alertBox = document.getElementById('alert-box');
    const alertMessage = document.getElementById('alert-message');
    alertMessage.innerText = message;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
        alertBox.classList.add('hide');
    }, duration);
    setTimeout(() => {
        alertBox.classList.remove('hide');
    }, duration + 300);
}

var album_image = document.getElementsByTagName("img")[3].src;
album_image = album_image.slice(21, album_image.length);
album_image = "." + album_image;
console.log(album_image);
var album_name = document.getElementsByClassName("album-name")[0].textContent.trim();
console.log(album_name);
submit_button5 = document.getElementById("submit_button5");
submit_button4 = document.getElementById("submit_button4");
submit_button1 = document.getElementById("submit_button1");
submit_button2 = document.getElementById("submit_button2");
submit_button3 = document.getElementById("submit_button3");

submit_button5.addEventListener("click", function () {
    song_name = document.getElementsByClassName("music-name")[4].textContent.trim();
    song_duration = document.getElementsByClassName("music-duration")[4].textContent.trim();
    song_id = document.getElementsByClassName("music-name")[4].id;
    var artist_name = "";

    if (song_id.slice(0, 1) == "1") {
        artist_name = "Arijit Singh";
    }
    else if (song_id.slice(0, 1) == "2") {
        artist_name = "Shreya Ghoshal"
    }
    else if (song_id.slice(0, 1) == "3") {
        artist_name = "Neha Kakkar";
    }
    else if (song_id.slice(0, 1) == "4") {
        artist_name = "Badshah";
    }
    else if (song_id.slice(0, 1) == "5") {
        artist_name = "Ed Sheeran";
    }

    var song = { name: song_name, duration: song_duration, id: song_id, artist: artist_name, album: album_name, album_image: album_image };
    console.log(song);

    const post_data = async (song) => {
        const response = await fetch('http://127.0.0.1:5000/app/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(song)

        });
        const json1 = await response.text();
        json = JSON.parse(json1);
        if (json["status"] == 'ok') {
            showAlert("Song added successfully", 2000);
        }
        else {
            showAlert("Song already exists", 2000);

        }
    }
    main2 = async () => {
        await post_data(song);
    }
    main2();


});


submit_button1.addEventListener("click", function () {
    song_name = document.getElementsByClassName("music-name")[0].textContent.trim();
    song_duration = document.getElementsByClassName("music-duration")[0].textContent.trim();
    song_id = document.getElementsByClassName("music-name")[0].id;


    var artist_name = "";

    if (song_id.slice(0, 1) == "1") {
        artist_name = "Arijit Singh";
    }
    else if (song_id.slice(0, 1) == "2") {
        artist_name = "Shreya Ghoshal"
    }
    else if (song_id.slice(0, 1) == "3") {
        artist_name = "Neha Kakkar";
    }
    else if (song_id.slice(0, 1) == "4") {
        artist_name = "Badshah";
    }
    else if (song_id.slice(0, 1) == "5") {
        artist_name = "Ed Sheeran";
    }

    var song = { name: song_name, duration: song_duration, id: song_id, artist: artist_name, album: album_name, album_image: album_image };
    console.log(song);

    const post_data = async (song) => {
        const response = await fetch('http://127.0.0.1:5000/app/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(song)

        });
        const json1 = await response.text();
        json = JSON.parse(json1);
        if (json["status"] == 'ok') {
            showAlert("Song added successfully", 2000);
        }
        else {
            showAlert("Song already exists", 2000);
        }
    }
    main2 = async () => {
        await post_data(song);
    }
    main2();

});



submit_button2.addEventListener("click", function () {
    console.log("hello");
    song_name = document.getElementsByClassName("music-name")[1].textContent.trim();
    song_duration = document.getElementsByClassName("music-duration")[1].textContent.trim();
    song_id = document.getElementsByClassName("music-name")[1].id;


    var artist_name = "";

    if (song_id.slice(0, 1) == "1") {
        artist_name = "Arijit Singh";
    }
    else if (song_id.slice(0, 1) == "2") {
        artist_name = "Shreya Ghoshal"
    }
    else if (song_id.slice(0, 1) == "3") {
        artist_name = "Neha Kakkar";
    }
    else if (song_id.slice(0, 1) == "4") {
        artist_name = "Badshah";
    }
    else if (song_id.slice(0, 1) == "5") {
        artist_name = "Ed Sheeran";
    }


    var song = { name: song_name, duration: song_duration, id: song_id, artist: artist_name, album: album_name, album_image: album_image };
    console.log(song);

    const post_data = async (song) => {
        const response = await fetch('http://127.0.0.1:5000/app/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(song)

        });
        const json1 = await response.text();
        json = JSON.parse(json1);
        if (json["status"] == 'ok') {
            showAlert("Song added successfully", 2000);
        }
        else {
            showAlert("Song already exists", 2000);
        }
    }
    main2 = async () => {
        await post_data(song);
    }
    main2();

});


submit_button3.addEventListener("click", function () {
    song_name = document.getElementsByClassName("music-name")[2].textContent.trim();
    song_duration = document.getElementsByClassName("music-duration")[2].textContent.trim();
    song_id = document.getElementsByClassName("music-name")[2].id;



    var artist_name = "";

    if (song_id.slice(0, 1) == "1") {
        artist_name = "Arijit Singh";
    }
    else if (song_id.slice(0, 1) == "2") {
        artist_name = "Shreya Ghoshal"
    }
    else if (song_id.slice(0, 1) == "3") {
        artist_name = "Neha Kakkar";
    }
    else if (song_id.slice(0, 1) == "4") {
        artist_name = "Badshah";
    }
    else if (song_id.slice(0, 1) == "5") {
        artist_name = "Ed Sheeran";
    }

    var song = { name: song_name, duration: song_duration, id: song_id, artist: artist_name, album: album_name, album_image: album_image };
    console.log(song);

    const post_data = async (song) => {
        const response = await fetch('http://127.0.0.1:5000/app/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(song)

        });
        const json1 = await response.text();
        json = JSON.parse(json1);
        if (json["status"] == 'ok') {
            showAlert("Song added successfully", 2000);
        }
        else {
            showAlert("Song already exists", 2000);
        }

    }
    main2 = async () => {
        await post_data(song);
    }
    main2();


});


submit_button4.addEventListener("click", function () {
    song_name = document.getElementsByClassName("music-name")[3].textContent.trim();
    song_duration = document.getElementsByClassName("music-duration")[3].textContent.trim();
    song_id = document.getElementsByClassName("music-name")[3].id;



    var artist_name = "";

    if (song_id.slice(0, 1) == "1") {
        artist_name = "Arijit Singh";
    }
    else if (song_id.slice(0, 1) == "2") {
        artist_name = "Shreya Ghoshal"
    }
    else if (song_id.slice(0, 1) == "3") {
        artist_name = "Neha Kakkar";
    }
    else if (song_id.slice(0, 1) == "4") {
        artist_name = "Badshah";
    }
    else if (song_id.slice(0, 1) == "5") {
        artist_name = "Ed Sheeran";
    }
    // console.log(song_id.slice(0, 2));
    var song = { name: song_name, duration: song_duration, id: song_id, artist: artist_name, album: album_name, album_image: album_image };
    console.log(song);

    const post_data = async (song) => {
        const response = await fetch('http://127.0.0.1:5000/app/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(song)

        });
        const json1 = await response.text();
        json = JSON.parse(json1);
        if (json["status"] == 'ok') {
            showAlert("Song added successfully", 2000);
        }
        else {
            showAlert("Song already exists", 2000);
        }
    }
    main2 = async () => {
        await post_data(song);
    }
    main2();


});

