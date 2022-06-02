import React from 'react';
import './pathfinding.css';
import Sidenav from './Sidenavpath';
import { NavBarLoggedIn } from '../../navbar/navbar';

const Paths = () => {
    
    return (
            <>
            <NavBarLoggedIn></NavBarLoggedIn>
            <Sidenav></Sidenav>
            <div id="about" className="container-fluid">
                    <div className="contents">
                        <h2>Path Finding Algorithm</h2><br />
                       
                        <section id="Features">
                        <h4 id="dj"><strong>Dijkstra's Algorithm</strong></h4> 
                         
                         <p> Dijkstra's algorithm allows us to find the shortest path between any two vertices of a graph.It differs from the minimum spanning tree because the shortest distance between two vertices might not include all the vertices of the graph.it.                  
                         Dijkstra's Algorithm works on the basis that any subpath B -{">"} D of the shortest path A -{">"} D between vertices A and D is also the shortest path between vertices B and D.
                         Djikstra used this property in the opposite direction i.e we overestimate the distance of each vertex from the starting vertex. Then we visit each node and its neighbors to find the shortest subpath to those neighbors.
                         <br/><br/>
                         Algorithm 
                         <ol>
                         <li>Create a set sptSet (shortest path tree set) that keeps track of vertices included in the shortest-path tree, i.e., whose minimum distance from the source is calculated and finalized. Initially, this set is empty. </li>
                         <li> Assign a distance value to all vertices in the input graph. Initialize all distance values as INFINITE. Assign distance value as 0 for the source vertex so that it is picked first. </li>
                         <li>While sptSet doesn't include all vertices
                             <ul>
                                 <li>Pick a vertex u which is not there in sptSet and has a minimum distance value. </li>
                                 <li>Include u to sptSet. </li>
                                 <li>Update distance value of all adjacent vertices of u. To update the distance values, iterate through all adjacent vertices. For every adjacent vertex v, if the sum of distance value of u (from source) and weight of edge u-v, is less than the distance value of v, then update the distance value of v. </li>
                             </ul>
                         </li>
                        </ol>
                        </p><br/>
                       </section> 

                       <section id="Features">
                       <h4 id="bfs"><strong>Breadth First Search Algorithm</strong></h4>
                       <p>
                       Breadth-first search is a graph traversal algorithm that starts traversing the graph from the root node and explores all the neighboring nodes. Then, it selects the nearest node and explores all the unexplored nodes. While using BFS for traversal, any node in the graph can be considered as the root node
                       <br/>
                       A standard BFS implementation puts each vertex of the graph into one of two categories:
                       <ul>
                           <li>Visited</li>
                           <li>Not Visited</li>
                       </ul>
                       The purpose of the algorithm is to mark each vertex as visited while avoiding cycles. The algorithm works as follows:
                       <ol>
                           <li>Start by putting any one of the graph's vertices at the back of a queue.</li>
                           <li>Take the front item of the queue and add it to the visited list.a.</li>
                           <li>Create a list of that vertex's adjacent nodes. Add the ones which aren't in the visited list to the back of the queue..</li>
                           <li>Keep repeating steps 2 and 3 until the queue is empty.</li>
                       </ol>
                       </p><br/>
                       </section>


                       <section id="Features">
                       <h4 id="dfs"><strong>Depth First Search Algorithm</strong></h4>
                       <p>
                       Depth-first search is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking. So the basic idea is to start from the root or any arbitrary node and mark the node and move to the adjacent unmarked node and continue this loop until there is no unmarked adjacent node. Then backtrack and check for other unmarked nodes and traverse them. Finally, print the nodes in the path.e
                       <br/>
                       A standard DFS implementation puts each vertex of the graph into one of two categories:
                       <ul>
                           <li>Visited</li>
                           <li>Not Visited</li>
                       </ul>
                       The purpose of the algorithm is to mark each vertex as visited while avoiding cycles. The algorithm works as follows:
                       <ol>
                           <li>Start by putting any one of the graph's vertices on top of a stack.</li>
                           <li>Take the top item of the stack and add it to the visited list.</li>
                           <li>Create a list of that vertex's adjacent nodes. Add the ones which aren't in the visited list to the top of the stack.</li>
                           <li>Keep repeating steps 2 and 3 until the stack is empty.</li>
                       </ol>
                       </p><br/>
                       </section>

                       <section id="Features">
                       <h4 id="A"><strong>A<sup>2</sup> Algorithm</strong></h4>
                       <p>
                       A * algorithm is a searching algorithm that searches for the shortest path between the initial and the final state. It is used in various applications, such as maps.In maps the A* algorithm is used to calculate the shortest distance between the source (initial state) and the destination (final state).

                       <br/>
                       A* algorithm has 3 parameters:
                       <ul>
                           <li><strong>g : </strong>the cost of moving from the initial cell to the current cell. Basically, it is the sum of all the cells that have been visited since leaving the first cell.</li>
                           <li><strong>h :</strong> also known as the heuristic value, it is the estimated cost of moving from the current cell to the final cell. The actual cost cannot be calculated until the final cell is reached. Hence, h is the estimated cost. We must make sure that there is never an over estimation of the cost.</li>
                           <li><strong>f :</strong>it is the sum of g and h. So, f = g + h</li>
                       </ul>
                       Algorithm of A* search:
                       <ol>
                           <li> Place the starting node in the OPEN list.</li>
                           <li>Check if the OPEN list is empty or not, if the list is empty then return failure and stops</li>
                           <li>Select the node from the OPEN list which has the smallest value of evaluation function (g+h), if node n is goal node then return success and stop, otherwise</li>
                           <li>Expand node n and generate all of its successors, and put n into the closed list. For each successor n', check whether n' is already in the OPEN or CLOSED list, if not then compute evaluation function for n' and place into Open list.</li>
                           <li>Else if node n' is already in OPEN and CLOSED, then it should be attached to the back pointer which reflects the lowest g(n') value.</li>
                           <li>Return to Step 2.</li>
                       </ol>
                       </p><br/>
                       </section>
                    </div>
            </div></>
    )
};

export default Paths;
