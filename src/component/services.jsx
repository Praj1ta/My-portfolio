import Box from "./box";

function Services() {
  const services = [
    {
      id: 1,
      title: "web development",
      description:
        " We offer professional web development services to help you build fast,responsive, and user-friendly websites",
      buttonlebel: "view more",
    },
    {
      id: 2,
      title: "web development",
      description:
        " We offer professional web development services to help you build fast,responsive, and user-friendly websites",
      buttonlebel: "view more",
    },
    {
      id: 3,
      title: "web development",
      description:
        " We offer professional web development services to help you build fast,responsive, and user-friendly websites",
      buttonlebel: "view more",
    },
  ];

  return (
    <div 
    className=" p-12 px-10 h-screen" id="services">
      <p className="text-center text-4xl md:text-6xl font-semibold text-gray-800 mb-12 pb-9">
        Our Services
      </p>
      <div className=" flex justify-between gap-6 ">
        {services.map((services) => (
          <Box
            key={services.id}
            title={services.title}
            description={services.description}
            buttonlebel={services.buttonlebel}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;