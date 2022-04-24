import {SAVE_ADDRESS} from "../constants/address"

export const saveAddress = ( title,
    email,
    mobile,
    city,
    address )=>dispatch =>
{
    dispatch({type:SAVE_ADDRESS,payload:{ title,
        email,
        mobile,
        city,
        address }});
}