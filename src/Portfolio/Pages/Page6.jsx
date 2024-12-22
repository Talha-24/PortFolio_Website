import React from 'react'
import "./Page6.css"

const Page6 = () => {
    return (
        <div id='pageSix'>
            <h2>Major Projects</h2>
            <div id="ems">
                <h5>Employ Management System</h5>
                <ul>
                    <li>Authentication</li>
                    <li>Employ Dashboard</li>
                    <li>Admin Dashboard</li>
                </ul>
                <div id="description">
                    <p> <span>At Admin Dashboard</span>  Admin can Assign tasks to his Employees.He can also receive the response of respected Employ on the Assigned Task and can reply him(Ok and Denied) .</p>
                    <p> <span>At Employ Dashboard</span> At Employ Dashboard, Employ has Authorization of Accepting, Rejecting and Sending any request/query on assigned task by Admin, he can also even see the Admin's Reponse on the top of every task..</p>
                    <div id="note">
                        <p>For Data Storage I have used the Local Storage...</p>
                    </div>
                    <div id="passwords">
                         <big id='big'>Authentication</big>
                         <div id="AdminDashboard">
                            <big>Admin Dashboard</big>
                            <p> <span>Email : </span>admin@example.com</p>
                            <p><span>Password : </span>admin@password.com</p>
                         </div>
                         <div id="EmployDashboard">
                            <big>Employ Dashboard</big>
                           <p><span>Email :</span> employee@example.com</p>
                            <p> <span>Password :</span>123</p>
                            <p>employee2@example.com</p>
                            <p>employee3@example.com</p>
                            <p>employee4@example.com</p>
                            <p>employee5@example.com</p>
                          <p>  <span>Password is same as employee_One...</span></p>
                         </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Page6