import { useState } from "react";
import DashboardLayout from "../layout/DashboardLayout"
import { ref, set } from "firebase/database";
import { database } from "../../firebase";
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom";

const SetTime = () => {
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const navigate = useNavigate();

    const handleStartTimeChange = (e) => {
        setStartTime(e.target.value);
    };

    const handleEndTimeChange = (e) => {
        setEndTime(e.target.value);
    };

   
  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      const timeData = {
        startTime,
        endTime,
      };

      const timeRef = ref(database, 'votingTime');
      await set(timeRef, timeData);
      toast.success("Time Saved")
      navigate("/dashboard")

      console.log('Voting time saved successfully');
    } catch (error) {
      console.error('Error while saving voting time:', error);
    }
  };
    return (
        <div>
            <DashboardLayout>
                <div className="container mx-auto pt-2">
                    <h1 className="text-2xl font-bold mb-4 text-gold">Set Voting Time</h1>
                    <form onSubmit={handleSubmit} className=" max-w-[300px] flex flex-col gap-4">
                        <div className="mb-4">
                            <label htmlFor="startTime" className="block text-lg mb-2 text-white">Start Time:</label>
                            <input
                                type="datetime-local"
                                id="startTime"
                                value={startTime}
                                onChange={handleStartTimeChange}
                                className="shadow appearance-none border rounded w-full border-[#777]/30 py-3 px-3 bg-[#777]/30 text-white leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="endTime" className="block text-lg mb-2 text-white">End Time:</label>
                            <input
                                type="datetime-local"
                                id="endTime"
                                value={endTime}
                                onChange={handleEndTimeChange}
                                className="shadow appearance-none border rounded w-full border-[#777]/30 py-3 px-3 bg-[#777]/30 text-white leading-tight focus:outline-none focus:shadow-outline"

                            />
                        </div>
                        <button type="submit" className="font-medium text-black bg-gold py-3 mx-auto w-full text-center  gap-2 hover:border-gold hover:bg-transparent hover:text-gold rounded border border-transparent duration-300">Save</button>
                    </form>
                </div>
            </DashboardLayout>
        </div>
    )
}

export default SetTime