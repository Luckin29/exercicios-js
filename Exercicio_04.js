function retornaMes(numero) {
    meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
   if(numero <=12 && numero >0) {
    console.log("O mês é " + meses[numero-1])
   } else {
        console.log("Digite um mês entre 1 e 12")
   }
}

retornaMes((1))