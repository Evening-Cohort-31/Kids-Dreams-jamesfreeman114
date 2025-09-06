import { getChildren } from "./database.js"

const children = getChildren()


export const Kids = () => {

    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" 
                 data-type="child" 
                 data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
    const childClickEvent = clickEvent.target

    if (childClickEvent.dataset.type === "child") {
        let childId = childClickEvent.dataset.id

        for (const kid of children) {
            if (kid.id === parseInt(childId))

            
        window.alert(`${kid.name}'s wish is ${kid.wish}`)
        }    

    }
}
)