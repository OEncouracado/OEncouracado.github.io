var anoFundacao = '1989'
var data = new Date();
var ano = data.getFullYear();       // 4 dígitos
var result = (ano) - (anoFundacao);

document.getElementById("idade").innerHTML = (result)
