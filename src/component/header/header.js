import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className="navigation">
                <div className="header-top ">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-2 col-md-4">
                                <div className="header-top-socials text-center text-lg-left text-md-left">
                                </div>
                            </div>
                            <div className="col-lg-10 col-md-8 text-center text-lg-right text-md-right">
                                <div className="header-top-info">
                                    <a href="tel:+23-345-67890">
                                        Call Us : <span>+23-345-67890</span>
                                    </a>
                                    <a href="mailto:support@gmail.com">
                                        <i className="fa fa-envelope mr-2" />
                                        <span>support@gmail.com</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg  py-4" id="navbar">
                    <div className="container">
                        <a className="navbar-brand" href="index.html">
                            Darwin<span>Blog</span>
                        </a>
                        <button
                            className="navbar-toggler collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarsExample09"
                            aria-controls="navbarsExample09"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="fa fa-bars" />
                        </button>
                        <div
                            className="collapse navbar-collapse text-center"
                            id="navbarsExample09"
                        >
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to={'/'}>
                                        Home <span className="sr-only">(current)</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/about'>
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/contact'>
                                        Contact
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/blog'>
                                        Blog
                                    </Link>
                                </li>
                            </ul>
                            <form className="form-lg-inline my-2 my-md-0 ml-lg-4 text-center">
                                <a
                                    href="contact.html"
                                    className="btn btn-solid-border btn-round-full"
                                >
                                    Get a Quote
                                </a>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
export default Header;