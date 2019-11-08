import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {

  id = 2;
  state = {
    information: [
      { id: 0, name: '홍길동', phone: '010-1234-7895', age: '29' },
      { id: 1, name: '김유신', phone: '010-1234-7895', age: '30' }
    ],
    keyword: ''
  }


handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  }


  handleCreate = (data) => {
    console.log(data);

    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    });
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => id === info.id
          ? { ...info, ...data }
          : info
      )
    })
  }

  render() {
    const { information, keyword } = this.state;

    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );
    return (

      <div>
      <p>
     <input 
       placeholder="검색" 
       onChange={this.handleChange}
       value={keyword}
     />
   </p>
   <PhoneForm
     onCreate={this.handleCreate}
   />
  
   <hr />
   <PhoneInfoList 
     data={filteredList}
     onRemove={this.handleRemove}
     onUpdate={this.handleUpdate}
   />
 </div>
    );
  }
}


export default App;
