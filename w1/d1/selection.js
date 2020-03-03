function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        //loop over array
        let min_idx = i
        //loop over array from i + 1 to identify smallest
        for (let j = i+1; j<arr.length; j++){
            //find a smallest and store index
            if(arr[min_idx] > arr[j]){
                min_idx = j
            }
        }
        //swap smallest with arr[i]
        
        [arr[i],arr[min_idx]] = [arr[min_idx],arr[i]];
        
    }
    
    return arr
}

console.log(selectionSort([4,1,7,8,34,2,6,0,2,4]))