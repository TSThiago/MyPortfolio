import Brazil from "../../assets/brazil.png"
import USA from "../../assets/usa.png"

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="languages">
                    <button><img src={Brazil} alt="Brazil Flag" /></button>
                    <button><img src={USA} alt="USA Flag" /></button>
                </div>
                <div className="links">
                    <a>About Me</a>
                    <a>Projects</a>
                    <a>Certifications</a>
                </div>
            </div>
        </>
    )
}

export default Header;