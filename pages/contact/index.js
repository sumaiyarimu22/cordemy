const ContactPage = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    //email js integration

    //reset
    e.target.querySelector(".fullName").value = "";
    e.target.querySelector(".email").value = "";
    e.target.querySelector(".message").value = "";
  };

  return (
    <div className="py-20 bg-gray-400 text-white">
      <h1 className="text-3xl font-bold text-center">Contact</h1>
      <form onSubmit={sendEmail} className="mt-10 wrapper flex flex-col gap-8">
        <div className="form-control flex justify-center items-center">
          <input
            type="text"
            className="fullName  inputStyle"
            name="fullName"
            placeholder="Name"
            required
          />
        </div>
        <div className="form-control flex justify-center items-center">
          <input
            type="email"
            className="inputStyle email"
            name="email"
            placeholder="Write your email"
            required
          />
        </div>
        <div className="form-control flex justify-center items-center">
          <textarea
            className="inputStyle resize-none message"
            name="message"
            placeholder="Write your message"
            required
          />
        </div>
        <div className="form-control flex justify-center items-center">
          <input
            type="submit"
            className="inputStyle  hover:bg-black/80 tracking-widest"
            value="send"
            placeholder="Send Message"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
