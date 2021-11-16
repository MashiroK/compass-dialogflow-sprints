const baseURL = 'https://ragnarokapi.herokuapp.com/api/v1.0/monster/';

window.onload = changeMonster(baseURL + "1832"); //Ifrit

const searchBox =  document.getElementById('search__box');
const search =  document.getElementById('searchquery');
searchBox.addEventListener('submit', (e) => {
    e.preventDefault();
    changeMonster(baseURL + search.value);
})
const searchIcon =  document.getElementById('search__icon');
searchIcon.addEventListener('click', (e) => {
    console.log("click!");
    e.preventDefault();
    changeMonster(baseURL + search.value);
})


async function changeMonster(url) {
    clearData();
    fetch(url).then(res => res.json()).then(monster => {
        //document.getElementById("monster__name").innerHTML = monster.name; Simple but not scalable.

        function addData(index) {
            //Description Card (Name, ID, Drops, Maps) Implemented with data-attributes and editing innerHTML
            for (property in monster) {
                try {
                    if(property == document.querySelector(`[data-monster="${property}"]`).innerHTML) {
                        document.querySelector(`[data-monster="${property}"]`).innerHTML = monster[property];
                    } else {
                        for (index in monster[property]) {
                            //if(index == 0) { document.querySelector(`[data-monster="${property}"]`).innerHTML = ""}
                            for(desc in monster[property][index]) {
                                if(desc == "mapName") {
                                    document.querySelector(`[data-monster="${property}"]`).innerHTML += monster[property][index].mapName + "; ";
                                }
                                else if(desc == "name"){
                                    document.querySelector(`[data-monster="${property}"]`).innerHTML += monster[property][index].name + "; ";
                                }
                            }    
                        }
                    }
                } catch (error) {
                    console.log(error + " cardError");
                }
            }

            //Stats, Dmg, img: slight different approach from description card, creating new element instead of replacement
            for(property in monster) {

                try {
                    //console.log(`property: ${property}, monster[p]: ${monster[property]}`)
                    if(property == "stats") {
                        const block = document.querySelector(`[data-block="${property}"]`);
                        const stat = document.createElement('p');
                        stat.innerHTML = `
                            <p>Level: ${monster[property].level}</p>
                            <p>Hp: ${monster[property].hp}</p>
                            <p>Size: ${monster[property].size}</p>
                            <p>Race: ${monster[property].race}</p>
                        `
                        block.appendChild(stat);
                    } else if(property == "elementExtraDamage") {
                        const block = document.querySelector(`[data-block="${property}"]`);
                        const elementalDmg = document.createElement('div');
                        elementalDmg.classList.add("grid");
                        elementalDmg.innerHTML = `
                        <div>
                            <p>Neutral: ${monster[property].neutral}</p>
                            <p>Water: ${monster[property].water}</p>
                            <p>Earth: ${monster[property].earth}</p>
                            <p>Fire: ${monster[property].fire}</p>
                            <p>Wind: ${monster[property].wind}</p>
                        </div>
                        <div>
                            <p>Poison: ${monster[property].poison}</p>
                            <p>Holy: ${monster[property].holy}</p>
                            <p>Dark: ${monster[property].dark}</p>
                            <p>Ghost: ${monster[property].ghost}</p>
                            <p>Undead: ${monster[property].undead}</p>
                        </div>
                        `
                        block.appendChild(elementalDmg);
                    } else if(property == "gifUrl") {
                        const block = document.querySelector(`[data-block="${property}"]`);
                        const imgContainer = document.createElement('div');
                        imgContainer.classList.add("imgUrl");
                        imgContainer.innerHTML = `
                            <img src="${monster.gifUrl}" alt="${monster.name}">
                        `
                        block.appendChild(imgContainer);
                    }
                } catch (error) {
                    console.log(error + " statError");
                }
            }
        }

        if (monster.id == undefined) {
            document.getElementById("notfound").classList.remove("hidden")
        } else {
            document.getElementById("notfound").classList.add("hidden")
            addData();            
        }
    
    })
    
    function clearData() {
        document.querySelectorAll("[data-block=gifUrl").forEach(e => e.innerHTML = "");
        document.querySelector("[data-block=elementExtraDamage").innerHTML = "";
        document.querySelector("[data-block=stats").innerHTML = "";
        document.querySelector("[data-monster=drops").innerHTML = "";
        document.querySelector("[data-monster=spawnMaps").innerHTML = "";
        document.querySelector("[data-monster=name").innerHTML = "name";
        document.querySelector("[data-monster=id").innerHTML = "id";
    }
};

changeMonster(baseURL); 