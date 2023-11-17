import React from "react";

const AppointmentsGrid = ({ appointmentsData, fetchAppointments }) => {
  // Function to calculate the height of the appointment box based on time
  const hourConversion = {
    "8 AM": "1",
    "9 AM": "2",
    "10 AM": "3",
    "11 AM": "4",
    "12 PM": "5",
    "1 PM": "6",
    "2 PM": "7",
    "3 PM": "8",
    "4 PM": "9",
    "5 PM": "10",
    "6 PM": "11",
    "7 PM": "12",
    "8 PM": "13",
    "9 PM": "14",
    "10 PM": "15",
    "11 PM": "16",
  };

  const calculateHeight = (startTime, endTime) => {
    const startHour = parseInt(hourConversion[startTime]);
    const endHour = parseInt(hourConversion[endTime]);

    return (endHour - startHour) * 60; // Assuming each hour takes 100px height
  };
  return (
    <div className="appointments-container">
      <div className="column row">
        <div className="column-item">
          <a onClick={fetchAppointments}>
            <img src="/refresh-button.jpeg" alt="refresh" />
          </a>
        </div>
        <div className="column-item">Monday</div>
        <div className="column-item">Tuesday</div>
        <div className="column-item">Wednesday</div>
        <div className="column-item">Thrusday</div>
        <div className="column-item">Friday</div>
        <div className="column-item">Saturday</div>
        <div className="column-item">Sunday</div>
      </div>
      <div className="rows-content">
        <div className="">
          <div className="column-item">8 AM</div>
          <div className="column-item">9 AM</div>
          <div className="column-item">10 AM</div>
          <div className="column-item">11 AM</div>
          <div className="column-item">12 PM</div>
          <div className="column-item">1 PM</div>
          <div className="column-item">2 PM</div>
          <div className="column-item">3 PM</div>
          <div className="column-item">4 PM</div>
          <div className="column-item">5 PM</div>
          <div className="column-item">6 PM</div>
          <div className="column-item">7 PM</div>
          <div className="column-item">8 PM</div>
          <div className="column-item">9 PM</div>
          <div className="column-item">10 PM</div>
          <div className="column-item">11 PM</div>
        </div>

        {[
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ].map((day) => {
          const appointment = appointmentsData[0];
          if (appointment && appointment.weekDay === day) {
            const { startTimeFormatted, endTimeFormatted } = appointment;
            const height = calculateHeight(
              startTimeFormatted,
              endTimeFormatted
            );
            return (
              <div
                key={day}
                className="column-item padding-top"
                style={{
                  height: `${height}px`,
                  width: "150px",
                  backgroundColor: "#58C3FF",
                  border: "1px solid #58C3FFED",
                  background:
                    "linear-gradient(0deg, rgba(88, 195, 255, 0.93), rgba(88, 195, 255, 0.93)), linear-gradient(0deg, rgba(88, 195, 255, 0.41), rgba(88, 195, 255, 0.41))",
                  borderRadius: "8px",
                }}
              >
                <h1 style={{ fontSize: height === 60 ? "13px" : "" }}>
                  {appointment.name}
                </h1>
                <p style={{ fontSize: height === 60 ? "11px" : "" }}>
                  {appointment.reason}
                </p>
              </div>
            );
          }

          return <div key={day} className="column-item"></div>;
        })}
      </div>
    </div>
  );
};

export default AppointmentsGrid;
