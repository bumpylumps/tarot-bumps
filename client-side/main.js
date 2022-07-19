docoment.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    try{
        const response = await fetch(`http://localhost:8000/random`)
        const data = await response.json()

        document.getElementById('name').innerText = data.name
    } catch(error){
        console.log(error)
    }
}
    /*    
            <p id="name"></p>
     
            <p id="number"></p>
        
            <p id="arcana"></p>
       
            <p id="element"></p>
      
            <p id="signs"></p>
      
    */