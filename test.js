
'use strict'

const changeSkinTone = require('./index')

const str = `BOLO 🙋‍♂️ 🙋 🙋‍♀️ 👩‍💻 🧑‍💻 👨‍💻 🤙 😬 YOLO`
const expectedResult = `BOLO 🙋🏼‍♂️ 🙋🏼 🙋🏼‍♀️ 👩🏼‍💻 🧑🏼‍💻 👨🏼‍💻 🤙🏼 😬 YOLO`

const result = changeSkinTone(str, 'white')

if (result !== expectedResult) {
  console.log(`
    Failure 😱

    Expected: ${ expectedResult }

    To Match: ${ result }
  `)
} else {
  console.log('Success 🤙')
}
