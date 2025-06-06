import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <form>
        <Grid container>
          <Grid size={{ xs: 12 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="tucorreo@correo.com"
              fullWidth
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
                Login
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
            <Typography sx={{ mr: 1, fontSize: 16, color: "text.secondary" }}>
              ¿No tienes cuenta?
            </Typography>
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
