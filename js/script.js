const { createApp } = Vue;

const app = createApp({
    data(){
        return{
            message: "Ciao utente, come stai?"
        }
    }
});

app.mount("#app");