const prompt = require('prompt-sync')({siginit: true});
console.log('Há muito tempo, em uma galáxia muito, muito distante Luke Skywalker é um jovem fazendeiro entediado em um planeta distante ele é rapaz fascinado pelas estrelas que anseia por aventuras está preste a entrar emuma jornada que mudará sua vida para sempre')
console.log()
let respostas = [];
let pergunta1 = respostas.push(+prompt('Você encontrou um dois droids que estavam perdido? 1-Sim ou 2-Não: '));
let pergunta2 = respostas.push(+prompt('Conseguiu a ajuda  de um velho eremita? 1-Sim ou 0-Não: '));
let pergunta3 = respostas.push(+prompt('Conseguiu resgatar a princesa e os plantas da EStrela da Morte? 1-Sim ou 0-Não: '));
let pergunta4 = respostas.push(+prompt('Conseguiu convencer os rebeldes a fazer uma ofensiva contra o Império? 1-Sim ou 0-Não: '));
let pergunta5 = respostas.push(+prompt('Consegue destruir a Estrela da Morte e trazer esperança para a Galaxia? 1-Sim ou 0-Não: '));
let somar = (respostas[0]+respostas[1]+respostas[2]+respostas[3]+respostas[4]);
if (somar == 0){
    console.log('Luke falha miseravelmente')
}else if (somar = 1 || somar == 2){
    console.log('Luke falhou, mas ainda conseguiu ajudar a Aliança Rebelde')
}else if(somar == 3){
    console.log('Luke Consegue alcançar o objetivo, mas ainda falta pouca coisa')
}else if (somar == 4){
    console.log('Luke depois demuito esforço consegue seu objetivo mas não de forma perfeita')
}else if(somar ==5){
    console.log('Luke Skywalker triunfa de maneira inquestionável e vira uma lenda na galáxia')
}
