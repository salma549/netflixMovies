let movies=[
    {
        name:"Movie:KRRISH 3",
        poster:"https://m.media-amazon.com/images/M/MV5BMjI0MzU3MTM1Ml5BMl5BanBnXkFtZTgwOTk2MjQ0MDE@._V1_.jpg",
        rating:"rating:9.9"
    },
    {
        name:"Movie:Pathaan",
        poster:"https://i.pinimg.com/736x/b5/22/4c/b5224ca906773936ada3b4e46e33e4dc.jpg",
        rating:"Rating:9.2"
    },
    {
        name:"Movie:Oppenheimer",
        poster:"https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
        rating:"Rating:8.4"
    },
    {
        name:"Movie:Baahubali",
        poster:"https://rukminim2.flixcart.com/image/850/1000/kzygpzk0/poster/r/q/s/large-movie-bahubali-2-posters-on-large-print-36x24-inches-original-imagbukjsjtksjsg.jpeg?q=20",
        rating:"Rating:9.7"
    },
    {
        name:"Movie:Evil Dead Rise",
        poster:"https://m.media-amazon.com/images/M/MV5BMmZiN2VmMjktZDE5OC00ZWRmLWFlMmEtYWViMTY4NjM3ZmNkXkEyXkFqcGdeQXVyMTI2MTc2ODM3._V1_FMjpg_UX1000_.jpg",
        rating:"Rating:9.4"
    },
    {
        name:"Movie:The Conjuring",
        poster:"https://m.media-amazon.com/images/I/61exLhGdsbL._AC_UF1000,1000_QL80_.jpg",
        rating:"Rating:9.3"
    },
    {
        name:"Movie:Avengers Endgame",
        poster:"https://m.media-amazon.com/images/I/51le5tUBQWL.jpg",
        rating:"Rating:8.8"
    },
    {
        name:"Movie:Avengers Infinity War",
        poster:"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg",
        rating:"Rating:8.9"
    },
    {
        name:"Movie:Annabelle",
        poster:"https://m.media-amazon.com/images/I/81EeeDX08uL._AC_UF1000,1000_QL80_.jpg",
        rating:"Rating:9.6"
    },
    {
        name:"Movie:Robo 2.0",
        poster:"https://m.media-amazon.com/images/M/MV5BNGRlNGE5NjYtNTllNy00YWMyLTkyYjctMTIwOTZmNGIyZWU4XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg",
        rating:"Rating:9.1"
    },
    {
        name:"Movie:Spider-Man",
        poster:"https://i.etsystatic.com/22985714/r/il/e23732/3807163725/il_570xN.3807163725_cuy8.jpg",
        rating:"Rating:9.5"
    },
    {
        name:"Movie:Student Of The Year",
        poster:"https://stat4.bollywoodhungama.in/wp-content/uploads/2016/03/74637351.jpg",
        rating:"Rating:8.6"
    },
    {
        name:"Barbie",
        poster:"https://www.themoviedb.org/t/p/original/kkORXK5rfpZGdBz0r2AASHC8dyG.jpg",
        rating:8.7
    },
    {
        name:"Movie:Jailer",
        poster:"https://m.media-amazon.com/images/M/MV5BNDA5YzlhNjItMDgxNC00MjQ4LWIzMDMtYTUyMzBhNjViNDk3XkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg",
        rating:"Rating:8.3"
    },
    {
        name:"Movie:A Quite Place",
        poster:"https://alternativemovieposters.com/wp-content/uploads/2021/07/HubertPelerin_QuietPlace2.jpg",
        rating:"Rating:8.9"
    },


]




function searchMovie()
{
    /*console.log("Button Working") target element  with this code */
    let movieName = document.getElementById('search').value;
    /*console.log(movieName);
    movies.filter(function(movie)
    {     
    })*/
    if(movieName!=="")
    {
       let result= movies.filter(function(movie)
        {
            return movie.name.toUpperCase().includes(movieName.toUpperCase())
        })

        /*console.log(result);*/
        displayMovies(result);
    }
    else
    {
        displayMovies(movies);
    }
}
function displayMovies(data)
{
    document.getElementById("movies").innerHTML="";
    let htmlString =``;
            for(let i=0;i<data.length;i++)
            {
                
                htmlString=htmlString+`
                <div class="movie">
                <div class="overlay">
                    <div class="video">
                    </div>
                    
                    <div class="details">
                        <h1>${data[i].name}</h1>
                         <h2>${data[i].rating}</h2>
                    </div>
                </div>
                <img class="poster" src="${data[i].poster}" alt="poster">
            </div>
         `
     }
            console.log(htmlString);

            document.getElementById("movies").innerHTML=htmlString;
}
displayMovies(movies);












/*function displayMovies()
{
let movie=document.createElement("div");
movie.classList.add('movie');

let overlay=document.createElement("div");
overlay.classList.add('overlay');

movie.appendChild(overlay);
console.log(movie);
}
displayMovies();*/