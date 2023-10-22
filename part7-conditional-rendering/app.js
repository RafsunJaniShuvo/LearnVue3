let app = Vue.createApp({
    data(){
        return {
            show:false,
        }
    },
    methods:{
        toggle(){
        this.show = !this.show;
        console.log(this.show);
       }
    }
})

app.mount('#root');