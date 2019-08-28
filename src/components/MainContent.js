import React from "react"
import TodoItem from './TodoItem'

function MainContent() {
    const firstName = "Bob"
    const lastName = "Ziroll"
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    const styles = {
        fontSize: 30
    }

    if (hours < 12) {
        timeOfDay = "morning"
        styles.color = "#04756F"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
        styles.color = "#2E0927"
    } else {
        timeOfDay = "night"
        styles.color = "#D90000"
    }


    return (
        <div>
            <h1>It is currently about {date.getHours() % 12} o'clock!</h1>
            <h1 style={styles}>Good {timeOfDay}</h1>
            <h1>Hello {firstName + " " + lastName}!</h1>
            <h1>Hello {`${firstName} ${lastName}`}!</h1>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
        </div>
    )
}

export default MainContent