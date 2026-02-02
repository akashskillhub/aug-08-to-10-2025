import { useState } from "react"
const dashboard = () => {
    const [count, setCount] = useState(10)
    return <>
        <div>dashboard</div>
        <h1>{count}</h1>
        <button onClick={e => setCount(count + 1)}>+1</button>
    </>

}

export default dashboard

/*

"use client" when your component uses:
1️⃣ Event handling : onClick,onChange,onSubmit,onFocus,onBlur
2️⃣ React client hooks : useState,useEffect,useRef,useContext,useReducer
3️⃣ Forms & validation: React Hook Form,Formik
4️⃣ Browser-only APIs: window,document,localStorage,sessionStorage
5️⃣ Client-side auth & state : JWT handling in browser, Auth context, Redux / RTK / RTK Query

❌ Do NOT use "use client" when your component:
1️⃣ Only displays data: Text, Tables, Cards, Lists
2️⃣ Fetches data from server / DB : fetch() in Server Components ,Prisma / MongoDB ,Internal APIs
3️⃣ Is layout or SEO related: layout.tsx, Headers, Footers, Blog pages
*/