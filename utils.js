const cleanData = (data) => {
  if (!data) throw new Error(`Invalid data, ${data}`);
  if (!data.current || !data.forecast) throw new Error(`Invalid data, ${data}`);

  let hourlyForcastData = data.forecast.forecastday[0].hour;
  hourlyForcastData = hourlyForcastData.map((hour) => {
    return { time: hour.time, temp_f: hour.temp_f };
  });

  return {
    current: {
      temp_f: data.current.temp_f,
    },
    forecast: hourlyForcastData,
  };
};

module.exports = { cleanData };
