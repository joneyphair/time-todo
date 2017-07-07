<template>


  <div class="todo">

    <div class="todo-main">

        <h3>未完成</h3>
        <ul class="todo-list">
            <li v-for="(item,index) in todoList" v-if=" item.status === 'wait' ">
            <input type="checkbox" v-model="item.checkbox" v-on:click="checkItem(item,index)"/>
            <a href="/#/item"> {{item.content}} </a>
            </li>

        </ul>

        <h3>已完成</h3>
        <ul class="todo-list">
            <li v-for="(item,index) in todoList" v-if=" item.status === 'done' " class="done">
            <input type="checkbox" v-model="item.checkbox" v-on:click="checkItem(item,index)"/>
            <a href="/#/item"> {{item.content}} </a>
            </li>
        </ul>

    </div>

  <div class="m-add-todo">
    <input type="text"  class="input-content" v-model="content" placeholder="今天要开发的功能" />
    <button type="button" class="confirm" v-on:click="addTodo()"> 提交</button>
  </div>
  </div>


  

</template>

<script>



export default {
  name: 'welcome',
  data() {
    return {
      msg: '今天记得吃饭，喝水',
      content:'',
      todoList:[
          {content:'今天要开发新功能',status:'wait',checkbox:false},
      ],
      form:{

      }
    };
  },
  methods:{
      checkItem(item,index){
         console.log('item:',item);
         if(item.checkbox && item.status === 'wait' ){
             this.todoList[index].status = 'done';
         }else {
             this.todoList[index].status = 'wait';
         }
         this.todoList[index].checkbox = false;
      },
      addTodo(){
          var content = this.content;
          if(!content){
              return ;
          }
          this.todoList.push({content,status:'wait'});
          this.content = '';

      let myNotification = new Notification('添加成功', {
        body:content 
    });
      },

  }
};

</script>

<style scoped>

.todo {
    flex:1;
    display:flex;
    flex-direction:column;
    position:relative;
    justify-content:flex-start;
}

.todo-main{
    flex:1;
}

h3 {
    color:#666;
    font-size:14px;
    padding-left:10px;
    height:30px;
    line-height:30px;
    background-color:#f4f4f5;
}

.m-add-todo {
    height:40px;
    flex:none;
    display:flex;
    width:100%;
    flex-direction:row;
    position:fixed;
    bottom:0;
    left:0;
    right:0;
}

.todo-list {
    list-style-type:none;
}

.todo-list a {
    color:#333;
    text-decoration:none;
}

.todo-list li {
    line-height:40px;
    font-size:16px;
    color:#333;
    padding-left:10px;
    padding-right:10px;
    border-bottom:1px solid #eee;
}

.todo-list .done {
    background-color:#f9f9f9;
}

.input-content {
    flex:1;
    border:1px solid #ddd;
    padding-left:10px;
    font-size:16px;
}

input[type=text]:focus{
    outline:none;
}

.confirm {
    width:60px;
    border-radius:2px;
    border:1px solid #ddd;
    border-left:none;
    background-color:#eee;
    font-size:14px;
    color:#333;
    outline:none;
}


</style>
