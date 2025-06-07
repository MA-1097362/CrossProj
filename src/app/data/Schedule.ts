import { PersistenceService } from "../services/persistance.service";
import { Section } from "./Section";

let increment:number = 1;
export class Schedule{
    
    id:number;
    sections:Section[] =[];
    listOfSchedules:Schedule[] = [];
   


    constructor(sections:Section[]){
        this.id = increment++;
        for(let i =0;i<sections.length;i++){
            this.sections.push(sections[i]);
        }
        this.listOfSchedules.push(this.createSchedule(sections));

    }


createSchedule(sections:Section[]):Schedule{
    return new Schedule(sections);
}

removeSchedule(id:number){

    for(let i =0;i<this.listOfSchedules.length;i++){
        if(this.listOfSchedules[i].id==id){
            this.listOfSchedules.splice(i);
        }
    }
}

compareSchedule(){

}



}

