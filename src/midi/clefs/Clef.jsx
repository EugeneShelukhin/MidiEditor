import BassClef from "./BassClef";
import TrebleClef from "./TrebleClef";

function Clef(props){
    if (props.type==='bass'){
        return <BassClef/>
    }
    else{
        return <TrebleClef/>
    }
}

export default Clef;