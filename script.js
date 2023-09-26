let searchButton = document.getElementById("searchButton");
let countryName = document.getElementById("countryName");

searchButton.addEventListener("click", () =>{
    let countryInput = countryName.value; 
    let finalURL = `https://restcountries.com/v3.1/name/${countryInput}?fullText=true`;
    // console.log(finalURL);
    fetch(finalURL)
        .then((response) => response.json())
        .then((data) => {
            /*getting info from server*/
            // console.log(data[0]);
            // console.log(data[0].capital[0]);
            // console.log(data[0].flags.svg);
            // console.log(data[0].name.common);
            // console.log(data[0].continents[0]);
            // console.log(Object.keys(data[0].currencies)[0]);
            // console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
            // console.log(Object.values(data[0].languages).toString().split(",").join(", "));
            result.innerHTML = `
                <img src="${data[0].flags.svg}" class="flagImg">
                <h2>${data[0].name.common}</h2>
                
                <div class="wrapper"> 
                    <div class="data">
                        <h4>Capital:</h4>
                        <span>${data[0].capital[0]}</span>
                    </div>
                </div>

                <div class="wrapper"> 
                    <div class="data">
                        <h4>Continent:</h4>
                        <span>${data[0].continents[0]}</span>
                    </div>
                </div>

                <div class="wrapper"> 
                    <div class="data">
                        <h4>Population:</h4>
                        <span>${data[0].population}</span>
                    </div>
                </div>

                <div class="wrapper"> 
                    <div class="data">
                        <h4>Currency:</h4>
                        <span>
                            ${data[0].currencies[Object.keys(data[0].currencies)].name} 
                            - ${Object.keys(data[0].currencies)[0]}
                        </span>
                    </div>
                </div>

                <div class="wrapper"> 
                    <div class="data">
                        <h4>Common languages:</h4>
                        <span>
                            ${Object.values(data[0].languages).toString().split(",").join(", ")}
                        </span>
                    </div>
                </div>
            `;
        }).catch(()=>{
            if(countryInput.length == 0) {
                result.innerHTML = `<h3>The input field cannot be empty</h3>`
            } else {
                result.innerHTML = `<h3>Please enter a valid country name.</h3>`
            }
        })
});