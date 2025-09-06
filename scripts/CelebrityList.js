import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}


document.addEventListener(
    "click",
    (clickEvent) => {
    const celebrityClickEvent = clickEvent.target

    if (celebrityClickEvent.dataset.type === "celebrity") {
        const celebrityId = celebrityClickEvent.dataset.id

        for (const celebrity of celebrities) {
            if (celebrity.id === parseInt(celebrityId))

            
        window.alert(`${celebrity.name} is a ${celebrity.sport} star.`)
        }    

    }
}
)