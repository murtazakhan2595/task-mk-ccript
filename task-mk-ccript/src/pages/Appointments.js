import { useAuthContext } from "../hooks/useAuthContext";
import { useState, useEffect } from "react";
import AppointmentsGrid from "../components/AppointmentsGrid";
import axios from "axios";

const Appointments = () => {
  const { user } = useAuthContext();
  const [appointments, setAppointments] = useState("");
  axios.defaults.baseURL = "https://hiring-test-task.vercel.app/api/";

  const fetchAppointments = async () => {
    try {
      const appointmentsResponse = await axios.get("appointments", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setAppointments(appointmentsResponse.data);
    } catch (e) {
      console.log("Error in home", e);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, [user]);
  let appointmentsArray = [];
  if (appointments) {
    appointmentsArray = Object.values(appointments).filter(
      (item) => typeof item === "object"
    );
  }

  return (
    <section className="appointments">
      <AppointmentsGrid
        appointmentsData={appointmentsArray}
        fetchAppointments={fetchAppointments}
      />
    </section>
  );
};

export default Appointments;
