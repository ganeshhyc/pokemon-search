var selected=()=>{
	let selectBy=document.getElementById("selectBy").value;
	if(selectBy=='pokeWeakness'){
		document.getElementById("data").placeholder="Weakness"
		document.getElementById("nameSearched").style.display="none"
		document.getElementById("weaknessSearched").style.display="block"
	}
	else{
		document.getElementById("data").placeholder="Pokemon Name"
		document.getElementById("weaknessSearched").style.display="none"
		document.getElementById("nameSearched").style.display="block"
	}
}
var findPoke=()=>{
	let name=document.getElementById('data').value;
	return pokemon.pokemon.find((val)=>{
		return val.name==name
	})
}
var weakSearch=()=>{
	let weakness=document.getElementById('data').value;
	let pokes = pokemon.pokemon.filter((val)=>{
		return val.weaknesses.find((value)=>{
			return value==weakness
		})
	})
	document.getElementById('makeData').innerHTML=`
		${pokes.map((res)=>res.name)}
	`
}
var checkNextEvolution=(pokeData)=>{
	return pokeData.next_evolution!=undefined ? pokeData.next_evolution.map((res)=>{return res.name}):'No Next Evolution'
}
var checkPrevEvolution=(pokeData)=>{
	return pokeData.prev_evolution!=undefined ? pokeData.prev_evolution.map((res)=>{return res.name}):'No Prev Evolution'
}
var nextEvol=()=>{
	let des=findPoke()
	document.getElementById('makeData').innerHTML=`
		${ checkNextEvolution(des) }
	`
}
var getInfo=()=>{
	let des=findPoke()
	if(des==undefined)
		document.getElementById('makeData').innerHTML="Pokemon not found!"
	else{
		document.getElementById('makeData').innerHTML=`
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
