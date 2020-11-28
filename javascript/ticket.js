function setup()
{
    setforms();
    addeventhandlers();
    
}
const cinemas = getCinemas();
var index =0;
let tickets = 0;
function setforms()
{
    urlParams = new URLSearchParams(window.location.search);
    index = urlParams.get('showtime');
   
   for(let x = 0; x<cinemas.length; x++)
    for(let c = 0; c<cinemas[x].movies.length; c++)
        for(let d = 0; d<cinemas[x].movies[c].shows.length; d++)
            if(cinemas[x].movies[c].shows[d].index == index)
            {
                console.log("found");
                document.getElementById('cinema').setAttribute("value", cinemas[x].branchName);
                document.getElementById('time').setAttribute("value", cinemas[x].movies[c].shows[d].datetime);
                document.getElementById('house').setAttribute("value", cinemas[x].movies[c].shows[d].house);
                document.getElementById('movie').setAttribute("value", found(cinemas[x].movies[c].id));
                break;
            }
           

}

function addeventhandlers()
{ let form = document.getElementById('send');
form.setAttribute("method","get");
form.setAttribute("action","print.html");
form.getElementsByTagName("button")[0].setAttribute("value",index);
    let tds = document.getElementsByTagName("td");

    for(let x = 0; x<tds.length; x++)
    {  tds[x].style.cursor="pointer";
        tds[x].addEventListener("click", function(){

            if(tds[x].style.backgroundColor.localeCompare("yellow"))
            {

                tds[x].style.backgroundColor="yellow";

                tds[x].addEventListener('mouseover',function(){
                    tds[x].style.cursor="default";
                })
                tickets++;
                if( document.getElementById("ticketsbooked").innerHTML.length==0)
                document.getElementById("ticketsbooked").innerHTML+=tds[x].getElementsByTagName('p')[0].innerHTML;
    
                else
                document.getElementById("ticketsbooked").innerHTML+=' '+tds[x].getElementsByTagName('p')[0].innerHTML;
                
                if(tickets%10 == 0 && tickets!=0)
                document.getElementById("ticketsbooked").innerHTML+='<br>';
                
                form.getElementsByTagName("button")[0].setAttribute("value", form.getElementsByTagName("button")[0].value+=' '+tds[x].getElementsByTagName('p')[0].innerHTML);
            }

        });
    }
}
