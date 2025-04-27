// implement function that reads data from process.stdin, reverses text using Transform Stream and then writes it into process.stdout
import { Transform } from 'node:stream'

const transform = async () => {
    // Write your code here 
    
    const reverseTransform = new Transform({
        transform(chunk, encoding, callback) {
            const reversedChunk = chunk.toString().split('').reverse().join('')
            callback(null, reversedChunk)
        }
    })

    process.stdin.pipe(reverseTransform).pipe(process.stdout)
};

await transform();