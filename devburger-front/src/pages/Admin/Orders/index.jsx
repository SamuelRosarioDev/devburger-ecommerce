
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Filter, FilterOption } from './styles';
import { Row } from './row';
import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import { orderStatusOptions } from './orderStatus';


export function Orders() {
    const [orders, setOrders] = useState([])
    const [filteredOrders, setFilteredOrders] = useState([])
    const [rows, setRows] = useState([])
    const [activeStatus, setActiveStatus] = useState(0)

    useEffect(() => {
        async function loadOrders() {
            const { data } = await api.get('orders')
            setOrders(data)
            setFilteredOrders(data)
        }
        loadOrders()
    }, [])

    function createData(order) {
        return {
            orderId: order._id,
            name: order.user.name,
            date: order.createdAt,
            status: order.status,
            products: order.products,
        };
    }

    useEffect(() => {
        const newRows = filteredOrders.map(order => createData(order));
        setRows(newRows)
    }, [filteredOrders])

    function handleStatus(status) {
        if (status.id === 0) {
            setFilteredOrders(orders)
        }else{
            const newOrders = orders.filter(order => order.status === status.value)
            setFilteredOrders(newOrders)
        }
        setActiveStatus(status.id)
    }

    useEffect(() => {
        if (activeStatus === 0) {
            setFilteredOrders(orders)
        }else{
            const statusIndex = orderStatusOptions.findIndex(status => status.id === activeStatus)
            const newFitleredOrders = orders.filter(order => order.status === orderStatusOptions[statusIndex].value)
            setFilteredOrders(newFitleredOrders)
        }
    }, [orders])


    return (
        <>
            <Filter>
                {orderStatusOptions.map((status) => (
                    <FilterOption 
                    key={status.id} 
                    onClick={()=>handleStatus(status)}
                    $isActiveStatus={status.id === activeStatus}
                    >{status.label}</FilterOption>
                ))}
            </Filter>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Pedido</TableCell>
                            <TableCell>Cliente</TableCell>
                            <TableCell>Data do Pedido</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row
                                key={row.orderId}
                                row={row}
                                orders={orders}
                                setOrders={setOrders}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>

    );
}
