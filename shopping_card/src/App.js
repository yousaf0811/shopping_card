import { useState } from 'react';
import './App.css';
function App() {
  const [num1,setNum1] = useState(0);
  const [num2,setNum2] = useState(0);
  const [num3,setNum3] = useState(0);
  const [code,setCode] = useState(0);
  function total(a,b,c,d){
      if(d== 1122){
        const lamount = (a*25+b*25+c*25)*5/100;
        return (a*25+b*25+c*25) - lamount;

      }
      else{
          return (a*25+b*25+c*25);
      }
  }
  return (
    <div className="App">
      <div className="back">

          <div className="f_layer">
            <div className="f_right">
                <div className="r_items" >
                  <h1>Summary</h1>
                  <h4>Total items-3</h4>
                </div>
                <div className="r_items" >
                  <h4>Enter Your Code</h4>
                  <input onChange={(e)=>setCode(e.target.value)} />
                </div>
                <div className="r_items" >
                  <h3>Total Amount= {total(num1,num2,num3,code)}</h3>
                  <button type="button" class="btn btn-secondary">Pay Now</button>
                </div>
            </div>
            <div className="f_left">
              <div className="f_items">
                <h1>Shopping Card</h1>
          
              </div>
              <div className="f_items" >
                  <div className="items" >
                      <img src='1.jpg' weigth="400px" height="140px" ></img>
                  </div>
                  <div className="items" >
                    <h3>Shirt</h3>
                    <h4>Cotton-T-shirt</h4>
                  </div>
                  <div className="items " >
                    <h3>
                      Quantity
                    </h3>
                      <input  min="0" type="number" onChange={(e)=>setNum1(e.target.value)}/>
                  </div>
                  <div className="items" >
                    <h2>$25</h2>
                  </div>
              </div>
              <div className="f_items" >
              <div className="items" >
              <img src='2.jpg' weigth="400px" height="140px" ></img>
                  </div>
                  <div className="items" >
                    <h3>Shirt</h3>
                    <h4>Cotton-T-shirt</h4>
                  </div>
                  <div className="items " >
                    <h3>
                      Quantity
                    </h3>
                      <input  min="0" type="number" onChange={(e)=>setNum2(e.target.value)}/>
                  </div>
                  <div className="items" >
                    <h2>$25</h2>
                  </div>
              </div>
              <div className="f_items" >
              <div className="items" >
              <img src='3.jpg' weigth="200px" height="140px" ></img>
                  </div>
                  <div className="items" >
                    <h3>Shirt</h3>
                    <h4>Cotton-T-shirt</h4>
                  </div>
                  <div className="items " >
                    <h3>
                      Quantity
                    </h3>
                      <input  min="0" type="number" onChange={(e)=>setNum3(e.target.value)}/>
                  </div>
                  <div className="items" >
                    <h2>$25</h2>
                  </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
export default App;