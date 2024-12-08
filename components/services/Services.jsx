import {
  FaLaptopCode,
  FaRobot,
  FaLock,
  FaChartBar,
  FaTools,
} from "react-icons/fa";
import ServiceCard from "./ServiceCard";

export const services = [
  {
    title: "IT Consulting",
    description: "Since 1985 Read has pioneered elitist recruitment, sourcing",
    icon: FaLaptopCode,
    image: "/service.jpeg",
    id: 1,
  },
  {
    title: "AI machine learning",
    description: "Since 1985 Read has pioneered elitist recruitment, sourcing",
    icon: FaRobot,
    image: "/service.jpeg",
    id: 2,
  },
  {
    title: "IT development",
    description: "Since 1985 Read has pioneered elitist recruitment, sourcing",
    icon: FaTools,
    image: "/service.jpeg",
    id: 3,
  },
  {
    title: "Data security",
    description: "Since 1985 Read has pioneered elitist recruitment, sourcing",
    icon: FaLock,
    image: "/service.jpeg",
    id: 4,
  },
  {
    title: "Data visualization",
    description: "Since 1985 Read has pioneered elitist recruitment, sourcing",
    icon: FaChartBar,
    image: "/service.jpeg",
    id: 5,
  },
  {
    title: "Improve IT planning",
    description: "Since 1985 Reed has pioneered cialist recruitment, sourcing",
    icon: FaLaptopCode,
    image: "/service.jpeg",
    id: 6,
  },
];

const Services = () => {
  return (
    <section className="py-20  bg-light-gray">
      <div className="max-w-container mx-auto px-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
