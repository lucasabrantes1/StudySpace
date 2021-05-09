

const lista = [1,2,3,4,5,6];


const novalista = lista.map(function(item, index){
	return item + index;
});

console.log(novalista);

const soma = lista.reduce(function(total, proximo){
	return total + proximo;

})


const find = lista.find(function(item){
	return item === 6 ;
});

console.log(fin)