import React, { useState, useEffect } from 'react';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/courses', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        });
        
        if (response.ok) {
          const data = await response.json();
          setCourses(data);
        }
      } catch (error) {
        console.error('Failed to fetch courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
  };

  if (loading) {
    return <div className="loading">Loading courses...</div>;
  }

  return (
    <div className="courses-container">
      <h1>My Courses</h1>
      
      <div className="courses-grid">
        <div className="course-list-container">
          <h2>Enrolled Courses</h2>
          {courses.length > 0 ? (
            <ul className="course-list">
              {courses.map((course) => (
                <li 
                  key={course._id} 
                  className={`course-list-item ${selectedCourse?._id === course._id ? 'selected' : ''}`}
                  onClick={() => handleCourseSelect(course)}
                >
                  <h3>{course.name}</h3>
                  <p>{course.code}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>You are not enrolled in any courses</p>
          )}
        </div>
        
        <div className="course-details-container">
          {selectedCourse ? (
            <div className="course-details">
              <h2>{selectedCourse.name}</h2>
              <p><strong>Code:</strong> {selectedCourse.code}</p>
              <p><strong>Instructor:</strong> {selectedCourse.instructor}</p>
              <p><strong>Schedule:</strong> {selectedCourse.schedule}</p>
              <p><strong>Location:</strong> {selectedCourse.location}</p>
              
              <div className="course-materials">
                <h3>Course Materials</h3>
                {selectedCourse.materials && selectedCourse.materials.length > 0 ? (
                  <ul>
                    {selectedCourse.materials.map((material, index) => (
                      <li key={index}>
                        <a href={material.url} target="_blank" rel="noopener noreferrer">{material.title}</a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No materials available</p>
                )}
              </div>
              
              <div className="course-assignments">
                <h3>Assignments</h3>
                {selectedCourse.assignments && selectedCourse.assignments.length > 0 ? (
                  <ul>
                    {selectedCourse.assignments.map((assignment, index) => (
                      <li key={index}>
                        <h4>{assignment.title}</h4>
                        <p>{assignment.description}</p>
                        <p><strong>Due:</strong> {new Date(assignment.dueDate).toLocaleDateString()}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No assignments available</p>
                )}
              </div>
            </div>
          ) : (
            <div className="no-course-selected">
              <p>Select a course to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;