import React, { useEffect, useState } from 'react';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TaskCard from '../components/TaskCard';
import Masonry from 'react-masonry-css'


const Tasks = () => {

  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])


  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/notes/' + id, {
      method: 'DELETE'
    })

    const newNotes = notes.filter(note => note.id != id)
    setNotes(newNotes)
  }


  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };


  return (
    <>
      <Container>
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {notes.map(note => (
            <Grid key={note.id}>
              <TaskCard note={note} handleDelete={handleDelete} />
            </Grid>
          ))}
        </Masonry>
      </Container>
    </>
  )
}

export default Tasks