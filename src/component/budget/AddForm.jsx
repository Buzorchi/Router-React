import React from 'react'
import { Formik } from "formik";


const AddForm = () => {

  return (
    <div>
      <Formik
        initialValues={{
          transactionTitle: "",
          amount: ""
        }}
        validate={(values) => {
          const errors = {};
          if (!values.transactionTitle) {
            errors.transactionTitle = "Enter title";
          }
          if (!values.amount) {
            errors.amount = "Enter amount";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className="formBudget">
            <h1 className='font-bold text-lg mb-4'>Personal Budget Dashboard</h1>
              <div className='flex'>
              <input
                type="text"
                placeholder='Transaction Title'
                name="transactionTitle"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.transactionTitle}
                className='py-1 px-3 border mr-6'
              />
              {errors.transactionTitle && touched.transactionTitle && (
                <p className='text-red-600'>{errors.transactionTitle}</p>

              )}

              

            
              <input
                type="number"
                placeholder='0'
                name="amount"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.amount}
                className='py-1 px-3 border mr-6 '
              />
              {errors.amount && touched.amount && (
              <p className='text-red-600'>{errors.amount}</p>
              )}

            <button type="submit"  className={(values.transactionTitle === " " || values.amount === " ") ? "btn-disabled" : "btn-success"}>
              Add Transaction
              {/* disabled = {!values.transactionTitle || !values.amount || isSubmitting} */}
            </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default AddForm
