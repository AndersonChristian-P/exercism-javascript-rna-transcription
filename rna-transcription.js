export const toRna = toDna => {

  const dnaToRna = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
  }

  return toDna.replace(/[GCTA]/gi, function (transcribe) {
    return dnaToRna[transcribe]
  })
}
