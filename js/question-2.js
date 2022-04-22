const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=649658d73f7e472a876361aac6109d43";

const gamesContainer = document.querySelector(".gamesSection");

async function games() {

    try {
        const response = await fetch(url);
    
        const products = await response.json();
    
        const gameInfo = products.results;
    
        gamesContainer.innerHTML = "";
    
        for (let i = 0; i < gameInfo.length; i++) {
            
            console.log(gameInfo[i].name);
            console.log(gameInfo[i].rating);
            console.log(gameInfo[i].tags.length);
            
            if(i === 8) {
                break;
            }
    
            gamesContainer.innerHTML += `<div class="container">
            <h2>Name of game: ${gameInfo[i].name} </h2>
            <p>Game rating: ${gameInfo[i].rating} </p>
            <p>Number of tags: ${gameInfo[i].tags.length} </p>
            </div>`
        }
    }
        
    catch(error) {
        console.log("Error occured");
        gamesContainer.innerHTML = `<div class="error">Ups! An error has occured.</div>`;

    }
}

games();