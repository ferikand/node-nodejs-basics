import fs from 'node:fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const create = async () => {
    // Write your code here 

    const filePath = path.join(__dirname, 'files', 'fresh.txt')
    const content = 'I am fresh and young'

    try {
        await fs.writeFile(filePath, content, { flag: 'wx' })
    } catch (error) {
        console.error(error)
        throw new Error('FS operation failed')
    }

}

await create()