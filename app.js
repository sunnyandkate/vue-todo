const app = Vue.createApp({

    data(){
        return{
            title: 'welcome',
            textColor:'lightblue',
            bgColor: 'beige',
            showMenu:false,
            sideMenu:false,
            newTodo:'',
            openButton:'open',
            menuItems:[
                {
                    id:1,
                    text:"home",
                    url:'#'
                },
                {
                    id:2,
                    text:"about",
                    url:'#about'
                   
                },
                {
                    id:3,
                    text: "contact",
                    url:'#contact'
                }
            ], 
            todos:[
                {
                    id:1,
                    text:'surfing',
                    completed:true

                }
            ]

        }
    },
    methods:{
        toggleMenu(){
            this.showMenu = !this.showMenu
        
        },
        addTodo(){
            this.todos.push(
                {
                    id:this.todos.length +1,
                    text: this.newTodo,
                    completed:false
                }
            );
            this.newTodo='';
        },
        remove(todoItem){
            this.todos.splice(todoItem, 1)
        },
        openSideMenu(){
            this.sideMenu = !this.sideMenu
            if(this.sideMenu){
                this.$refs.openBtn.textContent='close';
               
            }else{
                this.$refs.openBtn.textContent='open';
            }
            
        },
        pink(){
     
          
            this.textColor='pink'
         },
         blue(){
             this.textColor='rgb(0, 102, 204)'
         },
         bgPink(){
             this.bgColor='pink'
         },
         bgBlue(){
             this.bgColor='blue'
         },
         green(){
             this.textColor='seagreen'
         },
         bgGreen(){
             this.bgColor='seagreen'
         },
         orange(){
             this.textColor='orange'
         },
         bgOrange(){
             this.bgColor='orange'
         }

       

    }
    
    





})


app.mount('#app')