// implement function that compresses file fileToCompress.txt to archive.gz using zlib and Streams API
import { createGzip } from 'node:zlib'
import { createReadStream, createWriteStream } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { pipeline } from 'node:stream/promises'

const compress = async () => {
    // Write your code here 
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const filePath = path.join(__dirname, 'files', 'fileToCompress.txt')
    const archivePath = path.join(__dirname, 'files', 'archive.gz')

    const readStream = createReadStream(filePath)
    const gzipStream = createGzip()
    const writeStream = createWriteStream(archivePath)

    try {
        await pipeline(readStream, gzipStream, writeStream)
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.log(err.message)
        } else {
            console.error('Pipeline failed', err)
        }
    }
}

await compress()