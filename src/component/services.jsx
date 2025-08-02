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
      title: "ui/ux",
      description:
        " We offer professional web development services to help you build fast,responsive, and user-friendly websites",
      buttonlebel: "view more",
    },
    {
      id: 3,
      title: "react",
      description:
        " We offer professional web development services to help you build fast,responsive, and user-friendly websites",
      buttonlebel: "view more",
    },
  ];

  return (
    <div 
    className=" px-[100px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 min:h-screen  md:p-16 " id="services">
      <p className="text-center text-4xl md:text-6xl font-semibold text-gray-800 mb-20 ">
        Our Services
      </p>
      <div className=" grid gap-6 md:grid-cols-3">
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