interface Tobject {
  name: string;
  age: number;
  rollNumber: number;
  class: string;
}

const Card = (prop: any) => {
  return (
    <div>
      <div className="ml-6 mt-5 rounded p-6 bg-gradient-to-tr from-slate-300 border-2 border-blue-300  font-sans via-yellow-300 to-green-200 font-bold text-2xl h-[200px] w-[300px] shadow-md shadow-gray-500  hover:bg-green-800 hover:text-gray-800  cursor-pointer">
      <h1>Name : {prop.name}</h1>
      <h1>Age : {prop.age}</h1>
      <h1>Roll Number : {prop.rollNumber}</h1>
      <h1>Class : {prop.class}</h1>
      </div>

    </div>
  );
};

export default Card;
