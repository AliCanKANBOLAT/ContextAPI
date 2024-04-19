import { Link, NavLink } from "react-router-dom"

export default function Navbar (props) {
    return(
       <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link active" aria-current="page" to="/">Anasayfa</NavLink>
        <NavLink className="nav-link" to="/hakkimizda">Hakkimizda</NavLink>
        <NavLink className="nav-link" to="/iletisim">İletisim</NavLink>
         </div>
        </div>
     </div>
    </nav>
    )
}