My first solution

`````javascript

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
`````

This was challenged by a mentor:
* toDnaArr - we redefine this every time the function is called
* there is a way to solve this without arrays, without indexes (and without string indexing either), and without using a loop

The only way I figured was to use regex:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace


I came up with this:
`````javascript

export const toRna = toDna => {

  const dnaToRna = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
  }

  return toDna.replace(/[GCTA]/gi, function (element) {
    return dnaToRna[element]
  })
}

`````

Breakdown:
* toDna.replace() | returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.
* /[GCTA]/gi | this is the regex. "g" global match (find all matches rather than stopping on the first match). "i" ignore case
* the function takes in the RegExp and matches it to the dnaToRna object