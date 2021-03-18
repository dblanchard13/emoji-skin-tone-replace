#### Installation

```
yarn add emoji-skin-tone-replace
```

OR

```
npm install emoji-skin-tone-replace
```

#### Usage


```
const changeEmojiSkinTone = require('emojji-skin-tone-replace')

const str = `YEET 🙋‍♂️ 🙋 🙋‍♀️ 👩‍💻 🧑‍💻 👨‍💻 🤙 😬 YOLO`
const expectedResult = `YEET 🙋🏼‍♂️ 🙋🏼 🙋🏼‍♀️ 👩🏼‍💻 🧑🏼‍💻 👨🏼‍💻 🤙🏼 😬 YOLO`

const result = changeEmojiSkinTone(str, 'white')
// YEET 🙋🏼‍♂️ 🙋🏼 🙋🏼‍♀️ 👩🏼‍💻 🧑🏼‍💻 👨🏼‍💻 🤙🏼 😬 YOLO

```
