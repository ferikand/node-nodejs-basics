import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function createFileIfNotExist(params) {
    const filePath = path.join(__dirname, 'fresh.txt')
    const fileContent = 'I am fresh and young'

    try {
        await fs.access(filePath)
        throw new Error('FS operation failed')
    } catch (error) {
        if (error.code !== 'ENOENT') {
            throw error
        }
    }

    try {
        await fs.writeFile(filePath, fileContent, { flag: 'wx' })
        console.log(`File ${filePath} created successfully`)
    } catch (error) {
        throw new Error(`FS operation failed: Error writing to file - ${error.message}`)
    }
}

createFileIfNotExist().catch((error) => console.log(error.message))



const args = process.argv.slice(2)

console.log(`Total number of arguments is ${args.length}`)
console.log(`Arguments: ${JSON.stringify(args)}`)

const echoInput = (chunk) => {
    const chunkStringified = chunk.toString()
    if (chunkStringified.includes('CLOSE')) process.exit(0)
    process.stdout.write(`Received from master process: ${chunk.toString()}\n`)
}

process.stdin.on('data', echoInput)
