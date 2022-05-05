export function multiplicarPor10(array) {
  const array10 = array.map((elemento) => {
    return elemento * 10
  });
  
  return array10;
}

export function soloPares(array) {
  const arrayPares = array.filter((elemento) => {
    return (elemento % 2 === 0)
  });
  
  return arrayPares;
}

export function moverALaDerecha(array) {
  const arrayDerecha = array.map((elemento,index,array) => {
    const valor = index > 0 ?
	                 array[index-1] :
					 array[array.length -1];
    return valor;
  });
  
  return arrayDerecha;
}

export function soloUnaPalabra(array) {
  const arrayUnaPalabra = array.filter((elemento) => {
    const regex = /[a-zA-Z]\s[a-zA-Z]/g;
	return (!regex.test(elemento));
  });
  
  return arrayUnaPalabra;
}

export function soloArraysPositivos(array) {
  const arraysPositivos = array.filter((elemento) => {
    const elementoPositivo = elemento.filter((num) => num > 0);
	
	return elementoPositivo.length === elemento.length;
  });
  
  return arraysPositivos;
}

export function soloVocales(array) {
  const arrayVocales = array.map((elemento) => {
    const elementoVocales = elemento.split('').filter((letra) => {
	  const regexVocal = /[aeiou]/g;
	  
	  return regexVocal.test(letra);
	}).join('');
	
	return elementoVocales;
  });
  
  return arrayVocales;
}

export function todasVocalesIguales(array) {
  const vocalesIguales = array.filter((palabra) => {
    const vocales = palabra.split('').filter((letra) => {
	  const regexVocal = /[aeiou]+/g;	  
	  return regexVocal.test(letra);
	});	
	const vocalesUnicas = vocales.filter((vocal,index,vocales) => {
	    return vocal === vocales[0];
	  });
    
	return vocalesUnicas.length === vocales.length;
  });
  
  return vocalesIguales;
}

export function duplicarMatriz(array) {
  const matrizDoble = array.map((fila) => {
    const filaDoble = fila.map((num) => num*2);
	
	return filaDoble;
  });
  
  return matrizDoble;
}

export function mayoresDeEdadValidados(array) {
  const arrayValidado = array.map((objeto) => {
    const validacion = objeto.edad > 18 ? true : false;
	
	return {...objeto, mayor: validacion};
  });
  
  return arrayValidado;
}

export function transformarObjetoEnArray(objeto) {
  const arrayObjetos = Object.entries(objeto).map((elemento) => {
    return {...elemento[1], id: elemento[0]}
  }); 

  return arrayObjetos
}