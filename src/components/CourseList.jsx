import courses from "../data/courses";
import CourseCard from "./CourseCard";

function CourseList() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {
                courses.map((course) => (                    
                    <CourseCard 
                        key={course.id}
                        // title={course.title}
                        // Icon={course.Icon}
                        // price={course.price}
                        {...course}
                    />
                ))
            }
        </div>
    )
}

export default CourseList;