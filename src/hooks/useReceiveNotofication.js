import { useDispatch } from "react-redux"
import { toast } from "react-toastify";


const useReceiveNotofication = ()=>{
    try {
        const dispatch = useDispatch();
        return function (message){
            console.log(message,'from hooookkkk')
            toast.info(message?.message)
        }
    } catch (error) {
        
    }
}

export default useReceiveNotofication