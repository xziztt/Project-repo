import React from 'react';
import Sidenavsearch from './Sidenavsearch';
import './searching.css';
import { NavBarLoggedIn } from '../../navbar/navbar';

const Searching = () => {

    var linearImage = require('./linear.png');
    var binaryImage = require('./binary.jpg');
    var jumpImage = require('./jump.png');

    var lincode = `
    Begin 
    for i := 0 to size -1 do 
        if array[i] = key then
            return i 
    done
    return invalid location 
    End
    `;

    var bincode = `
    Begin
        if start <= end then
            mid := start + (end - start) /2
        if array[mid] = key then
           return mid location
        if array[mid] > key then
          call binarySearch(array, mid+1, end, key)
         else when array[mid] < key then
          call binarySearch(array, start, mid-1, key)
        else
            return invalid location
    End
    `;

    var expcode = `
    Begin
        if (end – start) <= 0 then
            return invalid location
        i := 1
        while i < (end - start) do
            if array[i] < key then
                i := i * 2 //increase i as power of 2
            else
                terminate the loop
        done
        call binarySearch(array, i/2, i, key)
    End
    `;

    var jmpcode = `
    Begin
        blockSize := √size
        start := 0
        end := blockSize
        while array[end] <= key AND end < size do
            start := end
            end := end + blockSize
            if end > size – 1 then
                end := size
        done
        for i := start to end -1 do
            if array[i] = key then
                return i
        done
        return invalid location
    End
    `;

    return (
        <>
        <NavBarLoggedIn></NavBarLoggedIn>
        <Sidenavsearch></Sidenavsearch>
        <div className="container-fluid">
        <div className="contents">
            <section id="Linear">
                <h2>Linear Search</h2><br/>
                <p>
                Linear searching techniques are the simplest technique. In this technique, the items are searched one by one. This procedure is also applicable for unsorted data set. Linear search is also known as sequential search. It is named as linear because its time complexity is of the order of n O(n).
                <br/><br/>
                <h4><strong>Example</strong></h4>
                <code>Input: <br/> A list of data: <br/> 20 4 89 75 10 23 45 69 <br/> the search key 10 <br/> Output:Item found at location: 4</code><br/><br/>
                <h4><strong>Algorithm</strong></h4>
                <strong>Input : </strong> An array of data, size of the array and the search key.<br/>
                <strong>Output : </strong> Location of the key (index) if found, otherwise key not found.<br/><br/>
                <code><pre>{lincode}</pre></code>
                <h4><strong>Complexities</strong></h4><br />
                <ul>
                <li><strong>Time Complexity : </strong>O(n)</li>
                <li><strong>Space Complexity : </strong>O(1)</li>
                </ul>
                <img src={linearImage} alt="Linear Search"></img>
                </p><br/>
            </section>

            <section id="Binary">
                <h2>Binary Search</h2>
                <p>
                When the list is sorted we can use the binary search technique to find items on the list. In this procedure, the entire list is divided into two sub-lists. If the item is found in the middle position, it returns the location, otherwise jumps to either left or right sub-list and do the same process again until finding the item or exceed the range.
                <br/><br/>
                <h4><strong>Example</strong></h4>
                <code>Input: <br/> A list of sorted data: <br/> 12 25 48 52 67 79 88 93 <br/> The search key 79 <br/> Output:Item found at location: 5</code><br/><br/>
                <h4><strong>Algorithm</strong></h4>
                <strong>Input : </strong> A sorted array, start and end location, and the search key.<br/>
                <strong>Output : </strong> Location of the key (index) if found, otherwise key not found.<br/><br/>
                <code><pre>{bincode}</pre></code>
                <h4><strong>Complexities</strong></h4><br />
                <ul>
                <li><strong>Time Complexity : </strong>O(1) for the best case. O(log2 n) for average or worst case. </li>
                <li><strong>Space Complexity : </strong>O(1)</li>
                </ul>
                <img src={binaryImage} alt="Binary Search"></img>
                </p><br/>
            </section>

            <section id="Exponent">
                <h2>Exponential Search</h2>
                <p>
                Exponential search is also known as doubling or galloping search. This mechanism is used to find the range where the search key may present. If L and U are the upper and lower bound of the list, then L and U both are the power of 2. For the last section, the U is the last position of the list. For that reason, it is known as exponential.
                <br/>After finding the specific range, it uses the binary search technique to find the exact location of the search key.
                <br/><br/>
                <h4><strong>Example</strong></h4>
                <code>Input: <br/> A list of sorted data: <br/> 10 13 15 26 28 50 56 88 94 127 159 356 480 567 689 699 780 850 956 995 <br/> The search key 780 <br/> Output:Item found at location: 16</code><br/><br/>
                <h4><strong>Algorithm</strong></h4>
                <strong>Input : </strong> A sorted array, start and end location, and the search key.<br/>
                <strong>Output : </strong> Location of the key (index) if found, otherwise key not found.<br/><br/>
                <code><pre>{expcode}</pre></code>
                <h4><strong>Complexities</strong></h4><br />
                <ul>
                <li><strong>Time Complexity : </strong>O(1) for the best case. O(log2 i) for average or worst case, where i is the location of the key. </li>
                <li><strong>Space Complexity : </strong>O(1)</li>
                </ul>
                </p><br/>
            </section>

            <section id="Jump">
                <h2>Jump Search</h2>
                <p>
                Jump search technique also works for ordered lists. It creates a block and tries to find the element in that block. If the item is not in the block, it shifts the entire block. The block size is based on the size of the list. If the size of the list is n then block size will be √n. After finding a correct block it finds the item using a linear search technique. The jump search lies between linear search and binary search according to its performance.
                <br/><br/>
                <h4><strong>Example</strong></h4>
                <code>Input: <br/> A list of sorted data: <br/> 10 13 15 26 28 50 56 88 94 127 159 356 480 567 689 699 780 850 956 995 <br/> The search key 356 <br/> Output:Item found at location: 11</code><br/><br/>
                <h4><strong>Algorithm</strong></h4>
                <strong>Input : </strong> A sorted array, size of the array, and the search key.<br/>
                <strong>Output : </strong> Location of the key (index) if found, otherwise key not found.<br/><br/>
                <code><pre>{jmpcode}</pre></code>
                <h4><strong>Complexities</strong></h4><br />
                <ul>
                <li><strong>Time Complexity : </strong>O(sqrt(n)) </li>
                <li><strong>Space Complexity : </strong>O(1)</li>
                </ul>
                <img src={jumpImage} alt="Jump Search"></img>
                </p><br/>
            </section>

           </div>
        </div></>
        
    )
};

export default Searching;