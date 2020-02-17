import * as React from 'react';
import Chart from '../Chart';
import { useRequest } from '../../hooks/useRequest';
import { requestUsers } from '../../api/api';

import styles from './Overview.scss';

const Overview = () => {
    const { data, isLoading, error} = useRequest(requestUsers, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!isLoading && error) {
        return <div>Sorry! Some error was occured</div>;
    }

    const isDataLoaded = !isLoading && data && data.data.data.length > 0;

    return isDataLoaded ? (
        <div className={styles.overview}>
            <h3>Total Users: { data?.data.usersTotal }</h3>
            <Chart
                chartData={data?.data.data}
            />
        </div>
    ) : <div>No Data</div>;
     
}

export default Overview;