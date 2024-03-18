
// เจาะลึก prop ทำให้code อ่านง่ายขึ้น///////////////////////////////////////////////////////////////
import { useState } from "react";
import "./StudentList.css";
import Item from "./Item";
export default function StudentList(props) {

  //click1  keep 2,3
  //  setStudents คือ ฟังชันที่ใช้เปลี่ยนเเปลงค่าที่อยู่ใน state students
  //create state
  const [show, setShow] = useState(true); //true เเสดงเนื้อหา , false : ซ่อนเนื้อหา
  const { students, deleteStudent } = props;




  return (
    /* //item คือ ตัวเเทนของ object ที่บรรจุใน array students */
    <>
      <ul>
        <div className="header">
          <h1 >number of students  ({students.length}) </h1>
          {/*  dynamic style */}
          <button onClick={() => setShow(!show)} >{show ? "hide" : "show"}</button>
          {/* //ลอง f12 ดู */}
        </div>
        {show && students.map((data) => (
          // สร้าง item จำนวน สามาชิกเท่ากับ state stdudent
          // สร้าง prop data and deleteStudent
          <Item key={data.id} data={data} deleteStudent={deleteStudent} />

        ))}
      </ul>
    </>
  );
}




// dynamic style ส่วนใหญ่ใช้ร่วมกับ ตัว state เมื่อมีการเปลี่ยนเเปลงค่า sate >>style ก็จะเปลี่ยนตาม  (btn***)////////////////////////////////////


// import { useState } from "react";
// import "./StudentList.css"
// export default function StudentList() {
//   const [students, setStudents] = useState([
//     { id: 1, name: "blasso" },
//     { id: 2, name: "jojo" },
//     { id: 3, name: "kong" },
//   ])

//   //click1  keep 2,3
//   //  setStudents คือ ฟังชันที่ใช้เปลี่ยนเเปลงค่าที่อยู่ใน state students
//   //create state
//   const [show, setShow] = useState(true); //true เเสดงเนื้อหา , false : ซ่อนเนื้อหา

//   function deleteStudent(id) {
//     console.log(id)
//     setStudents(students.filter(item => item.id !== id))

//   }

//   // dynamic style
//   const btnStyle = {
//     background: show ? "purple" : "green"
//   }

//   // inline style
//   const myStyle = {
//     color: "purple",
//     fontSize: "50px",
//     padding: "30px",
//     fontStyle: "italic"
//   }

//   return (
//     /* //item คือ ตัวเเทนของ object ที่บรรจุใน array students */
//     <>
//       <ul>
//         <div className="header">
//           <h1 style={myStyle}>number of students  ({students.length}) </h1>
//           {/*  dynamic style */}
//           <button onClick={() => setShow(!show)} style={btnStyle}>{show ? "hide" : "show"}</button>
//           {/* //ลอง f12 ดู */}
//         </div>
//         {show && students.map((item) => (
//           <li key={item.id}>
//             <h1>{item.id} - {item.name}</h1>
//             <button onClick={() => deleteStudent(item.id)} className="delete">delete</button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }









// inline style เเบบ object เจาะจงบางส่วนที่ h1////////////////////////////////////
// import { useState } from "react";
// import "./StudentList.css"
// export default function StudentList() {
//   const [students, setStudents] = useState([
//     { id: 1, name: "blasso" },
//     { id: 2, name: "jojo" },
//     { id: 3, name: "kong" },
//   ])

//   //click1  keep 2,3
//   //  setStudents คือ ฟังชันที่ใช้เปลี่ยนเเปลงค่าที่อยู่ใน state students
//   //create state
//   const [show, setShow] = useState(true); //true เเสดงเนื้อหา , false : ซ่อนเนื้อหา

//   function deleteStudent(id) {
//     console.log(id)
//     setStudents(students.filter(item => item.id !== id))

//   }
//  inline style
//   const myStyle = {
//     color: "purple",
//     fontSize: "50px",
//     padding: "30px",
//     fontStyle: "italic"
//   }

//   return (
//     /* //item คือ ตัวเเทนของ object ที่บรรจุใน array students */
//     <>
//       <ul>
//         <div className="header">
//           <h1 style={myStyle}>number of students  ({students.length}) </h1>
//           <button onClick={() => setShow(!show)}>toggle</button>
//           {/* //ลอง f12 ดู */}
//         </div>
//         {show && students.map((item) => (
//           <li key={item.id}>
//             <h1>{item.id} - {item.name}</h1>
//             <button onClick={() => deleteStudent(item.id)} className="delete">delete</button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }


// inline style เเบบ normal เจาะจงบางส่วนที่ h1.//////////////////////////////////////////////////////////////
// import { useState } from "react";
// import "./StudentList.css"
// export default function StudentList() {
//   const [students, setStudents] = useState([
//     { id: 1, name: "blasso" },
//     { id: 2, name: "jojo" },
//     { id: 3, name: "kong" },
//   ])

//   //click1  keep 2,3
//   //  setStudents คือ ฟังชันที่ใช้เปลี่ยนเเปลงค่าที่อยู่ใน state students
//   //create state
//   const [show, setShow] = useState(true); //true เเสดงเนื้อหา , false : ซ่อนเนื้อหา

//   function deleteStudent(id) {
//     console.log(id)
//     setStudents(students.filter(item => item.id !== id))

//   }
//   return (
//     /* //item คือ ตัวเเทนของ object ที่บรรจุใน array students */
//     <>
//       <ul>
//         <div className="header">
//           <h1 style={{ color: "purple", fontSize: "40px" }}>number of students  ({students.length}) </h1>
//           <button onClick={() => setShow(!show)}>toggle</button>
//           {/* //ลอง f12 ดู */}
//         </div>
//         {show && students.map((item) => (
//           <li key={item.id}>
//             <h1>{item.id} - {item.name}</h1>
//             <button onClick={() => deleteStudent(item.id)} className="delete">delete</button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }



/////////////////////////////////////////////////////////


// import { useState } from "react";
// import "./StudentList.css"
// export default function StudentList() {
//   const [students, setStudents] = useState([
//     { id: 1, name: "blasso" },
//     { id: 2, name: "jojo" },
//     { id: 3, name: "kong" },
//   ])

//   //click1  keep 2,3
//   //  setStudents คือ ฟังชันที่ใช้เปลี่ยนเเปลงค่าที่อยู่ใน state students
//   //create state
//   const [show, setShow] = useState(true); //true เเสดงเนื้อหา , false : ซ่อนเนื้อหา

//   function deleteStudent(id) {
//     console.log(id)
//     setStudents(students.filter(item => item.id !== id))

//   }
//   return (
//     /* //item คือ ตัวเเทนของ object ที่บรรจุใน array students */
//     <>
//       <ul>
//         <div className="header">
//           <h1>number of students  ({students.length}) </h1>
//           <button onClick={() => setShow(!show)}>toggle</button>
//           {/* //ลอง f12 ดู */}
//         </div>
//         {show && students.map((item) => (
//           <li key={item.id}>
//             <p>{item.id} - {item.name}</p>
//             <button onClick={() => deleteStudent(item.id)} className="delete">delete</button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }