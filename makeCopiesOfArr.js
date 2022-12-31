export default function makeCopiesOfArr(...args) {
 return args.map(arr => [...arr])
}
