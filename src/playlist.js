

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
    // window.location.reload();
}

function reloadAfterTimeout(timeout) {
    setTimeout(function () {
        location.reload();
    }, timeout);
}

window.onload = function () {

    const get_data = async () => {
        const response = await fetch('http://127.0.0.1:5000/app/get');
        const json = await response.json();
        console.log(json);
        return json;
    }
    main = async () => {
        result = await get_data();
        display(result);
        console.log(result);

    }
    main();

}

let i = 0;
function display(result) {

    if (result.length == 0) {
        var div = document.createElement('div');
        div.className = "errors";
        div.innerHTML = `
        <br>
        <br>
        <br>
        <br>
        <div class="error">

<h1>Whoops! Did your playlist forget to eat its Wheaties this morning?</h1>
<p><div class="btn">It seems a bit empty, like it's lacking some energy. But don't worry, we've got plenty of great songs to help give your playlist the boost it needs. Just search for your favorite tunes and add them to the mix. Before you know it, your playlist will be back to its peppy self, ready to take on the day!</div></p>
</div>        
`;
        document.getElementsByClassName('song-flex')[0].appendChild(div);
    }

    result.forEach(element => {
        console.log(typeof element['song_id']);
        var div = document.createElement('div');
        div.className = "song_container";
        div.innerHTML = `
        <div class="music_thumbnail">
            <img src="${element['img']}" alt="">
        </div>
        <div class="music_content">
            <div class="music-name" id="${element['song_id']}">
                <h2>${element['song_name']}</h2>
            </div>
            <div class="music-meta-data">
            </div>
        </div>
        <div class="music-duration">
            <h2>${element['song_duration']}</h2>
        </div>
        <div class="submit" style="width: 100px;margin-left: -10px;">
                <button type="submit" id="delete_button${i}" class="delete" onclick="delete1('${element['song_id']}')" style="margin-top: 25px;border-radius: 50%;width: 65px">
                <img src="./images/Playlist/delete.png" alt="" id="delete" style="height: 40px;width: 40px;margin-left: -3px;margin-top: 12px;">
                </button>
            </div>
        `;
        const red = Math.floor(Math.random() * 512);
        const green = Math.floor(Math.random() * 512);
        const blue = Math.floor(Math.random() * 512);
        div.style.backgroundColor = `rgb(${red},${green},${blue})`;
        document.getElementsByClassName('song-flex')[0].appendChild(div);
        i++;
    }
    );
}

function delete1(song_id1) {

    temp = parseInt(song_id1);
    var song_id = {}

    song_id["id"] = temp;
    console.log(typeof song_id['id']);
    console.log(song_id['id']);
    // var song_id=song_id1.toString();
    const post_data = async (song_id) => {
        const response = await fetch('http://127.0.0.1:5000/app/delete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(song_id)

        });
        const json1 = await response.text();
        console.log(json1);
        var json = JSON.parse(json1);
        if (json["status"] == 'ok') {
            showAlert("Song deleted successfully", 1500);
            reloadAfterTimeout(1800);

        }
        else {
            showAlert("Song Doesn't exist", 1500);
        }
    }
    main2 = async () => {
        await post_data(song_id);
    }
    main2();

}
