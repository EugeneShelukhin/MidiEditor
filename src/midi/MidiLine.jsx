import './MidiLine.scss';
import Clef from './clefs/Clef';

function MidiLine(props){
    return (
        <div className='midi-line'>
            <Clef type={props.clef}/>
            <hr/><hr/><hr/><hr/><hr/>
        </div>
    )
}

export default MidiLine;