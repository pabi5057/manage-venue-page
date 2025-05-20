import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  FormControl,
} from '@mui/material';
import { venueData } from '../../data';


export default function AddVenueModal({open,handleClose}) {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [type, setType] = useState('Active');
  const [address, setAddress] = useState('');


  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      title,
      image,
      type,
      address,
    });
    const data={
      title,
      image,
      type,
      address,
    }
    venueData.push(data);
    setTitle("");
    setImage("");
    setType("");
    setAddress("");
    handleClose();
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Add Venue</DialogTitle>
        <DialogContent>
          <form id="add-venue-form" onSubmit={handleSubmit}>
            <TextField
              margin="dense"
              label="Title"
              type="text"
              fullWidth
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Button
              variant="outlined"
              component="label"
              sx={{ mt: 2 }}
            >
              Upload Image
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageChange}
              />
            </Button>
            {image && <p>{image.name}</p>}
            <FormControl component="fieldset" sx={{ mt: 2 }}>
              <FormLabel component="legend">Type</FormLabel>
              <RadioGroup
                row
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <FormControlLabel value="Active" control={<Radio />} label="Active" />
                <FormControlLabel value="Inactive" control={<Radio />} label="Inactive" />
              </RadioGroup>
            </FormControl>
            <TextField
              margin="dense"
              label="Address"
              type="text"
              fullWidth
              multiline
              minRows={3}
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              sx={{ mt: 2 }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" form="add-venue-form" variant="contained" color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

