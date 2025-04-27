// read.js - implement function that reads file fileToRead.txt content using Readable Stream and prints it's content into process.stdout

import { createReadStream } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { access } from 'node:fs/promises'

const read = async () => {
    // Write your code here 
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt')

    try {
        await access(filePath)
        const stream = createReadStream(filePath, { encoding: 'utf-8' })
        for await (const chunk of stream) {
            process.stdout.write(chunk)
        }
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.log(err.message)
        }
    }
}

await read()