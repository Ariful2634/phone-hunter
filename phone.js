const phones = (searchText) => {
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(res => res.json())
        .then(data => phone(data))
}

const phone = (data) => {
    phn = data.data
    // console.log(phn);
   
    const card = document.getElementById('card-container')
    card.innerHTML='';
    

    phn=phn.slice(0,12);
    phn.forEach(element => {
        // console.log(element)
       
        const div = document.createElement('div');
        div.innerHTML='';
        div.innerHTML = `
        <div class="card  bg-base-100 shadow-xl p-8">
        <figure><img src="${element.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${element. phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button onclick="modal('${element.slug}');my_modal_1.showModal()" class="btn btn-primary ">Buy Now</button>
          </div>
        </div>
      </div>
        `
        card.appendChild(div)
        load(false);
       
    });
   
}



// button handler

function btnHandle(){
  const inp = document.getElementById('inp');
  const input = inp.value;
  load(true)
  phones(input)
  // console.log(input)
}

function load(isLoad){
  const lo=document.getElementById('lo');
  if(isLoad==true){
    lo.classList.remove('hidden')
  }
  else{
    lo.classList.add('hidden')
  }

}


// modal button

const modal = (id)=>{
  fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
  .then(res => res.json())
  .then(res => {
   const resp = res.data;
    // console.log(resp,id)
    const mod = document.getElementById('mod');
    mod.innerHTML='';
    const div = document.createElement('div');
    div.innerHTML=`
    <img src="${resp.image}" alt="">
    <p>${resp.name}</p>
    <p>Memory:${resp?.mainFeatures?.memory}</p>
    <p>GPS:${resp?.others?.GPS || 'No GPS'}</p>
    `
    mod.appendChild(div)

  })
}


phones()