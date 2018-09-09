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
	makeData.innerHTML=`
		${pokemon.pokemon.filter((val)=>val.weaknesses.find((value)=>value==capitalizeFirstLetter(myData.value.toLowerCase()))).map((res)=>res.name)}
	`
}
let checkNextEvolution=(pokeData)=>(
		pokeData.next_evolution!=undefined
		?
		pokeData.next_evolution.map((res)=>res.name):'No Next Evolution')

let checkPrevEvolution=(pokeData)=>(
		pokeData.prev_evolution!=undefined
		?
		pokeData.prev_evolution.map((res)=>res.name):'No Prev Evolution')

let nextEvol=()=>(makeData.innerHTML=`${ checkNextEvolution(findPoke())}`)

let getInfo=()=>{
	let des=findPoke()
	if(des==undefined)
		makeData.innerHTML="Pokemon not found!"
	else{
		makeData.innerHTML=`
			<img src='${des.img}'><br>
			NAME : ${des.name } <br>
			TYPE : ${ des.type.map((res)=>{return res}) } <br>
			HEIGHT : ${ des.height } <br>
			WEIGHT : ${ des.weight } <br>
			CANDY : ${ des.candy } <br>
			CANDY COUNT : ${ des.candy_count } <br>
			EGG : ${ des.egg } <br>
			SPAWN CHANGE : ${ des.spawn_chance } <br>
			MULTIPLIERS : ${ des.multipliers } <br>
			WEAKNESSES : ${ des.weaknesses.map((res)=>res) } <br>
			NEXT EVOLUTION : ${ checkNextEvolution(des) } <br>
			PREV EVOLUTION : ${ checkPrevEvolution(des) } <br>
		`
	}
}
selected();
