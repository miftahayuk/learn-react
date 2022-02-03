import { Component } from "react";

class ListOfTrainee extends Component{

    // constructor(props){
    //     super(props)
    //     this.state={
    //         trainees :[]
    //     }
    // }

    //bisa dengan cara dibawah ini, tanpa pake constructor, tp gabisa main props
    // state ={
    //     trainees : this.props.trainessFromForm,
    // }

    // addComponent=(event)=>{
    //     this.setState({
    //         trainees : [...this.state.trainees,this.props.name]
    //     })
    //     event.preventDefault()
    // }


    render(){
        //key unique itu perkomponen
        // let items = this.state.trainees.map((trainee, index)=>{
        //     return<li key={index}>{trainee}</li> //key hrs unique, kalo gadikasi key kena warning ajasi
        // })
        return(
            <>
                {/* {this.addComponent} */}
                <h2>List Names: </h2>
                <ul>
                    {(this.props.trainessFromForm.length>0)?this.props.trainessFromForm.map((trainee, index)=>{
                        return<li key={index}>{trainee}</li>})
                        : <p>No value available</p>
                    }
                </ul>
            </>
        )
    }


    // render() {
    //     console.log(this.props.trainees);
    //     let items = this.props.trainees.map((trainee, index) => {
    //         return <li key={index}>{trainee.name} {trainee.age} {trainee.address}</li>
    //     })


    //     return (
    //         <div>
    //             <ul>
    //                 <li>
    //                     {items}
    //                 </li>
    //             </ul>

    //         </div>
    //     )
    // }
}


export default ListOfTrainee