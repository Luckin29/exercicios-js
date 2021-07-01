function retornaNumero (a) {
    novo = [];
    for (i=0; i<a.length; i++) {

        if(!isNaN(a[i])) {
            novo.push(a[i])

        }

    }
         console.log(novo)
}


retornaNumero([1, 2, "b", 4, "kkkk", "jaca", 103232, 10, "um"])
