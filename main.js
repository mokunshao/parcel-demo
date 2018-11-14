import {name,hello} from './hey.js'
import name2 from './hey.js'
import {test} from './hey.js'
import fs from 'fs'
import './style.scss'

test()
name2()
name()
console.log(hello)

const txt = fs.readFileSync('test.txt', 'utf8')
console.log(txt)

let abcxyz = 'hello world'
console.log(abcxyz)

let [a,,b] = [1,2,3];
console.log([a,b])