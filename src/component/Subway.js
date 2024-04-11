import { useRecoilState } from "recoil";
import { isLogin } from "./StAtom";
import Login from "./Login";


export default function Subway() {
    const [isLoginCheck, setIsLoginCheck] = useRecoilState(isLogin);

  return (
    <div>
        {isLoginCheck ? "Subway" : <Login/>}
    </div>
  )
}
