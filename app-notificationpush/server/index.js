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
    endpoint: 'https://fcm.googleapis.com/fcm/send/f9d4ofr7SCg:APA91bH3Mk2nsRfYam9MehwrOMDc3DHS_v5Bw30gxKZvqKnIaOl9OZu7TpzondPmcnyZLrXT0xzh_3r-FbJzI1MoYKqhV2p5tNv07pDt9nZZzL35y09CTSc5rL1C3ja1LRglb6hfuu0S',
    expirationTime: null,
    keys: {
      p256dh: 'BMy8CXxlzhF6HaA-T3WnusRaSRLoVvDdFrCicxJ7gcjmWgMHLRx3_3rXuUp4z1xos9tzm1cXtabpmGW5XYi42io',
      auth: 'nWVX1XozHX85-2_TJinc5A'
    }
  }

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