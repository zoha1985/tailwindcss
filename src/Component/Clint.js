import React from 'react';

const Clint = ( props ) => {
const{ title, body} = props.newCard;
console.log(title)
    return (
    
        <div>
        <div class="border-red-500 border-4 border-opacity-10 p-4 rounded-lg" >
       
            <img class="rounded-md bg-blue-700 p-2" src="https://paramountdbs.com/images/led-tv-39.jpg" alt="" width="300" height="400" />
                <h1 class="text-2xl">Title here : {title} </h1>
                <br/>
                <h6>{body}</h6>
      
        </div>
    </div>
    );
};

export default Clint;