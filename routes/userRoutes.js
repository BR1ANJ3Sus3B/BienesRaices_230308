// routes/userRoutes.js

import express from 'express';
import { formularioLogin, formularioRegister, formularioPasswordRecovery } from '../controllers/userControllers.js';

const router = express.Router();

// Rutas de autenticación
router.get('/login', formularioLogin);
router.get('/registro', formularioRegister);
router.get('/recuperar', formularioPasswordRecovery);

// Otras rutas de ejemplo
router.get("/FindById/:Id", (request, response) => {
    response.send(`Se está solicitando buscar al usuario con ID: ${request.params.Id}`);
});

router.post("/newUser/:name/:email/:password", (req, res) => {
    res.send(`Se ha solicitado la creación de un nuevo usuario de nombre: ${req.params.name},
        asociado al correo electrónico ${req.params.email} y con la contraseña ${req.params.password}`);
});

router.put("/replaceUser/:name/:email/:password", (req, res) => {
    res.send(`Se está solicitando el reemplazo de toda la información del usuario: ${req.params.name},
        con el correo electrónico ${req.params.email} y la contraseña ${req.params.password}`);
});

router.patch("/updatePassword/:email/:newPassword/:passwordConfirm", (req, res) => {
    const { email, newPassword, passwordConfirm } = req.params;

    if (newPassword === passwordConfirm) {
        res.send(`Se está solicitando la actualización de la contraseña del usuario con el correo: ${email},
            se aceptan los cambios ya que la contraseña y la confirmación son las mismas`);
    } else {
        res.send(`Se está solicitando la actualización de la contraseña del usuario con el correo: ${email},
            con la nueva contraseña ${newPassword}, pero se rechaza el cambio dado que su nueva contraseña y su confirmación no coinciden`);
    }
});

router.delete("/deleteUser/:name", (req, res) => {
    res.send(`Se está solicitando eliminar el usuario ${req.params.name}`);
});

export default router;
