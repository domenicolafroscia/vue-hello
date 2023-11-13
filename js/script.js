const { createApp } = Vue;

const app = createApp({
    data(){
        return{
            message: "Ciao utente, come stai?",
            imgSrc: "img/coastal-wash-web.webp"
        }
    }
});

app.mount("#app");