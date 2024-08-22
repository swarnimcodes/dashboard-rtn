// src/components/Dashboard.jsx

import { Link } from 'react-router-dom';
import DashboardStatsGrid from './DashboardStatsGrid'
import TransactionChart from './DashboardTransactionChart';
import Radar from './DashboardRadar';
import Orders from './DashboardOrders';

function Dashboard() {
    return (
        <div className="flex flex-col h-screen">
            <DashboardStatsGrid />
            <div className="flex p-4 w-full gap-4">
                <div className="bg-white w-3/4 h-96"><TransactionChart /></div>
                <div className="bg-white w-1/4"><Radar /></div>
            </div>
            <div className="flex-grow overflow-hidden p-4 gap-4 mb-2">
                <div className="bg-white h-[calc(100vh-24rem)] overflow-hidden"><Orders /></div >
            </div>
            <Link to="/products" className="underline" >Products page</Link>
        </div>
    );
};

export default Dashboard;
