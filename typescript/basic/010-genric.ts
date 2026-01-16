const demo = (num: number): number => {
    return 0
}
//           👇 genric (think like it holds the datatype)
const fake = <T>(arg: T): T => {
    return arg
}

fake(10)
fake("10")
fake<boolean>(true)