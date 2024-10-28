import express from 'express';

const router = express.Router();

// GET
router.get("/FindById/:Id", function (request, response) {
    response.send(`Se está solicitando buscar al usuario con ID: ${request.params.Id}`);
});

// POST
router.post("/newUser/:name/:email/:password", function (req, res) {
    res.send(`Se ha solicitado la creación de un nuevo usuario de nombre: ${req.params.name},
        asociado al correo electrónico ${req.params.email} y con la contraseña ${req.params.password}`);
});

// PUT
router.put("/replaceUser/:name/:email/:password", function (taco, quesadilla) {
    quesadilla.send(`Se está solicitando el reemplazo de toda la información del usuario: ${taco.params.name},
        con el correo electrónico ${taco.params.email} y la contraseña ${taco.params.password}`);
});

// PATCH
router.patch("/updatePassword/:email/:newPassword/:passwordConfirm", function (a, b) {
    const { email, newPassword, passwordConfirm } = a.params;

    if (newPassword === passwordConfirm) {
        b.send(`Se está solicitando la actualización de la contraseña del usuario con el correo: ${email},
            se aceptan los cambios ya que la contraseña y la confirmación son las mismas`);
    } else {
        b.send(`Se está solicitando la actualización de la contraseña del usuario con el correo: ${email},
            con la nueva contraseña ${newPassword}, pero se rechaza el cambio dado que su nueva contraseña y su confirmación no coinciden`);
    }
});

// DELETE
router.delete("/deleteUser/:name", function (req, res) {
    res.send(`Se está solicitando eliminar el usuario ${req.params.name}`);
});

export default router;
