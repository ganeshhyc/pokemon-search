let selected=()=>{
	let selectBy=document.getElementById("selectBy").value;
	if(selectBy=='pokeWeakness'){
		myData.placeholder="Weakness"
		nameSearched.style.display="none"
		weaknessSearched.style.display="block"
	}
	else{
		myData.placeholder="Pokemon Name"
		weaknessSearched.style.display="none"
		nameSearched.style.display="block"
	}
}
let capitalizeFirstLetter=(string)=>(string.charAt(0).toUpperCase() + string.slice(1))

let findPoke=()=>(pokemon.pokemon.find((val)=>(val.name==capitalizeFirstLetter(myData.value.toLowerCase()))))

let weakSearch=()=>{
	makeData.innerHTML=`<ul class="list-group list-group-flush">
		${pokemon.pokemon.filter((val)=>val.weaknesses.find((value)=>value==capitalizeFirstLetter(myData.value.toLowerCase()))).map((res)=>'<li class="list-group-item">'+res.name+'</li>').join('')}
	</ul>`
}
let checkNextEvolution=(pokeData)=>(
		pokeData.next_evolution!=undefined
		?
		pokeData.next_evolution.map((res)=>res.name):'No Next Evolution')

let checkPrevEvolution=(pokeData)=>(
		pokeData.prev_evolution!=undefined
		?
		pokeData.prev_evolution.map((res)=>res.name):'No Prev Evolution')

let nextEvol=()=>(makeData.innerHTML=`
	<div class="jumbotron jumbotron-fluid">
		<div class="container">
			<h1 class="display-4">${ checkNextEvolution(findPoke())}</h1>
		</div>
	</div>
`)

let getInfo=()=>{
	let des=findPoke()
	if(des==undefined)
		makeData.innerHTML=`
			<div class="jumbotron jumbotron-fluid">
				<div class="container">
				<h1 class="display-4">Pokemon Not Found!</h1>
				</div>
			</div>
		`
	else{
		makeData.innerHTML=`
			<div class="card-deck container-fluid">
				<div class="card">
				&nbsp;&nbsp;&nbsp;<img class="card-img-top" src="${des.img}" style="width:100px;height:100px;" alt="Card image cap">
				<div class="card-body">
					<h5 class="card-title">${des.name}</h5>
					<p class="card-text">
						<ul class="list-group list-group-flush">
							<small class="text-muted">
								<li class="list-group-item">TYPE : ${ des.type.map((res)=>{return res}) }</li>
								<li class="list-group-item">HEIGHT : ${ des.height } </li>
								<li class="list-group-item">WEIGHT : ${ des.weight } </li>
								<li class="list-group-item">CANDY : ${ des.candy } </li>
								<li class="list-group-item">CANDY COUNT : ${ des.candy_count } </li>
								<li class="list-group-item">EGG : ${ des.egg } </li>
								<li class="list-group-item">SPAWN CHANGE : ${ des.spawn_chance } </li>
								<li class="list-group-item">MULTIPLIERS : ${ des.multipliers } </li>
								<li class="list-group-item">WEAKNESSES : ${ des.weaknesses.map((res)=>res) } </li>
								<li class="list-group-item">NEXT EVOLUTION : ${ checkNextEvolution(des) } </li>
								<li class="list-group-item">PREV EVOLUTION : ${ checkPrevEvolution(des) } 
							</small>
						</ul>
					</p>
				</div>
			</div>
		`
	}
}
selected();
