'use client'
import Link from "next/link";

interface Users  {

  id:Number,
  name:String
}


export default  function Home() {
 
  let json_data:Users[];

  


  return (
    <main>
     

     <div className="p-0 px-2 bg-sky-400 text-white text-xl hover:bg-sky-600" >  
     Hello World!!
     </div>


    </main>
  );
}


