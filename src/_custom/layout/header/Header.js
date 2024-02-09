import HeaderBottom from "./HeaderBottom";
import HeaderMiddel from "./HeaderMiddel";
import HeaderMobile from "./HeaderMobile";
import HeaderTop from "./HeaderTop";

function Header() {
    return (<>
        <header>
                <HeaderTop/>
                <HeaderMiddel/>
                <HeaderBottom/>
                <HeaderMobile/>
        </header> 
    </>);
}

export default Header;