import { SaveOutlined } from "@mui/icons-material";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";

export const NoteView = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      sx={{ mb: 1 }}
    >
      <Grid>
        <Typography fontSize={39} fontWeight="light">
          05 de junio de 2025
        </Typography>
      </Grid>

      <Grid>
        <Button color="primary" sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container size={12}>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          sx={{ border: "none", mb: 1 }}
          label="Título"
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="Qué sucedió en el día de hoy?"
          minRows={5}
        />
      </Grid>
      <ImageGallery />
    </Grid>
  );
};
