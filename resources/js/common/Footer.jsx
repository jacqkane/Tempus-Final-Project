import Logout from "../homepage/Logout";
import "/resources/scss/common/Footer.scss";

export default function Footer() {
    return (
        <footer className="footer">
            <h3>Contact Information</h3>
            <div className="footer-content">
                <p>
                    <strong>Phone:</strong>{" "}
                    <a href="tel:+420123456789">+420 123 456 789</a>
                </p>
                <p>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:info@tempus.com">info@tempus.com</a>
                </p>
                <p>
                    <strong>Address:</strong> Street 123, Prague 1, 110 00
                </p>
                <p>
                    <strong>Business ID (IČO):</strong> 12345678
                </p>
                <p>
                    <strong>Tax ID (DIČ):</strong> CZ12345678
                </p>
            </div>
            <div className="footer-text">
                <p>© 2024 Tempus. All rights reserved.</p>
            </div>
        </footer>
    );
}
