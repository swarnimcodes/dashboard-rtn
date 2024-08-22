// ./src/components/DashboardTransactionChart.jsx

import { ResponsiveMarimekko } from '@nivo/marimekko'

let data = [
    {
        "statement": "it's good",
        "participation": 11,
        "stronglyAgree": 20,
        "agree": 26,
        "disagree": 28,
        "stronglyDisagree": 2
    },
    {
        "statement": "it's sweet",
        "participation": 26,
        "stronglyAgree": 8,
        "agree": 27,
        "disagree": 21,
        "stronglyDisagree": 15
    },
    {
        "statement": "it's spicy",
        "participation": 14,
        "stronglyAgree": 19,
        "agree": 11,
        "disagree": 7,
        "stronglyDisagree": 16
    },
    {
        "statement": "worth eating",
        "participation": 13,
        "stronglyAgree": 17,
        "agree": 30,
        "disagree": 10,
        "stronglyDisagree": 28
    },
    {
        "statement": "worth buying",
        "participation": 20,
        "stronglyAgree": 9,
        "agree": 18,
        "disagree": 4,
        "stronglyDisagree": 21
    }
]

const MyResponsiveMarimekko = ({ data }) => (
    <ResponsiveMarimekko
        data={data}
        id="satatement"
        value="participation"
        dimensions={[
            {
                id: 'disagree strongly',
                value: 'stronglyDisagree'
            },
            {
                id: 'disagree',
                value: 'disagree'
            },
            {
                id: 'agree',
                value: 'agree'
            },
            {
                id: 'agree strongly',
                value: 'stronglyAgree'
            }
        ]}
        innerPadding={9}
        axisTop={null}
        axisRight={{
            orient: 'right',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendOffset: 0,
            truncateTickAt: 0
        }}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'participation',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'opinions',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        margin={{ top: 40, right: 80, bottom: 100, left: 80 }}
        colors={{ scheme: 'spectral' }}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        defs={[
            {
                id: 'lines',
                type: 'patternLines',
                background: 'rgba(0, 0, 0, 0)',
                color: 'inherit',
                rotation: -45,
                lineWidth: 4,
                spacing: 8
            }
        ]}
        fill={[
            {
                match: {
                    id: 'agree strongly'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'disagree strongly'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 80,
                itemsSpacing: 0,
                itemWidth: 140,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'right-to-left',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'square',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
);

function TransactionChart() {
    return (
        <MyResponsiveMarimekko data={data} />
    );
};

export default TransactionChart;
