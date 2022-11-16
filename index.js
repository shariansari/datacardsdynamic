const data =[
    {
        title:"aaa",
        rating:"1.2",
    },
    {
        title:"ba",
        rating:"1.22",
    },
    {
        title:"cccc",
        rating:"54.22",
    },
    {
        title:"bfdfda",
        rating:"133.22",
    },
    

]
data.forEach((Element,index)=>{




const main =document.querySelector(".main")
console.log(main)
///
const card =document.createElement("div")
console.log(card)

card.classList ="card";


const moviecard = `
<div class="card-body">
<h5 class="card-title">${data[index].title}</h5>
<h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
<p class="card-text">Some ${data[index].rating} quick example text to build on the card title and make up the bulk of the card's content.</p>
<a href="#" class="card-link">Card link</a>
<a href="#" class="card-link">Another link</a>
</div>


`;


card.innerHTML += moviecard;
main.appendChild(card);

})



