


const cinemas = getCinemas();

function setup()
{
    document.getElementById('cinemas').addEventListener("change",
        function(){
            setcinemas();
    });


    for(let x = 0; x<cinemas.length; x++)
    document.getElementById('cinemas').innerHTML+='<option value="'+cinemas[x].branchName+'">'+cinemas[x].branchName+'</option>';

    setcinemas();
}

function setcinemas()
{
    let parent = document.createElement("div");
    parent.setAttribute("class", "parent");
    let id = 0;
    for( id = 0; id<cinemas.length; id++)
    {
        if(cinemas[id].branchName.localeCompare(document.getElementById('cinemas').value)==0)
            break;
    }

    for(let mov = 0; mov<cinemas[id].movies.length; mov++)
    {
        let child = document.createElement('div');
        let currentid = cinemas[id].movies[mov].id-1;
        child.setAttribute("class", "child");
        child.innerHTML+='<div class="childof"><p>'+movies[currentid].name+'</p></div><div class="childof"><img src ="../'+movies[currentid].thumbnail+'" alt="Thumbnail of " ></div>';
        let formdiv = document.createElement('div');
        formdiv.setAttribute("class","childof");
        let form = document.createElement('form');
        form.setAttribute("action","ticket.html");
        form.setAttribute("method","get");
        let selectbox = document.createElement('select');
        selectbox.setAttribute('name',"showtime");
        for(let show = 0; show<cinemas[id].movies[mov].shows.length; show++)
        {
            selectbox.innerHTML+='<option value="'+cinemas[id].movies[mov].shows[show].index+'">'+cinemas[id].movies[mov].shows[show].datetime+' House: '+cinemas[id].movies[mov].shows[show].house+'</option>';
        }
        selectbox.setAttribute("class", "timings");
        selectbox.setAttribute("type","select");
        form.appendChild(selectbox);
    
        let but = document.createElement("button");
        but.setAttribute('type',"Submit");
       
        
        
        but.innerHTML="Buy Ticket!";
      
        form.appendChild(but);
        formdiv.appendChild(form);
        child.appendChild(formdiv);
        parent.appendChild(child);
    }    

    document.getElementById('place').innerHTML="";
    document.getElementById('place').appendChild(parent);
  

}
