import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';


function ServerForm({ onSubmit }) {
  const [formData, setFormData] = useState({ id: '', name: '', language: '', framework: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ id: '', name: '', language: '', framework: '' });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <TextField
              type="text"
              name="id"
              label="ID"
              variant="outlined"
              value={formData.id}
              onChange={handleInputChange}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              type="text"
              name="name"
              label="Name"
              variant="outlined"
              value={formData.name}
              onChange={handleInputChange}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              type="text"
              name="language"
              label="Language"
              variant="outlined"
              value={formData.language}
              onChange={handleInputChange}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              type="text"
              name="framework"
              label="Framework"
              variant="outlined"
              value={formData.framework}
              onChange={handleInputChange}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={2}>
            <Button variant="outlined" color="secondary" type="submit">
              Create
            </Button>
          </Grid>
        </Grid>
      </form>
      <br /> {/* Line break */}
    </div>
  );
}

export default ServerForm;