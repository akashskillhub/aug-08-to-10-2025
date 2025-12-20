import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { readProduct } from "../redux/actions/product.actions"
import clsx from "clsx"

const Home = () => {
    const [pagi, setPagi] = useState({ limit: 2, page: 1 })

    const dispatch = useDispatch()
    const { allProducts, total } = useSelector(state => state.inventory)

    const handlePagination = () => {
        if (total) {
            const totalBtn = Math.ceil(total / pagi.limit)
            const allBtn = Array
                .from({ length: totalBtn })
                .map((item, i) => <button
                    onClick={e => setPagi({ ...pagi, page: i + 1 })}
                    type="button"
                    className={clsx({
                        "btn": true,
                        "btn-primary": pagi.page === i + 1,
                        "btn-outline-primary": pagi.page !== i + 1
                    })}>{i + 1}</button>)

            const preBtn = pagi.page === 1
                ? null
                : <button onClick={e => setPagi({
                    ...pagi,
                    page: pagi.page === 1 ? 1 : pagi.page - 1
                })}>pre</button>

            const nextBtn = pagi.page === totalBtn
                ? null
                : <button onClick={e => setPagi({
                    ...pagi,
                    page: pagi.page === totalBtn ? totalBtn : pagi.page + 1
                })}>next</button>
            allBtn.unshift(preBtn)
            allBtn.push(nextBtn)

            return allBtn

        }
    }


    useEffect(() => {
        dispatch(readProduct(pagi))
    }, [pagi])
    return <>
        <div className="container">
            {handlePagination()}
            <div className="row">
                {
                    allProducts.map(item => <div class="card">
                        <div class="card-body">
                            <div className="col-sm-12">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <img src={item.hero} className="img-fluid" alt="" />
                                    </div>
                                    <div className="col-sm-6">
                                        <h6>{item.title}</h6>
                                        <div>{item.desc}</div>
                                    </div>
                                    <div className="col-sm-3">
                                        <h6>{item.price}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    </>
}

export default Home