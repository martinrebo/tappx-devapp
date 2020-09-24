import React, { useContext } from 'react';
import { useForm, Control, Select } from 'react-hook-form';
import { store } from '../../store/store'

export default function Form({ data }) {

    const globalState = useContext(store);
    const { dispatch } = globalState;

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (formData) => {

        if (errors.bundle) {
            console.error("Something wrong")
        }
        else {
            const EditedDev = {
                name: {
                    title: formData.title,
                    first: formData.first,
                    last: formData.last
                },
                location: {
                    city: formData.city
                },
                email: formData.email,
                cell: formData.cell,
                bundle: formData.bundle,
                category: formData.category,
                active: formData.active
            }
            console.log(formData);
            dispatch({type: "EDIT_DEV", payload: EditedDev})
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Title</label>
            <input name="title" defaultValue={data.name.title} ref={register} />
            <label>First Name</label>
            <input name="first" defaultValue={data.name.first} ref={register} />
            <label>Last Name</label>
            <input name="last" defaultValue={data.name.last} ref={register} />
            <label>City</label>
            <input name="city" defaultValue={data.location.city} ref={register} />
            <label>Cell phone</label>
            <input name="cell" defaultValue={data.cell} ref={register} />

            <label>email</label>
            <input name="email" defaultValue={data.email} ref={register} />

            <label>Android SDK Bundle </label>
            <input name="bundle" ref={register({ pattern: /^[a-z][a-z0-9_]*(\.[a-z0-9_]+)+[0-9a-z_]$/i })} />
            {errors.bundle && 'Please valid name for android sdk.'}

            <label>Category</label>
            <select name="category" ref={register}>
                <option value="Tool">Tool</option>
                <option value="Music">Music</option>
                <option value="Game">Game</option>
                <option value="Social">Social</option>
            </select>

            <input type="checkbox" name="active" value="yes" ref={register} />

            <input type="submit" />
        </form>
    );
}