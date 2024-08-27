import React from "react";

const Hours = () => {
    const hours = {
        Monday : {open: "10:00", close: "16:00"},
        Tuesday : {open: "10:00", close: "16:00"},
        Wednesday : {open: "10:00", close: "16:00"},
        Thursday : {open: "10:00", close: "16:00"},
        Friday : {open: "10:00", close: "16:00"},
        Saturday : {open: "9:00", close: "20:00"},
        Sunday : {open: "9:00", close: "20:00"}
    }

    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const todaySchedule = hours[today];

    return (
        <div>
            <h1>Today Hours </h1>
            <p> {today}: {todaySchedule.open} - {todaySchedule.close}</p>
        </div>
    )
}

export default Hours;