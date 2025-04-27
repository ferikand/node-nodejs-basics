import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const remove = async () => {
  // Write your code here
  const filePathtoDelete = path.join(__dirname, "files", "fileToRemove.txt")

  try {
    await fs.access(filePathtoDelete)
    await fs.rm(filePathtoDelete)
  } catch (error) {
    throw new Error("FS operation failed")
  }
}

await remove()
