


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


function setvideo(source)
{
    //movies=getMovies();
   // source=source-1;
    console.log(source);
    //console.log(movies[Number(source)]);
    document.getElementById("videoplayer").setAttribute("src", ""+source.src+"");

    var titles =["Directed by: ","Cast: ","Runtime: ","Genre: "];
    var data = [source.director, source.cast, source.duration, source.genre];
   var para = document.getElementById("trailerheadings");
    var spann = document.createElement("span");
    para.innerHTML="";
    spann.setAttribute("class","heading");
    spann.innerHTML=source.name;
    para.appendChild(spann);
    para.innerHTML+="<br><br>"
    // para.innerHTML='<span class="heading>'+source.name+'</span>\n';
    for(var d = 0; d<4; d++)
    {
        var spantag = document.createElement("span");
        spantag.setAttribute("class","minor_heading");
        spantag.innerHTML=titles[d];
        var node = document.createTextNode(data[d]+" ");
        para.appendChild(spantag);
        para.appendChild(node);
    }


    
}
let currentid=1;

function onloadmovies(){
    makemovies();
    
    setvideo(movies[0]);
    
document.getElementById("videoplayer").addEventListener("ended", function(){
    console.log("yes");
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
   
    var nowshowing = document.createElement("div");
    var upcoming = document.createElement("div");
    nowshowing.setAttribute("class", "parent");
    upcoming.setAttribute("class", "parent");
    
    for(var c = 0; c<movies.length; c++)
    {

        var parent = document.createElement("div");
        parent.setAttribute("class","child");
        
        var child = document.createElement("div");
        child.setAttribute("class","parent");
        
        var childof = document.createElement("div");
        childof.setAttribute("class","childof");
       
        var img = document.createElement("img");
        img.src = movies[c].thumbnail;
   
        let ef = movies[c];
        img.setAttribute("alt","Movie is "+movies[c].name);

        img.addEventListener("click",function(){ 
            setvideo(ef); 
        });
        var headin = document.createElement("h3");
        headin.innerHTML = movies[c].name;

        childof.appendChild(headin);
       
       childof.appendChild(img);
        
        child.appendChild(childof);

        var textchild = document.createElement("div");
        textchild.setAttribute("class", childof);
        
        var para = document.createElement("p");
       
        var titles =["Directed by: ","Cast: ","Runtime: ","Genre: "];
        var data = [movies[c].director, movies[c].cast, movies[c].duration, movies[c].genre];
        for(var d = 0; d<4; d++)
        {
            var spantag = document.createElement("span");
            spantag.setAttribute("class","minor_heading");
            spantag.innerHTML=titles[d];
            var node = document.createTextNode(data[d])
            para.appendChild(spantag);
            para.appendChild(node);
            para.appendChild(document.createElement("br"));
        }
        var childo = document.createElement("div");
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