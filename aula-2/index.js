const listaLivros = require('./array');

function mergeSort(array, nivelAninhamento = 0){
    console.log(`nivel de aninhamento: ${nivelAninhamento}`)
    console.log(array)
    
    if(array.length > 1){
    
        const meio = Math.floor(array.length / 2);
                       //recursão
        const parte1 = mergeSort(array.slice(0, meio), nivelAninhamento++);
                       //recursão
        const parte2 = mergeSort(array.slice(meio, array.length), nivelAninhamento+1);

        array = ordena(parte1, parte2);
    }
    return array;
}

function ordena(parte1, parte2){
    let posicaoAtualParte1 = 0;
    let posicaoAtualParte2 = 0;
    const resultado = []

    while(posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length){
        let produtoAtualParte1 = parte1[posicaoAtualParte1]
        let pordutoAtualParte2 = parte2[posicaoAtualParte2]

        if (produtoAtualParte1.preco < pordutoAtualParte2.preco){
            resultado.push(produtoAtualParte1)
            posicaoAtualParte1++
        }else{
            resultado.push(pordutoAtualParte2)
            posicaoAtualParte2++
        }
    }
    return resultado.concat(posicaoAtualParte1 < parte1.length ? parte1.slice(posicaoAtualParte1) : parte2.slice(posicaoAtualParte2))
}

console.log(mergeSort(listaLivros))