import React from "react"

function MainContent() {
    const firstName = "Bob"
    const lastName = "Ziroll"
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }

    const styles = {
        color: "#FF8C00",
        backgroundColor: "#FF2D00"
    }

    return (
        <div>
            <h1>It is currently about {date.getHours() % 12} o'clock!</h1>
            <h1 style={styles}>Good {timeOfDay}</h1>
            <h1>Hello {firstName + " " + lastName}!</h1>
            <h1>Hello {`${firstName} ${lastName}`}!</h1>
            <input type="checkbox" />
            <p>Placeholder text here</p>

            <input type="checkbox" />
            <p>Placeholder text here</p>

            <input type="checkbox" />
            <p>Placeholder text here</p>

            <input type="checkbox" />
            <p>Placeholder text here</p>
        </div>
    )
}

export default MainContent