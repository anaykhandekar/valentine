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
        <div style={styles as React.CSSProperties}>
            {keys}
        </div>
    );
}

export default Piano