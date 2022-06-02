import React from 'react';
import './dbms.css'; 
import Sidenavdbms from './Sidenavdbms.js';
import { NavBarLoggedIn } from '../../navbar/navbar';

const Dbms = () => {
    var threeLevelImage = require('./3-level.jpg');
    var acidImage = require('./acid.png');
    var levelsImage = require('./levels.jpeg');
    return (
            <>
            <NavBarLoggedIn></NavBarLoggedIn>
            <div></div>
            <Sidenavdbms></Sidenavdbms>
            <div className="container-fluid">
            <div className="contents">
                <h2 id="DBMS">Database Management System (DBMS)</h2><br />
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
                    <p>The software which is used to manage database is called Database Management System (DBMS). For Example, MySQL, Oracle etc. are popular commercial DBMS used in different applications. DBMS allows users the following tasks:<br />
                        <br />
                        <ul>
                            <li><strong>Data Definition:</strong> It helps in creation, modification and removal of definitions that define the organization of data in database.
                            </li><li><strong>Data Updation:</strong> It helps in insertion, modification and deletion of the actual data in the database.
                            </li><li><strong>Data Retrieval:</strong> It helps in retrieval of data from the database which can be used by applications for various purposes.
                            </li><li><strong>User Administration:</strong> It helps in registering and monitoring users, enforcing data security, monitoring performance, maintaining data integrity, dealing with concurrency control and recovering information corrupted by unexpected failure.</li>
                        </ul>
                    </p><br />
                </section>

                <section id="Why">
                    <h4><strong>Why DBMS?</strong></h4>
                    <p>
                        File System manages data using files in hard disk. Users are allowed to create, delete, and update the files according to their requirement. Let us consider the example of file based University Management System. Data of students is available to their respective Departments, Academics Section, Result Section, Accounts Section, Hostel Office etc. Some of the data is common for all sections like Roll No, Name, Father Name, Address and Phone number of students but some data is available to a particular section only like Hostel allotment number which is a part of hostel office.<br/><br/> Let us discuss the issues with this system:
                        <br /> <br />
                        <ul>
                            <li><strong>Redundancy of data:</strong> Data is said to be redundant if same data is copied at many places. If a student wants to change Phone number, he has to get it updated at various sections. Similarly, old records must be deleted from all sections representing that student.
                            </li>
                            <li><strong>Inconsistency of Data:</strong> Data is said to be inconsistent if multiple copies of same data does not match with each other. If Phone number is different in Accounts Section and Academics Section, it will be inconsistent. Inconsistency may be because of typing errors or not updating all copies of same data.
                            </li>
                            <li><strong>Difficult Data Access:</strong> A user should know the exact location of file to access data, so the process is very cumbersome and tedious. If user wants to search student hostel allotment number of a student from 10000 unsorted students’ records, how difficult it can be.
                            </li>
                            <li><strong>Unauthorized Access:</strong> File System may lead to unauthorized access to data. If a student gets access to file having his marks, he can change it in unauthorized way.
                            </li>
                            <li><strong>No Concurrent Access:</strong> The access of same data by multiple users at same time is known as concurrency. File system does not allow concurrency as data can be accessed by only one user at a time.
                            </li>
                            <li><strong>No Backup and Recovery:</strong> File system does not incorporate any backup and recovery of data if a file is lost or corrupted.
                            </li>
                        </ul>
                    </p><br />
                </section>

                <section id="Architecture">
                    <h4><strong>3-Level Architecture</strong></h4>
                    <p>
                        DBMS 3-level architecture divides the complete system into three inter-related but independent modules as shown below:
                        <br /> <br />
                        <ul>
                            <li><strong>Physical Level:</strong> At the physical level, the information about the location of database objects in the data store is kept. Various users of DBMS are unaware of the locations of these objects.In simple terms,physical level of a database describes how the data is being stored in secondary storage devices like disks and tapes and also gives insights on additional storage details.</li>
                            <li><strong>Conceptual Level:</strong> At conceptual level, data is represented in the form of various database tables. For Example, STUDENT database may contain STUDENT and COURSE tables which will be visible to users but users are unaware of their storage.Also referred as logical schema,it describes what kind of data is to be stored in the database.</li>
                            <li><strong>External Level:</strong> An external level specifies a view of the data in terms of conceptual level tables.  Each external level view is used to cater to the needs of a particular category of users. For Example, FACULTY of a university is interested in looking course details of students, STUDENTS are interested in looking at all details related to academics, accounts, courses and hostel details as well. So, different views can be generated for different users. The main focus of external level is data abstraction.</li>
                        </ul>
                        <br />
                        <img src={threeLevelImage} alt="3-Tier Architecture"></img>
                    </p>
                    <br />
                </section>

                <section id="Independence">
                    <h4><strong>Data Independence</strong></h4>
                    <p>
                    Data independence means a change of data at one level should not affect another level. Two types of data independence are present in this architecture:
                    <br />
                    <br />
                    <ul>
                        <li>
                            <strong>Physical Data Independence:</strong> Any change in the physical location of tables and indexes should not affect the conceptual level or
                             external view of data. This data independence is easy to achieve and implemented by most of the DBMS.
                        </li>
                        <li>
                            <strong>Conceptual Data Independence:</strong> The data at conceptual level schema and external level schema must be independent. This means a change in conceptual schema should not affect external schema. e.g.; Adding or deleting attributes of a table should not affect the user’s view of the table. But this type of independence is difficult to achieve as compared to physical data independence because the changes in conceptual schema are reflected in the user’s view.
                        </li>
                    </ul>
                    </p>
                    <br />
                </section>

                <section id="Phases">
                    <h4><strong>Phases of Database Design</strong></h4>
                    <p>
                    Database designing for a real-world application starts from capturing the requirements to physical implementation using DBMS software which consists of following steps shown below:
                    <br/><br/>
                    <ul>
                        <li>
                            <strong>Conceptual Design:</strong> The requirements of database are captured using high level conceptual data model. For Example, the ER model is used for the conceptual design of the database.
                        </li>
                        <li><strong>Logical Design:</strong> Logical Design represents data in the form of relational model. ER diagram produced in the conceptual design phase is used to convert the data into the Relational Model.</li>
                        <li><strong>Physical Design:</strong> In physical design, data in relational model is implemented using commercial DBMS like Oracle, DB2.</li>
                    </ul>
                    </p>
                    <br/>
                </section>

                <section id="Advantages">
                    <h4><strong>Advantages of DBMS</strong></h4>
                    <p>
                    DBMS helps in efficient organization of data in database which has following advantages over typical file system:
                    <br/> <br/>
                    <ul>
                        <li><strong>Minimized redundncy and data Inconsistency:</strong> Data is normalized in DBMS to minimize the redundancy which helps in keeping data consistent. For Example, student information can be kept at one place in DBMS and accessed by different users.This minimized redundancy is due to primary key and foreign keys.</li>
                        <li><strong>Multiple Data Views:</strong> Different views of same data can be created to cater the needs of different users. For Example, faculty salary information can be hidden from student view of data but shown in admin view.</li>
                        <li><strong>Simplified Data Access:</strong> A user need only name of the relation not exact location to access data, so the process is very simple.</li>
                        <li><strong>Data Security:</strong> Only authorized users are allowed to access the data in DBMS. Also, data can be encrypted by DBMS which makes it secure.</li>
                        <li><strong>Concurrent access of Data:</strong> Data can be accessed concurrently by different users at same time in DBMS.</li>
                        <li><strong>Backup and Recovery Mechanism:</strong> DBMS backup and recovery mechanism helps to avoid data loss and data inconsistency in case of catastrophic failures.</li>
                    </ul>
                    </p><br/>
                </section>

                <section id="Concurrency">
                    <h4><strong>Concurrency Control</strong></h4>
                    <p>
                    Concurrency Control deals with interleaved execution of more than one transaction. In the next article, we will see what is serializability and how to find whether a schedule is serializable or not.
                    <br/><br/>
                    <strong>Transaction:</strong> A set of logically related operations is known as transaction. The main operations of a transaction are:
                    <br/><br/>
                    <ul>
                        <li><strong>Read(A):</strong> Read operations Read(A) or R(A) reads the value of A from the database and stores it in a buffer in main memory.</li>
                        <li><strong>Write(A):</strong> Write operation Write(A) or W(A) writes the value back to the database from buffer.</li>
                    </ul>
                    Let us take a debit transaction from an account which consists of following operations:
                    <code>
                        <br/><br/>
                        R(A);<br/>
                        A=A-1000;<br/>
                        W(A);<br/>
                    </code>
                    <br/>
                    Assume A’s value before starting of transaction is 5000.
                    <code>
                    <br/> <br/>
                    The first operation reads the value of A from database and stores it in a buffer.<br/>
                    Second operation will decrease its value by 1000. So buffer will contain 4000.<br/>
                    Third operation will write the value from buffer to database. So A’s final value will be 4000.<br/>
                    </code>
                    <br/>
                    But it may also be possible that transaction may fail after executing some of its operations. The failure can be because of hardware, software or power etc. For example, if debit transaction discussed above fails after executing operation 2, the value of A will remain 5000 in the database which is not acceptable by the bank. To avoid this, Database has two important operations:
                    
                    <br/><br/>
                    <ul>
                        <li><strong>Commit:</strong> After all instructions of a transaction are successfully executed, the changes made by transaction are made permanent in the database.</li>
                        <li><strong>Rollback:</strong> If a transaction is not able to execute all operations successfully, all the changes made by transaction are undone.</li>
                    </ul>
                    </p>
                    <br/>
                </section>

                <section id="ACID">
                    <h4><strong>ACID Properties of Transaction</strong></h4>
                    <p>
                    <br/>
                        <ul>
                            <li><strong>Atomicity: </strong>As a transaction is set of logically related operations, either all of them should be executed or none. A debit transaction discussed above should either execute all three operations or none.If debit transaction fails after executing operation 1 and 2 then its new value 4000 will not be updated in the database which leads to inconsistency.</li>
                            <li><strong>Consistency: </strong>If operations of debit and credit transactions on same account are executed concurrently, it may leave database in an inconsistent state.</li>
                            <li><strong>Isolation: </strong>Result of a transaction should not be visible to others before transaction is committed. For example, Let us assume that A’s balance is Rs. 5000 and T1 debits Rs. 1000 from A. A’s new balance will be 4000. If T2 credits Rs. 500 to A’s new balance, A will become 4500 and after this T1 fails. Then we have to rollback T2 as well because it is using value produced by T1. So a transaction results are not made visible to other transactions before it commits.</li>
                            <li><strong>Durability: </strong>Once database has committed a transaction, the changes made by the transaction should be permanent. e.g.; If a person has credited $500000 to his account, bank can’t say that the update has been lost. To avoid this problem, multiple copies of database are stored at different locations.</li>
                        </ul>
                        <br/>
                        <img src={acidImage} alt="ACID Properties"></img>
                        <br/><br/>
                    </p>
                </section>

                    <h2 id="Normalization">Database Normalization</h2>
                    <p>
                    Database normalization is the process of organizing the attributes of the database to reduce or eliminate data redundancy (having the same data but at different places) . 
                    <br/>
                    </p>
                
                <section id="Redundancy">
                    <h4><strong>Problems of Data Redundancy</strong></h4>
                    <p>
                    Data redundancy unnecessarily increases the size of the database as the same data is repeated in many places. Inconsistency problems also arise during insert, delete and update operations. 
                    <br/>
                    </p>
                </section>

                <section id="Functional">
                    <h4><strong>Functional Dependency</strong></h4>
                    <p>
                    Functional Dependency is a constraint between two sets of attributes in relation to a database. A functional dependency is denoted by an arrow (→). If an attribute A functionally determines B, then it is written as A → B. 
                    <br/><br/>
                    For example, employee_id → name means employee_id functionally determines the name of the employee. As another example in a timetable database, <code> {"{"}student_id, time{"}"}  → {"{"}lecture_room{"}"}</code> , student ID and time determine the lecture room where the student should be.
                    <br/><br/>
                    A function dependency A → B means for all instances of a particular value of A, there is the same value of B. 
                    <br/>
                    For example in the below table A → B is true, but B → A is not true as there are different values of A for B = 3.   
                    <br/><br/>
                    <table>
                        <tr>
                            <th>A</th>
                            <th>B</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>0</td>
                        </tr>
                    </table>
                    <br/>
                    <ul>
                    <li>
                    <strong>Trivial Functional Dependency <br/><br/> </strong>
                    </li>
                    X → Y is trivial only when Y is subset of X.
                    <br/><br/>
                    Examples:
                    <code>
                    <br/> <br/>
                    ABC → AB<br/>
                    ABC → A<br/>
                    ABC → ABC<br/>
                    </code>
                    <br/> 
                    <li>
                    <strong>Non Trivial Functional Dependencies</strong>
                    </li> 
                    <br/>
                    X → Y is a non trivial functional dependency when Y is not a subset of X. <br/>
                    X → Y is called completely non-trivial when X intersect Y is NULL. 
                    <br/><br/>
                    Examples:
                    <code>
                        <br/><br/>
                        Id → Name<br/> 
                        Name → DOB<br/>
                    </code>
                    <br/>
                    <li>
                    <strong>Semi Non Trivial Functional Dependencies</strong>
                    </li> 
                    <br/>
                    X → Y is called semi non-trivial when X intersect Y is not NULL.  
                    <br/><br/>
                    Examples:
                    <code>
                        <br/><br/>
                        AB → BC<br/>
                        AD → DC<br/>
                    </code>
                    <br/>
                    </ul>
                    </p>
                </section>

                <section id="NormalForms">
                    <h4><strong>Types of Normal Forms</strong></h4>
                    <p>
                    Normalization is the process of minimizing redundancy from a relation or set of relations. Redundancy in relation may cause insertion, deletion, and update anomalies. So, it helps to minimize the redundancy in relations. Normal forms are used to eliminate or reduce redundancy in database tables.
                    <ol>
                        <li><strong>First Normal Form: </strong>If a relation contain composite or multi-valued attribute, it violates first normal form or a relation is in first normal form if it does not contain any composite or multi-valued attribute. A relation is in first normal form if every attribute in that relation is singled valued attribute.</li>
                        <li><strong>Second Normal Form: </strong>To be in second normal form, a relation must be in first normal form and relation must not contain any partial dependency. A relation is in 2NF if it has No Partial Dependency, i.e., no non-prime attribute (attributes which are not part of any candidate key) is dependent on any proper subset of any candidate key of the table.</li>
                        <li><strong>Third Normal Form: </strong>A relation is in third normal form, if there is no transitive dependency for non-prime attributes as well as it is in second normal form. A relation is in 3NF if at least one of the following condition holds in every non-trivial function dependency X -{'>'} Y .
                        <br/>
                        X is a super key. Y is a prime attribute (each element of Y is part of some candidate key).<br/>
                        </li>
                        <li><strong>Boyce-Codd Normal Form (BCNF): </strong>A relation R is in BCNF if R is in Third Normal Form and for every FD, LHS is super key. A relation is in BCNF iff in every non-trivial functional dependency X -{'>'} Y, X is a super key.</li>
                    </ol>
                    <img src={levelsImage} alt="Levels of Normal Forms" sizes='medium'></img>
                    </p>
                </section>

            </div>
        </div></>
    )
};

export default Dbms;
