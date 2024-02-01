import React from 'react';
import { useState } from 'react';
import { noteAudioMap } from '../global/notes';

interface KeyProps {
    key: number;
    note: string;
    onNotePlayed: (note: string) => void;
}

const Key: React.FC<KeyProps> = ({note, onNotePlayed}) => {
    
    const [isActive, setIsActive] = useState(false)

    const blackChecker = (note: string): boolean => note.includes('f');

    const isKeyBlack = blackChecker(note);

    const playNote = () => {
        console.log(note, 'hi')
        const audioFile = noteAudioMap[note as keyof typeof noteAudioMap]
        const audio = new Audio(audioFile)
        audio.play()
        setIsActive(true)
        setTimeout(() => setIsActive(false), 100)
        onNotePlayed(note)
    }

    let keyStyle;

    if (isActive) {
        if (isKeyBlack) {
            keyStyle={ ...styles.keyBlackStyle, ...styles.activeKeyStyle}
        } else {
            keyStyle={ ...styles.keyStyle, ...styles.activeKeyStyle}
        }
    } else {
        if (isKeyBlack) {
            keyStyle={ ...styles.keyBlackStyle}
        } else {
            keyStyle={ ...styles.keyStyle}
        }
    }

    return (
        <div onClick={playNote} style={keyStyle}>
            {!isKeyBlack && <div style={styles.keyNoteChar}>{note.toUpperCase()}</div>}
        </div>
    )
}

const styles = {
    activeKeyStyle: {
        backgroundColor: '#FFB6C1'
    },
    keyStyle: {
        backgroundColor: 'white',
        height: '300px',
        width: '60px',
        border: '2px solid black', 
    },
    keyNoteChar: {
        position: 'relative' as const,
        color: 'black',
        fontWeight: 600,
        fontSize: '36px',
        marginTop: '240px',
        pointerEvents: 'none' as const,
    },
    keyBlackStyle: {
        position: 'relative' as const,
        backgroundColor: 'black',
        marginLeft: '-17px',
        marginRight: '-17px',
        height: '200px',
        width: '30px',
        zIndex: 2
    }
}

export default Key;
