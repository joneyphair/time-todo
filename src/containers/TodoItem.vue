<template>


  <div class="todo">

    <div class="todo-main">


        <div class="item-header">
            <div class="time"  v-on:click="toStart()" v-if="!deley" >
                     {{start?(parseInt(timeCount/60)):'开始'}}
                     <span v-if="start">:{{parseInt(timeCount%60)}}</span>
            </div>

            <div class="time"  v-if="deley && !start">
                   <span>{{parseInt(deleyCount/60)}}</span>
                     <span>:{{parseInt(deleyCount%60)}}</span>
            </div>

        </div>

    
        <div class="item-body">
            <ul class="process-log">
                <li class="item-log" v-for="(item,index) in logList" >{{item.content}}</li>
            </ul>
        </div>


    <div class="item-header-title">
          <a href="/"> {{msg}} </a>
     </div>

    </div>


  </div>


  

</template>

<script>


var timer = null;
var deleyTimer = null;

export default {
  name: 'welcome',
  data() {
    return {
      start:false,
      deley:false,
      timeCount:0,
      deleyCount:0,
      msg: '今天记得吃饭，喝水哟!',
      logList:[
      ]
    };
  },
  rendy(){
  },
  methods:{
      showNotify(content){
       let myNotification = new Notification('番茄工作法', {
              body:content
        });
      },
      addLog(content){
          if(!content){
              return ;
          }
          this.logList.unshift({content});
      },
      startDeley(){

           var that = this;
            that.start = false;
            window.clearInterval(timer);

            that.addLog('开始休息5分钟');
            that.showNotify('开始休息5分钟');

            that.deley = true;

           that.deleyCount = 5*60;


           deleyTimer = window.setInterval(function(){
               that.deleyCount--;
               if(that.deleyCount === 0){
                   that.addLog('5分钟时间到啦，继续加油吧！');
                   that.showNotify('5分钟时间到啦，继续加油吧！');
                   window.clearInterval(deleyTimer);
                   that.deleyCount= 0;
                   that.deley = false;
                   that.toStart();
               }
           },1000);
      },
      toStart(){

          this.start = !this.start;

          var that = this;


          if(this.start && this.timeCount === 0){
            that.addLog(`计时开始`);

            that.showNotify('计时开始');
          }

          if(!this.start){
             window.clearInterval(timer);
             that.addLog(`暂停计时`);
             that.showNotify('暂停计时');
            return ;
          }

          timer = window.setInterval(function(){
              that.timeCount ++;
              if(that.timeCount%(60*25) == 0 ){
                  that.addLog(`第${that.timeCount/(60*25)}个番茄时间-结束`);
                  that.startDeley();
                  that.addLog(`第${that.timeCount/(60*25) + 1}个番茄时间-开始`);
              }
          },1000);
      }

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

.item-header {
    display:flex;
    flex-diraction:column;
    justify-content:center;
    padding-top:20px;
    padding-bottom:20px;
    background-color:#f3f3f5;
}

.item-header-title {
    padding-top:10px;
    text-align:center;
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    padding-bottom:10px;
    border-top:1px solid #eee;
    background-color:#fff;
}
.item-header-title a {
    color:#333;
}

.item-body {
}

.process-log {
    list-style-type:none;
    margin-top:10px;
    padding-left:20px;
}

.item-log {
   height:30px; 
}

.time {
    height:100px;
    width:100px;
    border:1px solid #ddd;
    border-radius:100px;
    line-height:100px;
    text-align:center;
    background-color:#f4f4f5;
}


</style>
