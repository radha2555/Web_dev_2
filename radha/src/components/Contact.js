import React, { useState }  from 'react';
//Parenthese Function Component
const Contact = () => {
    let [Users, setUsers] = useState([
        {"Name":"Student One", "Rollno":1,"Department":"B.voc.","Year":"First"},
        {"Name":"Student Two", "Rollno":2,"Department":"B.E.","Year":"First"},
        {"Name":"Student Three", "Rollno":3,"Department":"B.Tech.","Year":"First"},
        {"Name":"Student Four", "Rollno":4,"Department":"B.voc.","Year":"Second"},
        {"Name":"Student Five", "Rollno":5,"Department":"B.voc.","Year":"Third"}
    ]);
    return (
    <>
        <h1>Contact Page</h1>
        {Users.length>0
            ?<table>
                <th>
                    <td>Name</td>
                    <td>Rollno.</td>
                    <td>Department</td>
                    <td>Year</td>
                </th>
                {Users.map((student)=>(
                    <tr>{/* for giving an eelemnt in table we have two method */}
                        <td>{student.Name}</td> {/* Dot method */}
                        <td>{student["Rollno"]}</td> {/* square bracket or quote method */}
                        <td>{student.Department}</td>
                        <td>{student['Year']}</td> {/* We can use single quote or double quote*/}
                    </tr>
                ))}
            </table>
            : <p>No Students in Database</p>
        }
    </>
    );
};
export default Contact;