import React, { useEffect, useState } from 'react';
import lime from '@material-ui/core/colors/lime';
import { connectWithApi } from '../../../api/connectWithApi';
import { STATISTICS_URL, GET } from '../../../api/const';
import { Grid } from '@material-ui/core';
import { RefreshButton } from '../../Utils/RefreshButton';
import moment from 'moment';
let Chart = require('chart.js');

export const Statistics = () => {
  //usamos estado para imprimir nuestro listado
  const [dataApi, setDataApi] = useState<any>();
  const [infoError, setInfoError] = useState<any>();

  //metodo que llama a la API
  const callApi = async () => {
    try {
      const result = await connectWithApi(STATISTICS_URL, GET);
      setDataApi(result);
    } catch (error) {
      setInfoError({ code: error.code, message: error.message });
    }
  };

  const chartRef = React.createRef<any>();
  const buildChart = () => {
    const values = dataApi.data.map((data: any) => data.Total);
    const labels = dataApi.data.map((data: any) => [
      data._id,
      moment(data.LastUpdate).format('[Last Update:] DD/MM/YYYY'),
    ]);

    const myChartRef = chartRef.current.getContext('2d');
    new Chart(myChartRef, {
      type: 'pie',
      data: {
        //Bring in data
        labels: labels,
        datasets: [
          {
            data: values,
            backgroundColor: [lime[600], lime[800], lime[400]],
          },
        ],
      },
      options: {
        //Customize chart options
        title: {
          display: true,
          fontSize: 15,

          text: 'Condition Sum Up',
        },
        legend: {
          display: true,
          position: 'right',
        },
      },
    });
  };

  useEffect(() => {
    callApi();
  }, []);

  useEffect(() => {
    if (dataApi) {
      buildChart();
    }
  }, [dataApi]);

  return (
    <div>
      <canvas id='myChart' ref={chartRef} />
      {infoError && (
        <Grid container direction='column' justify='center' alignItems='center'>
          <h5>Code: {infoError.code}</h5>
          <h5>Message: {infoError.message}</h5>
          <RefreshButton fn={callApi} />{' '}
        </Grid>
      )}
    </div>
  );
};
