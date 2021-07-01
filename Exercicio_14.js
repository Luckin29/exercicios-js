var resultado = []
function retornaArray (obj, nome) {


    let a = []
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {

           resultado = [i, obj[i]]
           a.push(resultado)




        } 

         }
         console.log(a)

}

const Gato  = {
    raca: "persa",
    cor: "cinza",
    mia: "sim"

}

retornaArray(Gato, "Gato")




