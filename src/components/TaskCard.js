import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { IconButton, Typography } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Avatar from '@mui/material/Avatar';



const TaskCard = ({ note, handleDelete }) => {
    return (
        <div>
            <Card elevation={3}>
                <CardHeader
                  avatar={
                    <Avatar>{note.category[0].toUpperCase()}</Avatar>
                  }
                    action={
                        <IconButton onClick={() => handleDelete(note.id)}>
                            <DeleteOutlineIcon />
                        </IconButton>
                    }
                    title={note.title}
                    subheader={note.category}
                />

                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default TaskCard