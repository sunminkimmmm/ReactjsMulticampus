import React, { Component } from 'react';
import produce from 'immer';
import MyButton from './MyButton';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemlist : [],
    }
  }
  
  addItem = () => {
    if(!this.num) this.num = 0;
    this.num++;
    //불변성으로 만든 newItemList
    const newItemList = produce(this.state.itemlist,(draft)=>{
      draft.push({no:new Date().getTime(),item:"아이템"+this.num})
    })
    //재할당
    this.setState({itemlist:newItemList});
  }

  render() {
    return (
      <div className="container">
          <div className="well">
              <MyButton addItem={this.addItem}/>
              <List itemlist={this.state.itemlist}/>
          </div>
      </div>
    );
  }
}

export default App;