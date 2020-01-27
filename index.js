'strict'





function generateDogsHtml(dogs){
let dogsHtml = dogs.message.map((dog,index)=> `<li>#${index+1}<img class="dog" src=${dog}></li>`);
    return dogsHtml;
}

function handleDogDisplay(dogs){
    console.log(dogs);
    $('.js-dog-list').html(generateDogsHtml(dogs));
    $('.js-display-container').show();
}


function getDogs(num){
    console.log(`"getDogs()" loaded with "${num}" passed in...`);

    const baseURL ='https://dog.ceo/api/breeds/image/random/'; 
    let url = baseURL+num;
    console.log(url);
    
    fetch(url)
    .then(res=> res.json())
    .then(resJSON=> {
        console.log(resJSON);
        handleDogDisplay(resJSON)
    })
    .catch(error=> console.log(error));
}


function watchForm(){
    console.log('"watchform()" active and watching for submission...');

    $('form').on('submit', e=> {
        let userInput = $(e.target).find('input').val();
        console.log(userInput);
        getDogs(userInput);
    })
}



function handleDogAPI(){
    console.log('DOM loaded, page is ready...');
    watchForm()
}



$(handleDogAPI);