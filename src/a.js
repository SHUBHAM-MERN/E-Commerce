// const arr = [8, 7, 2, 5, 2, 1];
// var count = 0;

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j <= arr.length - 2; j++){
//         if ((arr[i] + arr[j + 1]) == 10) {
//             console.log([arr[i], arr[j + 1]])
//             count++;
//         }
//     }
    
// }
// if (count == 0) {
//     console.log("pair not found")
// }

// const st = "shubhaam";
// const obj = {};
// for (let ch in st) {
//     if (obj[st[ch]]) {
//         obj[st[ch]]+=1
//     } else {
//         obj[st[ch]]=1
//     }
// }
// console.log(obj)

// const obj = 
// {
//   name:"shubha",
//   kame: function () {
//     const bhoi = () => {
//       const bhoi2 = () => {
        
//         console.log(this.name)
//       }
//       bhoi2()
//     }
//     bhoi()
    
//   }
// }
// obj.kame()


// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function() { // shows the current step
//     console.log( this.step );
//   }
// };
// ladder.up().up().up().down().down().down().showStep();


// STARTING NEW SKILL




//1.Check if a key is present in every segment of size k in an array
// const arr = [1, 2, 3, 4, 5,3, 6, 7, 3]

// const findindex = (arr,a,k) => {
  
//   for (var index = 0; index < arr.length; index = index + k) {
    
//     for (var i = index; i < index + k; i++) {
      
//       if (arr[i] == a) {
//         break;
//       }
//      
     
//     }
//     if (i == index + k) {
//       return false
//     }
    
//   }
//   if (index == arr.length) {
//     return true
//   }
//   else {
//     return false
//   }
  

// }
// console.log(findindex(arr,3,3))

//7.Sort an array of 0s, 1s and 2s



// const arr = [0,2, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]

// const setarr = (arr) => {
  
//   var start = 0;
//   var pivot = start;
//   var end = arr.length - 1;
//   while (pivot <= end) {
//     if (arr[pivot] == 0) {
//       let c = arr[pivot];
//       arr[pivot] = arr[start];
//       arr[start] = c;
//       start++;
//       pivot++;
//     }
//     else if (arr[pivot] == 1) {
//       pivot++
//     } else {
//       let c = arr[pivot];
//       arr[pivot] = arr[end];
//       arr[end] = c;
//       end--;
      
//     }
//   }
//   return arr;
  
// }
// console.log(setarr(arr))







//2.Program to find the minimum (or maximum) element of an array


// const arr = [-1, 2, 3, 4, 5, 3, 6, 7, 3]
// const findmaxmin = (arr) => {
//   let min = arr[0];
//   let max=arr[0]
//   for (let i = 1; i < arr.length; i++) {
//     if (min > arr[i]) {
//        min=arr[i]
//     }
//     if (max < arr[i]) {
//       max=arr[i]
//    }
    
//   }
//   console.log(min+"   "+ max)
// }

// findmaxmin(arr)






//3.K’th Smallest/Largest Element in Unsorted Array | Set 1




// const arr = [4, 7, 1, 13, 25, 6]


// const kthelement = (arr,n) => {
//   //first we will sorting

//   for (let i = 0; i < arr.length; i++) {
//     var min = arr[i];
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < min) {
//         let c = arr[j];
//         arr[j] = arr[i];
//         arr[i] = c;
//         min = arr[j];
//       }
//       console.log(arr)
        
//     }
    
//   }
//   console.log(arr)
//   return arr[n-1]
// }
// console.log(kthelement(arr,3))







//4 .Find the frequency of a number in an array



// const arr = [1, 2, 3, 5, 5, 5, 5, 3]

// const findaccurence = (arr, k) => {
//   let j=0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == k) {
//       j++;
//    }
    
//   }
//   if (j != 0) {
//     console.log(j)
//   } else {
//     console.log(-1)
//  }
// }

// findaccurence(arr,5)
// findaccurence(arr,0) 






 // 5.for sorted order array and search  first occurence by binary search tree



// const arr = [1, 2, 6, 6, 6, 6, 7, 8, 9]
 
// const firstoccurence = (arr,n) => {
//   let start = 0;
 
//   let end = arr.length - 1;
//   let res = -1;
//   while (start <= end) {
//     let mid = Math.floor( start + ((end - start) / 2));
//     console.log(start,end)
//     console.log((end-start/2))
//     if (arr[mid] == n) {
//       res = mid;
//       end = mid - 1;
//     }
//     else if (arr[mid] < n) {
//       start = mid + 1;
//     }
//     else {
//       end = mid - 1;
//     }
//   }
//   return res;

// }
// const lastoccurence = (arr,n) => {
//   let start = 0;
 
//   let end = arr.length - 1;
//   let res = -1;
//   while (start <= end) {
    
//     let mid = Math.floor( start + ((end - start) / 2));
//     if (arr[mid] == n) {
//       res = mid;
//       start = mid + 1;
//     }
//     else if (arr[mid] < n) {
//       start = mid + 1;
//     }
//     else {
//       end = mid - 1;
//     }
//   }
//   return res;

// }
// console.log(firstoccurence(arr,6))
// console.log(lastoccurence(arr, 6))

// //to find total repeat of given number in sorted array


// console.log(lastoccurence(arr,6)-firstoccurence(arr,6)+1)






//6. find how many times rotated



// const origina_array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const given_arr = [5,6,7, 8, 9, 1, 2, 3, 4]

// const findtotalrotation = (arr) => {
//   var start = 0;
//   var end = arr.length - 1;
//   while (start < end) {
//     var mid = (start + end) / 2
//     var newmid=Math.floor(mid)
    

 
//     if (arr[newmid] < arr[newmid - 1]) {
     
//       return (end-newmid+1)
//     }
//     else if (arr[newmid] < arr[start]&&arr[newmid]>arr[newmid-1]) {
    
//       end = newmid - 1;
//     }
//     else if (arr[newmid] > arr[newmid + 1]) {
    
//       return arr.length-newmid-1;
//     }
//     else if (arr[newmid] > arr[start]) {
     
//       start=newmid+1
//       }
//     else {
     
//       end = newmid - 1;
//     }
//   }

// }

// console.log(findtotalrotation(given_arr))







//7. find near sorted element



//orignal sorted array
// const org_arr = [1, 2, 3, 4, 5, 6]

//given Nearly Sorted array

// const giv_arr = [1, 2, 4, 5, 6, 5]

// const findelelmemt = (arr, k) => {
//   let start = 0;
//   let end = arr.length;
//   while (start <= end) {
//     var middle = (start + end) / 2
//     var mid = Math.floor(middle)
    
//     if (arr[mid] == k) {
//       return mid;
//     }
//     else if ((mid + 1) <= arr.length - 1 && arr[mid + 1] == k)
//       return mid + 1;
//     else if ((mid - 1) >= 0 && arr[mid - 1] == k)
//       return mid - 1
//     else if (arr[mid] > k)
//       end = mid - 1;
//     else
//       start=mid+1
//   }

// }
// console.log(findelelmemt(giv_arr,4))






//8.find floor element in given array



// const giv_arr = [1, 2, 4, 6, 7, 10, 12, 15, 18]
// if you were askign that find floor of 6 then you have to find largest element in elements which are smaller then 6


// const find_flor_element = (arr,k) => {
//   let start = 0;
//   let end = arr.length;
//   let element;
//   while (start <= end) {
//     var middle = (start + end) / 2
//     var mid = Math.floor(middle)
//     if (arr[mid] == k) {
      
//       return arr[mid]
//     }
//     else if (arr[mid] < k) {
//       element = arr[mid]
//       start = mid + 1;
     
//     }
//     else if(arr[mid]>k){
//       end = mid - 1;
   
//     }
//     else {
//       return "we are sorry,elemwnt is no more"
//     }
//   }
//   return element;
// }
// console.log(findelement(giv_arr,2))







//9.find ceil element in given array



// const giv_arr = [1, 2, 4, 6, 7, 10, 12, 15, 18]
// if you were askign that find floor of 6 then you have to find smallest element in elements which are larger then 6


// const find_ceil_element = (arr,k) => {
//   let start = 0;
//   let end = arr.length;
//   let element;
//   while (start <= end) {
//     var middle = (start + end) / 2
//     var mid = Math.floor(middle)
//     if (arr[mid] == k) {
     
//       return arr[mid]
//     }
//     else if (arr[mid] < k) {
      
//       start = mid + 1;
     
//     }
//     else if (arr[mid] > k) {
//       element = arr[mid]
//       end=mid-1;
   
//     }
//     else {
//       return "we are sorry,elemwnt is no more"
//     }
//   }
//   return element;
// }
// console.log(findelement(giv_arr,6))






//10.Move all negative numbers to beginning and positive to end with constant extra space






// const giv_arr = [-12, 11, -13, -5, 6, -7, 8,5, -3, -6]

// const movearr = (arr) => {
//   let start = 0;
//   let pivot = start;
//   let end = arr.length - 1;
//   while (pivot <= end) {
//     if (arr[pivot] < 0) {
//       let c = arr[pivot]
//       arr[pivot] = arr[start]
//       arr[start] = c;
//       start++
//       pivot++
//     } else {
//       pivot++
//     }
//   }
//   return arr
// }
// console.log(movearr(giv_arr))







//11. Intersection of two sorted arrays




// const arr1 = [1, 3, 4, 5, 7]
// const arr2 = [2, 3, 5, 6]


// const findinter = (arr1, arr2) => {
//   let intersec_arr = [];


//   for (let i = 0; i < arr1.length; i++) {
   
//     let element = arr1[i];
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr2[j] == element)
//       {
//         intersec_arr.push(element)
//     }
    
