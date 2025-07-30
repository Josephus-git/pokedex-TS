export function cleanInput(input: string): string[] {
    const textList = input.toLowerCase().split(" ");
    const result: string[] = [];
    for (let word of textList) {
        if (word === '') {
            continue
        }
        result.push(word)
    }
    return result
}