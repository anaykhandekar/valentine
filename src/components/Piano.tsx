import React from 'react';
import Key from './Key';
import { NOTES } from '../global/constants'
import _ from 'lodash'


interface PianoProps {
  onComplete: () => void;
}

const Piano: React.FC<PianoProps> = ({onComplete}) => {

    const [lastNotesPlayed, setLastNotesPlayed] = React.useState<string[]>([])

    const handleNotePlayed = (note: string) => {
        setLastNotesPlayed((prevNotes) => [note, ...prevNotes].slice(0,10))
    }

    const sequence = ['a', 'bf', 'a', 'g', 'a', 'a', 'a', 'c', 'd', 'c'];
    const hasSequence = _.isEqual(_.take(lastNotesPlayed, 10), sequence);
    if (hasSequence) {
        onComplete()
    }

    const styles = {
        display: 'flex',
        flexDirection: 'row',
    }

    const fnaf = new Audio(require('../audio/fnaf.mp3'))

    

    const keys = _.map(NOTES, (note, index) => {
        return (
            <Key
                key={index}
                note={note}
                onNotePlayed={handleNotePlayed}
            />
        )
    })

    
    

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={styles as React.CSSProperties}>
                {keys}
            </div>
            <button
                style={{ 
                    backgroundColor: 'red', 
                    color: 'white', 
                    borderRadius: '100%', 
                    marginLeft: '100px', 
                    border: '2px solid gold', 
                    boxShadow: '0 0 10px gold', 
                    cursor: 'pointer',
                    fontSize: '16px',
                    width: '100px',
                    height: '100px',
                    marginTop: '100px'
                }}
                onClick={() => { fnaf.play() }}
            >
                aurf
            </button>
        </div>
    );
}

export default Piano