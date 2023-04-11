import React, {Component} from 'react';
import './App.css';
import Plan from './Plan'

class App extends Component {
state = {
  items:[],
  text:""
}
handlechange = e => {
  this.setState({text: e.target.value})
}
handleAdd = e => {
  if(this.state.text!== ""){
    const items =[...this.state.items, this.state.text];
    this.setState({items: items, text:""});
  }
}
handldelete = id =>{
  console.log("deleted",id);
  const olditems =[...this.state.items]
  console.log("olditems", olditems);
  const items = olditems.filter((element ,i) => {
   return i !== id
  })
  console.log("nemitems", items)
  this.setState({items: items})
}
  render() {
    return (
      <div className='container-fluid my-5'>
        <div className='row'>
          <div className='col-sm-6 mx-auto color-red
          shadow-lg p-3'>
            <h2 className='text-center'> today's plan</h2>
            <div className='row'>
              <div className='col-9'>
                <input type="text" className='form-control' placeholder='write plan here'
                value={this.state.text} onChange={this.handlechange} 
                />
              </div>
              <div className='col-2'>
                <button className='btn btn-warning px-5 font-weight-bold' onClick={this.handleAdd}>Add</button>
              </div>
              <div className='container-fluid'>
                <ul className='list-unstyled row m-5'>
                  {
                    this.state.items.map((value,i) => {
                      return <Plan key={i} id={i} value={value} 
                      sendData={this.handldelete}
                      />
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;
