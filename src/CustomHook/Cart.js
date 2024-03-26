import { useContext } from "react"
import { CartContext } from "../Context/CartContext"

// useCart => custom hookrepresents the cartContext
const useCart = () => {
    return useContext(CartContext)
}

export default useCart