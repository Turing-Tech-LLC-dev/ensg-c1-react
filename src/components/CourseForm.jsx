import { useState } from "react";

function CourseForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        course: ""
    });

    /* function handleChange(event) {
        const {name, value} = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    } */

    function handleChange(field, value) {
        setFormData((prev) => ({
            ...prev,
            [field]: value
        }));
    }

    return (
        <div className="flex flex-col gap-8 py-10 w-full max-w-md">
            <h2 className="font-bold text-4xl">Course Form</h2>

            <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="fullname">Full Name</label>
                    <input 
                        type="text" 
                        placeholder="Example: John Doe" 
                        className="input" 
                        id="fullname"
                        value={formData.fullName}
                        // onChange={handleChange}
                        onChange={(event) => handleChange("fullName", event.target.value)}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        placeholder="john@mail.com" 
                        className="input"
                        id="email" 
                        value={formData.email}
                        onChange={(event) => handleChange("email", event.target.value)}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="course">Course</label>
                    <select 
                        id="course" 
                        className="input" 
                        value={formData.course}
                        onChange={(event) => handleChange("course", event.target.value)}
                    >
                        <option value="">Select a course</option>
                        <option value="frontend development">Frontend Development</option>
                        <option value="backend development">Backend Development</option>
                        <option value="fullstack development">Fullstack Development</option>
                        <option value="database development">Database Development</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default CourseForm;