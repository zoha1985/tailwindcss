import React from 'react';

const Clint = ( props ) => {
const{ name, username, email, address} = props.newCard;
// console.log(title)
    return (
    
        <div>
        <div class="border-yellow-100 border-4 border-opacity-10 p-4 rounded-lg shadow" >
       
            <img class="rounded-md bg-blue-700 p-2" src="https://paramountdbs.com/images/led-tv-39.jpg" alt="" width="300" height="400" />
                <h1 class="text-2xl mt-4">Title here : {name} </h1>
                <h1 class="text-1xl">Title here : {username} </h1>
                <h1 class="text-1xl">Title here : {email} </h1>
                {/* <h1 class="text-2xl">Title here : {address} </h1> */}
                <br/>
                {/* <h6>{body}</h6> */}
      
        </div>
    </div>
    );
};

export default Clint;