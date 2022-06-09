import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <fieldset>
                <Field component={"input"} name={"login"} placeholder={"Type your login"}/>
            </fieldset>
            <fieldset>
                <Field component={"input"} name={"password"} placeholder={"Type your password"}/>
            </fieldset>
            <fieldset>
                <Field component={"input"} type={"checkbox"} name={"rememberMe"}/>
                Remember Me
            </fieldset>
            <button>Log in</button>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return (<div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}