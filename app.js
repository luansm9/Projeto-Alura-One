alert('Boas-vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random () * 3 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto o chute não for igual ao numero secreto 
while(chute != numeroSecreto){
    chute = prompt('Escolha um numero entre 1 e 100');
    //se o chute for igual ao numero secreto
if (chute == numeroSecreto) {
   break;
 } else {
     if (chute > numeroSecreto) {
         alert(`O número secreto é menor que ${chute}`)}
         else {
             alert (`O número secreto é maior que ${chute}`);
         }
     //tentativas = tentativas +1;
     tentativas++;
 }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' :  'tentativa';
alert(`Isso ai! Você acertou o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

//if (tentativas > 1){
//    alert(`Isso ai! Você acertou o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
//} else {
//    alert(`Isso ai! Você acertou o numero secreto ${numeroSecreto} com ${tentativas} tentativa`);
//}