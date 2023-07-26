import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {GiHamburgerMenu} from 'react-icons/gi'
import {BiSolidUser} from 'react-icons/bi'
const Navbar = () => {
  return (
<>
<nav className="navbar navbar-expand-lg  " style={{background:'rgb(236, 222, 213)'}}>
  <div className="container-fluid">
    <GiHamburgerMenu className='mx-4 cursor-pointer' style={{cursor:'pointer'}} />  
    <a className="navbar-brand" href="#" style={{fontWeight:'bold'}}>KRITASUTRA Pvt. Ltd</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <a href="#" className="btn btn-none fw-bold " style={{color:'#7a6352'}} >
        <BiSolidUser className='mx-1'/>Login</a>
        <a href="#" className="btn btn-none fw-bold" style={{color:'#7a6352'}}>Get Started</a>
    </div>
 </div>
</nav>
</>
)
}

export default Navbar;