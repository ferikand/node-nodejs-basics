import fs from 'node:fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const rename = async () => {
    // Write your code here 
    const oldFileName = 'wrongFilename.txt'
    const newFileName = 'properFilename.md'

    const oldFilePath = path.join(__dirname, 'files', oldFileName)
    const newFilePath = path.join(__dirname, 'files', newFileName)

    try {
        await fs.access(oldFilePath)
    } catch (err) {
        throw new Error('FS operation failed')
    }

    try {
        await fs.access(newFilePath)
        throw new Error('FS operation failed')
    } catch (err) {
        if (err.code !== 'ENOENT') {
            throw new Error('FS operation failed')
        }
    }

    try {
        await fs.rename(oldFilePath, newFilePath)
    } catch (err) {
        throw new Error('FS operation failed')
    }
}

await rename()