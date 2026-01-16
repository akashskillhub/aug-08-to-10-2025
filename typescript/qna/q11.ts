type Order = {
    id: number;
    amount: number;
    status: "pending" | "completed";
}

const order: Order = {
    id: 1,
    amount: 500,
    status: "pending"
};

function completeOrder(order: Order) {
    order.status = "pending";
}
