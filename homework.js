const courses = [
  { code: "WEB210", title: "Intro to Web", credits: 3, enrolled: 24, cap: 30 },
  { code: "WEB250", title: ".NET Web Dev", credits: 4, enrolled: 30, cap: 30 },
  { code: "DAT200", title: "SQL Fundamentals", credits: 3, enrolled: 12, cap: 25 },
  { code: "PRG115", title: "Intro to C#", credits: 4, enrolled: 28, cap: 30 },
];

const courseLine = (course) => {
  const { code, title, credits } = course;
  return `${code}: ${title} (${credits} credits)`;
};

const isFull = (course) => course.enrolled === course.cap; 

const openCourses = (courses) =>
  courses.filter((course) => !isFull(course));

const courseTitles = (courses) =>
  courses.map((course) => course.title);

const openCourseLines = (courses) =>
  openCourses(courses).map(courseLine);

const findCourse = (courses, code) =>
  courses.find((course) => course.code === code);

const addCourse = (courses, newCourse) => [...courses, newCourse];

const totalCredits = (courses) =>
  courses.reduce((total, course) => total + course.credits, 0);


console.log(courseLine(courses[1]));      // "WEB250: .NET Web Dev (4 credits)"
console.log(openCourseLines(courses));    // ["WEB210: Intro to Web (3 credits)", ...]
console.log(totalCredits(courses));       // 14
