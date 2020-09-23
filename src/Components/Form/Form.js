import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form({ data }) {
    const { register, handleSubmit, errors } = useForm(); 
    const onSubmit = (formData) => {

        if (errors.bundle) {
            console.error("Something wrong")
        }
        else {
            console.log(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="title" defaultValue={data.name.title} ref={register} />
            <input name="first" defaultValue={data.name.first} ref={register} />
            <input name="last" defaultValue={data.name.last} ref={register} />

            <input name="city" defaultValue={data.location.city} ref={register} />

            <input name="cell" defaultValue={data.cell} ref={register} />

            <input name="email" defaultValue={data.email} ref={register} />

            <input name="bundle" ref={register({ pattern: /^[a-z][a-z0-9_]*(\.[a-z0-9_]+)+[0-9a-z_]$/i })} />
            {errors.bundle && 'Please valid name for android sdk.'}

            <select name="category" ref={register}>
                <option value="Tool">Tool</option>
                <option value="Music">Music</option>
                <option value="Game">Game</option>
                <option value="Social">Social</option>
            </select>

            <input type="checkbox" name="active" ref={register} />

            <input type="submit" />
        </form>
    );
}