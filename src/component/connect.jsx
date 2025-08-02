import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { PrimaryButton, SecondaryButton } from "./button";

const Contact = () => (
  <div id="connect"
   className="px-[100px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 min:h-screen p-8 gap-10">
   <h1 className="text-center text-4xl md:text-6xl font-semibold text-gray-800 mb-12">
        Get in touch
      </h1>
      <div className=" flex flex-col md:flex-row justify-center items-start">
    <div className="md:w-1/2 w-full">
     
      <form action="">
        <input
          className="border border-gray-300 rounded-md w-full px-4 py-2 h-12 mb-4"
          type="text"
          placeholder="Name"
        />
        <input
          className="border border-gray-300 rounded-md w-full px-4 py-2 h-12 mb-4"
          type="email"
          placeholder="Email address"
        />
        <textarea
          rows={6}
          className="border border-gray-300 rounded-md w-full px-4 py-2 mb-4"
          placeholder="Message"
        />
        <div className="space-x-5 ">
      <PrimaryButton label="Send Message" />
      <SecondaryButton label="Hire me"/>

    </div>
      </form>
    </div>

 
    <div className="md:w-1/2 w-full space-y-6 pt-19 pl-32">
      <div className="flex items-center gap-4">
        <FontAwesomeIcon
          icon={faPhone}
          className="text-white bg-gray-600 p-3 rounded-full text-xl"
        />
        <div>
          <p className="font-semibold text-gray-700">Phone</p>
          <p className="text-red-900">+9779767784541</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="text-white bg-gray-600 p-3 rounded-full text-xl"
        />
        <div>
          <p className="font-semibold text-gray-700">Email</p>
          <p className="text-red-900">prajubhattarai2@</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <FontAwesomeIcon
          icon={faLocationDot}
          className="text-white bg-gray-600 p-3 rounded-full text-xl"
        />
        <div>
          <p className="font-semibold text-gray-700">Address</p>
          <p className="text-red-900">Biratnagar, Morang</p>
        </div>
      </div>
    </div>
  </div>
  </div>
);

export default Contact;
