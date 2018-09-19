import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import Header from '../header/header';
import './login.css';
import * as userActionCreator from '../../actions/user';

class Login extends Component {

    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getData() {
        this.props.userAction.getUserListRequest();
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data);
    }


    render() {

        if(this.props.loading == false) console.log(this.props.data);

        return (
            <div>
                <Header />
                <Container>
                    <Form>

                    </Form>
                </Container>
            </div>


        );
    }
}

function mapStateToProps(state) {
    return {
        loading: state.userReducer.loading,
        error: state.userReducer.error,
        data: state.userReducer.users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userAction: bindActionCreators(userActionCreator, dispatch)
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Login);
