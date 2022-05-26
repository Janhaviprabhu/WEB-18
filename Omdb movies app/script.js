function getmovies(){
    var title=document.getElementById("input").value

    const url = `http://www.omdbapi.com/?t=${title}&apikey=87a21ae9`;

    fetch(url).then(function(res){
        res.json().then(function(res){
            append(res)
            console.log(res)
        })

    })
    .catch(function(err){
        console.log(err)
    })

    function append(data){
        
        let container = document.getElementById("container");
        container.innerHTML = null;


        if (data.Response==="True"){


        let box=document.createElement("div")
        box.setAttribute("class","box")

        let img= document.createElement("img")
        img.src=data.Poster;
        img.setAttribute("class", "poster")

        let name=document.createElement("h2")
        name.innerText=data.Title;
        name.setAttribute("class", "title")

        let date= document.createElement("p")
        date.innerText = data.Released;
        date.setAttribute("class", "release")

        let IMDB=document.createElement("p")
        IMDB.innerText="IMDB : "+ data.imdbRating + "/10"
        IMDB.setAttribute("class","imdb")
        if (Number(data.imdbRating)>=Number(8))
        {
            let IMDB_image=document.createElement("img")
            IMDB_image.src =
              "https://previews.123rf.com/images/lkeskinen/lkeskinen1701/lkeskinen170100819/68311721-must-watch-rubber-stamp.jpg";
             IMDB.setAttribute("class", "im")
              
              IMDB.append(IMDB_image)
        }



        box.append(img,name,date,IMDB)

        container.append(box)

        }

        else if (data.Response==="False")
        {
            var incorrect=document.createElement("img")
            incorrect.src =
              "https://image.shutterstock.com/z/stock-vector-page-not-found-error-with-film-flap-design-1793915827.jpg";
              container.append(incorrect)
        }


    }


}