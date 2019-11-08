import React, { Component } from 'react';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


class PhoneInfo extends Component {
    static defaultProps = {
        info: {
            name: '이름',
            phone: '010-0000-0000',
            age: '28',
            id: 0
        }
    }
    state = {
        // 우리는 수정 버튼을 눌렀을 떄 editing 값을 true 로 설정해줄것입니다.
        // 이 값이 true 일 때에는, 기존에 텍스트 형태로 보여주던 값들을
        // input 형태로 보여주게 됩니다.
        editing: false,
        // input 의 값은 유동적이겠지요? input 값을 담기 위해서 각 필드를 위한 값도
        // 설정합니다
        name: '',
        phone: '',
        age: '',
    }


    handleRemove = () => {

    /*        
           if(window.confirm("확인") == true){
            const { info, onRemove } = this.props;
            onRemove(info.id);
            alert('삭제되었어');
           }else{
                  alert("실패.");
           } 
    */
               

    confirmAlert({
            title: '삭제',
            message: '삭제할래??.',
            buttons: [
                {
                    label: '응',
                    onClick: () => {
                        const { info, onRemove } = this.props;
                        onRemove(info.id);
                        alert('삭제되었어');
                    },
                },
                {
                    label: '꺼져',
                    onClick: () => alert('취소')
                },
                {
                    label: '오늘은',
                    onClick: () => alert('회식입니다.')
                }
            ]
        });
 
    }

    // editing 값을 반전시키는 함수입니다
    // true -> false, false -> true
    handleToggleEdit = () => {
      
        const { editing } = this.state;
        this.setState({ editing: !editing });

       

    }

    // input 에서 onChange 이벤트가 발생 될 때
    // 호출되는 함수입니다
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        // 여기서는, editing 값이 바뀔 때 처리 할 로직이 적혀있습니다.
        // 수정을 눌렀을땐, 기존의 값이 input에 나타나고,
        // 수정을 적용할땐, input 의 값들을 부모한테 전달해줍니다.

        const { info, onUpdate } = this.props;
        if (!prevState.editing && this.state.editing) {
            // editing 값이 false -> true 로 전환 될 때
            // info 의 값을 state 에 넣어준다
        

            this.setState({
                name: info.name,
                phone: info.phone,
                age: info.age
            })
        }

        if (prevState.editing && !this.state.editing) {
            // editing 값이 true -> false 로 전환 될 때
          /*   onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone,
                age:  this.state.age
            });*/
 
            confirmAlert({
                title: '수정',
                message: '수정할래??.',
                buttons: [
                    {
                        label: '응',
                        onClick: () => {
                            onUpdate(info.id, {
                                name: this.state.name,
                                phone: this.state.phone,
                                age:  this.state.age
                            });
                
                            alert('수정되었어');
                        },
                    },
                    {
                        label: '꺼져',
                        onClick: () => alert('취소')
                    },
                    {
                        label: '오늘은',
                        onClick: () => alert('회식입니다.')
                    }
                ]
            });


        }
    }

    render() {

        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px',
            background: "bisque"
        };

        const board = {
            border: '1px solid black',
            padding: '5px',
            margin: '5px',
            background: "white"
        };

        const {
            id, name, phone, age
        } = this.props.info;
        const { editing } = this.state;
        if (editing) { // 수정모드
            return (
                <div style={style}>
                    <div>
                        <input style={board}
                            value={this.state.name}
                            name="name"
                            placeholder="이름"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input style={board}
                            value={this.state.phone}
                            name="phone"
                            placeholder="전화번호"
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <input style={board}
                            value={this.state.age}
                            name="age"
                            placeholder="나이"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button onClick={this.handleToggleEdit}>적용</button>
                    <button onClick={this.handleRemove}>삭제</button>
                </div>
            );
        }



        return (
            <div style={style}>
                <div style={board}><b>{id}</b></div>
                <div style={board}><b>{name}</b></div>
                <div style={board}>{phone}</div>
                <div style={board}>{age}</div>
                <button onClick={this.handleToggleEdit}>수정</button>
                <button onClick={this.handleRemove}>삭제</button>
                {/* <button onClick={() => {if(window.confirm('Delete the item?')){this.handleRemove()};}}>삭제</button>  */}
            </div>
        );
    }


}




export default PhoneInfo;