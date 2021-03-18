
'use strict'

const XRegExp = require('xregexp')
const allEmojis = require('./emojis')
const tones = [ 'paleWhite', 'white', 'lightBrown', 'brown', 'black' ]

module.exports = function changeSkinTone(str, tone) {
  if (!tones.includes(tone)) {
    throw new Error(`Invalid tone specified: ${ tone }. Choose one of: ${ tones.join(', ') }`)
  }
  const reg = XRegExp('(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*', 'g')
  return XRegExp.replace(str, reg, function(match) {
    const encodedMatch = encodeURIComponent(match)

    let gender
    const emoji = allEmojis.find(e => {
      if (encodeURIComponent(e.neutral) === encodedMatch) return true
      if (e.genders) {
        if (encodeURIComponent(e.genders.male.neutral) === encodedMatch) {
          gender = 'male'
          return true
        }
        if (encodeURIComponent(e.genders.female.neutral) === encodedMatch) {
          gender = 'female'
          return true
        }
      }
    })

    if (!emoji) return match
    if (gender) return emoji.genders[gender][tone]
    return emoji[tone]
  })
}

