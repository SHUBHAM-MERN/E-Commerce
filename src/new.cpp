#include<stdio.h>
#include<iostream>
using namespace std;



 
void selection_sort(int arr[],int r){
   

   for (int i = 0; i < r-1; i++)
   {
    
     for (int j = i+1; j < r; j++)
     {
     if(arr[j]<arr[i]){
      
     int temp = arr[i];
     arr[i]=arr[j];
     arr[j] = temp;
     }
     }
   }
   
}

int main(){
  int arr[]={3,1,5,7,4,10,67,43};
  int l = sizeof(arr) / sizeof(arr[0]);

  selection_sort(arr,l);
  for (int i = 0; i < l; i++)
  {
    cout << " " <<arr[i];
  }
  
}