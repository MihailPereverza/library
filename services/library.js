import fs from "fs";

const name = 'db/library.json'
let library = JSON.parse(fs.readFileSync(name).toString())

export const getLibrary = () => {
    return library
}

export const saveLibrary = () => {
    fs.writeFileSync(
        name,
        JSON.stringify(
            library,
            null,
            4
        ),
        'utf8'
    )
}
