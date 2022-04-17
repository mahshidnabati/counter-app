//stateless functional component
const NavBar = (props) => {
    return ( 

        <nav className="navbar navbar-loght bg-light">
                <a href="test.html" className="navbar-brand">
                    Navbar{" "}
                    <span>
                        {props.totalCounters}
                    
                    </span>
                </a>
            </nav>
                );
}
 
export default NavBar;
