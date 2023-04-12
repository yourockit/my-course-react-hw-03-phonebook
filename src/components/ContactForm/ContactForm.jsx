// import React, { Component } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { nanoid } from "nanoid";

// export class ContactForm extends Component {

//     state = {
//         name: '',
//         number: '',
//     }

//     nameInputId = nanoid();
//     numberInputId = nanoid();

//     handleInputChange = e => {
//         const {name, value} = e.currentTarget;
//         this.setState({
//           [name]: value,
//         });
//       };
    
//     handleSubmit = e => {
//         e.preventDefault();

//         this.props.onSubmit(this.state);

//         this.reset();
//     };  
    
//     reset = () => {
//         this.setState({ name: '', number: '' })
//       }

// render() {      
// return (
//     <div>
//         <form onSubmit={this.handleSubmit}>
//             <label htmlFor={this.nameInputId}>
//                 Name
//                 <br />
//                 <input 
//                 type="text"
//                 name="name"
//                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                 required
//                 id={this.nameInputId}
//                 value={this.state.name} 
//                 onChange={this.handleInputChange}
//                 />
//                 <br />
//             </label>
//             <label htmlFor={this.numberInputId}>
//                 <input
//                 type="tel"
//                 name="number"
//                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                 required
//                 id={this.numberInputId}
//                 value={this.state.number}
//                 onChange={this.handleInputChange}
//                 />
//             </label>
//             <br />
//             <button type="submit">Add contact</button>
//         </form>
//     </div>
// )
// }
// };

const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.number().min(7).max(12).required(),
}) 

const initialValues = {
    name: '',
    number: '',
};

export const ContactForm = ({onSubmit}) => {
  
const handleSubmit = (values, {resetForm}) => {
    const newContact = {
        id: nanoid(),
        name: values.name,
        number: values.number,
    }
    onSubmit(newContact);
    resetForm();
};  
      
return (
    <Formik 
    initialValues={initialValues}  
    onSubmit={handleSubmit}
    validationSchema={schema}
    >
        <Form>
            <label>
                Name
                <br />
                <Field 
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                />
                <ErrorMessage name="name" />
                <br />
            </label>
            <label>
                <Field
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                />
                <ErrorMessage name="number" />
            </label>
            <br />
            <button type="submit">Add contact</button>
        </Form>
    </Formik>
)
};
