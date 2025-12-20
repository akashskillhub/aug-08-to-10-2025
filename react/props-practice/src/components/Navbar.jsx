const Navbar = ({ cart, setCart }) => {
    return <>
        <nav class="navbar navbar-expand-lg bg-primary navbar-dark">
            <div class="container">
                <a class="navbar-brand" href="#">React Cart</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" href="#">Home</a>
                        <a class="nav-link" href="#">Features</a>
                        <a class="nav-link" href="#">Pricing</a>
                    </div>
                </div>
                <button
                    className="btn btn-light"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#wishlist">
                    Bag {cart.length}
                </button>
            </div>
        </nav>

        <div className="offcanvas offcanvas-start" id="wishlist">
            <div className="offcanvas-header">Cart</div>
            <div className="offcanvas-body">
                {
                    cart.map(item => <div class="card">
                        <div class="card-body">
                            <div className="row">
                                <div className="col-sm-3"> <img src={item.image} className="img-fluid" alt="" /> </div>
                                <div className="col-sm-3">{item.name}</div>
                                <div className="col-sm-3">{item.price}</div>
                                <div className="col-sm-3">
                                    <button
                                        onClick={e => setCart(cart.filter(f => f.id !== item.id))}
                                        type="button"
                                        class="btn btn-outline-danger">X</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>

    </>
}
// React Routing

export default Navbar