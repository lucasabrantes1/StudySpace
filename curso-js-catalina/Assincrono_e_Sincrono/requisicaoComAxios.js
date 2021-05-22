var button = document.querySelector('#app button')

button.addEventListener('click', function(){
    axios.get('https://api.github.com/users')
    .then(function (response){
        console.log(response.data[0].login) //quando tiver sucesso
    })
    .catch(function (error){
        console.log(error) //quando der ruim
    })
    .finally(function(){
        console.log('finalizou')
    })
})