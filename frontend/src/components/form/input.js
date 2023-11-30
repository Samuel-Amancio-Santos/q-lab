import styles from './input.module.css';

function Input({className, type, text, name, placeholder, handleOnChange, value, multiple}){

    return(
        <div>

            <input className={className} type = {type} name = {name} id = {name} placeholder = {placeholder} onChange = {handleOnChange} value = {value} {...(multiple ? {multiple} : '')}/>
        </div>
    )

}

export default Input;