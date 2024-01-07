# BeatShelf
This is the base interface of the our website which displays information about
different artists, albums, and songs made using HTML and CSS.
## Functionality

This Website allows User to:
- Browse a catalog of music albums.
- View details about each album, including track listings and album art.
- View Trending Artists,Albums and Tracks.
## Website Directory Structure


```.
├── about1.css
├── about.html
├── album.css
├── arijit_singh_album1.html
├── arijit_singh_album2.html
├── arijit_singh_album3.html
├── arijit_singh_album4.html
├── arijit_singh_album5.html
├── arijit_singh.html
├── artist.css
├── artist.html
├── badshah_album1.html
├── badshah_album2.html
├── badshah_album3.html
├── badshah_album4.html
├── badshah_album5.html
├── badshah.html
├── ed_sheeran_album1.html
├── ed_sheeran_album2.html
├── ed_sheeran_album3.html
├── ed_sheeran_album4.html
├── ed_sheeran_album5.html
├── ed_sheeran.html
├── images
│   ├── about_bg.jpg
│   ├── Albums
│   │   ├── Arijit
│   │   │   ├── Aashiqui-2-Hindi-2013-500x500.jpg
│   │   │   ├── Arijit
│   │   │   ├── arijit_background.jpeg
│   │   │   ├── Brahmastra-Original-Motion-Picture-Soundtrack-Hindi-2022-20221006155213-500x500.jpg
│   │   │   ├── giphy.gif
│   │   │   ├── Kedarnath-Hindi-2019-20190219-500x500.jpg
│   │   │   ├── M-S-Dhoni-The-Untold-Story-3-Hindi-2016-500x500.jpg
│   │   │   └── Yeh-Jawaani-Hai-Deewani-2013-500x500.jpg
│   │   ├── Badshah
│   │   │   ├── ba1.webp
│   │   │   ├── ba2.webp
│   │   │   ├── ba3.webp
│   │   │   ├── ba4.webp
│   │   │   ├── ba5.png
│   │   │   └── ONE.jpeg
│   │   └── Ed Sheeran
│   │       ├── ed1.png
│   │       ├── ed2.png
│   │       ├── ed3.png
│   │       ├── ed4.png
│   │       └── ed5.png
│   ├── ansh.jpeg
│   ├── Artists
│   │   ├── arijit_2.webp
│   │   ├── Arijit_Singh_Collage.png
│   │   ├── Arjit_Singh.jpg
│   │   ├── badshah_2.jpg
│   │   ├── Badshah.jpg
│   │   ├── ed_2.jpg
│   │   ├── Ed_Sheeran.jpg
│   │   ├── neha_2.jpeg
│   │   ├── Neha_Kakkar.jpg
│   │   ├── Raftaar.jpg
│   │   ├── shreya_2.jpg
│   │   └── Shreya_Ghoshal.jpg
│   ├── ba5.jpg
│   ├── background_card1.avif
│   ├── background_card2.avif
│   ├── background_card3.avif
│   ├── dark_transparent.png
│   ├── download.jpeg
│   ├── download.png
│   ├── ed1.jpg
│   ├── front-view-young-female-white-shirt-listening-music-pink-wall-color-woman-model-woman.jpg
│   ├── happy.jpg
│   ├── headphones-disk.jpg
│   ├── imag5.avif
│   ├── image10.jpg
│   ├── image12.jpg
│   ├── image13.jpg
│   ├── image2.jpg
│   ├── image3.jpg
│   ├── image4.avif
│   ├── image6.webp
│   ├── image7.webp
│   ├── image8.webp
│   ├── image9.webp
│   ├── image.jpg
│   ├── impressed-young-handsome-man-wearing-headphones-standing-profile-view-looking-side-isolated-white-background-with-copy-space.jpg
│   ├── istockphoto-1434492732-170667a.jpg
│   ├── logonew.png
│   ├── logo.png
│   ├── peakpx.jpg
│   ├── pexels-photo-3784221.webp
│   ├── pexels-steve-johnson-1044989.jpg
│   ├── pexels-suzy-hazelwood-1629236.jpg
│   ├── shreya_2.jpg
│   ├── Songs
│   │   ├── best_of_arijit2.webp
│   │   ├── best_of_arijit.webp
│   │   ├── channa_mereya.webp
│   │   ├── hearbreak.webp
│   │   ├── Kesariya.jpg
│   │   ├── neha1.jpg
│   │   ├── neha2.webp
│   │   ├── neha3.jpg
│   │   ├── neha4.jpg
│   │   ├── neha5.jpg
│   │   ├── party_hits.webp
│   │   ├── Perfect.jpg
│   │   ├── Qaraar.jpg
│   │   ├── queen_of_melody_shreya_ghoshal.png
│   │   ├── shayad.webp
│   │   ├── shreya_2.jpeg
│   │   ├── shreya_3.jpeg
│   │   ├── shreya_4.jpg
│   │   ├── shreya_5.jpg
│   │   └── ultimate_love_songs.jpeg
│   └── umang.jpg
├── index.html
├── neha_kakkar_album1.html
├── neha_kakkar_album2.html
├── neha_kakkar_album3.html
├── neha_kakkar_album4.html
├── neha_kakkar_album5.html
├── neha_kakkar.html
├── rawfile.html
├── shreya_ghoshal_album1.html
├── shreya_ghoshal_album2.html
├── shreya_ghoshal_album3.html
├── shreya_ghoshal_album4.html
├── shreya_ghoshal_album5.html
├── shreya_ghoshal.html
├── song.css
└── style.css

```


## Instructions

1. Getting Started:\
Our Website can be opened on web Browsers with resolutions 1920 x 1080 for best results. The website has Home Page with Website Logo on top. The main page can be scrolled down to view buttons for Top Artists, Albums and Tracks.

2. Navigation:
- The Navigation Bar present on Top of every webpage of the website lets user navigate through different sections of website easily and quickly. The Navigation bar is fixed on top irrespective of scrolling. The active page is highlighted with underline on the webpage name.
- Scrolling on to any image and clicking will redirect the user to the webpage of respective artist/album.
- On visiting the Artists Page from Navigation bar, Artist photos will be displayed. On Hovering the Artist photo, the name of the respective artis will be displayed. On clicking anywhere on the image, user will be redirected to respective artist page.
- The Album page consists of 5 albums of the selected Artist. On clicking any of the album will redirect the user to respective song page. Each Album consits of the following information:
    - Name of Album
    - Number of Songs in the Album
    - Year of Release of the Album
- The song page displays 5 songs of each album along with the length of each song.

3. About:
- We Have Listed the objectives of making this website.
- We Also Included what is contains and what are feautres.
- On Hovering Our Images You Can Get Information About Us.
4. Footer:
Footer Consists of Standard Footer text. It also consists of Link to Home, Artists Page and About Page. This footer is consistent all over the website.





