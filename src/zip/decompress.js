//  implement function that decompresses archive.gz back to the fileToCompress.txt with same content as before compression using zlib and Streams API
import { createGunzip } from 'node:zlib'
import { createReadStream, createWriteStream } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { pipeline } from 'node:stream/promises'

const decompress = async () => {
    // Write your code here 
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const archivePath = path.join(__dirname, 'files', 'archive.gz')
    const filePath = path.join(__dirname, 'files', 'fileToCompress.txt')

    const readStream = createReadStream(archivePath)
    const gunzipStream = createGunzip()
    const writeStream = createWriteStream(filePath)

    try {
        await pipeline(readStream, gunzipStream, writeStream)
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.log(err.message)
        } else {
            console.error('Pipeline failed', err)
        }
    }
}

await decompress()