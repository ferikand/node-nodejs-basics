import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)



const spawnChildProcess = async (args) => {
    // Write your code here
    async function makeFolderCopy() {
        const sourceDir = path.join(__dirname, 'files')
        const destDir = path.join(__dirname, 'files_copy')

        try {
            await fs.access(sourceDir)
        } catch (error) {
            throw new Error('FS operation failed')
        }

        try {
            await fs.access(destDir)
            throw new Error('FS operation failed')
        } catch (error) {
            if (error.code !== 'ENOENT') {
                throw error
            }
        }

        try {
            await fs.cp(sourceDir, destDir, { recursive: true, errorOnExist: true, force: false })
        } catch (error) {
            throw new Error('FS operation failed')
        }
    }

    makeFolderCopy().catch((error) => console.log(error.message))


}

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */)
