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
    {
        title:"bfdfda",
        rating:"133.22",
    },
    {
        title:"bfdfda",
        rating:"133.22",
    },
    {
        title:"bfdfda",
        rating:"133.22",
    },
    {
        title:"bfdfda",
        rating:"133.22",
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
<div class="card ">
<div class="card-body">

    <i class="bi bi-calendar-event"></i>
    <span>Posted on:16-Nov-22</span>

    <div class="dofix">
        <i class="bi bi-person-fill"></i>
        <span style="font-size:20px;color: rgb(77, 92, 221);">Wanted Home Tutor For...</span>

    </div>
    <div>
        <i class="bi bi-geo-alt"></i>
        <span>Gyoti nagar west delhi</span>
    </div>
    <div>
        <span style="color: brown">Prefered :</span>
        <i class="bi bi-person-circle"></i>Any <i class="bi bi-watch"></i><span>Evening</span>
        <hr>

    </div>
    <div><i class="bi bi-file-earmark-break"></i><span>1st class TuitionId: 556341</span></div>
    <hr>
    <div>
        <pre>  <i class="bi bi-book"></i> :<span>All</span></pre>
    </div>
    <hr>
    <div style="background-color:lightblue;padding:20px;border-radius: 10px;">Wanted home tutor for 1st
        class, All</div>
    <button style="margin-top:8px;border-radius: 10px;background-color: rgb(10, 172, 236);"> <span
            style="color: white">view Details</span> </button>
`



card.innerHTML += moviecard;
main.appendChild(card);

})



