
import './card-styles.css'
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';


class Card extends Component(props) {
     constructor(props) {
     	super(props);

     	this.state = {
     		count : 0
     	}
     }
     increment(){
     	this.setState({
     		count:this.state.count +1
     	})
     	console.log(this.state.count)
     }
	
	render()
	{
   return(
    <div>
       <div className="container-fluid d-flex justify-content-center">
		 <div className="row">
		  <div className="col-md-4">
        <div className="card text-center shadow">
         <div className="overflow">
          <img src={img1} alt='Image1' className="card-img-top"/>
         </div>
         <div className="card-body text-dark">
           
         <span>count - {this.state.count}</span>
			<button onClick = {() =>this.increment()}> Increment</button>
           </div> 
        </div>
        </div>
         <div className="col-md-4">
        <div className="card text-center shadow">
         <div className="overflow">
          <img src={img2} alt='Image1' className="card-img-top"/>
         </div>
         <div className="card-body text-dark">
           
         <span>count - {this.state.count}</span>
			<button onClick = {() =>this.increment()}> Increment</button>
           </div> 
        </div>
        </div>

         <div className="col-md-4">
        <div className="card text-center shadow">
         <div className="overflow">
          <img src={img3} alt='Image1' className="card-img-top"/>
         </div>
         <div className="card-body text-dark">
           
         <span>count - {this.state.count}</span>
			<button onClick = {() =>this.increment()}> Increment</button>
           </div> 
        </div>
        </div>
        </div>
        </div>
   </div>
   );

}
}
export default Card