//   }
// }
// return intersec_arr
// }
// console.log(findinter(arr1,arr2))







//12.find union









// const arr1 = [1, 3, 4, 5, 7]
// const arr2 = [2, 3, 5, 6,8,9,0,4]

// const findunion = (arr1, arr2) => {
//   const m = arr1.length;
//   const n = arr2.length;
//   let i=0, j = 0;
//   let arr=[]
  
//   while (i < m && j < n) {
    
//     if (arr1[i] < arr2[j]) {
//       //hear if we use ++ operatopr then first push arr[i] and then i is increase by one
//       arr.push(arr1[i++])
      
    
//     }
//     else if(arr1[i] > arr2[j]) {
//       arr.push(arr2[j++])
//     }
//     else {
//       arr.push(arr1[i++])
//       j++;

//     }
//   }
  
//     while (j < n) {
//       arr.push(arr2[j++])
//     }

  
//     while (i< m) {
//       arr.push(arr1[i++])
//     }
  
//   return arr;
// }
// console.log(findunion(arr1,arr2))






//13.find element in infinite binary sorted array







// const arr = [0, 0, 0, 0, 0, 0, 1, 1, 1]
// const fun = (arr,start,end) => {
//   let low = start;
//   let high = end ;
 

//   while (low <= high) {
//     var middle = (low + high) / 2
//     var mid = Math.floor(middle)
    
