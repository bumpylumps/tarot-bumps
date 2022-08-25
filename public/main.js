document.querySelector('button').addEventListener('click', getPull)

async function getPull(){
    try{
        const response = await fetch(`/pull/single/`)
        const data = await response.json()

        document.getElementById('name').innerText = data.name
        document.getElementById('number').innerText = data.number
        document.getElementById('arcana').innerText = data.arcana
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