const courseList = [
    {
        code: "ACIT 1620",
        name: "Fundamental Web Technologies"
    },

    {
        code: "ACIT 1630",
        name: "Database Systems"
    },

    {
        code: "ACIT 1310",
        name: "Technical Math for IT"
    },

    {
        code: "ACIT 1100",
        name: "Organizational Behaviour"
    }
];

let result = 0;
let user_input;
let new_item;
let result2 = 0;

do {
    user_input = prompt("Type fore digit number: ");
    if (isNaN(user_input) === false && user_input.length === 4) {
        result = 1;
    }
} while (result != 1);

for (let course of courseList) {
    if (course["code"].slice(5, 9) === user_input) {
        console.log(`"Yes, I am taking the course: ${course["code"]} - ${course["name"]}`);
        result2 = 1;
        break;
    }
};

if (result2 === 0) {
    new_item = { code: user_input, name: null };
    courseList.push(new_item);
    console.log(courseList);
};


function createCourseArray() {
    let course_array = [];
    for (let item of courseList) {
        let course = { "code": `${item.code} - ${item.name}`, "date": "Winter 2023" };
        course_array.push(course);
    };
    // if (result2 === 0) {
    //     course_array[course_array.length - 1].date = "null";
    // };
    if (result2 === 0) {
        // delete course_array[course_array.length - 1];
        course_array.pop();
    };
    return course_array;
};

console.log(createCourseArray());

let CourseList2 = createCourseArray();