import hey from './hey.js'
import fs from 'fs'
import './style.scss'

hey();

const txt = fs.readFileSync('test.txt', 'utf8')
console.log(txt)

let abcxyz = 'hello world'
console.log(abcxyz)

let [a,,b] = [1,2,3];
console.log([a,b])