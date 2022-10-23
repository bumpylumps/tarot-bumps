document.querySelector('button').addEventListener('click', getPull)
document.getElementById('getCard').addEventListener('click', getCard)


async function getPull(){
    try{
        const response = await fetch(`/pull/single/`)
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



async function getCard(){


}


    /*    
            <p id="name"></p>
     
            <p id="number"></p>
        
            <p id="arcana"></p>
       
            <p id="element"></p>
      
            <p id="signs"></p>
      
    */