import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getEntriesSynonyms } from './../actions';

class ThesaurusForm extends Component {
    static propTypes = {
        getEntriesSynonyms: PropTypes.func
    }

    constructor (props) {
        super(props);

        this.state = {
            word: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleSubmit (event) {
        this.props.getEntriesSynonyms(this.state).then(data => {
            console.log('data', data);
        });
        event.preventDefault();
    }

    handleOnChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render () {
        return (
            <div>
                <input type='text' name='word' className='form-control' placeholder='Type a word' onChange={this.handleOnChange} />
                <button className='btn btn-primary' onClick={this.handleSubmit}>
                    Submit
                </button>
            </div>
        );
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({
        getEntriesSynonyms
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(ThesaurusForm);
