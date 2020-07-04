class db{
    constructor(){
        this.taskCount=null;
        this.taskName=null;
    }
    createTask(){
        var task='ToDoList/taskName'+this.taskCount;
        database.ref(task).set({
            taskName:this.taskName
        });
    }
     updateTaskInfo(){
        var taskInfo=database.ref("ToDoList");
        taskInfo.on("value",(data)=>{
            allTasks=data.val();
        })
    }

    // getTask1(){
    //     database.ref('taskName1').on("value",(data)=>{
    //         taskName1=data.val();
    //     })
    // }
    // updateTask1(task){
    //     database.ref('/').update({
    //         taskName1:task
    //     })
    // }
    // getTask2(){
    //     database.ref('taskName2').on("value",(data)=>{
    //         taskName2=data.val();
    //     })
    // }
    // updateTask2(task){
    //     database.ref('/').update({
    //         taskName2:task
    //     })
    // }
}