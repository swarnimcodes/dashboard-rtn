import { IoBagHandle, IoPieChart, IoPeopleSharp, IoCartSharp } from 'react-icons/io5'

function BoxWrapper({
    label,
    value,
    change,
    changeColor,
    icon: IconComponent,
    iconBgColor
}) {
    return (
        <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
            <div className={`p-2 mx-2 h-12 w-12 flex items-center justify-center rounded-full ${iconBgColor}`}>
                <IconComponent className="text-2xl text-white" />
            </div>
            <div className="pl-4">
                <span className="text-neutral-400 font-light" >{label}</span>
                <div className="text-2xl font-bold" >
                    <strong className="text-2xl text-gray-700 font-semibold">{value}</strong>
                    {change && <span className={`text-sm ${changeColor} pl-2`}>{change}</span>}
                </div>
            </div>
        </div >
    );
}

function DashboardStatsGrid() {
    return (
        <div className="flex p-4 gap-4 w-full">
            <BoxWrapper
                label="Total Sales"
                value="$8726.12"
                change="+234"
                changeColor="text-green-500"
                icon={IoBagHandle}
                iconBgColor="bg-sky-400"
            >
            </BoxWrapper>
            <BoxWrapper
                label="Total Expenses"
                value="$4587.54"
                change="-568"
                changeColor="text-green-500"
                icon={IoPieChart}
                iconBgColor="bg-amber-400"
            >
            </BoxWrapper>
            <BoxWrapper
                label="Total Customers"
                value="$98547"
                change="-72"
                changeColor="text-red-500"
                icon={IoPeopleSharp}
                iconBgColor="bg-green-400"
            >
            </BoxWrapper>
            <BoxWrapper
                label="Total Orders"
                value="$5657"
                change="+54"
                changeColor="text-green-500"
                icon={IoCartSharp}
                iconBgColor="bg-purple-400"
            >
            </BoxWrapper>
        </div >
    );
};

export default DashboardStatsGrid;
