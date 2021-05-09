function cadastrar(usuarios, ...novosUsuarios) {
	let totalusuarios = [
		...usuarios,
		...novosUsuarios
	];	

	return console.log(totalusuarios);
}

let usuarios =["Lucas", "Joao"];
let novosUsuarios = cadastrar(usuarios, "Henrique", "Matheus");