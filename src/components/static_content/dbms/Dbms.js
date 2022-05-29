import React from 'react';
import './dbms.css'; 

const Dbms = () => {
    var threeLevelImage = require('./3-level.jpg');
    return (
            <div id="about" className="container-fluid">
                    <div className="contents">
                        <h2>Database Management System (DBMS)</h2><br />
                        <section id="Database">
                         <h4><strong>What is a Database?</strong></h4>
                         <p>
                         Database is a colection of inter-related data which helps in efficient retrieval,insertion and
                         deletion of data from database and organizes the data in the form of tables, views, schemas, reports 
                         etc. For Example, university database organizes the data about students, faculty, admin, staff, etc. 
                         which helps in efficient retrieval, insertion and deletion of data from it.
                         
                         </p><br />
                        </section>
                        <section id="Features">
                        <h4><strong>Features</strong></h4> 
                         <p>The software which is used to manage database is called Database Management System (DBMS). For Example, MySQL, Oracle etc. are popular commercial DBMS used in different applications. DBMS allows users the following tasks:<br/>
                         <ul>
                         <li><strong>Data Definition:</strong> It helps in creation, modification and removal of definitions that define the organization of data in database.
                         </li><li><strong>Data Updation:</strong> It helps in insertion, modification and deletion of the actual data in the database.
                         </li><li><strong>Data Retrieval:</strong> It helps in retrieval of data from the database which can be used by applications for various purposes.
                         </li><li><strong>User Administration:</strong> It helps in registering and monitoring users, enforcing data security, monitoring performance, maintaining data integrity, dealing with concurrency control and recovering information corrupted by unexpected failure.</li>
                        </ul>
                        </p><br/>
                       </section> 

                       <section id="Why">
                       <h4><strong>Why DBMS?</strong></h4>
                       <p>
                       File System manages data using files in hard disk. Users are allowed to create, delete, and update the files according to their requirement.
                       Let us consider the example of file based University Management System. Data of students is available to their respective Departments, Academics Section,
                       Result Section, Accounts Section, Hostel Office etc. Some of the data is common for all sections like Roll No, Name, Father Name, Address and Phone number 
                       of students but some data is available to a particular section only like Hostel allotment number which is a part of hostel office. Let us discuss the issues
                       with this system:
                       <ul>
                           <li><strong>Redundancy of data:</strong> Data is said to be redundant if same data is copied at many places. If a student wants to change Phone number, he has to get it updated at various sections. Similarly, old records must be deleted from all sections representing that student.
</li>
                           <li><strong>Inconsistency of Data:</strong>Data is said to be inconsistent if multiple copies of same data does not match with each other. If Phone number is different in Accounts Section and Academics Section, it will be inconsistent. Inconsistency may be because of typing errors or not updating all copies of same data.
</li>
                           <li><strong>Difficult Data Access:</strong>A user should know the exact location of file to access data, so the process is very cumbersome and tedious. If user wants to search student hostel allotment number of a student from 10000 unsorted students’ records, how difficult it can be.
</li>
                           <li><strong>Unauthorized Access:</strong>File System may lead to unauthorized access to data. If a student gets access to file having his marks, he can change it in unauthorized way.
</li>
                           <li><strong>No Concurrent Access:</strong>The access of same data by multiple users at same time is known as concurrency. File system does not allow concurrency as data can be accessed by only one user at a time.
</li>
                           <li><strong>No Backup and Recovery:</strong>File system does not incorporate any backup and recovery of data if a file is lost or corrupted.
</li>
                       </ul>
                       </p><br/>
                       </section>

                        <section id="Architecture">
                            <h4><strong>3-Level Architecture</strong></h4>
                            <p>
                            DBMS 3-level architecture divides the complete system into three inter-related but independent modules as shown below:
                            <ul>
                                <li><strong>Physical Level:</strong>At the physical level, the information about the location of database objects in the data store is kept. Various users of DBMS are unaware of the locations of these objects.In simple terms,physical level of a database describes how the data is being stored in secondary storage devices like disks and tapes and also gives insights on additional storage details.</li>
                                <li><strong>Conceptual Level:</strong>At conceptual level, data is represented in the form of various database tables. For Example, STUDENT database may contain STUDENT and COURSE tables which will be visible to users but users are unaware of their storage.Also referred as logical schema,it describes what kind of data is to be stored in the database.</li>                            
                                <li><strong>External Level:</strong>An external level specifies a view of the data in terms of conceptual level tables.  Each external level view is used to cater to the needs of a particular category of users. For Example, FACULTY of a university is interested in looking course details of students, STUDENTS are interested in looking at all details related to academics, accounts, courses and hostel details as well. So, different views can be generated for different users. The main focus of external level is data abstraction.</li>
                            </ul>
                            <br/>
                            <img src={threeLevelImage} alt="3-Tier Architecture"></img>
                            </p>
                            <br/>
                        </section>
                    </div>
            </div>
    )
};

export default Dbms;
