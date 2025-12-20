import { useState } from "react"
import Parent from "./components/Parent"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

const App = () => {
  const brand = "Dell"
  const [count, setCount] = useState(10)
  const arr = [
    { id: 1, name: "Mobile 1", image: "https://plus.unsplash.com/premium_photo-1661658740167-45b56833412b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870", price: 14200 },
    { id: 2, name: "Mobile 2", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870", price: 4200 },
    { id: 3, name: "Mobile 3", image: "https://images.unsplash.com/photo-1522125670776-3c7abb882bc2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870", price: 40200 },
    { id: 4, name: "Mobile 4", image: "https://plus.unsplash.com/premium_photo-1680985551022-ad298e8a5f82?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774", price: 18000 },
    { id: 5, name: "Mobile 5", image: "https://plus.unsplash.com/premium_photo-1680985551022-ad298e8a5f82?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774", price: 24500 },
  ]
  const [cart, setCart] = useState([])
  return <>
    {/* <Parent brand={brand} count={count} setCount={setCount}></Parent> */}
    <Navbar cart={cart} setCart={setCart}></Navbar>
    <Hero arr={arr} cart={cart} setCart={setCart}></Hero>
  </>
}
export default App