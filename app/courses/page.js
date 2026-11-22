import { ArrowUpRight, BookOpen, Clock3, Users } from "lucide-react";
import { courses } from "@/lib/data";

export default function CoursesPage() {
    return (
        <div className="page-wrap">
            <div className="page-title-row">
                <div>
                    <p className="eyebrow">ACADEMIC CATALOG</p>
                    <h1>Courses</h1>
                    <p className="muted">
                        Explore programs and manage course information.
                    </p>
                </div>
                <button className="primary-btn">＋Create course</button>
            </div>

            <div className="course-grid">
                {courses.map((course, index) => (
                    <article className="course-card" key={course.name}>
                        <div className={`course-art art-${index}`}>
                            <BookOpen size={28} />
                            <span>{course.code}</span>
                        </div>
                        <div className="course-body">
                            <span className="course-tag">{course.category}</span>
                            <h2>{course.name}</h2>
                            <p className="muted">{course.description}</p>
                            <div className="course-meta">
                                <span>
                                    <Users size={15} /> {course.students} students
                                </span>
                                <span>
                                    <Clock3 size={15} /> {course.duration}
                                </span>
                            </div>
                            <div className="course-footer">
                                <span className="status active">Active</span>
                                <button className="icon-btn">
                                    <ArrowUpRight size={17} />
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
