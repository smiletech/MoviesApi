// my movies.html
const MainId=document.getElementById("Main-id")

let temp=''
let ArrData=[]

ArrData=JSON.parse(localStorage.getItem("Movies"))||[];
console.log(ArrData)

ArrData.map((ele,index)=>{
console.log(ele)
RenderData(ele);

});

function RenderData(ele)
{
   temp +=`
    </div class="AllCard">
    <div class="card" style="width: 16rem; margin-top: 10px;">
        <img id="img-id" src=${ele.Poster} class="card-img-top" alt="...">
        <div class="card-body text-center">
          <h5 class="card-title">${ele.Title}</h5>
          <p class="card-text">${ele.Actors},${ele.Runtime}</p>
          <a href="#" onclick="ReMove()" id="Remove" class="btn btn-warning my-2">Remove</a>
        </div>
      </div>
    </div>`
    MainId.innerHTML=temp
}

function SearchHandler()//key press
{
    console.log("..Search..")

}

function ReMove(){
console.log("....")
}