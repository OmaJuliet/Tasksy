import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");

    const navigate = useNavigate();

    //set a state to handle errors when fields are not filled and submitted
    const [titleError, setTitleError] = useState(false);
    const [detailsError, setDetailsError] = useState(false);

    const [category, setCategory] = useState("personal");

    const handleSubmit = (e) => {
        e.preventDefault();

        //To reset the error value back to false afetr submitting
        setTitleError(false);
        setDetailsError(false);

        //if title field is empty, show error
        if (title == "") {
            setTitleError(true);
        }

        //if details field is empty, show error
        if (details == "") {
            setDetailsError(true);
            alert=("details field is empty")
        }

        //if both fields are filled and form is submitted, console log the value to the console
        if (title && details) {
            fetch('http://localhost:8000/notes', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ title, details, category })
            }).then(() => navigate('/'))
        }
    };

    return (
        <Container>
            <Typography
                variant="h6"
                component="h2"
                color="textSecondary"
                gutterBottom
            >
                Create a New Task
            </Typography>

            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    onChange={(e) => setTitle(e.target.value)}
                    label="Task title"
                    variant="outlined"
                    color="primary"
                    fullWidth
                    required
                    error={titleError}
                />

                <TextField
                    onChange={(e) => setDetails(e.target.value)}
                    label="Details"
                    variant="outlined"
                    color="primary"
                    multiline
                    rows={4}
                    fullWidth
                    required
                    error={detailsError}
                    sx={{ mt:3 }}
                />

                <FormControl sx={{ mt:2 }}>
                    <FormLabel>Task Category</FormLabel>
                    <RadioGroup
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <FormControlLabel value="personal" control={<Radio />} label="Personal"/>
                        <FormControlLabel value="work" control={<Radio />} label="Work" />
                        <FormControlLabel value="school" control={<Radio />} label="School" />
                    </RadioGroup>
                </FormControl>
                <br />

                <Button
                    color="primary"
                    variant="outlined"
                    type="submit"
                    endIcon={<SendIcon />}
                >
                    Submit
                </Button>
            </form>
        </Container>
    );
};

export default Create;
