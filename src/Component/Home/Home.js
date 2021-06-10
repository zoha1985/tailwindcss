import React, { useEffect, useState } from 'react';
import Clint from '../Clint';

const Home = () => {

    const [newCard, setNewCard] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data =>{
          console.log("coppy", data)
          setNewCard(data);
        })
      },[]);
    return (
        <div >
           <div class="flex bg-gray-400 h-20 justify-between pt-5">
           <div class="justify-items-start">
                    <h4 class="text-2xl ">This is a logo</h4>
              </div>
                <div class="justify-self-end">
                    <ul class="">
                        <li class="inline-block px-5"> <a href="#" class="no-underline text-2xl"> Home</a></li>
                        <li class="inline-block px-5"> <a href="#"  class="no-underline text-2xl"> About</a></li>
                        <li class="inline-block px-5"> <a href="#"  class="no-underline text-2xl"> Contact</a></li>
                        <li class="inline-block px-5"> <a href="#"  class="no-underline text-2xl"> Portfolio</a></li>
                    </ul>
                </div>
           </div>


           <div class="container mx-auto w-full mt-20">
                <div class=" grid grid-rows-4 grid-cols-4 gap-4 ">
                  
                       
                    {
                        newCard.map(newCard => <Clint newCard={newCard}></Clint>)
                    }
           


                
                </div>
            </div>
             
              
        </div>
          
    );
};

export default Home;