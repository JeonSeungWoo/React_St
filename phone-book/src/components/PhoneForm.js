import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: '',
        age: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSubmit = (e) => {
        // 페이지 리로딩 방지
        e.preventDefault();
        // 상태값을 onCreate 를 통하여 부모에게 전달
        this.props.onCreate(this.state);
        // 상태 초기화
        this.setState({
          name: '',
          phone: '',
          age: ''
        })
      }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="이름"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                />
                <br/>
                <input
                    placeholder="전화번호"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name="phone"
                />
                <br/>
                <input
                    placeholder="나이"
                    value={this.state.age}
                    onChange={this.handleChange}
                    name="age"
                />
                <div>{this.state.name} <br/> {this.state.phone}
                <br/> {this.state.age}</div>

                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;