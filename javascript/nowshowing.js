

window.onload = setup;
const cinemas = getCinemas();

function setup()
{
    document.getElementById('cinemas').addEventListener("change",
        function(){
            console.log("yes");
            setcinemas();
    });


    for(let x = 0; x<cinemas.length; x++)
    document.getElementById('cinemas').innerHTML+='<option value="'+cinemas[x].branchName+'">'+cinemas[x].branchName+'</option>';

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
     /*   console.log("name is: "+movies[cinemas[id].movies[mov].id-1].name);
        console.log("id is "+cinemas[id].movies[mov].id);
        console.log("my id is "+cinemas[id].movies[mov].id);
        console.log("source is ../"+movies[cinemas[id].movies[mov].id-1].thumbnail);*/


        child.setAttribute("class", "child");
        child.innerHTML+='<div class="childof"><p>'+movies[currentid].name+'</p></div><div class="childof"><img src ="../'+movies[currentid].thumbnail+'" alt="Thumbnail of " ></div>';
        
        let formdiv = document.createElement('div');
        formdiv.setAttribute("class","childof");
        let form = document.createElement('form');
        let selectbox = document.createElement('select');
        
        for(let show = 0; show<cinemas[id].movies[mov].shows.length; show++)
        {
            selectbox.innerHTML+='<option value="'+cinemas[id].movies[mov].shows[show].datetime+' '+cinemas[id].movies[mov].shows[show].house+'">'+cinemas[id].movies[mov].shows[show].datetime+' House: '+cinemas[id].movies[mov].shows[show].house+'</option>';
        }
        selectbox.setAttribute("class", "timings");
        form.appendChild(selectbox);
        let but = document.createElement("button");
        but.setAttribute('type',"button");
        but.innerHTML="Buy Ticket!";
        form.appendChild(but);
        formdiv.appendChild(form);
        child.appendChild(formdiv);


        parent.appendChild(child);
    }    
   document.getElementById('test').innerHTML="";
    document.getElementById('test').appendChild(parent);
    console.log(id);

}

