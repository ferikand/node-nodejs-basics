// implement function that writes process.stdin data into file fileToWrite.txt content using Writable Stream
import { createWriteStream } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const write = async () => {
    // Write your code here 
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const filePath = path.join(__dirname, 'files', 'fileToWrite.txt')

    try {
        const stream = createWriteStream(filePath, { flags: 'a' })
        process.stdin.pipe(stream)
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.log(err.message)
        }
    }
}

await write()