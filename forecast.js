   if (response.ok) {
      const cityName = data.name;
      const temperature = data.main.temp;
      const weatherDescription = data.weather[0].description;

      console.log(`Weather in ${cityName}:`);
      console.log(`Temperature: ${temperature}°C`);
      console.log(`Description: ${weatherDescription}`);
    } else {
      console.error(`Failed to fetch weather data. Error ${response.status}`);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

const city = 'New York'; // Change this to the desired city
getWeather(city);
