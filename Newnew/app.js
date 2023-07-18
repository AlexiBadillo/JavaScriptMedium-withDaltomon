const sendButton = document.getElementById('snd-nota');
sendButton.addEventListener('click', () => {
  let resultado, mensaje;
  try {
    prevRes = parseInt(document.getElementById('nota').value);
    if (isNaN(prevRes)) {
      throw 'Gracioso';
    }
    resultado = verificarAprobacion(prevRes);
  } catch (e) {
    resultado = 'SOS GRACIOSO??';
    mensaje = 'He descubierto que estas tratando de hackear el sitio, wachin loko';
  }
  abrirModal(resultado, mensaje);
})

const verificarAprobacion = (pr)=> {
  let resultado;
  switch (pr) {
    case 1: resultado = 'No podes ser tan hdp';
    break;
    case 2:
    case 3: resultado = 'Muy mal';
    break;
    case 4:
    case 5: resultado = 'Mal';
    break;
    case 6:
    case 7: resultado = 'Regular';
    break;
    case 8:
    case 9: resultado = 'Bien';
    break;
    case 10: resultado = 'Todo Ok!';
    break;
    default: resultado = null;
  }
  return resultado;
}

const abrirModal = (res, msg) => {
  console.log(res);
  console.log(msg);
}