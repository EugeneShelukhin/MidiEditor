import './MidiPage.scss'
import Line from './MidiLine';

function MidiPage(){
    return (<div>
<Line clef='treble'/>
<Line clef='bass'/>
<Line clef='treble'/>
<Line clef='bass'/>
<Line clef='treble'/>
    </div>)
}

export default MidiPage;