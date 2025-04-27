// list.js - implement function that prints array of all filenames from files folder into console (if files folder doesn't exists Error with message FS operation failed must be thrown)

import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const filesPath = path.join(__dirname, "files")

const list = async () => {
  // Write your code here

  try {
    await fs.access(filesPath)
    const files = await fs.readdir(filesPath)
    files.forEach((file) => {
      console.log(file)
    })
  } catch (error) {
    throw new Error("FS operation failed")
  }
}

await list()
