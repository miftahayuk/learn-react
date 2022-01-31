import Button from "@restart/ui/esm/Button";

const { Component } = require("react");

class Clock extends Component{
    constructor(props){
        super(props)
        this.state={
            date: new Date()
        }
    }

    componentDidMount(){
        console.log("Component did mount called");
        this.timerID = setInterval(
            () => this.tick(),1000 //setiap satu detik this.tick selalu dipanggil
        )
        //asynchronous function : setTimeout, setInterval, dll
        //panggil API
    }

    //setiap ada update componendidUpdate dipanggil
    componentDidUpdate(){
        console.log("Componentdid update is Called");
    }

    componentWillUnmount(){ //di command code selain ini (destroy/hardreload) trs keluar componentwillunmount ini
        console.log("Componentwillunmount is called");
        clearInterval(this.timerID)
        //function yg akan dipanggil ketika component di destroy
        //biasanya untuk clean up
    }

    shouldComponentUpdate(){
        console.log("should component update called");
        // return true //ini update trs
        return false // ini update nya ya berenti
    }

    getSnapshotBeforeUpdate(){
        console.log("get snapshoot called");
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }

    stop=()=>{
        clearInterval(this.timerID)
    }

    render(){
        console.log("Render is called");
        return(
            <div>
                <h1>{this.state.date.toLocaleTimeString()}</h1> 
                <Button onClick={this.stop}>STOP</Button>
            </div>
            
        )
    }

}

export default Clock

//NOTE
// {/* toLocalString itu ada date sama time */}
// {/* toLocalTimeString itu ada time aja*/}
// {/* toLocalDateString itu ada date aja */}

//CATATAN UNTUK RENDER
//render dipanggil saaat mounting ataupun updating
//render ini pure function, dimana kita gaboleh melakukan setstate didalamnya

//CATATAN UNTUK COMPONENT DIDMOUNT
//naroh set state di component didmount itu diperbolehkan
//function ini akan terpanggil ketika semua komponen terbentuk/ ready dan terpanggil setelah render


