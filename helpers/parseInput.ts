export function parseInput(input: string) {
    return parseFloat(input.replace(',', '.').replace(/\s/g, ''));
}