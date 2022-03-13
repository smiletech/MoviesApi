const InputText=document.getElementById("InputText")
const AllMovie=document.getElementById("AllMovie")

let data=''
let ArrData=[]

ArrData=JSON.parse(localStorage.getItem("Movies"))||[];

function MoivesHandler()//key press
{
    const SearchValue=InputText.value
    if(SearchValue=="")
    alert("please enter search value")
    console.log(".."+InputText.value)

    fetchText(SearchValue);    
    
   
 
}
//fetching...........

async function fetchText(SearchValue) {
    let temp=''
    let response = await fetch(`https://www.omdbapi.com/?t=${SearchValue}&apikey=38682202`);

    console.log(response.status); // 200
    console.log(response.statusText); // OK

    if (response.status === 200) {
         data = await response.json();
        console.log(data)
        console.log(data.Year)
        RenderCard(data)
    }

}

function RenderCard(data){

console.log(data.Title);
//     temp=`
//     </div class="AllCard" id="AllCard">
//     <div class="card" style="width: 16rem; margin-top: 10px;">
//     <img src=${data.Poster}></img>
//   <div class="card-body">
//    <h5 class="card-title">Card title</h5>
//    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//    <a href="#"  class="btn btn-primary">Save</a>
//    <a href="#"  class="btn btn-primary">See More Details</a>
//  </div>
// </div>
// </div>
//     `
 
temp=`<div class="movie_card" id="bright">
<div class="info_section">
  <div class="movie_header">
    <img class="locandina" src=${data.Poster}/>
    <h1>${data.Title},${data.Rated}</h1>
    <h4>${data.Year}, ${data.Actors}</h4>
    <span class="minutes">${data.Runtime}</span>
    <p class="type">${data.Genre}</p>
    <p class="type">${data.Actors}</p>
  </div>
  <div class="movie_desc">
    <p class="text">
     ${data.Plot}</p>
  </div>
  <div class="movie_social">
    <ul>
      <li><i class="material-icons">share</i></li>
      <li><i class="material-icons"></i></li>
      <li><i class="material-icons">chat_bubble</i></li>
      <li><button  onclick="SaveMovies(data); this.onclick=null;" class="btn btn-success"> Save</button></li>
    </ul>
  </div>
</div>
<div class="blur_back bright_back"></div>
</div>
</div>
<div class="blur_back ave_back"></div>
</div>`



    AllMovie.innerHTML=temp
}
// https://www.omdbapi.com/?t=avengers&apikey=38682202

function SaveMovies(data){
    console.log("");
    console.log(data);
    ArrData.push(data);
    localStorage.setItem("Movies",JSON.stringify(ArrData));
     
}