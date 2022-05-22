document.querySelector("#home").addEventListener("click", myhome);

function myhome() {
  alert("You Are Already In Home");
}

document.querySelector("#signup").addEventListener("click", mysignup);

function mysignup() {
  window.location.href = "signup.html";
}

document.querySelector("#login").addEventListener("click", mylogin);

function mylogin() {
  alert("You Have Already Logged In");
}

var slideshowObj = [
  {
    img: "https://theubj.com/wp-content/uploads/2021/12/46BCAAAE-8C40-4A8B-ACAD-0A9E6FBFBE14.jpeg",
  },
  {
    img: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2021/12/allu-arjun-opens-up-about-his-plans-for-pushpa-2-001.jpg",
  },
  { img: "https://wallpapercave.com/wp/wp9707468.jpg" },
  {
    img: "https://www.joblo.com/wp-content/uploads/2014/09/interstellar-banner-1.jpg",
  },
  {
    img: "https://moviegalleri.net/wp-content/uploads/2021/01/Master-Movie-Release-Posters-HD-05e1ab1.jpg",
  },
  {
    img: "https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-india-movie-poster-design-bollywood-padmaavat.jpg",
  },
  { img: "https://wallpapercave.com/wp/wp4019395.jpg" },
  { img: "https://wallpaperaccess.com/full/1352776.jpg" },
  { img: "https://i.ytimg.com/vi/3JwvxvIApEM/maxresdefault.jpg" },
];

localStorage.setItem("SlideShow", JSON.stringify(slideshowObj));
let banner_data = JSON.parse(localStorage.getItem("SlideShow"));

let bannerImage = document.createElement("img");
bannerImage.setAttribute("id", "bannerImage");

var i = 0;
let firstimg = banner_data[0];
bannerImage.src = banner_data[i].img;
document.getElementById("slideshow").append(bannerImage);
i++;

setInterval(function () {
  if (i == banner_data.length) {
    i = 0;
  }
  i++;
  bannerImage.src = banner_data[i].img;
  document.getElementById("slideshow").append(bannerImage);
}, 3000);

// --to display movies--//
var moviesArray = [
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODIlICAxNzFrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00310791-jfswvxmbpn-portrait.jpg",
    movie_IMDB: 7,
    moviename: "Doctor Strange: In The Multiverse Of Madness",
    lang: "English",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTMlICA4NjFrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00098647-yxuvqdfgdx-portrait.jpg",
    movie_IMDB: 10,
    moviename: "K.G.F Chapter 2",
    lang: "Hindi",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-ODBrIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00112828-ulnmcfqpyd-portrait.jpg",
    movie_IMDB: 6,
    moviename: "The Batman",
    lang: "English",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTclICAxM2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00327394-baflhanbvl-portrait.jpg",
    movie_IMDB: 9,
    moviename: "Dharamveer",
    lang: "Marathi",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODklICA5NjJrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00094579-aftmcewtrk-portrait.jpg",
    movie_IMDB: 9,
    moviename: "RRR",
    lang: "Telgu",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODAlICA0OGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00315406-jkcmtwlygm-portrait.jpg",
    movie_IMDB: 6,
    moviename: "RUNWAY 34",
    lang: "Hindi",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NDElICAyOGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00128067-lbzwnrskvf-portrait.jpg",
    movie_IMDB: 9,
    moviename: "HEROPANTI 2",
    lang: "Hindi",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTEyayBsaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00109831-tljctfuswb-portrait.jpg",
    movie_IMDB: 7,
    moviename: "Bhool Bhulaiyaa",
    lang: "Hindi",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzYlICAyNGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00319643-dxwqjlerur-portrait.jpg",
    moviename: "Fantastic Beasts: The Secrets Of Dumbledore",
    lang: "Hindi, English",
    movie_IMDB: 8,
  },
];

displayfunction(moviesArray);
document.getElementById("H").addEventListener("click", highfun);
document.getElementById("L").addEventListener("click", lowfun);

function highfun() {
  moviesArray.sort(function (a, b) {
    if (a.movie_IMDB > b.movie_IMDB) return -1;
    if (a.movie_IMDB < b.movie_IMDB) return 1;
    return 0;
  });
  displayfunction(moviesArray);
}

function lowfun() {
  moviesArray.sort(function (a, b) {
    if (a.movie_IMDB > b.movie_IMDB) return 1;
    if (a.movie_IMDB < b.movie_IMDB) return -1;
    return 0;
  });
  displayfunction(moviesArray);
}

function displayfunction(moviesArray) {
  document.getElementById("movies").innerHTML = null;

  for (var i = 0; i < moviesArray.length; i++) {
    var cards = document.createElement("div");
    cards.setAttribute("id", "card");

    var image = document.createElement("img");
    image.src = moviesArray[i].imgurl;

    var name1 = document.createElement("p");
    name1.setAttribute("id", "movienam");
    name1.innerText = moviesArray[i].moviename;

    var language = document.createElement("p");
    language.setAttribute("id", "lang");
    language.innerText = moviesArray[i].lang;

    let IMBD = document.createElement("p");
    IMBD.textContent = "IMBD Ratings : " + moviesArray[i].movie_IMDB;
    IMBD.setAttribute("id", "IMDB");

    cards.append(image, name1, language, IMBD);

    document.querySelector("#movies").append(cards);
  }
}
