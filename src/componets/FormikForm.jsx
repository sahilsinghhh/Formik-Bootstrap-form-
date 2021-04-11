// import React from 'react';
import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const SignupSchema = Yup.object().shape({
    consignorName: Yup.string()
        .min(2, ' *Length Too Short!')
        .max(50, '*Length Too Long!')
        .required('*Consignor Name Must be Required'),

    consignorAddress: Yup.string()
    .min(2, ' *Length Too Short!')
    .max(50, '*Length Too Long!')
    .required('*Consignor Address Must be Required'),

    consignorContact: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
        .min(10, '*contact details should be 10 digits !')
        .max(10, '*contact details should be 10 digits !')
        .required('*Consignor Contact details Required'),

    consignorGst: Yup.string()
        .min(15, '*GST details Must be 15 digits !')
        .max(15, '*GST details Must be 15 digits !')
        .required('*Consignor GST Deatils Must be Required'),

});


class FormikForm extends Component {
    render() {
        return (
            <>
                <div className ="container-fluid p-5">
                    <h2>DOCKET</h2>
                    <Formik
                        initialValues={{
                            consignorName: '',
                            consignorAddress: '',
                            consignorContact: '',
                            consignorGst: '',
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={values => {
                            // same shape as initial values
                            console.log(values);
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <div className="mb-3">
                                    <label htmlFor="#" className='form-label '>Consignor Name</label>
                                    <Field name="consignorName" className='form-control' />
                                    {errors.consignorName && touched.consignorName ? (
                                        <div className="text-danger">{errors.consignorName}</div>
                                    ) : null}
                                </div>


                                <div className="mb-3">
                                    <label htmlFor="#" className="form-label"> Consignor Address</label>
                                    <Field name="consignorAddress" className="form-control" />
                                    {errors.consignorAddress && touched.consignorAddress ? (
                                        <div className="text-danger">{errors.consignorAddress}</div>
                                    ) : null}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="#" className='form-label'>Contact</label>
                                    <Field name="consignorContact" className='form-control' />
                                    {errors.consignorContact && touched.consignorContact ? (
                                        <div className="text-danger">{errors.consignorContact}</div>
                                    ) : null}
                                </div>


                                <div className="mb-3">
                                    <label htmlFor="#" className='form-label'>Gst Details</label>
                                    <Field name="consignorGst" type="text" className='form-control' />
                                    {errors.consignorGst && touched.consignorGst ? <div className="text-danger">{errors.consignorGst}</div> : null}
                                </div>

                                <button type="submit" className="btn btn-primary">Submit</button>
                            </Form>
                        )}
                    </Formik>
                </div>

            </>
        );
    }
}

export default FormikForm;