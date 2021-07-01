function remover(obj, prop) {
    let novo = obj 
    delete novo[prop]
 
    console.log(novo)

}

const cachorro = {
    late:  'Au',
    raca: 'Pinscher',
    vacina: 'ok'
}

remover(cachorro, "late")

