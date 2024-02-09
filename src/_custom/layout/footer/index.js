import QuickView from "../QuickView/QuickView";
import Top from "./FooterTop/Top";
import Battom from "./FooterBottom/Battom";
import Middel from "./FooterMiddel/Middel";

function index() {
    return ( <>
        <div class="footer">
                <Top/>
                <Battom/>
                <Middel/>
        </div>
        <QuickView/>
    </> );
}

export default index;