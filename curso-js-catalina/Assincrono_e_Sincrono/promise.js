// var  voceComprouOsProdutos = new Promise(function (resolve /*or reject*/) {
//     var products = ['Camisa','Sapato','Calca']

//     resolve(products)
// /* reject(products)*/
// })

// console.log(voceComprouOsProdutos)

//------------------------------- exemplo de espera ----------------------------



var  voceComprouOsProdutos = new Promise(function (resolve /*or reject*/) {
    setTimeout(function(){
        var products = ['Camisa','Sapato','Calca']
        resolve(products)
   }, 3000)  
})

voceComprouOsProdutos.then(function(products){
    console.log(products)
})

.catch(function (){
    console.log(error) //*--- se tiver o reject
})
