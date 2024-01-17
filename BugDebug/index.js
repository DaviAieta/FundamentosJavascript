const bugNum = () =>{
    try{
        const numero = '123'

        debugger
    
        if(numero === 123){
            return true
        }
    } catch(error){
        throw new Error
    }

}

debugger
console.log(bugNum())