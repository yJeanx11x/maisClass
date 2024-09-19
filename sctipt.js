// mais sobre class
class SmartPhone {
        constructor(nome,modelo,cor){
                this.nome=nome;
                this.modelo=modelo
                this.cor=cor
                this.notificacao=''
        }
        notificacao1(qtd){
                console.log(`Você Recebeu uma SMS ${qtd} não lidos`)
               this.notificacao +=`${qtd}`
        }
}
const t1=new SmartPhone('Poco M3','Xiaomi','Azul')
t1.notificacao1(8)
console.log(t1)
