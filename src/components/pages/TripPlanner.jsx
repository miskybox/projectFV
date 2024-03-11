import React, { useState } from "react";
import DatePicker from "../pages/home/DatePicker";

const TripPlanner = () => {
  const [checkinDate, setCheckinDate] = useState("");
  const [checkoutDate, setCheckoutDate] = useState("");
  const [originAirport, setOriginAirport] = useState("");
  const [destinationAirport, setDestinationAirport] = useState("");
  const [passengers, setPassengers] = useState("");

  const handleSearch = () => {
    window.open("https://acquaviajes.com.ar/#Home", "_blank");
  };

  const airports = [
    { value: "BCN", label: "Barcelona-El Prat Airport (BCN)" },
    { value: "EZE", label: "Ministro Pistarini International Airport (EZE)" },
    { value: "JFK", label: "John F. Kennedy International Airport (JFK)" },
    { value: "LAX", label: "Los Angeles International Airport (LAX)" },
    { value: "CDG", label: "Charles de Gaulle Airport (CDG)" },
    { value: "LHR", label: "Heathrow Airport (LHR)" },
    { value: "HND", label: "Haneda Airport (HND)" },
    { value: "PVG", label: "Shanghai Pudong International Airport (PVG)" },
    { value: "DXB", label: "Dubai International Airport (DXB)" },
    { value: "AMS", label: "Amsterdam Airport Schiphol (AMS)" },
    { value: "SIN", label: "Singapore Changi Airport (SIN)" },
    { value: "CAN", label: "Guangzhou Baiyun International Airport (CAN)" },
  ];

  return (
    <div
      className="flex relative justify-center items-center px-16 py-12 mt-56 w-full bg-black bg-opacity-30 leading-[150%] max-md:px-5 max-md:mt-10 max-md:max-w-full"
      id="trip-planner"
    >
      <div className="flex flex-col mb-3.5 w-full max-w-[1300px] max-md:max-w-full">
        <div className="self-center text-4xl font-bold whitespace-nowrap">
          <p>Plan your Trip</p>
        </div>
        <div className="flex gap-5 justify-between mt-4 w-full text-base text-neutral-400 max-md:flex-wrap max-md:max-w-full">
          <div className="grow justify-center items-start py-5 pr-16 pl-4 whitespace-nowrap bg-white rounded-lg max-md:pr-5">
            <div>
              <label
                htmlFor="originAirport"
                className="block text-lg font-medium text-gray-700 w-full"
              >
                From
              </label>
              <select
                id="originAirport"
                value={originAirport}
                onChange={(e) => setOriginAirport(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
              >
                <option value="">Search Origin</option>
                {airports.map((airport) => (
                  <option key={airport.value} value={airport.value}>
                    {airport.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grow justify-center items-start py-5 pr-16 pl-4 whitespace-nowrap bg-white rounded-lg max-md:pr-5">
            <div>
              <label
                htmlFor="destinationAirport"
                className="block text-lg font-medium text-gray-700 w-full"
              >
                To
              </label>
              <select
                id="destinationAirport"
                value={destinationAirport}
                onChange={(e) => setDestinationAirport(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
              >
                <option value="">Search Destination</option>
                {airports.map((airport) => (
                  <option key={airport.value} value={airport.value}>
                    {airport.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grow justify-center items-start py-5 pr-16 pl-3.5 whitespace-nowrap bg-white rounded-lg max-md:pr-5">
            <label
              htmlFor="passengers"
              className="block text-lg font-medium text-gray-700 w-full"
            >
              Passengers
            </label>
            <input
              type="number"
              id="passengers"
              placeholder="No.of People"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
            />
          </div>
          <div className="flex gap-5 justify-between px-3.5 py-3.5 bg-white rounded-lg">
            <label
              htmlFor="checkinDate"
              className="flex-auto my-auto text-sm font-medium text-gray-700"
            >
              Depart
            </label>
            <DatePicker onDateChange={setCheckinDate} />
          </div>
          <div className="flex gap-5 justify-between px-4 py-3.5 bg-white rounded-lg">
            <label
              htmlFor="checkoutDate"
              className="flex-auto my-auto text-sm font-medium text-gray-700"
            >
              Return
            </label>
            <DatePicker onDateChange={setCheckoutDate} />
          </div>
          <div className="box-border relative grow justify-center items-auto py-4 pr-16 pl-20 h-auto text-base font-semibold text-auto text-white whitespace-nowrap rounded-[50px] max-md:px-5">
            <button
              type="button"
              className="w-5 p-6 text-white text-auto"
              onClick={handleSearch}
            >
              SEARCH
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripPlanner;
