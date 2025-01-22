import axios from 'axios';

export const getSchedules = async () => {
  try {
    const response = await axios.get('/api/schedules');
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
