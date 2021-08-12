import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import { useDispatch } from 'react-redux';
import { AddItemForm } from '../../components/AddItemForm/AddItemForm';
import { UserNote } from './Note/UserNote';
import { addNote, NotesType } from './notesReducer';
import s from './UserNotes.module.css'

type UserNotesPropsType = {
    userNote: NotesType[]
    userId: number
}

export const UserNotes: React.FC<UserNotesPropsType> = ({ userNote, userId }) => {
    const dispatch = useDispatch()
    const onAddNote = (title: string) => {
        dispatch(addNote(userId, title))
    }
    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <b className={s.title}>Заметки</b>
                <AddItemForm addItem={onAddNote} />
            </div>
            <div className={s.noteItems}>
            
                    {
                        userNote.map(n => {
                            // return <Paper key={n.id} style={{ padding: '10px' }}>
                            return <UserNote
                                key={n.id}
                                userId={userId}
                                noteId={n.id}
                                title={n.title}
                                text={n.text}
                            />
                            // </Paper>
                        })
                    }
            

            </div>
        </div>
    )
}