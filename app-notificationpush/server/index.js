const express = require("express");
const cors = require("cors");
const webpush = require("web-push");

//Middlewares
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Constantes

const PushSusbription = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/cSUsSy10FG0:APA91bHRADE8XBL1boLOkzHHcJN8Mo5JuRcqTUIs5PnCQQ6IipHk1lhkUle_dY6mnFXsgV5ZQipqK_zOIyUDwJiprPHpubi6lfIhHZOJaNAFneU1wJNoe_7wwNrqEjQlXdLLkyv3sfDe',
    expirationTime: null,
    keys: {
      p256dh: 'BFlh5RNOliN6P2Ri9WBEWbxhmssDlm1cA8JObbus0qZ56Ez5WsOkH-eetRBSjdwyaNLGusk-l3VcIPOVprLcSD4',
      auth: 'rAaOTeaS-ekzPMz4IgkPBg'
    }
  };

const vapidkey= {
        publickey: "BE19pdrJ4-8OveukG2xSuX-VFPH2IqKV1quunVzRooNrLN-ietZxvCvhXfZnvL0hyxOsV1sD0fJkPGEVi2KgJEw",
        privatekey: "Tf-sRAUUcuojT8WmBJKfrhDeeGcZ4Gz9YZFUfC8KXvI"
      }

      webpush.setVapidDetails(
        'mailto:gorka@mail.com',
        vapidkey.publickey,
        vapidkey.privatekey
    );

//Routes
app.get('/', async (req, res) => {
    //res.sendStatus(200).json();
    const payload = JSON.stringify({ title: "Titulo de Notificación", message: "Mensaje de notificación"});
    try {
        await webpush.sendNotification(PushSusbription, payload);
        await res.send("Enviado");
    } catch (e) {
        console.log(e);
    }

});
app.post('/subscription', (req, res) => {
    console.log(req.body);
     res.sendStatus(200).json();
})

app.listen(8000, () => console.log("Server listening on port 8000"))