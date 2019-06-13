import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'

class StreamCreate extends Component {

    renderInput(formProps) {


        return (
            <div className="form-group">
                <label className="text-center w-100 mt-4" htmlFor={formProps.label}>{formProps.label}</label>
                <input autoComplete="off" type="text" className="form-control" id={formProps.label} {...formProps.input}/>
                {formProps.meta.error && formProps.meta.touched ? <span>{formProps.meta.error}</span> : null}
            </div>
        )
    }


    onSubmit = (formValues) => {
        console.log(formValues)
    }


    render() {
        return (
            <div className="w-100 h-50 d-flex justify-content-center align-items-center">
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="w-50 m-auto mt-5 mb-5">
                    <Field name="title" component={this.renderInput} label="Title"/>
                    <Field name="description" component={this.renderInput} label="Description"/>
                    <div className="w-100 text-center">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}


const validate = formValues => {

    const errors = {}

    if (!formValues.title) {
        errors.title = 'You must enter a title'
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description'
    }

    return errors
}

export default reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate)
