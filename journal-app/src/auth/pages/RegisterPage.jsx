import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useState } from "react";

const formData = {
  email: "",
  password: "",
  displayName: "",
};

const formValidations = {
  email: [(value) => value.includes("@"), "El correo debe tener un @"],
  password: [(value) => value.length >= 6,"El password debe de tebner mas de 6 caracteres."],
  displayName: [(value) => value.length >= 4, "El nombre es obligatorio."],
};

export const RegisterPage = () => {


  const [formSubmitted, setFormSubmitted] = useState(false)


  const {
    displayName,
    email,
    password,
    onInputChange,
    formState,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);


  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true)
    
  };

  return (
    <AuthLayout title="Register">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid size={{ xs: 12 }}>
            <TextField
              label="Nombre"
              type="text"
              placeholder="Tu Nombre Completo"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
            <TextField
              label="Correo"
              type="email"
              placeholder="tucorreo@dominio.com"
              fullWidth
              sx={{ marginTop: 2 }}
              name="email"
              value={email}
              onChange={onInputChange}
               error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              sx={{ marginTop: 2 }}
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>

          <Grid container spacing={2} sx={{ marginTop: 2 }} size={{ xs: 12 }}>
            <Grid size={{ xs: 12}}>
              <Button type="submit" variant="contained" fullWidth>
                Crear cuenta
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
