import React from "react"

function Card() {
    return (
        <div className="contacts">
            <div className="contact-card">
                <img src="http://placekitten.com/300/200" />
                <h3>Mr. Whiskerson</h3>
                <p>Phone: (212) 555-1234</p>
                <p>Email: mr.whiskaz@catnap.meow</p>
            </div>

            <div className="contact-card">
                <img src="http://placekitten.com/400/200" />
                <h3>Fluffykins</h3>
                <p>Phone: (212) 555-2345</p>
                <p>Email: fluff@me.com</p>
            </div>

            <div className="contact-card">
                <img src="http://placekitten.com/400/300" />
                <h3>Destroyer</h3>
                <p>Phone: (212) 555-3456</p>
                <p>Email: ofworlds@yahoo.com</p>
            </div>

            <div className="contact-card">
                <img src="http://placekitten.com/200/100" />
                <h3>Felix</h3>
                <p>Phone: (212) 555-4567</p>
                <p>Email: thecat@hotmail.com</p>
            </div>
        </div>
    )
}

export default Card