//     if (arr[mid] == 1 && arr[mid - 1] == 0)
//       return mid
//     else if (arr[mid] == 0)
//       low = mid + 1
//     else
//       high=mid-1
//   }
// }
// const find_first_1 = (arr) => {
//   let start = 0;
//   let end = 1;
//   if (arr[start] == 1)
//     return start
//   while (arr[end] !== 1) {
//     start = end
//     end = end * 2;
//   }
  
//  return fun(arr,start,end)
// }
// console.log(find_first_1(arr))






//14. Minimum Difference Element in a Sorted Array





// const gin_arr = [1, 2, 3, 5, 7, 9, 12, 14, 16, 19]
// if i give you a key{let take 10} then if you absolute subtract key from element then givs you min answer
// aproach is simple you have to find ceil or floor of that element

// const min_diif = (arr, k) => {
//   //while you see this you have to first remove comments from program 8 and 9 to access that function
//   const ceil=find_ceil_element(arr, k)
//   const flor = find_flor_element(arr, k)
 
//   if (ceil == k || flor == k) {
//     console.log(k)
//   } else
//   {
    
//     if (Math.abs(ceil - k) > Math.abs(flor - k)) {
//       console.log(flor)
      
//     }
//     else {
//       if (Math.abs(ceil - k) == Math.abs(flor - k))
//       console.log(flor, ceil)
//       else
//       console.log(ceil)
//     }
//   }
// }
// min_diif(gin_arr,10)






//15. Find maximum element in Bitonic Array




// const giv_arr = [1, 2, 4, 5, 7, 9, 16, 18, 10, 6, 5, 3]
//find peak element from where boyh side element is decreasing

// const find_ele = (arr) => {
//     let start = 0;
//     let end = arr.length - 1;
//     let element;
//     while (start <= end) {
//         let middle = start + (end - start) / 2;
//         let mid = Math.floor(middle)
        
//         if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
//             return arr[mid]
//         } else if (arr[mid] > arr[mid + 1]) {
//             element = arr[mid]
//             end=mid-1
//         }
//         else {
//             start=mid+1
//         }


//     }
//     return element
// }
// console.log(find_ele(giv_arr))





//16. rotate a array gor given times
// const giv_arr = [1, 3, 5, 2, 7, 4, 8]
// const rotat_fun = (arr, times) => {
//     for (let i = 0; i < times; i++) {
        
