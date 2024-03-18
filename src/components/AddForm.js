import { useState } from "react"
import "./AddForm.css"
export default function AddForm(props) {
    const { students, setStudent } = props
    // const [name, setName] = useState("jane") //test
    const [name, setName] = useState("")
    const [gender, setGender] = useState("male")
    function saveStudent(e) {
        e.preventDefault();
        if (!name) {
            alert("please fill your data")

        } else {
            const newStudent = {
                id: Math.floor(Math.random() * 1000),
                name: name,
                gender: gender
            }
            // ...student ข้อมูลชุดเดิม newstudent เพิ่มข้อมูลชุดใหม่เข้าไปใน array student
            setStudent([...students, newStudent])
            // console.log(newStudent);
            // ลอง กรอกชือนักเรียน เเล้ว f12 console
            setName("")  //เมื่อกรอกเเล้วเซ้ดค่าว่าง
            setGender("male")
        }

    }
    return (

        <section className="container">
            <form onSubmit={saveStudent}>
                <label>name of student</label>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                {/* onChange  inputลงในform เเล้วบันทึกเข้าไปใน state name */}
                <select value={gender} onChange={(e) => setGender(e.target.value)} >
                    <option value="male">Male</option>
                    <option value="female" >Female</option>
                </select>
                <button type="submit" className="btn-add">save</button>
            </form>
        </section >

    )
}