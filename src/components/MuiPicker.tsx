
import { DatePicker, TimePicker, DateTimePicker } from '@mui/x-date-pickers';
import { useState } from 'react'

export const MuiPicker = () => {

    const [ selectedDate, setSelectedDate ] = useState(null)
    const [ selectedTime, setSelectedTime ] = useState(null)
    const [ selectedDateTime, setSelectedDateTime ] = useState(null)

    console.log({selectedDate})
    console.log({selectedTime})
    console.log({selectedDateTime})

  return (
    <div>MuiPicker <br /><br />
        <DatePicker label='Date Picker' value={selectedDate} 
        onChange={(newValue) => setSelectedDate(newValue)} />
        
        <TimePicker label='Time Picker' value={selectedTime} 
        onChange={(newValue) => setSelectedTime(newValue)} />
        
        <DateTimePicker label='Date Time Picker' value={selectedDateTime} 
        onChange={(newValue) => setSelectedDateTime(newValue)} />
    </div>
  )
}
