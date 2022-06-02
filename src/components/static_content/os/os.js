import React from 'react';
import { NavBarLoggedIn } from '../../navbar/navbar';
import './os.css'; 
import Sidenav from './sidenavos';



const Os = () => {
    var concepview = require('./os1.png');
    var procimg = require('./process.png');
    var schedimg = require('./sched.png'); 
    var critimg = require('./crit.png');
    var deadimg = require('./deadlock.png')
    return (
            
            <>
            <NavBarLoggedIn></NavBarLoggedIn>
            <Sidenav></Sidenav>
            <div id="about" className="container-fluid">
                    <div className="contents">
                        <h2 id="os" >Operating System (OS)</h2><br />
                        <section id="Database">
                         <h4><strong>What is a OS?</strong></h4>
                         <p>
                         An operating system is a program that controls the execution of application programs and acts as an interface between the user of a computer and the computer hardware.A more common definition is that the operating system is the one program running at all times on the computer (usually called the kernel), with all else being application programs.
                         An operating system is concerned with the allocation of resources and services, such as memory, processors, devices, and information. The operating system correspondingly includes programs to manage these resources, such as a traffic controller, a scheduler, a memory management module, I/O programs, and a file system.
                         
                         </p><br />
                        </section>
                        <section id="Features">
                        <h4 id="fun"><strong>Functions of Operating system  </strong></h4> 
                         <p>Operating system performs three functions<br/>
                         <ul>
                         <li><strong>Convenience:</strong>  An OS makes a computer more convenient to use.</li>
                         <li><strong>Efficiency:</strong>  An OS allows the computer system resources to be used efficiently.
                         </li><li><strong>Ability to evolve:</strong>An OS should be constructed in such a way as to permit the effective development, testing, and introduction of new system functions at the same time without interfering with service.
                         </li><li><strong>Throughput:</strong> An OS should be constructed so that It can give maximum throughput(Number of tasks per unit time).</li>
                        </ul>
                        </p><br/>
                       </section> 
                       <section id="Features">
                        <h4><strong>Major Functionalities of Operating System:  </strong></h4> 
                         <p>Operating system performs three functions<br/>
                         <ul>
                         <li><strong>Resource Management:</strong> When parallel accessing happens in the OS means when multiple users are accessing the system the OS works as Resource Manager, Its responsibility is to provide hardware to the user. It decreases the load in the system.</li>
                         <li><strong>Process Management:</strong> It includes various tasks like scheduling, termination of the process. OS manages various tasks at a time. Here CPU Scheduling happens means all the tasks would be done by the many algorithms that use for scheduling.</li>
                         <li><strong>Storage Management:</strong> The file system mechanism used for the management of the storage. NIFS, CFS, CIFS, NFS, etc. are some file systems. All the data stores in various tracks of Hard disks that all managed by the storage manager. It included Hard Disk.</li>
                         <li><strong>Memory Management:</strong> Refers to the management of primary memory. The operating system has to keep track, how much memory has been used and by whom. It has to decide which process needs memory space and how much. OS also has to allocate and deallocate the memory space.</li>
                         <li><strong>Security/Privacy Management:</strong> Privacy is also provided by the Operating system by means of passwords so that unauthorized applications can’t access programs or data. For example, Windows uses Kerberos authentication to prevent unauthorized access to data.</li>

                       
                        </ul>
                        </p><br/>
                       </section> 
                       <img src= {concepview} alt="Conceptual view of a computer system " class="pic"></img>
                       <br></br>
                       <section id="Features">
                        <h4 id="types"><strong>Types of Operating system</strong></h4> 
                         <p>
                         <ul>
                         <li><strong>Batch Operating System-</strong>  Sequence of jobs in a program on a computer without manual interventions.</li>
                         <li><strong>Time Sharing Operating System-</strong> allows many users to share the computer resources. (Max utilization of the resources).</li>
                         <li><strong>Distributed operating System-</strong> Manages a group of different computers and makes appear to be a single computer.</li>
                         <li><strong>Network operating system-</strong>computers running in different operating systems can participate in a common network (It is used for security purposes).</li>
                         <li><strong>Real-time operating system-</strong>meant applications to fix the deadlines.</li>

                       
                        </ul>
                        </p>
                      </section>
                       
                       <h5>Examples of Operating System are – </h5>
                       <p>
                       <ul>
                       <li>Windows (GUI based, PC)</li>
                       <li>GNU/Linux (Personal, Workstations, ISP, File and print server, Three-tier client/Server)</li>
                       <li>macOS (Macintosh), used for Apple’s personal computers and workstations (MacBook, iMac)</li>
                       <li>Android (Google’s Operating System for smartphones/tablets/smartwatches)</li>
                       <li>iOS (Apple’s OS for iPhone, iPad, and iPod Touch)</li>
                        </ul>
                        </p>
                        <section id="Features">
                            <h4><strong>Difference between Multiprogramming, multitasking, multithreading and multiprocessing</strong></h4>
                            <p>
                            <ol>
                                <li><strong>Multiprogramming –</strong> A computer running more than one program at a time (like running Excel and Firefox simultaneously). </li>
                                <li><strong>Multiprocessing –</strong> A computer using more than one CPU at a time. Multiprocessing is the use of two or more CPUs (processors) within a single Computer system. The term also refers to the ability of a system to support more than one processor within a single computer system. </li>                            
                                <li><strong>Multitasking –</strong> Tasks sharing a common resource (like 1 CPU). Multitasking is a logical extension of multi programming. The major way in which multitasking differs from multi programming is that multi programming works solely on the concept of context switching whereas multitasking is based on time sharing alongside the concept of context switching.</li>
                                <li><strong>Multithreading –</strong>It is an extension of multitasking.A thread is a basic unit of CPU utilization. Multi threading is an execution model that allows a single process to have multiple code segments (i.e., threads) running concurrently within the “context” of that process.</li>
                            <br/>
                            </ol>
                            </p>
                            
                            <br/>
                        </section>
                        <h3 id="proc"><strong>Process</strong></h3>
                        <h4><strong>Program vs Process</strong> </h4>
                        <p>A process is a program in execution. For example, when we write a program in C or C++ and compile it, the compiler creates binary code. The original code and binary code are both programs. When we actually run the binary code, it becomes a process. A process is an ‘active’ entity, instead of a program, which is considered a ‘passive’ entity. A single program can create many processes when run multiple times; for example, when we open a .exe or binary file multiple times, multiple instances begin (multiple processes are created).</p>
                        <h4><strong>Attributes or Characteristics of a Process</strong></h4>
                        <p>
                        <ol>
                        
                       <li>Process Id</li>
                       <li>Process State</li>
                       <li>CPU registers</li>
                       <li>Accounts information</li>
                       <li>I/O status information</li>
                       <li> CPU scheduling information</li>
                       </ol>
                       </p>
                       <section id="features">
                           <h4 id="stat"><strong>States of Process</strong></h4>
                           <p>
                           <ul>
                               <li><strong>New:</strong> Newly Created Process (or) being-created process.</li>
                               <li><strong>Ready:</strong> After creation process moves to Ready state, i.e. the process is ready for execution</li>
                               <li><strong>Run:</strong>Currently running process in CPU (only one process at a time can be under execution in a single processor).</li>
                               <li><strong>Wait (or Block):</strong> When a process requests I/O acc</li>
                               <li><strong>Suspended Ready:</strong> When the ready queue becomes full, some processes are moved to suspended ready s</li>
                               <li><strong> Suspended Block:</strong> When waiting queue becomes full.</li>
                           </ul>
                           </p>
                       </section>
                       <img src={procimg} alt="States of Process" class="pic"></img>
                       <h4><strong>What is Process Scheduling?</strong></h4>
                       <p>Process Scheduling is the process of the process manager handling the removal of an active process from the CPU and selecting another process based on a specific strategy.Process Scheduling is an integral part of Multi-programming applications. Such operating systems allow more than one process to be loaded into usable memory at a time and the loaded shared CPU process uses repetition time.</p>
                        <h4><strong>What are the different terminologies to take care of in any CPU Scheduling algorithm?</strong></h4>
                        <section id="features">
                           <p>
                           <ul>
                               <li><strong>Arrival Time:</strong> Time at which the process arrives in the ready queue.</li>
                               <li><strong>Completion Time:</strong> Time at which process completes its execution.</li>
                               <li><strong>Burst Time:</strong>Time required by a process for CPU execution.</li>
                               <li><strong>Turn Around Time:</strong> Time Difference between completion time and arrival time.</li>
                           </ul>
                           </p>
                       </section>
                       <h4 id="cpu"><strong>What are the different types of CPU Scheduling Algorithms?</strong></h4>
                       <section id="features">
                        <p>
                       There are mainly two types of scheduling methods:
                           <ul>
                               <li><strong>Preemptive Scheduling:</strong> Preemptive scheduling is used when a process switches from running state to ready state or from the waiting state to the ready state.</li>
                               <li><strong>Non-Preemptive Scheduling: </strong> Non-Preemptive scheduling is used when a process terminates , or when a process switches from running state to waiting state.</li>
                             
                             
                           </ul>
                           </p>
                           </section>
                           <img src={schedimg} alt="Types of Scheduling " class="pic"></img>
                           <section id="features">
                               <p>
                           <ol>
                               <li><strong>First Come First Serve:</strong> FCFS considered to be the simplest of all operating system scheduling algorithms. First come first serve scheduling algorithm states that the process that requests the CPU first is allocated the CPU first and is implemented by using FIFO queue.
                               <br/>
                               <h5>Characteristics</h5>
                               <ul>
                                   <li>FCFS supports non-preemptive and preemptive CPU scheduling algorithms.</li>
                                   <li>Tasks are always executed on a First-come, First-serve concept.</li>
                                   <li>FCFS is easy to implement and use.</li>
                               </ul>
                               <br/>
                               <h5>Advantages</h5>
                               <ul>
                                   <li>Easy to implement</li>
                                   <li>First come, first serve method</li>
                               </ul>
                               <br/>
                               <h5>Disadvantages</h5>
                               <ul>
                                   <li>The average waiting time is much higher than the other algorithms.</li>
                                   <li>FCFS is very simple and easy to implement and hence not much efficient.</li>
                                   
                               </ul>
                               <br/>

                               </li>
                               <li><strong> Shortest Job First(SJF):</strong> Shortest job first (SJF) is a scheduling process that selects the waiting process with the smallest execution time to execute next. This scheduling method may or may not be preemptive. Significantly reduces the average waiting time for other processes waiting to be executed. 
                               <br/>
                               <h5>Characteristics</h5>
                               <ul>
                                   <li>Shortest Job first has the advantage of having a minimum average waiting time among all operating system scheduling algorithms.</li>
                                   <li>It is associated with each task as a unit of time to complete.</li>
                                   <li>It may cause starvation if shorter processes keep coming. This problem can be solved using the concept of ageing.</li>
                               </ul>
                               <br/>
                               <h5>Advantages</h5>
                               <ul>
                                   <li>As SJF reduces the average waiting time thus, it is better than the first come first serve scheduling algorithm.</li>
                                   <li>SJF is generally used for long term scheduling</li>
                               </ul>
                               <br/>
                               <h5>Disadvantages</h5>
                               <ul>
                                   <li>One of the demerit SJF has is stavarvation.</li>
                                   <li>any times it becomes complicated to predict the length of the upcoming CPU request</li>
                                   
                               </ul>
                               <br/>

                               </li>
                               
                               <li><strong> Longest Job First(LJF):</strong> Longest Job First(LJF) scheduling process is just opposite of shortest job first (SJF), as the name suggests this algorithm is based upon the fact that the process with the largest burst time is processed first. Longest Job First is non-preemptive in nature. 
                               <br/>
                               <h5>Characteristics</h5>
                               <ul>
                                   <li>Among all the processes waiting in a waiting queue, CPU is always assigned to the process having largest burst time.</li>
                                   <li>If two processes have the same burst time then the tie is broken using FCFS i.e. the process that arrived first is processed first. </li>
                                   <li>LJF CPU Scheduling can be of both preemptive and non-preemptive types</li>
                               </ul>
                               <br/>
                               <h5>Advantages</h5>
                               <ul>
                                   <li>No other task can schedule until the longest job or process executes completely.</li>
                                   <li>All the jobs or processes finish at the same time approximately.</li>
                               </ul>
                               <br/>
                               <h5>Disadvantages</h5>
                               <ul>
                                   <li>Generally, the LJF algorithm gives a very high average waiting time and average turn-around time for a given set of processes.</li>
                                   <li>This may lead to convoy effect.</li>
                                   
                               </ul>
                               <br/>

                               </li>

                               <li><strong>Priority Scheduling:</strong> Preemptive Priority CPU Scheduling Algorithm is a pre-emptive method of CPU scheduling algorithm that works based on the priority of a process. In this algorithm, the editor sets the functions to be as important, meaning that the most important process must be done first. In the case of any conflict, that is, where there are more than one processor with equal value, then the most important CPU planning algorithm works on the basis of the FCFS (First Come First Serve) algorithm
                               <br/>
                               <h5>Characteristics</h5>
                               <ul>
                                   <li>Schedules tasks based on priority.</li>
                                   <li>Lower is the number assigned, higher is the priority level of a process. </li>
                                
                               </ul>
                               <br/>
                               <h5>Advantages</h5>
                               <ul>
                                   <li>The average waiting time is less than FCFS</li>
                                   <li>Less complex</li>
                               </ul>
                               <br/>
                               <h5>Disadvantages</h5>
                               <ul>
                                   <li>One of the most common demerits of the Preemptive priority CPU scheduling algorithm is the Starvation Problem. This is the problem in which a process has to wait for a longer amount of time to get scheduled into the CPU. This condition is called the starvation problem.</li>
                                 
                                   
                               </ul>
                               <br/>

                               </li>
                               <li><strong> Shortest Remaining Time First:</strong>Shortest remaining time first is the preemptive version of the Shortest job first which we have discussed earlier where the processor is allocated to the job closest to completion. In SRTF the process with the smallest amount of time remaining until completion is selected to execute.
                               <br/>
                               <h5>Characteristics</h5>
                               <ul>
                                   <li>SRTF algorithm makes the processing of the jobs faster than SJN algorithm, given it’s overhead charges are not counted.</li>
                                   <li>The context switch is done a lot more times in SRTF than in SJN and consumes the CPU’s valuable time for processing. This adds up to its processing time and diminishes its advantage of fast processing.</li>
                               </ul>
                               <br/>
                               <h5>Advantages</h5>
                               <ul>
                                   <li>In SRTF the short processes are handled very fast.</li>
                                   <li>The system also requires very little overhead since it only makes a decision when a process completes or a new process is added. </li>
                               </ul>
                               <br/>
                               <h5>Disadvantages</h5>
                               <ul>
                                   <li>Like the shortest job first, it also has the potential for process starvation</li>
                                   <li>Long processes may be held off indefinitely if short processes are continually added. </li>
                                   
                               </ul>
                               <br/>
                               </li>
                               
                               
                           </ol>
                           </p>
                           
                       </section>
                       <h3 id="sync"><strong>Process Synchronization</strong></h3>
                       <h4><strong>Race Condition</strong><br/></h4>
                    <p>When more than one processes are executing the same code or accessing the same memory or any shared variable in that condition there is a possibility that the output or the value of the shared variable is wrong so for that all the processes doing the race to say that my output is correct this condition known as a race condition. Several processes access and process the manipulations over the same data concurrently, then the outcome depends on the particular order in which the access takes place.</p>
                    <br/><h4><strong>Critical Section Problem</strong></h4><br/>
                    <p>Critical section is a code segment that can be accessed by only one process at a time. Critical section contains shared variables which need to be synchronized to maintain consistency of data variables.</p>
                   <br/> <img src={critimg} alt="Critical Section " class="pic"></img><br/>
                    <p>Any solution to the critical section problem must satisfy three requirements:</p>
                    <section id="features">
                        <p>
                           <ol>
                               <li><strong>Mutual Exclusion :</strong> If a process is executing in its critical section, then no other process is allowed to execute in the critical section.</li>
                               <li><strong>Progress :</strong>  If no process is executing in the critical section and other processes are waiting outside the critical section, then only those processes that are not executing in their remainder section can participate in deciding which will enter in the critical section next, and the selection can not be postponed indefinitely.</li>
                               <li><strong>Bounded Waiting </strong>  A bound must exist on the number of times that other processes are allowed to enter their critical sections after a process has made a request to enter its critical section and before that request is granted.</li>
                           </ol>
                           </p>
                       </section>
                       <h4><strong>Deadlock</strong></h4>
                       <p>Deadlock is a situation where a set of processes are blocked because each process is holding a resource and waiting for another resource acquired by some other process. 
                       Consider an example when two trains are coming toward each other on the same track and there is only one track, none of the trains can move once they are in front of each other. A similar situation occurs in operating systems when there are two or more processes that hold some resources and wait for resources held by other(s). For example, in the below diagram, Process 1 is holding Resource 1 and waiting for resource 2 which is acquired by process 2, and process 2 is waiting for resource 1. </p>
                       <br/> <img src={deadimg} alt="deadlock " class="pic"></img><br/>
                       <h4><strong>Deadlock can arise if the following four conditions hold simultaneously (Necessary Conditions) </strong></h4>
                       <section id="features">
                           <p>
                           <ol>
                               
                               <li><strong>Mutual Exclusion :</strong>Two or more resources are non-shareable (Only one process can use at a time) </li>
                               <li><strong>Hold and Wait :</strong> A process is holding at least one resource and waiting for resources.</li>
                               <li><strong>No Preemption :</strong> A resource cannot be taken from a process unless the process releases the resource. </li>
                               <li><strong>circular Wait :</strong> A set of processes are waiting for each other in circular form.</li>
                           </ol>
                           </p>
                       </section>
                       <h4><strong>Methods for handling deadlock </strong></h4>
                       <p>
                       <ul>
                           <li>Deadlock prevention or avoidance: The idea is to not let the system into a deadlock state. One can zoom into each category individually, Prevention is done by negating one of above mentioned necessary conditions for deadlock. </li>
                           <li>Deadlock detection and recovery: Let deadlock occur, then do preemption to handle it once occurred.</li>
                           <li> Ignore the problem altogether: If deadlock is very rare, then let it happen and reboot the system. This is the approach that both Windows and UNIX take.</li>
                       </ul>
                       </p>
                    </div>
            </div></>
    )
};

export default Os;