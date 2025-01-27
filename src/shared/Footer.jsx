import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import "../styles/Footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="info">
                <p style={{ textAlign: "center" }}>إنت المبدع!<br /> كل خطوة بتاخدها هنا بتقربك من المستقبل اللي بتحلم بيه!</p>
                <div className="shocial">
                </div>
            </div>
            <div className="copyRught">
                <p>© 2025 Mohamed Mohdy. All rights reserved.</p>
            </div>
        </footer>

    )
}

export default Footer
