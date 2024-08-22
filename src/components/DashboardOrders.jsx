// ./src/components/DashboardOrders.jsx

import { Grid } from 'gridjs-react';
import "gridjs/dist/theme/mermaid.css";
import { faker } from '@faker-js/faker';

const columns = ['ID', 'Product ID', 'Customer Name', 'Order Date', 'Order Total', 'Shipping Address', 'Order Status']

function generateRandomOrderData(numOrders = 10) {
    const orderStatuses = ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];
    return Array.from({ length: numOrders }, (_, index) => [
        index + 1,
        faker.string.uuid().slice(0, 8),
        faker.person.fullName(),
        faker.date.past({ years: 10 }).toDateString(),
        faker.commerce.price({ min: 100, max: 20000, dec: 2 }),
        faker.location.streetAddress(),
        orderStatuses[(Math.floor(Math.random() * orderStatuses.length))]

    ])
}

const data = generateRandomOrderData(10)

function Orders() {
    return (
        <div className="h-full flex flex-col">
            <h2 className="text-2xl font-bold mb-4">Orders</h2>
            <div className="flex-grow overflow-auto">
                <Grid
                    data={data}
                    columns={columns}
                    pagination={{
                        limit: 10,
                        enabled: true,
                        summary: true
                    }}
                    search={true}
                    className={{
                        container: 'bg-white shadow-md rounded',
                        table: 'w-full',
                        th: 'bg-gray-100 border-b text-left px-4 py-2',
                        td: 'border-b px-4 py-2'
                    }}
                    style={{
                        container: {
                            maxHeight: '100%'
                        },
                        table: {
                            width: '100%'
                        }
                    }}
                />
            </div>
        </div>
    );
}



export default Orders;
