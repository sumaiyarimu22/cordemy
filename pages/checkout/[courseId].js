import SectionHeader from "@/components/SectionHeader";
import { getCourse } from "@/prisma/courses";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

// STRIPE PROMICE
const stripePromice = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const Cheakout = ({ course }) => {
  // console.log(course);
  const { data: session } = useSession();
  // console.log(session);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    courseTitle: course.title,
    price: course.price,
  });

  useEffect(() => {
    if (session) {
      setFormData((prev) => ({
        ...prev,
        name: session.user.name,
        email: session.user.email,
      }));
    }
  }, [session]);

  /*CHECKOUT HANDLER*/
  const handleCheckout = async (e) => {
    e.preventDefault();
    // console.log(formData);

    const stripe = await stripePromice; /*Cannot be invoked*/
    /*SEND A POST REQ TO THE SERVER */
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: [course],
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      address: formData.address,
      courseTitle: formData.courseTitle,
    });

    /*REDIRECT TO THE STRIPE PAYMENT */
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) {
      console.log(result.error.message);
    }
  };

  return (
    <div className="wrapper py-10 min-h-screen">
      <SectionHeader
        span={"Checkout"}
        h2={"please provide your details"}
        p={"fill out this form to continue checkout"}
      />

      <div className="flex justify-center">
        <form
          onSubmit={handleCheckout}
          className="flex flex-col gap-5 lg:w-[35rem] w-full"
        >
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="sarah khan"
              value={formData.name}
              readOnly
            />
          </div>

          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="sarahkhan@gmail.com"
              value={formData.email}
              readOnly
            />
          </div>

          <div className="form-control">
            <label htmlFor="mobile">Phone number</label>
            <input
              type="tel"
              id="mobile"
              placeholder="+88017xxxxxx"
              value={formData.mobile}
              onChange={(e) =>
                setFormData({ ...formData, mobile: e.target.value })
              }
              required
            />
          </div>

          <div className="form-control">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              placeholder="ABC street,NY"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              required
            />
          </div>

          <div className="form-control">
            <label htmlFor="courseTitle">Course Title</label>
            <input
              type="text"
              id="courseTitle"
              placeholder="Advance javascript course 2023"
              value={formData.courseTitle}
              readOnly
            />
          </div>

          <div className="form-control">
            <label htmlFor="price">price(USD)</label>
            <input
              type="number"
              id="price"
              placeholder="$100"
              value={formData.price}
              readOnly
            />
          </div>

          <button
            type="submit"
            role="link"
            className="bg-black py-4 rounded-lg text-white hover:bg-gray-700 duration-300 uppercase"
          >
            Proceed to checkout
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cheakout;

export const getServerSideProps = async ({ query }) => {
  const course = await getCourse(query.courseId);

  const updatedCourse = {
    ...course,
    updatedAt: course.updatedAt.toString(),
    createdAt: course.createdAt.toString(),
  };

  return {
    props: {
      course: updatedCourse,
    },
  };
};
