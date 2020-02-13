const saudacao = 'Opa' // contexto léxico 1

function exec(){
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

//Objetos sssão grupos aninhados de pares chave/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: 'Rua teste',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)