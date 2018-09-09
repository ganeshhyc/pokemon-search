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
let capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
let findPoke=()=>{
	let name=myData.value;
	name = capitalizeFirstLetter(name.toLowerCase())
	return pokemon
				.pokemon
					.find((val)=>val.name==name)
}
let weakSearch=()=>{
	let weakness=myData.value;
	weakness = capitalizeFirstLetter(weakness.toLowerCase())
	let pokes = 
			pokemon
				.pokemon
					.filter(
						(val)=>{
							return (
								val.weaknesses
									.find((value)=> value==weakness)
								)
	})
	makeData.innerHTML=`
		${pokes.map((res)=>res.name)}
	`
}
let checkNextEvolution=(pokeData)=>{
	return (
		pokeData
			.next_evolution!=undefined ?
				pokeData.next_evolution
					.map(
						(res)=>{
							return res.name
							}
						):'No Next Evolution'
					)
}
let checkPrevEvolution=(pokeData)=>{
	return (
		pokeData
			.prev_evolution!=undefined ?
				pokeData.prev_evolution.map(
					(res)=>{
						return res.name
					}
				):'No Prev Evolution'
			)
}
let nextEvol=()=>{
	let des=findPoke()
	makeData.innerHTML=`
		${ checkNextEvolution(des) }
	`
}
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
			WEAKNESSES : ${ des.weaknesses.map((res)=>{return res}) } <br>
			NEXT EVOLUTION : ${ checkNextEvolution(des) } <br>
			PREV EVOLUTION : ${ checkPrevEvolution(des) } <br>
		`
	}
}
selected();
