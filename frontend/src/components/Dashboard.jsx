import React, { useState, useEffect } from 'react';

const Dashboard = ({ user }) => {
  const [dashboardData, setDashboardData] = useState({
    announcements: [],
    upcomingAssignments: [],
    enrolledCourses: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/dashboard', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        });

        if (response.ok) {
          const data = await response.json();
          setDashboardData(data);
        } else {
          console.error('Error fetching dashboard data:', response.statusText);
        }
      } catch (error) {
        console.error('Failed to fetch dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []); // You might consider adding user as a dependency if needed

  if (loading) {
    return <div className="loading">Loading dashboard...</div>;
  }

  return (
    <div className="dashboard">
      <h1>Welcome, {user.name}!</h1>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h2>Announcements</h2>
          {dashboardData.announcements.length > 0 ? (
            <ul className="announcement-list">
              {dashboardData.announcements.map((announcement) => (
                <li key={announcement.id} className="announcement-item"> {/* Use a unique identifier (e.g., announcement.id) */}
                  <h3>{announcement.title}</h3>
                  <p>{announcement.content}</p>
                  <span className="announcement-date">{new Date(announcement.date).toLocaleDateString()}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>No current announcements</p>
          )}
        </div>

        <div className="dashboard-card">
          <h2>Upcoming Assignments</h2>
          {dashboardData.upcomingAssignments.length > 0 ? (
            <ul className="assignment-list">
              {dashboardData.upcomingAssignments.map((assignment) => (
                <li key={assignment.id} className="assignment-item"> {/* Use a unique identifier (e.g., assignment.id) */}
                  <h3>{assignment.title}</h3>
                  <p>Course: {assignment.course}</p>
                  <p>Due: {new Date(assignment.dueDate).toLocaleDateString()}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No upcoming assignments</p>
          )}
        </div>

        <div className="dashboard-card">
          <h2>Enrolled Courses</h2>
          {dashboardData.enrolledCourses.length > 0 ? (
            <ul className="course-list">
              {dashboardData.enrolledCourses.map((course) => (
                <li key={course.id} className="course-item"> {/* Use a unique identifier (e.g., course.id) */}
                  <h3>{course.name}</h3>
                  <p>Code: {course.code}</p>
                  <p>Instructor: {course.instructor}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Not enrolled in any courses</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
