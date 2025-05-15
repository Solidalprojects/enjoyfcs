import React from 'react'; 
 
function Navbar(){ 
     const [open, setOpen] = React.useState(false); 

       
    return(  
<> 
<div>
      <nav className="bg-black shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
          <div className="flex items-center justify-between h-16">
          
            <div className="flex items-center">  
              {/* Hamburger button */}
              <button
                onClick={() => setOpen(!open)}
                type="button"
                className="text-white hover:text-blue-600 focus:outline-none mr-3 text-2xl"
              >
                {open ? 'X' : '☰'}
              </button>
              
            
              <div className="text-2xl text-white font-bold">Enjoy Fcs</div>
            </div>
            
         
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-white hover:text-blue-700 transition">Home</a>
              <a href="#" className="text-white hover:text-blue-700 transition">About</a>
              <a href="#" className="text-white hover:text-blue-700 transition">Service</a>
              <a href="#" className="text-white hover:text-blue-700 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>  
      
     
      {open && (
        <div className="bg-black py-2 md:hidden">
          <a href="#" className="block text-white hover:text-blue-700 py-2 px-4">Home</a>
          <a href="#" className="block text-white hover:text-blue-700 py-2 px-4">About</a>
          <a href="#" className="block text-white hover:text-blue-700 py-2 px-4">Service</a>
          <a href="#" className="block text-white hover:text-blue-700 py-2 px-4">Contact</a>
        </div>
      )}
    </div> 
</>
    ); 
}

export  default Navbar