import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts';

const getRandom = (min, max) =>
    Math.random() * (max - min) + min;

const generateData = (count) => ({
    name: `${count}`,
    worker1: getRandom(1, 1000),
    worker2: getRandom(1, 1000),
    worker3: getRandom(1, 1000),
});

class SimpleLineChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 2,
            data: [
                generateData(0),
                generateData(1)
            ],
        };

        setInterval(() => {
            const {
                count,
                data,
            } = this.state;

            const newData = data.length > 19 ?
                [data[data.length - 1], generateData(count)] :
                [...data, generateData(count)];

            this.setState({
                count: count + 1,
                data: newData
            });
        }, 1000);
    }

    render() {
        const { data } = this.state;
        return (
            <LineChart
                width={400}
                height={300}
                data={data}
            >
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="worker1" stroke="#8884d8" />
                <Line type="monotone" dataKey="worker2" stroke="#82ca9d" />
                <Line type="monotone" dataKey="worker3" stroke="#FF00FF" />
            </LineChart>
        );
    }
};

export default SimpleLineChart;
