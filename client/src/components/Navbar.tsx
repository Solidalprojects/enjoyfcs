import React from 'react'; 
 
function Navbar(){ 
     const [open, Setopen] = React.useState(false); 

       
    return(  
       <div>
        <nav className="bg-black shadow-md "> 
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">   
            <div className="flex items-centre justify-between h-16"> 
               <div className="flex item-centre ">  
                {/*butoni hamburgerit */} 
                
               </div>
            </div>
         </div>
         </nav>  
       </div>
    ); 
}

export  default Navbar