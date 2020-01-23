import React, {Component} from 'react'
import './card-styles.css'
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

class Counter extends Component {
     constructor(props) {
          super(props)
      
      this.displayData0 = [];
      this.displayData1 = [];
     this.displayData2 = [];
    
          this.state = {
               count : 0,
               count1: 0,
               count2: 0,
               showdata0 : this.displayData0,
               postVal0 : "",
               showdata1 : this.displayData1,
               postVal1 : "",
               showdata2 : this.displayData2,
               postVal2 : ""
              
          }
   
     this.appendData0 = this.appendData0.bind(this);
      this.handleChange0 = this.handleChange0.bind(this);
       this.appendData1 = this.appendData1.bind(this);
      this.handleChange1 = this.handleChange1.bind(this);
       this.appendData2 = this.appendData2.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);

     }
     increment(){
          this.setState({
               count:this.state.count +1
          })

    }      
          increment1(){
          this.setState({
               count1:this.state.count1 +1
          })
   

          
     }
       increment2(){
          this.setState({
               count2:this.state.count2 +1
          })
   

          
     }
    
  appendData0() {
         this.displayData0.push(<div  id="display-data0">{this.state.postVal0}</div>);
         this.setState({
            showdata0 : this.displayData0,
            postVal0 : ""
         });
      }



 handleChange0(e) {
      let getTextAreaValue = e.target.value;
      this.setState({
        postVal0 :getTextAreaValue
      });
}
 appendData1() {
         this.displayData1.push(<div  id="display-data1">{this.state.postVal1}</div>);
         this.setState({
            showdata1 : this.displayData1,
            postVal1 : ""
         });
      }



 handleChange1(e) {
      let getTextAreaValue = e.target.value;
      this.setState({
        postVal1 :getTextAreaValue
      });
}
appendData2() {
         this.displayData2.push(<div  id="display-data2">{this.state.postVal2}</div>);
         this.setState({
            showdata2 : this.displayData2,
            postVal2 : ""
         });
      }



 handleChange2(e) {
      let getTextAreaValue = e.target.value;
      this.setState({
        postVal2 :getTextAreaValue
      });
}

 

  

     render()
     {
          return(
          <div>
             <h1 id="h">Likes & Comments App</h1>
             <div className="container-fluid d-flex justify-content-center">
           <div className="row">
            <div className="col-md-4">
        <div className="card text-center shadow">
         <div className="overflow">
          <img src={img1} alt='Image1' className="card-img-top"/>
         </div>
         <div className="card-body text-dark">
           
              <span id="c0">{this.state.count}  </span>
               <button onClick = {() =>this.increment()} id="like0"> Like</button>
                 <div id="mainContainer">
             <textarea rows="4" cols="50" value={this.state.postVal0} onChange={this.handleChange0} ></textarea>
             <div >
             <input  type="submit" className="button" onClick={this.appendData0}  value="Comment"/>
            
             </div>
             <div id="display-data-Container">
             {this.displayData0}
             </div>
          </div>
          
           </div> 
        </div>
        </div>
         <div className="col-md-4">
        <div className="card text-center shadow">
         <div className="overflow">
          <img src={img2} alt='Image1' className="card-img-top"/>
         </div>
         <div className="card-body text-dark">
           
         <span id="c1">{this.state.count1 } </span>
               <button onClick = {() =>this.increment1()} id="like1"> Like</button>
               <div id="mainContainer">
             <textarea rows="4" cols="50" value={this.state.postVal1} onChange={this.handleChange1} ></textarea>
             <div >
             <input  type="submit" className="button" onClick={this.appendData1}  value="Comment"/>
            
             </div>
             <div id="display-data-Container">
             {this.displayData1}
             </div>
          </div>
           </div> 
        </div>
        </div>

         <div className="col-md-4">
        <div className="card text-center shadow">
         <div className="overflow">
          <img src={img3} alt='Image1' className="card-img-top"/>
         </div>
         <div className="card-body text-dark">
           
         <span id="c2">{this.state.count2 } </span>
               <button onClick = {() =>this.increment2() } id="like2"> Like</button>
               <div id="mainContainer">
             <textarea rows="4" cols="50" value={this.state.postVal2} onChange={this.handleChange2} ></textarea>
             <div >
             <input  type="submit" className="button" onClick={this.appendData2}  value="Comment"/>
            
             </div>
             <div id="display-data-Container">
             {this.displayData2}
             </div>
          </div>
           </div> 
        </div>
        </div>
        </div>
        </div>
        </div>
               )
     }
}
export default Counter