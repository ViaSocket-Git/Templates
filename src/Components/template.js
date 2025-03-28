import React, { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch('http://localhost:7072/template/all');
       
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
       
        const data = await response.json();
       
        if (!data.success) {
          throw new Error('API request was not successful');
        }
       
        // Transform API data to match your ServiceCard component's expected props
        const transformedServices = data.result.map(service => ({
          title: service.title,
          description: service.description,
          color: getColorByServiceType(service.title),
          boxContent: {
            heading: service.title + ' Details',
            description: service.configuration || service.description
          }
        }));
       
        setServices(transformedServices);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  // Helper function to assign colors based on service type
  const getColorByServiceType = (title) => {
    const colorMap = {
      'DAPP Development': 'indigo',
      'Web 3.0 Development': 'purple',
      'Project Audit': 'blue',
      'Hacking / RE': 'yellow',
      'Bot/Script Development': 'green',
    };
    return colorMap[title] || 'gray';
  };

  if (loading) {
    return (
      <div className="container relative flex flex-col justify-between h-full max-w-6xl px-4 mx-auto xl:px-0 mt-5">
        <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Templates</h2>
        <p className="mb-12 text-lg text-gray-500">Find Your Perfect Template – Expertly Tailored to Elevate Your Vision.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container relative flex flex-col justify-between h-full max-w-6xl px-4 mx-auto xl:px-0 mt-5">
        <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Services</h2>
        <p className="mb-12 text-lg text-red-500">Error loading templates: {error}</p>
      </div>
    );
  }

  return (
    <div className="container relative flex flex-col justify-between h-full max-w-6xl px-4 mx-auto xl:px-0 mt-5">
     <div className="flex flex-col items-center justify-center text-center">
  <h2 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
    Templates
  </h2>
  <p className="mb-10 text-lg text-gray-600 max-w-2xl">
    Find Your Perfect Template – Expertly Tailored to Elevate Your Vision.
  </p>
</div>


      {services.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <ServiceCard 
              key={service._id || index} 
              {...service} 
            />
          ))}
        </div>
      ) : (
        <p className="text-lg text-gray-500">No services available at the moment.</p>
      )}
    </div>
  );
};

export default ServicesPage;