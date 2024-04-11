import { useRecoilState } from "recoil"
import { isLogin } from "./StAtom"
import { useState, useEffect } from "react"
import LoginForm from "./LoginForm"


export default function Login() {

    const [user, setUser] = useState()
    const [isLoginCheck, setIsLoginCheck] = useRecoilState(isLogin);

    useEffect(() => {
        const luser = localStorage.getItem('user')
        console.log(luser)
        if (luser){
            setUser(luser)
            setIsLoginCheck(true)
         }else {
            setUser(null)
            setIsLoginCheck(false)
         }
    }, [])

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <LoginForm/>
        </div>
    )
}
