import React from 'react';
//классовая компонента нужна чтобы создавать однотипные объекты
class ProfileStatus extends React.Component {
    
    state = {
        editMode: false,
        status: this.props.status
    }
    
    activateEditMode = () => {
        //setState нужно передать те свойства 
        //который перезапишет , что были в state
        //асинхронна
        this.setState({
            editMode: true,
        })
    }
    deactivateEditMode = () => {
        //setState нужно передать те свойства 
        //который перезапишет , что были в state
        //асинхронна
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps,prevState){
        if(prevProps.status!==this.props.status){
        this.setState({
            status:this.props.status
        });
    }
    }


    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode} >
                            {this.state.status || 'no status'}
                        </span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                       
                        <input  onChange={this.onStatusChange} autoFocus={true}
                            onBlur={this.deactivateEditMode} value={this.state.status} />
                    </div>
                }
            </div>)
    }
}
export default ProfileStatus;