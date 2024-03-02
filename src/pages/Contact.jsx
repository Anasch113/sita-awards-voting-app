import { FaInbox } from "react-icons/fa";
import Wrapper from "../components/wrapper/Wrapper";
import { useState } from "react";
import Header from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <section>
      <Header/>
      <Wrapper>
        <div className="flex flex-col    items-center my-20 w-full">
          <h1 className="md:text-5xl uppercase text-2xl text-center font-bold text-gold">
            Contact Us
          </h1>
          <p className="text-white pb-5 font-bold text-3xl md:text-6xl">
            SITA Award Vote
          </p>
          <div className="w-full  bg-gold rounded-2xl p-4 md:py-10 md:px-10">
            <div className="flex md:flex-row items-center justify-between w-full gap-8 flex-col">
              <div className="flex flex-col gap-3 w-full md:w-1/2">
                <h1 className="md:text-5xl md:text-left text-center text-2xl  font-bold text-black">
                  Get Connected
                </h1>
                <p className="text-sm font-light text-black py-3 md:text-left text-center">
                  Stay in the loop with all things sports – Connect with us and
                  never miss a beat!
                </p>
              </div>
              <div className="border-b border-black md:w-1/2">
                <div className="flex items-center gap-3">
                  <FaInbox />
                  <p>info@example.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center py-10">
            <div className="md:w-1/2 w-full flex flex-col gap-3">
              <h1 className="md:text-3xl text-2xl  font-bold text-gold">
                Send Us A Message
              </h1>
              <p className="text-sm font-light text-white py-3 ">
                Got something to share or a question to ask? Drop us a message
                and we’ll get back to you!
              </p>
            </div>
            <div className="md:w-1/2 w-full flex flex-col gap-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                    <label
                      className="block mb-2 text-sm  text-white"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="w-full px-3 py-2 leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full px-3 md:w-1/2">
                    <label
                      className="block mb-2 text-sm  text-white"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="w-full px-3 py-2 leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                    <label
                      className="block mb-2 text-sm  text-white"
                      htmlFor="phone"
                    >
                      Phone Number
                    </label>
                    <input
                      className="w-full px-3 py-2 leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="phone"
                      type="tel"
                      placeholder="123-456-7890"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full px-3 md:w-1/2">
                    <label
                      className="block mb-2 text-sm  text-white"
                      htmlFor="subject"
                    >
                      Subject
                    </label>
                    <input
                      className="w-full px-3 py-2 leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="subject"
                      type="text"
                      placeholder="Regarding..."
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    className="block mb-2 text-sm  text-white"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="w-full px-3 py-2 leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="message"
                    placeholder="Enter your message..."
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="flex">
                  <button
                    type="submit"
                    className="font-medium hover:scale-95 text-black bg-gold py-3 px-14 flex gap-2 hover:border-gold hover:bg-transparent hover:text-gold rounded-full border border-transparent duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Wrapper>
      <Footer/>
    </section>
  );
};

export default Contact;
