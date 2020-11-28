


function getMovies() {
    return [
        {
            id:1,
            type:"now",
            thumbnail:"images/barbecue.jpg",
            src:"https://courses.cs.cityu.edu.hk/cs2204/video/barbecue.mp4",
            name:"The Barbecue Movie",
            cast:"Steak, Grill, Electricity",
            director:"Steak Baker",
            genre:"Hot, Grilling",
            duration: "130 mins"
        },
        {
            id:2,
            type:"now",
            thumbnail:"images/bigbuck.jpg",
            src:"https://courses.cs.cityu.edu.hk/cs2204/video/bigbuck-s.mp4",
            name:"The Big Buck",
            cast:"Deers, Plants, Trees, Sun",
            director:"Hunter Survivor",
            genre:"Relaxing,Green",
            duration: "123 mins"
        },
        {
            id:3,
            type:"now",
            thumbnail:"images/chocolate.jpg",
            src:"https://courses.cs.cityu.edu.hk/cs2204/video/chocolate.mp4",
            name:"The Chocolate Movie",
            cast:"Flour, Chocolate, Hersheys",
            director:"French Baker",
            genre:"Obesity, Tasty, Scrumptious",
            duration: "40 mins"
        },
        
        {
            id:4,
            type:"upcoming",
            thumbnail:"images/nature.jpg",
            src:"https://courses.cs.cityu.edu.hk/cs2204/video/nature.mp4",
            name:"The Nature Movie",
            cast:"Birds, Animals, Humans, Sharks",
            director:"David Attenborough",
            genre:"Natural, Windy, Informative",
            duration: "150 mins"
        },
        {
            id:5,
            type:"upcoming",
            thumbnail:"images/wildlife.jpg",
            src:"https://courses.cs.cityu.edu.hk/cs2204/video/wildlife.mp4",
            name:"The Landscape Movie",
            cast:"Rocks, Rivers, Clouds, Skies",
            director:"Walter Mitty",
            genre:"Rocky, Dramatic, Suspenseful",
            duration:"120 mins"
        },
        {
            id:6,
            type:"upcoming",
            thumbnail:"images/wonders.jpg",
            src:"https://courses.cs.cityu.edu.hk/cs2204/video/wonders.ogg",
            name:"The Wonderful Movie",
            cast:"Egyptians, Bablyonians, Mughal King and Wives",
            director:"Khufu",
            genre:"Desert, Awe, Inspiring",
            duration: "120 mins"
        }
        
    ]
}
const movies = getMovies();
let currentid=1;
let titles =["Directed by: ","Cast: ","Runtime: ","Genre: "];

function setvideo(source)
{
  
    
    document.getElementById("videoplayer").setAttribute("src", ""+source.src+"");

    
    let data = [source.director, source.cast, source.duration, source.genre];
    let para = document.getElementById("trailerheadings");
    let spann = document.createElement("span");
    para.innerHTML="";
    spann.setAttribute("class","heading");
    spann.innerHTML=source.name;
    para.appendChild(spann);
    para.innerHTML+="<br><br>"
 
    for(var d = 0; d<4; d++)
    {
        let spantag = document.createElement("span");
        spantag.setAttribute("class","minor_heading");
        spantag.innerHTML=titles[d];
        let node = document.createTextNode(data[d]+" ");
        para.appendChild(spantag);
        para.appendChild(node);
    }


    
}


function onloadmovies(){
    makemovies();
    setvideo(movies[0]);
    
document.getElementById("videoplayer").addEventListener("ended", function(){
    keepgoing();
})
  
}

function keepgoing(){
 currentid++;
    setTimeout(function(){
        setvideo(movies[(currentid-1)%movies.length]);
    }, 2000);
}

function makemovies(){
   
    let nowshowing = document.createElement("div");
    let upcoming = document.createElement("div");
    nowshowing.setAttribute("class", "parent");
    upcoming.setAttribute("class", "parent");
    
    for(let c = 0; c<movies.length; c++)
    {

        let parent = document.createElement("div"); //parent of the entire container, but child in the parent containing all the movies
        parent.setAttribute("class","child");
        
        let child = document.createElement("div"); //parent of p
        child.setAttribute("class","parent");
        
        let childof = document.createElement("div");
        childof.setAttribute("class","childof");
       
        let img = document.createElement("img");
        img.src = movies[c].thumbnail;
   
        let currentmovie = movies[c];
        img.setAttribute("alt","Movie is "+movies[c].name);

        img.addEventListener("click",function(){ 
            window.open("index.html#Now_showing","_self")
            setvideo(movies[c]); 
        });
        let heading = document.createElement("h3");
        heading.innerHTML = movies[c].name;
        childof.appendChild(heading);
        childof.appendChild(img);
        child.appendChild(childof);
        let para = document.createElement("p");
        let data = [movies[c].director, movies[c].cast, movies[c].duration, movies[c].genre];
        for(let d = 0; d<4; d++)
        {
            let spantag = document.createElement("span");
            spantag.setAttribute("class","minor_heading");
            spantag.innerHTML=titles[d];
            let node = document.createTextNode(data[d])
            para.appendChild(spantag);
            para.appendChild(node);
            para.appendChild(document.createElement("br"));
        }
        let childo = document.createElement("div");
        childo.setAttribute("class","childof");
        childo.appendChild(para);
        child.appendChild(childo);
        parent.appendChild(child);

        if(movies[c].type=="now")
            nowshowing.appendChild(parent);
        else
            upcoming.appendChild(parent);


    }

    document.getElementById("now").appendChild(nowshowing);
    document.getElementById("upcoming").appendChild(upcoming);
    

}

function found(idd)
{
    for(let x = 0; x<movies.length;x++)
        if(idd==movies[x].id)
            return movies[x].name;

}