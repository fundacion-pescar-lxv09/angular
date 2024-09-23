// Tipado Estatico
    /** String
     *  dobles      "cadena"
     *  simples     'cadena'
     *  invertidas  `cadena`
     */
    /** number
     *  entero:      18
     *  decimal:     3.1415
     *  cientifica:  34e36
     *  hexadecimal: 0x0C
     *  octal:       0o01A
     *  binario:     0b1100
     */
// Inferencia de Datos

interface UserInterface{
    name:string
    age:number
    isAdmin:boolean
    courses:String[]
}
enum days {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
}
type uuid = `${number}-${number}-${number}-${number}`
type assigned = `${days}-${number}HS`;
type currPesos = `AR$ ${number}`;
type currDollar = `U$D ${number}`;

class User{
    public name:string
    public age:number
    private isAdmin:boolean
    private courses:String[]

    constructor(user:UserInterface){
        this.name = user.name
        this.age = user.age
        this.isAdmin = user.isAdmin
        this.courses = user.courses
    }
    getAdmin():boolean{
        return this.isAdmin;
    }
    getCourses():String[]{
        return this.courses;
    }
    setName(name:string):void{
        this.name = name
    }
    setAdmin(admin:boolean):void{
        this.isAdmin = admin;
    }
    setCourses(courses:String[]):void{
        if(courses.length) 
        this.courses = courses
    }
    addCourse(course:String):boolean{
        if (typeof course === "string"){
            this.courses.push(course)
            return true
        }
        return false
    }
    removeCourse(index:number){
        if (index >= 0 && index < this.courses.length)
        this.courses.splice(index,1)
    }
    editCourse(index:number,course:string):boolean{
        if(index >= 0) 
        if(index < this.courses.length)
        if (typeof course === "string"){
            this.courses[index]=course
            return true
        }
        return false
    }
}

const userData = new User({
    name: 'cristian', // string
    age: 33, // number
    isAdmin: true, // boolean
    courses: ["html","css","js"] //array
})

console.log(userData.getAdmin())
console.log(userData.getCourses())
userData.addCourse("git")
userData.addCourse("mongo")
userData.addCourse('nodejs')
console.log(userData.getCourses())
console.log(userData.name)