//         let x = arr[0]
//         for (let j = 0; j < arr.length-1; j++) {
//             arr[j]=arr[j+1]
            
//         }
//         arr[arr.length-1]=x
//     }
//     return arr;
// }
// console.log(rotat_fun(giv_arr,3))





//17.Find the Missing Number

// Input: arr[] = {1, 2, 4, 6, 3, 7, 8}
// Output: 5
// Explanation: The missing number from 1 to 8 is 5

// const giv_arr = [1, 2, 6, 3,7, 8]
// const find_miss = (arr) => {
    
//     let dub_arr = [];
//     for (let i = 0; i < arr.length; i++) {
      
//         dub_arr[arr[i]] = 1;
        
//     }
    
//     for (let i = 1; i < dub_arr.length; i++) {
//         if (dub_arr[i] != 1)
//           console.log(i)
        
//     }

// }
// find_miss(giv_arr)

//18.Given an array arr[], find the maximum j – i such that arr[j] > arr[i]

// const giv_arr = [9, 2, 3, 4, 5, 6, 7, 8, 18, 0]
// const find_max_diff = (arr) => {
//     let pre = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
           
//            if (arr[j] > arr[i]) {
//                if ((j - i) > pre)
//                    pre = j - i;
//           }
           
//        }
        
//     }
//     console.log(pre)
// }
// find_max_diff(giv_arr)







//18.find dublicate in 1 to n array


// const arr = [4,4,1,2,3,6,6]
// const find_dub = (arr) => {
//     let i = 0;
//     while (i < arr.length) {
//         if (arr[arr[i] - 1] == arr[i]) {
//            i++
//         } else {
//             let x = arr[arr[i] - 1]
//             arr[arr[i] - 1] = arr[i]
//             arr[i] = x;
//        }
//    }
 
//     console.log(arr)
//     for (let i = 0; i < arr.length; i++ ){
//         if (arr[i] != i + 1)
//             console.log("dub is"+arr[i]+"and missing is"+(i+1))
        
//     }
   

// }
// find_dub(arr)





//19._________________________________ QUICK SORT   -----------------------------------------------


// const giv_arr = [1, 4, 12, 8, 9, 13, 10]

// const swap = (arr,i, k) => {
//     let temp = arr[k]
//     arr[k] = arr[i]
//     arr[i]=temp
//  }

// const partian = (arr, l, r) => {
//     let pivot = arr[r];
//     let i = l - 1;
   
//     for (let j = l; j <= r-1; j++) {
//         if (pivot > arr[j]) {
//             i++;
//             // basically we are swaping hear
//             swap(arr,i,j)
//        }
        
//     }
//     swap(arr, i + 1, r)
 
//     return i+1
// }

// const quicksort = (arr, l, r) => {
//     if (l < r) {
         
//         const par = partian(arr, l, r)
//         quicksort(arr, l, par - 1)
//         quicksort(arr,par+1,r)
//     }

// }

// quicksort(giv_arr, 0, 6)

// for (let i = 0; i < giv_arr.length; i++) {
//     console.log(giv_arr[i])
    
// }






//20.find comman element in three sorted array

// const ar1 = [1, 5, 10, 20, 40, 80]
// const ar2= [6, 7, 20, 80, 100]
// const ar3 = [3, 4, 15, 20, 30, 70, 80, 120]

// const find_commn_ = (arr1, arr2, arr3) => {
//     let l1=arr1.length
//     let l2=arr2.length
//     let l3 = arr3.length
//     // let mini = Math.min(arr1[l1], arr2[l2], arr3[l3])
    
//     let l = 0, m = 0, n = 0;
//    while(l<l1&&m<l2&&n<l3){
//         if (arr1[l] > arr2[m] && arr1[l] > arr3[n]) {
//             m++;
//             n++
//         }
//         else if (arr1[l] < arr2[m] && arr2[m] > arr3[n]) {
//             l++
//             n++
//         }
//         else if (arr1[l] < arr3[n] && arr2[m] < arr3[n])
//         {
//             l++
//             m++
//         }
//         else {
//             console.log(arr1[l])
//             l++;
//             m++;
//             n++;
//         }
//     }
    
// }
// find_commn_(ar1,ar2,ar3)


//21. Bubble Sort

const giv_arr = [1, 5, 2, 7, 4, 9, 10, 45, 32]

const bubble = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp;
            }
            
        }
        
    }
    console.log(arr)
}
bubble(giv_arr)




