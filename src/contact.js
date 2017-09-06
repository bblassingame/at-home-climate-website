import React from 'react'

const Contact = function() {
    return(
        <div className="contacts-content">
            <div className="center-contacts-content">
                <div className="phone-container">
                    <p className="call-today"><strong>Call today</strong> to reserve a unit...</p>
                    <p className="phone">
                        <span itemprop="telephone">
                            <a href="tel:+19037575845" rel="nofollow">903-757-5845</a>
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