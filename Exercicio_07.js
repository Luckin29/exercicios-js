function comparar(numero, minimo, maximo, inclusivo) {
    x = inclusivo
    if(x != true) {
        if(numero > minimo && numero < maximo) {
            console.log("true")
        } else{
            console.log("false")}


        } else {
            if(numero == minimo || numero == maximo) {
                console.log("É IGUAL CARAI")

            } else { console.log("E diferente carai")}
            

        
}
    }



comparar(10,10,50,true)