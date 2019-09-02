const dnaToRna = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
}

export const toRna = toDna => {

  return toDna.replace(/[GCTA]/gi, function (element) {
    return dnaToRna[element]
  })

}
