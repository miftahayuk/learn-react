import { Component } from "react";
import enigma from './enigma.png';
import sinarmas from './sinarmas.png'

class HeaderSiningma extends Component{
    render(){
        return(
            <header>
            <table className="center">
                <tr>
                    <td>
                        <img src={sinarmas} alt="sinarmas logo image" width="120" height="50"/>
                    </td>
                    <td>
                        <img src={enigma} alt="enigma logo image" width="140" height="50"/>
                    </td>
                </tr>
            </table>
            <h1 className="mystyle" >Sinigma Website</h1>
        </header>
    );
    }
}

export default HeaderSiningma
