// You should refactor file (you can add additional imports if needed)cjsToEsm.cjs - rewrite it to it's equivalent in ECMAScript notation (and rename it to esm.mjs)

import path from "path"
import { release, version } from "os"
import { createServer } from "http"
import "./files/c.cjs"

const random = Math.random()

let unknownObject

if (random > 0.5) {
  unknownObject = await import("./files/a.json", { assert: { type: "json" } })
} else {
  unknownObject = await import("./files/b.json", { assert: { type: "json" } })
}

unknownObject = unknownObject.default

console.log(`Release ${release()}`)
console.log(`Version ${version()}`)
console.log(`Path segment separator is "${path.sep}"`)

const __filename = new URL(import.meta.url).pathname
const __dirname = path.dirname(__filename)

console.log(`Path to current file is ${__filename}`)
console.log(`Path to current directory is ${__dirname}`)

const myServer = createServer((_, res) => {
  res.end("Request accepted")
})

const PORT = 3000

console.log(unknownObject)

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
  console.log("To terminate it, use Ctrl+C combination")
})

export { unknownObject, myServer }
