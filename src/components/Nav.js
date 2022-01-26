import "../components/Nav.css"

function Header() {
    return (
        <div className="nav">
            <nav className="nav__menu menu">
                <h1 className="nav__title">Vinícius Staiguer</h1>
                <ul className="menu__list">
                    <li className="menu__links"><a className="menu__link" href="https://www.facebook.com/ViniciusStaiguer">Facebook</a></li>
                    <li className="menu__links"><a className="menu__link" href="https://www.instagram.com/vinistaiguer/">Instagram</a></li>
                    <li className="menu__links"><a className="menu__link" href="https://github.com/vinistaiguer">Github</a></li>
                    <li className="menu__links"><a className="menu__link" href="https://www.behance.net/gallery/134324167/Projeto-em-andamento-Meu-Primeiro-Squad?tracking_source=search_projects_recommended%7Cmeu%20primeiro%20squad">Behance</a></li>
                </ul>
            </nav>
        </div>    
    )
};

export default Header