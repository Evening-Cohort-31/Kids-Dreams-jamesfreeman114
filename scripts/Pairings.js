import { getChildren, getCelebrities } from "./database.js"

const kids = getChildren()
const celebrities = getCelebrities()


const findCelebrityMatch = (kid, celebrities) => {
    let celebrityMatch = null

    for (const celebrity of celebrities) {
        if (kid.celebrityId === celebrity.id)
            celebrityMatch = celebrity
        

    }

    return celebrityMatch
}


 


export const Pairings = () => {
    let html = ""
    html += "<ul>"

    for (const kid of kids) {
            
        
        let kidsStar = findCelebrityMatch(kid, celebrities)
        html += `
            <li>
                ${kid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star, by ${kid.wish}
            </li>
        `
    }


    html += "</ul>"

    return html
}

