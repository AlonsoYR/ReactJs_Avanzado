const express = require("express");
const cors = require("cors");
const webpush = require("web-push");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const vapikeys = {
    "publicKey":"BK2BjLOk1l6NvWnrAqcYne6WyVRcTKL1u1NRN9o-bpD_s0HEYnTaP9YSzm4W55bvQY4EdH7bTjP4y7zz7R6aJ0Y",
    "privateKey":"6hhWmMI1GohfQuYAhs1rEnE28YF426m5Ss7ymbAt47g"
};

webpush.setVapidDetails(
    'mailto:gorka@example.ex', 
    vapikeys.publicKey, 
    vapikeys.privateKey
);

const subscription = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/fldesb2v8rA:APA91bE_FOKE6CqOUSDarOF3wzxlBF2OnFBg3TsnZe4GHyr0wEy_8y7XwK-GdxGg5GjscUDlHibGqOQhRuwqWCkBPybd5nKHCln6CGhwOG2ovCbxVxW8eRT4kY6SFzwXkqLHiJvfHov-',
    expirationTime: null,
    keys: {
        p256dh: 'BBAjz7OwGrwB_lMQ_NtX4iPsmBDOq3DzfZFmc6dCgaD57C-2PVubO0_WHYeCKCYTM3vziUY2Pwg1bxzP8o5y6PQ',
        auth: 'MSltSa7uQcvxwoKaNK8qdQ'
    }
};
  

app.get('/', (req, res) => {
    //res.sendStatus(200).json();
    const payload = JSON.stringify(
        {
            title: "Server Notification", 
            message: "Esta es una notificación que llega desde el server"
        }
    );
    webpush.sendNotification(subscription, payload);
    res.send("Todo ok, funcionando correctamente");
});

app.post('/custom_notification', (req, res) => {
    const {title, message} = req.body;
    console.log(req.body);
    const payload = JSON.stringify({ title, message });
    webpush.sendNotification(subscription, payload);
    res.send("Todo ok, custom notification enviada");
});

app.post('/subscription' , (req,res) => {
    const { pushSubscription } = req.body;
    console.log(pushSubscription);
    res.sendStatus(200);
});

const port = 8000;

app.listen(port, () => console.log(`Server listening on port ${port}`));