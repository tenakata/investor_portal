import React,{ useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';


const Date = () => {
    const [selectedDate, setSelectedDate] = useState(null)
  return (
    <div>
        <DatePicker
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        dateFormat='dd/MM/yyyy'
      />
      {selectedDate && (
        <div>
          <p>{selectedDate.toLocaleDateString()}</p>
        </div>
      )}
    </div>
  )
}

export default Date