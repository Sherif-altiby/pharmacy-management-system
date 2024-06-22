import { Medicine } from "../types";

export const fetchMedicinesData = async ({ searchTerm }: { searchTerm: string }) => {
    try {

        //Ali path
        const response = await fetch(`http://localhost/projects/pharmacymanagementsystem/pharmacy-management-system/back_end/main.php?search=${encodeURIComponent(searchTerm)}`);
        

        // const response = await fetch(`http://localhost/pharmasy/back_end/main.php?search=${encodeURIComponent(searchTerm)}`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch medicines data:', error);
        return [];  
    }
};


export const addMedicenes = async ( medicine: Medicine ) => {

    const { Name, Expire, Tape_Price, barcode, Tape_Amount, id, Box_Amount } = medicine;


    const mediceneData = {
        Name,
        Expire,
        Tape_Amount,
        Tape_Price,
        barcode,
        id,
        Box_Amount
    }

    console.log(mediceneData)
  
    try{
        //Ali path
        // const response = await fetch(`http://localhost/projects/pharmacymanagementsystem/pharmacy-management-system/back_end/main.php`);
        const response = await fetch("http://localhost/projects/pharmacymanagementsystem/pharmacy-management-system/back_end/main.php", {
        // const response = await fetch("http://localhost/pharmasy/back_end/main.php", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(mediceneData)
        } );

        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

      const result = await response.json();

      console.log(result)

      if (result.status === 'success') {
        alert('Medicine added successfully');
      } else {
        alert('  في مشكله : ' + result.message);
      }

    } catch (error){
        console.log("error")
    }

}