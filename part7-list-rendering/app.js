let app = Vue.createApp({
    data(){
        return {
            skills:['Php','laravel','MySql'],
            newSkill:''
        }
    },
    methods:{
        addSkills(){
            this.skills.push(this.newSkill)
            this.newSkill = '';
        },
        removeItem(item){
                this.skills.splice(item,1)
        }
    }
})

app.mount('#root');