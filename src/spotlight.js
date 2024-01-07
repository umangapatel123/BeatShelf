var inputBox = document.getElementById("name");
var textareaBox = document.getElementById("review");

textareaBox.addEventListener("input", function () {
    textareaBox.style.height = "auto";
    textareaBox.style.height = textareaBox.scrollHeight + "px";
});

var reviews = []; // an array to store the reviews

function submitReview() {
    var name = document.getElementById("name").value;
    var rating = document.querySelector('input[name="rating"]:checked').value;
    var review = document.getElementById("review").value;
    var newReview = {
        name: name,
        rating: rating,
        review: review
    };

    reviews.push(newReview);
    document.getElementById("form-review").reset();
    displayReviews();
}

function displayReviews() {
    var tableBody = document.getElementById("reviews-table-body");
    tableBody.innerHTML = "";

    for (var i = 0; i < reviews.length; i++) {
        var row = tableBody.insertRow(i);
        var nameCell = row.insertCell(0);
        var ratingCell = row.insertCell(1);
        var reviewCell = row.insertCell(2);

        nameCell.innerHTML = reviews[i].name;
        ratingCell.innerHTML = reviews[i].rating;
        reviewCell.innerHTML = reviews[i].review;
    }
}

var aText = new Array(
    "Arijit Singh is a popular Indian playback singer, composer, and music producer who works primarily in Bollywood films. He was born on April 25, 1987, in Jiaganj, West Bengal, India.",
    " ",
    "Arijit Singh began his career as a contestant on the reality singing competition show 'FameGurukul'  in 2005. He gained popularity with his soulful voice and eventually went on to become one of the most sought-after playback singers in the Indian film industry.",
    " ",
    "Aside from his singing career, Arijit Singh is also a trained classical singer and has composed and produced music for several films. He is known for his versatility and ability to sing in a wide range of genres, from romantic ballads to peppy dance numbers."
);
var iSpeed = 50;
var iIndex = 0;
var iArrLength = aText[0].length;
var iScrollAt = 20;

var iTextPos = 0;
var sContents = '';
var iRow;

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("details");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}

const releaseDate = new Date("2023-06-01T00:00:00Z");
countdownTimer=document.getElementById("countdown-timer");
function updateCountdown() {
    const now = new Date();
    const diff = releaseDate - now;
    if (diff < 0) {
        countdownTimer.textContent = "Album released!";
    } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        countdownTimer.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        countdownTimer.style.color = "antiquewhite";
    }
}
updateCountdown();
setInterval(updateCountdown, 1000);

typewriter();