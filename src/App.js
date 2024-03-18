import { useState } from "react"; //ep5 - ep 3, ep9ยังใช้อยู่
import Header from "./components/Header";
// import StudentList from "./components/StudentList";
// import "./App.css";
// import AddForm from "./components/AddForm";

function App() {

  //   //   // ep9 // เจาะลึกprops ==>studentList.js and item.js////////////////////////////////////
  //   // create state

  //   const [students, setStudent] = useState([
  //     // { id: 1, name: "blasso" },
  //     // { id: 2, name: "jojo" },

  //   ]);

  //   function deleteStudent(id) {
  //     console.log(id)
  //     setStudent(students.filter(item => item.id !== id))

  //   }

  //   return (
  //     <div className="container">
  //       <Header title="student data" />
  //       {/* title ชื่อ prop */}
  //       {/* f12 */}

  //       <main>
  //         {/* pro =  students  ,state ={students} */}
  //         <AddForm students={students} setStudent={setStudent} />
  //         {/* สร้าง prop */}
  //         <StudentList students={students} deleteStudent={deleteStudent} />
  //       </main>

  //     </div>
  //   );













  //   // ep8 // props///////////////////////////////////////////
  // return (
  //   <div className="container">
  //     <Header title="student data" />    
  //     {/* title ชื่อ prop */}
  //     {/* f12 */}

  //     <main>
  //       <StudentList />
  //     </main>

  //   </div>
  // );









  //   // ep7 //  component-style///////////////////////////////////////////

  // return (
  //   <div className="container">
  //     <Header />
  //     <main>
  //       <StudentList />
  //     </main>

  //   </div>
  // );




  //   // ep6 // intro component///////////////////////////////////////////
  // // App.js อ่านง่านขึ้น
  // return (
  //   <>
  //   <Header/>
  //   <main>
  //   <StudentList/>
  //   </main>

  //   </>
  // );




  // ep5 // array state and boolean state/// ยังไม่เเยก component////////////////////////////////////////
  // create state
  // eslint-disable-next-line no-unused-vars
  const [students, setStudents] = useState([
    { id: 1, name: "blasso" },
    { id: 2, name: "jojo" },
    { id: 3, name: "kong" },
  ])

  //click1  keep 2,3
  //  setStudents คือ ฟังชันที่ใช้เปลี่ยนเเปลงค่าที่อยู่ใน state students
  //create state
  const [show, setShow] = useState(true); //true เเสดงเนื้อหา , false : ซ่อนเนื้อหา

  function deleteStudent(id) {
    console.log(id)
    setStudents(students.filter(item => item.id !== id))

  }

  return (
    /* //item คือ ตัวเเทนของ object ที่บรรจุใน array students */
    <>
      <Header />
      <h1>number of students = {students.length} </h1>
      <button onClick={() => setShow(!show)}>toggle</button>
      {/* //ลอง f12 ดู */}

      <ul>
        {show && students.map((item) => (
          <li key={item.id}>
            <p>{item.id} - {item.name}</p>
            <button onClick={() => deleteStudent(item.id)}>delete</button>
          </li>
        ))}
      </ul>
    </>
  );







  // // ep4 create state  by arrow funtion//////////////////////////
  //  const [count, setCount] = useState(0);


  //  return (
  //    <>
  //      <h1>{count}</h1>
  //      <button onClick={()=>setCount(count+1)}>add</button>
  //      <button onClick={()=>setCount(count - 1)}>reduce</button>
  //      <button onClick={()=>setCount(0)}>clear</button>
  //    </>
  //  );



  // // ep3create state //////////////////////////
  // const [count, setCount] = useState(0);
  // function addCount() {
  //   setCount(count + 1);
  //   // count = 0
  //   // count = count+1/
  // }
  // function subtractCount() {
  //   setCount(count - 1);
  // }

  // function resetCount() {
  //   setCount(0);
  // }



  // return (
  //   <>
  //     <h1>{count}</h1>
  //     <button onClick={addCount}>add</button>
  //     <button onClick={subtractCount}>reduce</button>
  //     <button onClick={resetCount}>clear</button>
  //   </>
  // );

  //  ep2 intro state///////////////////////////////
  // let count = 0;

  // function addCount() {
  //   count += 1;
  //   console.log(count)
  // }

  // return (
  //   <>
  //     <h1>{count}</h1>
  //     <button onClick={addCount}>add</button>
  //   </>
  // )

  // ep1 basic///////////////////////////////////////
  // const name = "Piyanat ";
  // //พื้นที่เเสดงผล
  // return (
  //   <>
  //     <h1> Hello :{name}</h1>
  //     <button onClick={() => alert("hello react!!!")}>Click</button>
  //     <p>blasso studio</p>

  //   </>
  // );
}

export default App;