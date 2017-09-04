import React from 'react'

const Contact = function() {
    return(
        <div className="contacts-content">
            <div className="center-contacts-content">
                <div className="phone-container">
                    <p ><strong>Call today</strong> to reserve a unit...</p>
                    <p className="phone">903-757-5845</p>
                </div>
                <div>
                    
                    <p className="address">2000 Jahan Trail  Longview, TX  75604</p>
                    {/* <p className="address">2000 Jahan Trail</p>
                    <p className="address">Longview, TX  75604</p> */}
                </div>
                <div>
                    <p className="location">Located near McWhorter Park</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;