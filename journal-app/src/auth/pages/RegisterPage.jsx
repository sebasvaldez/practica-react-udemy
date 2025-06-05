import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <form>
        <Grid container>
          <Grid size={{ xs: 12 }}>
            <TextField
              label="Nombre"
              type="text"
              placeholder="Tu Nombre Completo"
              fullWidth
            />
            <TextField
              label="Correo"
              type="email"
              placeholder="tucorreo@correo.com"
              fullWidth
              sx={{ marginTop: 2 }}
            />
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              sx={{ marginTop: 2 }}
            />
          </Grid>

          <Grid container spacing={2} sx={{ marginTop: 2 }} size={{ xs: 12 }}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Button variant="contained" fullWidth>
                Crear cuenta
              </Button>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Button variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="end"
            size={{ xs: 12 }}
            sx={{ mt: 1 }}
          >
            <Typography
            sx={{ mr: 1, fontSize: 16, color: 'text.secondary' }}
            >
              ya tienes cuenta?
            </Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
               Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
