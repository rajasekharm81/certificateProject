/* eslint-disable eqeqeq */
import {Component} from "react";
import format from 'date-fns/format'


class Greet extends Component{
    state={fSize:"25px", bg:"transperant",greetMsg:""}

        gettime=()=>{ 
            const hours = format(new Date(), "H")
            if(hours==1 || hours == 2 || hours == 3 || hours==4 || hours == 5 || hours == 6 || hours==7 || hours == 8 || hours == 9 || hours==10 || hours == 11){
                this.setState({greetMsg:"Good Morning"})
            }
            else if(hours==12 || hours == 13 || hours==14 || hours == 15 ){
                this.setState({greetMsg:"Good Afternoon"})
            }
             else if(hours ==  16 || hours==17 || hours == 18 || hours == 19 || hours==20 || hours == 21){
                 this.setState({greetMsg:"Good Evening"})
             }
            else{
                this.setState({greetMsg:"Good Night"})
            }
        }
    
        componentDidMount(){
            const {fSize,bg}=this.props
            this.setState({fSize:fSize,bg:bg})
            this.gettime()
        }

        render(){
            const {fSize,bg,greetMsg}=this.state
            return(
                <div>
                    <h1 style={{fontSize:`${fSize}`,backgroundColor:`${bg}`}}>{greetMsg}</h1>
                </div>
            )
        }
}

export default Greet