import { Component } from "react";

// class Count extends Component{
//     constructor(props){
//         //super itu merujuk ke parentnya (Component) karena dia mengextends Component
//         super(props)
//         this.state ={
//             number : 0
//         }
//     }

//     increment = () => {
//         //set state berguna untuk melakukan manipulasi
//         //set state ma akan terjadi re-render component
//         // console.log('increment',this); // ini undefined krn function ini kan ga ngiket thisnya si object (objectnya Count)
//         this.setState({
//             number : this.state.number+1
//         })
//     }
//     render(){
//         return(
//             <div>
//                 <h1>{this.state.number}</h1>
//                 {/* melakukan binding saat memanggil functio increment supaya this yang dipanggil oleh function adalah
//                 this milik Count */}
//                 {/* mengeksekusi increment saat ini juga */}
//                 <button onClick={this.increment("test")}>+</button>

//                 {/* mengeksekusi arrow function yang memanggil function increment */}
//                 <button onClick={()=>this.increment("test")}>+</button>

//                 {/* cara lain pemanggilan arrow function pada function biasa */}
//                 {/* <button onClick={()=>this.increment(parameter)}>+</button> */}

//                 {/* jika tidak menggunakan arrow function pada function biasa */}
//                  {/* <button onClick={this.increment.bind(this)}>+</button> */}

//             </div>
//         )
//     }
// }

// export default Count

//state => component ini
//super props refer ke parent
//kalau arrow function this nya itu ke induknya (lgsg this ke objectnya)


//PENTING:
//ketika menggunakan function biasa, maka kita harus melakukan binding untuk mengikat this yang kita kirimkan menjadi this function tsb
//ketika kita menggunakan arrow function kita tidak perlu melakukan binding karena arrow function tidak punya konteks this
//arrow function akan mengambil this dari induknya




//===========================RE RENDER==================================//

// //re render tuh kayak ngebangun ulang gitu,
// class Count extends Component{
//     constructor(props){
//         super(props)
//         this.state ={
//             number : 0
//         }
//     }

//     increment = () => {
//         console.log('increment',this);
//         this.setState({
//             number : this.state.number+1
//         })
//     }

//     decrement = ()=>{
//         let i =0.5
//         console.log('decrement',this);
//         this.setState({
//             number : this.state.number-i
//         })
//     }
//     render(){
//         return(
//             <div>
//                 <h1>{this.state.number}</h1>
//                 <button onClick={()=>this.increment()}>+</button>
//                 <button onClick={()=>this.decrement()}>-</button>
//             </div>
//         )
//     }
// }

// export default Count


import CounterButtonPlus from "./CounterButtonPlus";
class Count extends Component{
    constructor(props){
        super(props)
        this.state ={
            number : 0
        }
    }

    increment=(number)=>{
        this.setState({
            number : number
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.number}</h1>
                <CounterButtonPlus callback={this.increment} numberFromCount={this.state.number}/>
            </div>
        )
    }
}

export default Count