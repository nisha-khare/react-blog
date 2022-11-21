import { Fragment } from "react";
import { Footer } from "../../component/footer";
import { Header } from "../../component/header";
const Layout = (props) => {
    return (
        <Fragment>
            <Header />
            <div className="main-wrapper">
                {props.children}
                <Footer />
            </div>
        </Fragment>
    )
}
export default Layout;