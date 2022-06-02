import React from 'react';
import './sorting.css'; 
import Sidenav from './Sidenavsort';
import { NavBarLoggedIn } from '../../navbar/navbar';

const Sort = () => {
    var bubsort = require('./Bubblesort.webp');
    var  selsort = require('./selection-sort.png')
    var mersort = require('./merge-sort-example_0.webp')
    var qusort = require('./quick.png')
    var shsort = require('./shellsort.jpg')
    var hpsort = require('./heapsort.png')
    return (
            <>
            <NavBarLoggedIn></NavBarLoggedIn>
            <Sidenav></Sidenav>
            <div id="about" className="container-fluid">
                    <div className="contents">
                        <h2>Sorting Algorithms</h2><br />
                        <section id="Database">
                         <p>
                         A Sorting Algorithm is used to rearrange a given array or list elements according to a comparison operator on the elements. The comparison operator is used to decide the new order of element in the respective data structure.
                         
                         </p><br />
                        </section>
                        <section id="Features">
                        <h4><strong>Types of Sorting</strong></h4> 
                         <p>The software which is used to manage database is called Database Management System (DBMS). For Example, MySQL, Oracle etc. are popular commercial DBMS used in different applications. DBMS allows users the following tasks:<br/>
                         <ul>
                         <li><strong>Internal Sorting: </strong>    When all data is placed in the main memory or internal memory then sorting is called internal sorting.In internal sorting, the problem cannot take input beyond its size.Example: heap sort, bubble sort, selection sort, quick sort, heap sort, shell sort, insertion sort.
                         </li><li><strong>External Sorting: </strong>     When all data that needs to be sorted cannot be placed in memory at a time, the sorting is called external sorting.External Sorting is used for the massive amount of data.  Merge Sort and its variations are typically used for external sorting. Some external storage like hard disks and CDs are used for external sorting.Example: Merge sort, Tag sort, Polyphase sort, Four tape sort, External radix sort, Internal merge sort, etc.</li>
                         </ul>
                        </p><br/>
                       </section> 

                       <section id="Features">
                       <h4 id="sl"><strong>Selection Sort</strong></h4>
                       <p>
                       The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.
                       <ul>
                           <li>The subarray which is already sorted.</li>
                           <li>Remaining subarray which is unsorted.</li>
                       </ul>
                       In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray. 
                       <br/><br/><strong>Time Complexity:</strong>O(N<sup>2</sup>)
                       </p><br/>
                       <img  src={selsort} alt="deadlock " class="pic" ></img><br/>
                       </section>

                       <section id="Features">
                       <h4 id="bb"><strong>Bubble Sort</strong></h4>
                       <p>
                       Bubble sort works on the repeatedly swapping of adjacent elements until they are not in the intended order. It is called bubble sort because the movement of array elements is just like the movement of air bubbles in the water. Bubbles in water rise up to the surface; similarly, the array elements in bubble sort move to the end in each iteration..
                        
                       <br/><br/><strong>Time Complexity:</strong> O(N<sup>2</sup>)
                       <br/><br/>The worst-case condition for bubble sort occurs when elements of the array are arranged in decreasing order.In the worst case, the total number of iterations or passes required to sort a given array is (n-1). where ‘n’ is a number of elements present in the array.
                       </p><br/>
                       <img src={bubsort} alt="deadlock " class="pic"></img><br/>
                       </section>


                       <section id="Features">
                       <h4 id="mg"><strong>Merge Sort</strong></h4>
                       <p>
                       Merge Sort is one of the most popular sorting algorithms that is based on the principle of Divide and Conquer Algorithm.Using the Divide and Conquer technique, we divide a problem into subproblems. When the solution to each subproblem is ready, we 'combine' the results from the subproblems to solve the main problem.
                        
                       <br/><br/><strong>Time Complexity:</strong> O(NlogN)
                       
                       </p><br/>
                       <img src={mersort} alt="deadlock " class="pic"></img><br/>
                       </section>


                       <section id="Features">
                       <h4 id="qs"><strong>Quick Sort</strong></h4>
                       <p>
                       Like Merge Sort, QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways. 
                       <ul>
                           <li>Always pick first element as pivot</li>
                           <li>Always pick last element as pivot</li>
                           <li>Pick a random element as pivot.</li>
                           <li>Pick median as pivot.</li>
                       </ul>
                       The key process in quickSort is partition(). Target of partitions is, given an array and an element x of array as pivot, put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x. All this should be done in linear time. 
                       <br/><br/><strong>Time Complexity:</strong> O(N<sup>2</sup>)
                       </p><br/>
                       <img src={qusort} alt="deadlock " class="pic"></img><br/>
                       </section>



                       <section id="Features">
                       <h4 id="ss"><strong>Shell Sort</strong></h4>
                       <p>
                       Shell sort is mainly a variation of Insertion Sort. In insertion sort, we move elements only one position ahead. When an element has to be moved far ahead, many movements are involved. The idea of ShellSort is to allow the exchange of far items. In Shell sort, we make the array h-sorted for a large value of h. We keep reducing the value of h until it becomes 1. An array is said to be h-sorted if all sublists of every h’th element are sorted. 
                       <br/><br/><strong>Time Complexity:</strong> O(N<sup>2</sup>)
                       </p><br/>
                       <img src={shsort} alt="deadlock " class="pic"></img><br/>
                       </section>


                       <section id="Features">
                       <h4 id="hs"><strong>Heap Sort</strong></h4>
                       <p>
                      
                       Heap sort is a comparison-based sorting technique based on Binary Heap data structure. It is similar to selection sort where we first find the minimum element and place the minimum element at the beginning. We repeat the same process for the remaining elements 
                       <br/><br/>
                       In heap sort, basically, there are two phases involved in the sorting of elements. By using the heap sort algorithm, they are as follows -
                       <ul>
                           <li>The first step includes the creation of a heap by adjusting the elements of the array.</li>
                           <li>After the creation of heap, now remove the root element of the heap repeatedly by shifting it to the end of the array, and then store the heap structure with the remaining elements.</li>     
                       </ul>
                       <br/><strong>Time Complexity:</strong> O(NlogN)
                       </p><br/>
                       <img src={hpsort} alt="deadlock " class="pic"></img><br/>
                       </section>
                    </div>
            </div></>
    )
};

export default Sort;
