window.onload = setup;

function setup()
{
    urlParams = new URLSearchParams(window.location.search);
    
    let ind = urlParams.get('tickets');
  
    let index = ind.split(' ');

    let moviename, time,house,cinemaname;
    let cinemas = getCinemas();
    for(let x = 0; x<cinemas.length; x++)
    for(let c = 0; c<cinemas[x].movies.length; c++)
        for(let d = 0; d<cinemas[x].movies[c].shows.length; d++)
            if(cinemas[x].movies[c].shows[d].index == index[0])
            {
               cinemaname=  cinemas[x].branchName;
               time = cinemas[x].movies[c].shows[d].datetime;
               moviename=found(cinemas[x].movies[c].id);
               house=cinemas[x].movies[c].shows[d].house;
            }

    for(let x = 1; x<index.length; x++)
    {
        let art = document.createElement("article");
        art.setAttribute("class","ticket");
        art.innerHTML='<h4>Ticket</h4><form><label for="cinema">Cinema: </label><input type="text" id="cinema" value="'+cinemaname+'" readonly><br><label for="time">Time: </label><input type="text" id="time" value="'+time+'" readonly><br><label for="house">House: </label> <input type="text" id="house" value="'+house+'" readonly><br><label for="movie">Movie: </label> <input type="text" id="movie" value="'+moviename+'" readonly><br><label for="seat">Seat: </label><input type="text" id="seat" value="'+index[x]+'" readonly></form>'
        document.getElementById('here').appendChild(art);
        document.getElementById('here').innerHTML+='<br>';

    }
}