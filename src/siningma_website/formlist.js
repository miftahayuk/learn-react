import list from './list.svg'
import form from './forms.svg'
const { Component } = require("react");

class FormListSiningma extends Component{
    render(){
        return(
        <table>
        <tr>
            <td>
                <h3><a href="./list-profile.html">List Profile</a></h3>
                Disini berisikan data nama-nama trainee ITDP Batch 1.
                <img src={list} alt="list" width="300" height="200"/>
                <div class="flex-container">
                <div>1</div>
                <div>2</div>
                <div>3</div>  
              </div>
                {/* <img src="list.svg" alt="result image" width="300" height="200"> */}
            </td>
            <td>
                <h3><a href="./forms.html">Forms</a></h3>
                Disini berisikan data-data yang harus diisi.
                <img src={form} alt="form" width="300" height="200"/>
            </td>
        </tr>
        </table>
        )
    }
}

export default FormListSiningma
