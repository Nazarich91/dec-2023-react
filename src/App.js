 //import logo from './logo.svg';
 import './App.css';
// import Users from "./components/users/Users";
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// function App() {
//  let msg = 'hello okten';
//
//   return (
//     <div>
//      <h1>{msg}</h1>
//
//         <Users xxx={users}/>
//         <hr/>
//
//
//     </div>
//   );
// }
//
// export default App;
//
import React, {useState} from 'react';
import IncrementDecrement from "./components/incrementDecrement/incrementDecrement";
import Comments from "./components/comments/Comments";
import FullComment from "./components/FullComment/FullComment";

const App = () => {
    let [chosenComment, setchosenComment] = useState();

    const lift = (obj) => {
        setchosenComment({...obj});
    }

    return (
        <div className={'container'}>
         {/*<IncrementDecrement/>*/}

            <div className={'leftSide'}>

          <Comments lift={lift}/>

            </div>
            <div className={'rightSide'}>
                <FullComment value={chosenComment}/>
                </div>


</div>
    );
};

export default App;
