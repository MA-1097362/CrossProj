export class Section{

    name:string;
    sectionNumber:number;
    capacity:string;
    timeSlot: string;
    campus: string;
    instructors:string[]=["Dr. Ghazal", "Dr. Khiati","Dr. Deif","Dr. Awad"];
    instructor:string;

    constructor(name:string,sectionNumber:number,capacity:string,timeSlot:string,campus:string,instructor:string){
        this.name=name;
        this.sectionNumber=sectionNumber;
        this.instructor=instructor;
        this.capacity=capacity;
        this.timeSlot=timeSlot;
        this.campus=campus;
        this.instructors = ["Dr. Ghazal", "Dr. Khiati","Dr. Deif","Dr. Awad"];
    }

}