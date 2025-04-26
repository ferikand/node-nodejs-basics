import fs from 'node:fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const copy = async () => {
    // Write your code here 
    const sourceDir = path.join(__dirname, 'files')
    const destDir = path.join(__dirname, 'files_copy')

    try {
        await fs.access(sourceDir)
        try {
            await fs.access(destDir)
            throw new Error('FS operation failed')
        } catch (error) {
            if (error.code !== 'ENOENT') {
                throw new Error('FS operation failed')
            }
        }
        await fs.cp(sourceDir, destDir, { recursive: true, errorOnExist: true, force: false })
    } catch (error) {
        throw new Error('FS operation failed')
    }
}

await copy()
