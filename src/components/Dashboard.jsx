// src/components/Dashboard.jsx

import { Link } from 'react-router-dom';
import DashboardStatsGrid from './DashboardStatsGrid'
import TransactionChart from './DashboardTransactionChart';
import Radar from './DashboardRadar';

function Dashboard() {
    return (
        <div>
            <DashboardStatsGrid />
            <div className="flex p-4 w-full gap-4">
                <div className="bg-white w-3/4 h-96"><TransactionChart /></div>
                <div className="bg-white w-1/4"><Radar /></div>
            </div>
            <Link to="/products" className="underline" >Products page</Link>
        </div>
    );
};

export default Dashboard;
