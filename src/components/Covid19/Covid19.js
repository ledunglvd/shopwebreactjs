import React, { useEffect, useMemo } from 'react';
import { sortBy } from 'lodash';
import { getCountries, getReportByCountry } from '../apis';
import CountrySelector from '../CountrySelector';

import Summary from '../Summary';
import Highlight from '../Highlight';


import { Container, Typography } from '@material-ui/core';
import '@fontsource/roboto';
import moment from 'moment';




const Covid19 = () => {

  const [countries, setCountries] = React.useState([]);
  const [selectedCountryId, setSelectedCountryId] = React.useState('');
  const [report, setReport] = React.useState([]);

  useEffect(() => {
    getCountries().then((res) => {
      const { data } = res;
      const countries = sortBy(data, 'Country');
      setCountries(countries);
      setSelectedCountryId('vn');
    });
  }, []);

  const handleOnChange = React.useCallback((e) => {
    setSelectedCountryId(e.target.value);
  }, []);

  useEffect(() => {
    if (selectedCountryId) {
      const selectedCountry = countries.find(
        (country) => country.ISO2 === selectedCountryId.toUpperCase()
      );
      getReportByCountry(selectedCountry.Slug).then((res) => {
        console.log('getReportByCountry', { res });
        // remove last item = current date
        res.data.pop();
        setReport(res.data);
      });
    }
  }, [selectedCountryId, countries]);

  const summary = useMemo(() => {
    if (report && report.length) {
      const latestData = report[report.length - 1];
      return [
        {
          title: 'Số ca nhiễm',
          count: latestData.Confirmed,
          type: 'confirmed',
        },
        {
          title: 'Số ca khỏi bệnh',
          count: latestData.Active,
          type: 'recovered',
        },
        {
          title: 'Số ca tử vong',
          count: latestData.Deaths,
          type: 'death',
        },
      ];
    }
    return [];
  }, [report]);
  

  return (
 
    <Container style={{ marginTop: 50 }}>
      
      <Typography variant='h2' component='h2'>
        Số liệu COVID-19
      </Typography>
      <Typography>{moment().format('LLL')}</Typography>
      <CountrySelector
        handleOnChange={handleOnChange}
        countries={countries}
        value={selectedCountryId}
      />
      <Highlight summary={summary} />
      <Summary countryId={selectedCountryId} report={report} />
     <div>
       <h2  style={{ marginTop: 50 }}>
          Bảng số liệu thống kê
          
       </h2>
     </div>
    </Container>
    
  
  )

}

export default Covid19;

