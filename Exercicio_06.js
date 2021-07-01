
function inverter(x) {
    let tipo = typeof(x)

    if(typeof(x) == "boolean") {
    console.log(!(x))

} else if (typeof(x) == "number") {
    console.log((-x))
}else {console.log("Booleano ou número esperados, mas o parâmetro é do tipo " + tipo)}

}
inverter("kkkk")
