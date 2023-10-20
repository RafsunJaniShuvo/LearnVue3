let app = Vue.createApp({
    data(){
        return {
            msg:'Welcome to new vue js 3',
            tutorialInfo:{
                name:'Rafsun Jani Shuvo',
                age: 26,
                githubLink:'https://github.com/RafsunJaniShuvo?tab=repositories',
            },
            htmlCode: '<a target="_blank" href="https://github.com/RafsunJaniShuvo?tab=repositories"> Github LInk</a>'
        }
    }
})

app.mount('#root');