class Subject{
    constructor(){
        this.startTime=null;
        this.endTime=null;
        this.duration=null;
       
    }
    //AD SUBJECT
    getAdTime(){
        var adTime=database.ref('StartTime');
        adTime.on("value",(data)=>{
            this.startTime=data.val();
        });
       
    }
    updateAdTime(time){
        database.ref('/').update({'StartTime': time}); 
    }
    getAdETime(){
        var adTime=database.ref('EndTime');
        adTime.on("value",(data)=>{
            this.endTime=data.val();
        });
       
    }
    updateAdETime(){
        database.ref('/').update({'EndTime': Number(this.startTime) + Number(this.duration)}); 
    }

}