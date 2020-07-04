class Form{
    constructor(){
        this.input=createInput("Enter A Task");
        this.button=createButton("Add Task");
       

    }
    display(){
        var title=createElement("h1");
        title.html("TO DO LIST");
      
        title.position(430,30);
        this.input.position(470,150);
        this.button.position(650,150);
        
        
        this.button.mousePressed(()=>{
            db1=new db();
            db1.createTask();
            //db1.getTask2();
          db1.taskName=this.input.value();
          
       // text(name,530,250);
       this.delete=createButton("DELETE");
        this.delete.position(680,200);
        db1.updateTaskInfo();
        //db1.updateTask2(name);
        // if(allTasks!==undefined){
        //     var displayposY=250;
        //     for(var t in allTasks){
        //         displayposY+=50;
        //         textSize(20);
        //         text(allTasks[t].taskName,500,displayposY);
        //     }
       // }
        })


    }
}