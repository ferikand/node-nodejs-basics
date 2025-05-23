// args.js - implement function that parses command line arguments (given in format --propName value --prop2Name value2, you don't need to validate it) and prints them to the console in the format propName is value, prop2Name is value2

const parseArgs = () => {
  // Write your code here
  const args = process.argv.slice(2)
  for (let i = 0; i < args.length; i += 2) {
    const key = args[i].replace(/^--/, "")
    const value = args[i + 1]
    console.log(`${key} is ${value}`)
  }
}

parseArgs()
