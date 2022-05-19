var moviesArray = [
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODIlICAxNzFrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00310791-jfswvxmbpn-portrait.jpg",
   
    moviename: "Doctor Strange: In The Multiverse Of Madness",
    lang: "English",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTMlICA4NjFrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00098647-yxuvqdfgdx-portrait.jpg",
   
    moviename: "K.G.F Chapter 2",
    lang: "Hindi",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20:q-80/et00129624-exjvftltvy-portrait.jpg",
   
    moviename: "The Batman",
    lang: "English",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTclICAxM2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00327394-baflhanbvl-portrait.jpg",
    
    moviename: "",
    lang: "Marathi",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODklICA5NjJrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00094579-aftmcewtrk-portrait.jpg",
    
    moviename: "RRR",
    lang:"Telgu"
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODAlICA0OGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00315406-jkcmtwlygm-portrait.jpg",
    
    moviename: "RUNWAY 34",
    lang:"Hindi"
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NDElICAyOGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00128067-lbzwnrskvf-portrait.jpg",
    
    moviename: "HEROPANTI 2",
    lang:"Hindi"
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTEyayBsaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00109831-tljctfuswb-portrait.jpg",
    
    moviename: "Bhool Bhulaiyaa",
    lang:"Hindi"
  },
];

for (var i=0; i<moviesArray.length;i++){

    var cards= document.createElement("div")
    cards.setAttribute("id","card")


    var image = document.createElement("img");
    image.src = moviesArray[i].imgurl;

     var name1=document.createElement("p")
     name1.setAttribute("id", "movienam")
     name1.innerText=moviesArray[i].moviename

     var language=document.createElement("p")
     language.setAttribute("id","lang")
     language.innerText=moviesArray[i].lang

     cards.append(image,name1,language)

     document.querySelector("#movies").append(cards)


}