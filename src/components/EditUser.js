import React, { Component } from "react";

class EditUser extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.match.params.id)
    }
    render() {
        return (
            <div>
                <h2>UserEdit::{this.props.match.params.id} </h2>
                <p>Cras facilisis urna ornare ex volutpat, et
                    convallis erat elementum. Ut aliquam, ipsum vitae
                    gravida suscipit, metus dui bibendum est, eget rhoncus nibh
                    metus nec massa. Maecenas hendrerit laoreet augue
                    nec molestie. Cum sociis natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus.</p>

                <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
            </div>
        );
    }
}

export default EditUser;