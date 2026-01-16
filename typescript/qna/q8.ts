let names: string[] = ["John", "Ross"];

function printNames(list: string[]) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].toUpperCase());
    }
}

printNames(names)
