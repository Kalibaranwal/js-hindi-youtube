//Array ke andar Array
const krit_heroes=["mrithunjay","skhota","skbaranwal","droy"]
const krish_heroes=["krit","krish","sulabh","hraman"]
krit_heroes.push(krish_heroes)  
console.log(krit_heroes)

const allHero=krit_heroes.concat(krish_heroes)
console.log(allHero)

const meHero=[...krit_heroes,...krish_heroes]
console.log(meHero)

// ek hi bracket ke andr array jaisa likhega ye 
const anotherArray=[1,2,3,[4,6,8],97,7,[5,0]]
const anotherNewArray=anotherArray.flat(Infinity)
console.log(anotherNewArray)

//string ko array bana dega
console.log(Array.from("KALI"))
console.log(Array.isArray("kali"))  // give false Kali@1181@56

// isme batayega ki keys ya value ka array banau isliye empty array dega -> []
// it is interesting for interviews
console.log(Array.from({name:"kali"}))

// value ko array banao
let score=100
let score2=400
let score3=500
console.log(Array.of(score,score2,score3))
