import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function DifferentLength() {
    const days = []
    for (let i = 1; i < 32; i++) {
        days.push(i)
    }

    return (
        <LineChart
            xAxis={[{ data: days }]}
            series={[
                {
                    data: [2, 5.5, 2, 8.5, 1.5, 5, 50],
                    valueFormatter: (value) => (value == null ? '?' : value.toString()),
                },
            ]}
            height={200}
            margin={{ top: 10, bottom: 20 }}
        />
    );
}
