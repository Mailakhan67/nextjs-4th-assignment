import Card from "@/components/card";


export default function Home() {
  return (
  <div className="hero mx-auto flex">
    
   <div className=" justify-center items-center max-w-7xl mx-auto grid grid-cols-2">
<Card name="Maila" age={21} rollNumber={429982} class="Monday"/>
<Card name="Shaista" age={20} rollNumber={259843} class="Tuesday"/> 
<Card name="Kainat" age={19} rollNumber={369275} class="Wednesday"/>
<Card name="Nadia" age={18} rollNumber={426288} class="Thursday"/>
   </div>

   </div>
  );
}
