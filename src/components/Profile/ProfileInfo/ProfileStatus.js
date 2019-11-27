import React from 'react';
//классовая компонента нужна чтобы создавать однотипные объекты
class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    activateEditMode() {
        //setState нужно передать те свойства 
        //который перезапишет , что были в state
        //асинхронна
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode() {
        //setState нужно передать те свойства 
        //который перезапишет , что были в state
        //асинхронна
        this.setState({
            editMode: false
        })
    }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)} >{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        {/* onBlur срабатывает тогда когда фокус на элементе
                        а потом фокус из элемента уходит */}
                        {/* autoFocus фокус в конце строки */}
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status} />
                    </div>
                }
            </div>)
    }
}
export default ProfileStatus;