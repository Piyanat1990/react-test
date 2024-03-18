/* eslint-disable no-unused-vars */

// ep9 prop from app.js ep8 prop อีกวิธี3/////////////////////////////////////////



// import "./Header.css";
// export default function Header({ title }) {

//     return (
//         <nav>
//             <img src={require('../image/logo.png')} alt='' className="logo" />
//             <a href="/">{title}</a>
//         </nav>
//     )
// }


// ep9 prop from app.js ep8 prop อีกวิธี2/////////////////////////////////////////



// import "./Header.css";
// export default function Header(props) {
//     const { title } = props
//     return (
//         <nav>
//             <img src={require('../image/logo.png')} alt='' className="logo" />
//             <a href="/">{title}</a>
//         </nav>
//     )
// }





// // ep9 prop from app.js ep8 prop วิธี1/////////////////////////////////////////



// import "./Header.css";
// export default function Header(props) {
//     return (
//         <nav>
//             <img src={require('../image/logo.png')} alt='' className="logo" />
//             <a href="/">{props.title}</a>
//         </nav>
//     )
// }


// ep8 creat component css /Headers.css/////////////////////////////////////////


// import "./Header.css";
// export default function Header() {
//     return (
//         <nav>
//             <img src={require('../image/logo.png')} alt='' className="logo" />
//             <a href="/">First Page</a>
//         </nav>
//     )
// }






// ep7 image in react/////////////////////////////////////////////////

// import Logo from '../image/logo.png';  //error ต้องใช้ require ค้นใน stack overflow

//เเบบ normal////////////

// export default function Header(){

//     return (
//         <nav>
//        <img src={require('../image/logo.png')} alt=''/>
//             <a href="/">First Page</a>
//         </nav>
//     );
// }






//เเบบ arrow function////////////
// const Header=()=>{


//     return (
//         <nav>
//        <img src={require('../image/logo.png')} alt=''/>
//             <a href="/">First Page</a>
//         </nav>
//     );
// }

// export default Header



// ep6 intro component//////////////////////////////
// 3 method
// method1

// function Header() {
//     return (
//         <h1 > Blasso </h1>
//     );
// }

// export default Header

// method2//////////////////////////////////////////

export default function Header() {
    return (
        <h1>Blasso</h1>
    )
}



// method3 aero function

// const Header=()=>{
//     return(
//     <h1>blasso</h1>
//     )
// }


// export default Header