import React , {useState} from 'react'
import {FontAwsomeIcon} from '@fortawesome/react-fontawesome'
const userPasswordToggle=()=> {
    const[visible,setVisiblity]=useState(false);
    const Icon=<FontAwsomeIcon icon={visible?"eye-slash":"eye"}/>
    const InputType=visible? "text":"password";

    return [InputType,Icon];
}

export default userPasswordToggle
