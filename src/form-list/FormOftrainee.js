import { Component } from "react";
import ListOfTrainee from "./ListOftrainee";

class FormOftrainee extends Component{
        state ={
        trainees : [],
        newName : '',
        newMail :'',
        newAddress :'',
        newAge :'',
        isValid : true,
        errorName : ''
    }

    handleChangeName=(event)=>{
        if (event.target.value.length >=5){
            console.log("event",event);
            this.setState({
            newName : event.target.value,
            isValid : false,
            errorName : ""
        })
        }else{
            this.setState({
                isValid : true,
                errorName :"5 min length"
            })
        }
    }

    handleChangeEmail=(event)=>{
        //ini buat validasi email dari Regex
        if (event.target.value.match(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9].+\.)+[A-Za-z]+$/)){
            this.setState({
                newMail : event.target.value,
                isValid : false,
                errorName:""
            })
        }else{
            this.setState({
                isValid : true,
                errorName: "invalid email format"
            })
        }
    }

    handleChangeAddress=(event)=>{
        if(event.target.value.length>=10){
            this.setState({
                newAddress : event.target.value,
                isValid : false,
                errorName :""
            })
        }else{
            this.setState({
                isValid : true,
                errorName :"10 min length"
            })
        }
    }

    handleChangeAge=(event)=>{
        //ini handle dari regex di interval age 0-99
        if(event.target.value.match(/^[1-9]?\d$/)){
            this.setState({
                newAge : event.target.value,
                isValid :false,
                errorName:""
            })
        }else{
            this.setState({
                isValid:true,
                errorName:"invalid range age"
            })
        }
    }

    handleSumbit=(event)=>{
        this.setState({
            trainees :[...this.state.trainees, this.state.newName],
            newName : this.state.newName,
            newMail : this.state.newMail,
            newAddress : this.state.newAddress,
            newAge : this.state.newAge
        })
        // console.log(this.state.trainees);
        console.log(this.state.newName);
        console.log(this.state.newMail);
        console.log(this.state.newAddress);
        console.log(this.state.newAge);
        event.preventDefault();  //untuk mencegah terjadinya aksi dari event bawaan DOM    
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSumbit}>
                    <label>
                        <input type="text" name="name" placeholder="Enter your name" onChange={(e)=>this.handleChangeName(e)}/>
                        <input type="text" name="email" placeholder="Enter your mail" onChange={(e)=>this.handleChangeEmail(e)}/>
                        <input type="text" name="address" placeholder="Enter your address" onChange={(e)=>this.handleChangeAddress(e)}/>
                        <input type="number" name="age" placeholder="Enter your age" onChange={(e)=>this.handleChangeAge(e)}/>
                        <p>{this.state.errorName}</p>
                    </label>
                    {/* <input type="submit" value="submit" onClick={this.handleSumbit}/> */}
                    <button type="submit" disabled={this.state.isValid}>Submit</button>
                </form>
                <ListOfTrainee trainessFromForm={this.state.trainees}/>
                {/* <p>{this.state.newName}</p>
                <p>{this.state.newMail}</p>
                <p>{this.state.newAddress}</p>
                <p>{this.state.newAge}</p> */}

            </div>
        )
    }

}

export default FormOftrainee 