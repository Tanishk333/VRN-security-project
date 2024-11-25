import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">VRN Security!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Chennai, Tamil Nadu Our advanced cybersecurity offerings are built on AI and cloud technologies, tailored to protect modern digital infrastructures.</p>
                <address className="public__addr">
                    VRN Security<br />
                    Chennai<br />
                   No.10,Jyothi Nagar <br />
                    <a href="tel:+15555555555">(+91) 95321875321</a>
                </address>
                <br />
                <p>Owner: VRN Security</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public