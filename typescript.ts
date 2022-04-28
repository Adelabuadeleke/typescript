// const sum = (a : number, b : number) => {
//   return a + b;
// }

// const answer = sum(3, 5);
// console.log(answer);

// boolean
let isCool: boolean = true

// number
let age: number = 34

// string
let eyeColor: string = 'blue'
let favouriteQuote: string = `i'm not old im only ${age}`

// Array
let pets: string[] = [
  'cat',
  'dog',
]

let pets2: Array<string> = [
  'lion',
  'dragon',
  'zebra'
]

// Object
let wizard: object = {
  a: 'john'
}

// null and undefined

let meh: undefined = undefined
let noo: null = null

// Tuple
let basket:[string, number];
basket = ['basket', 5]

// Enum
enum Size {Small = 1, Medium = 2, Large = 3}
let sizeName: string = Size[2];
let sizeNameNum: number = Size.Small;

// Any - !!!!!!!! BE CAREFUL
let whatever: any = true;

// void
let sing = ()=>{
  console.log('when you see me come around...🎵')
}

// never
// never for function does not return anything.
let error = ():never => {
  throw Error('oooop!')
}

// Interface
interface RobotArmy {
  count: number,
  type: string,
  magic: string
}

let fightRobotArmy = (robots: RobotArmy) => {
  console.log('FIghT!')
}

let fightRobotArmyTwo = (robots: {count: number, type: string, magic: string}) => {
  console.log('FIghT!')
}

// Type Assertion
interface CatArmy {
  count: number,
  type: string,
  magic?: string
}

let dog = {} as CatArmy
dog.count

// Function
let fightRobotArmyTw = (robots: RobotArmy):void => {
  console.log('FIghT!')
}

let fightRobotArmyThr = (robots: {count: number, type: string, magic: string}) => {
  console.log('FIghT!')
  return 5;
}


// Classes

class Animal {
  sing: string = `lalalala`
  constructor(sound: string) {
    this.sing = sound
  }

  greet() {
    return `Hello ${this.sing}`
  }
}

let lion = new Animal('RAAAAAWR')

lion.sing

// Union
let confused: string | number | boolean = true

let x = 4;
