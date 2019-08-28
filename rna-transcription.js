export const toRna = toDna => {

  const dnaToRna = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
  }

  const toDnaArr = toDna.toUpperCase().split('')

  const transcribe = toDnaArr.map(element => {
    return dnaToRna[element]
  })

  const transcription = transcribe.join('')

  return transcription
}
