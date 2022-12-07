
//event listeners
document.querySelector('button').addEventListener('click', getPull)  //home
document.getElementById('getCard').addEventListener('click', getCard) //cardopedia
document.querySelector('.card-list').addEventListener('click', focusCard)//cardopedia


//home behavior
async function getPull(){
    try{
        const response = await fetch(`/pull`)
        const data = await response.json()

        document.getElementById('name').innerText = data.name
        document.getElementById('number').innerText = data.number
        document.getElementById('arcana').innerText = data.arcana

        if(data.element){
            document.getElementById('element').innerText = data.element
        } else {
            document.getElementById('element').innerText = ""
        }

        if(data.signs){
            document.getElementById('signs').innerText = data.signs
        } else {
            document.getElementById('signs').innerText = ""
        }
    } catch(error){
        console.log(error)
    }

    
}


//cardopedia 

//catalogue behavior
async function focusCard(){
    try {
        //const response = await fetch('');
        //const cardData = await response.json();

        let popUp = document.getElementById('popUpCard');
        popUp.classList.toggle('show');

        // the pop up works, but we need to import card data into it
 
        console.log("success")



    } catch(err) {
        console.log(err);
    }
}