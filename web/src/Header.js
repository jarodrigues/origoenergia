import React from 'react'; 
import { Link} from 'react-router-dom';
import logo from './assets/img/logo-origo.svg';
 const Header = () => {
    const container = {
       
    };
    const pStyle = {
        padding: '40px',
        marginBottom: '30px!important',
        backgroundColor: '#fff',
        width: '100%',
        zIndex: 101,
        top: 0,
        boxShadow: '0 2px 5px 0px #00000014',
        /* -webkit-box-shadow: 0 2px 5px 0px #00000014; */
        MozBoxShadow: '0 2px 5px 0px #00000014'
      };
    const stLink = {
        color: '#FFF',
        fontSize: '20px',
        backgroundColor: '#822b7d',
        marginRight: '20px'
    }
    
    return(
        
            <header className="" style={pStyle}>
                <div className="container d-flex flex-column flex-md-row justify-content-between">
                    <Link className="logoPrincipalLink" to="/">
                        <img src={logo} alt="Órigo Energia" title="Órigo Energia" className="d-block" style={{ width: '137px', height: '45px'}}/>
                    </Link>
                    <nav className="my-2 my-md-0 mr-md-3">
                        <Link className="btn py-2 d-none d-md-inline-block" style={stLink} to="/">Dashboard</Link>
                        <Link className="btn py-2 d-none d-md-inline-block" style={stLink} to="/clients">Clientes</Link>
                    </nav>
                </div>
            </header>
        
    );
}


export default Header;
