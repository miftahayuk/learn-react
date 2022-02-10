import { Component } from "react";
import { connect } from "react-redux";
import ActionType from "../redux/globalAction";

class ListMenu extends Component {
  render() {
    return (
      <>
        <h1>Menus</h1>
        <br />
        <button onClick={() => this.props.changeForm(true)}>
          Add Menu
        </button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.listMenus.length ? (
              this.props.listMenus.map((menu, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{menu.name}</td>
                    <td>{menu.price}</td>
                    <td><button onClick={() => this.props.deleteMenu(menu.name)}>DELETE</button></td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>No Menu Available</td>
              </tr>
            )}
          </tbody>
        </table>
      </>
    );
  }
}


const mapStateToProps = ((state) => {
    return({
        listMenus : state.menu.listMenus
    })
})

const mapDispatchToProps = (dispatch) => {
    return{
      changeForm : (newCondition) => dispatch({type: "CHANGEADDFORM", condition: newCondition}),
      deleteMenu: (data) => dispatch({type: "DELETEMENU", name: data}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListMenu)