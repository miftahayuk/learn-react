import { Component } from "react";
import { connect } from "react-redux";
import ActionType from "../redux/globalAction";


class FormMenu extends Component {
    data = this.props.listMenus

    constructor(props) {
        super(props)
        this.state = {
            data: this.props.listMenus,
            newName: "",
            newPrice: "",
            errName:"",
            errPrice:"",
            isValid : true,
        }
    }

    handleChange = (event) => {
        if (event.target.name === "name") {
            if (event.target.value.length>0) {
            this.setState({
                newName: event.target.value,
                errName: "",
            });
            } else {
            this.setState({
                newName: "",
                errName: "Name cannot be empty",
            });
            }
        } else if (event.target.name === "price") {
            if (event.target.value.length>0) {
            this.setState({
                newPrice: event.target.value,
                errPrice: "",
                isValid : false,
            });
            } else {
            this.setState({
                newPrice: "",
                errPrice: "Price cannot be empty",
                isValid : true,
            });
            }
        }
    }

    handleOnSubmit = (event) => {
        let newData = this.state.data
        newData.push({
            name: this.state.newName,
            price: this.state.newPrice
        })
        this.setState({
            data: newData
        })
        event.preventDefault()
    }

    handleOnClick = (event) => {
        let newData = this.state.data
        newData.push({
            name: this.state.newName,
            price: this.state.newPrice
        })
        this.props.addList(newData)
        this.props.changeForm(false)
        event.preventDefault()
    }
    
    handleOnClick2=(event)=>{
        this.props.changeForm(false)
        event.preventDefault()
    }

    render() {
        console.log(this.state.data);
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <div className="form-group">
                        <label htmlFor="toDoInput">Name</label>
                        <input type="text" className="form-control" id="toDoInput" name="name" onChange={this.handleChange} required/>
                        <p style={{"color":"red"}}>{this.state.errName}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="descriptionInput">Price</label>
                        <input className="form-control" id="descriptionInput" rows="2" name="price" onChange={this.handleChange} required/>
                        <p style={{"color":"red"}}>{this.state.errPrice}</p>
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={this.state.isValid} onClick={this.handleOnClick}>Submit</button>
                    <button type="submit" className="btn btn-secondary" onClick={this.handleOnClick2}>Cancel</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = ((state) => {
    return ({
        listMenus: state.menu.listMenus
    })
})

const mapDispatchToProps = ((dispatch) => {
    return {
        addList: (data) => dispatch({ type: ActionType.ADDTODOMENU, newData: data }),
        changeForm : (newCondition) => dispatch({type: ActionType.CHANGEADDFORM, condition: newCondition})
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(FormMenu)