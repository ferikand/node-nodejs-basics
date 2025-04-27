// calcHash.js - implement function that calculates SHA256 hash for file fileToCalculateHashFor.txt and logs it into console as hex using Streams API

import { createHash } from 'node:crypto'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { access } from 'node:fs/promises'
import { createReadStream } from 'node:fs'
import { error } from 'node:console'

const calculateHash = async () => {
    // Write your code here 
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt')

    try {
        await access(filePath)

        const hash = createHash('sha256')
        const stream = createReadStream(filePath)

        for await (const chunk of stream) {
            hash.update(chunk)
        }

        const res = hash.digest('hex')
        console.log(res)
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.log(error.message)
        }
    }
}

await calculateHash()