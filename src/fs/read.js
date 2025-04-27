// read.js - implement function that prints content of the fileToRead.txt into console (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)

import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const read = async () => {
  // Write your code here

  const __dirname = path.dirname(fileURLToPath(import.meta.url))
  const filePath = path.join(__dirname, "files", "fileToRead.txt")

  try {
    await fs.access(filePath)
    const fileContent = await fs.readFile(filePath, "utf-8")
    console.log(fileContent)
  } catch (error) {
    throw new Error("FS operation failed")
  }
}

await read()
