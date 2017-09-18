import React from 'react'
import ReactGA from 'react-ga'

const Contact = function() {

    const logPhoneClick = () => {
        ReactGA.event(
            'Phone Link',
            'Click to Call'
        )
    }

    return(
        <div className="contacts-content">
            <div className="center-contacts-content">
                <div className="phone-container">
                    <p className="call-today"><strong>Call today</strong> to reserve a unit...</p>
                    <p className="phone">
                        <span itemProp="telephone">
                            <a href="tel:+19037575845" rel="nofollow" onClick={logPhoneClick}>903-757-5845</a>
                        </span>
                    </p>
                </div>
                <div>
                    <p className="address">2000 Jahan Trail, Longview TX  75604</p>
                </div>
                <div>
                    <p className="location">Located near McWhorter Park</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;