"use client";
import { Carousel } from "flowbite-react";
import EventsCard from "./EventsCard";

const UpcomingEvents = () => {
  
  return (

    <div className=".customHeight h-96 -m-10 sm:h-80 xl:h-80 2xl:h-96 -mt-10">
      <Carousel slideInterval={5000} className="w-screen -mx-5 ">
        <EventsCard></EventsCard>
        <EventsCard></EventsCard>
        <EventsCard></EventsCard>
      </Carousel>
    </div>

  )
}

export default UpcomingEvents