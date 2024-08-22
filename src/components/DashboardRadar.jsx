// ./src/components/DashboardRadar.jsx

import { ResponsiveRadar } from '@nivo/radar'

let data = [
    {
        "taste": "fruity",
        "chardonay": 113,
        "carmenere": 56,
        "syrah": 113
    },
    {
        "taste": "bitter",
        "chardonay": 115,
        "carmenere": 25,
        "syrah": 81
    },
    {
        "taste": "heavy",
        "chardonay": 58,
        "carmenere": 106,
        "syrah": 47
    },
    {
        "taste": "strong",
        "chardonay": 53,
        "carmenere": 43,
        "syrah": 33
    },
    {
        "taste": "sunny",
        "chardonay": 58,
        "carmenere": 108,
        "syrah": 85
    }
]

const MyResponsiveRadar = ({ data }) => (
    <ResponsiveRadar
        data={data}
        keys={['chardonay', 'carmenere', 'syrah']}
        indexBy="taste"
        valueFormat=">-.2f"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        borderColor={{ from: 'color' }}
        gridLabelOffset={36}
        dotSize={10}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        colors={{ scheme: 'nivo' }}
        blendMode="multiply"
        motionConfig="wobbly"
        legends={[
            {
                anchor: 'top-left',
                direction: 'row',
                translateX: -50,
                translateY: -40,
                itemWidth: 80,
                itemTextColor: '#999',
                symbolSize: 12,
                symbolShape: 'diamond',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        },
                    }
                ],
            }
        ]}
    />
);

function Radar() {
    return (
        <MyResponsiveRadar data={data} />
    );
};

export default Radar;
