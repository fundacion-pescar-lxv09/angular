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
var days;
(function (days) {
    days[days["Lunes"] = 0] = "Lunes";
    days[days["Martes"] = 1] = "Martes";
    days[days["Miercoles"] = 2] = "Miercoles";
    days[days["Jueves"] = 3] = "Jueves";
    days[days["Viernes"] = 4] = "Viernes";
    days[days["Sabado"] = 5] = "Sabado";
    days[days["Domingo"] = 6] = "Domingo";
})(days || (days = {}));
var User = /** @class */ (function () {
    function User(user) {
        this.name = user.name;
        this.age = user.age;
        this.isAdmin = user.isAdmin;
        this.courses = user.courses;
    }
    User.prototype.getAdmin = function () {
        return this.isAdmin;
    };
    User.prototype.getCourses = function () {
        return this.courses;
    };
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.setAdmin = function (admin) {
        this.isAdmin = admin;
    };
    User.prototype.setCourses = function (courses) {
        if (courses.length)
            this.courses = courses;
    };
    User.prototype.addCourse = function (course) {
        if (typeof course === "string") {
            this.courses.push(course);
            return true;
        }
        return false;
    };
    User.prototype.removeCourse = function (index) {
        if (index >= 0 && index < this.courses.length)
            this.courses.splice(index, 1);
    };
    User.prototype.editCourse = function (index, course) {
        if (index >= 0)
            if (index < this.courses.length)
                if (typeof course === "string") {
                    this.courses[index] = course;
                    return true;
                }
        return false;
    };
    return User;
}());
var userData = new User({
    name: 'cristian', // string
    age: 33, // number
    isAdmin: true, // boolean
    courses: ["html", "css", "js"] //array
});
console.log(userData.getAdmin());
console.log(userData.getCourses());
userData.addCourse("git");
userData.addCourse("mongo");
userData.addCourse('nodejs');
console.log(userData.getCourses());
console.log(userData.name);
