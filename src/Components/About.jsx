import React from "react";

function About() {
  return (
    <div className="container mx-auto px-4 py-8 mt-[65px]">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <img
          src="https://img.freepik.com/free-photo/top-view-eid-al-fitr-celebration-with-delicious-food_23-2151205103.jpg?t=st=1714289502~exp=1714293102~hmac=cf448d31654252c88deeffd2454d540fb95a709b96dd997e759203e80bdc7e39&w=1060"
          className="w-full h-full rounded-lg shadow-lg object-cover"
        />
        <img
          src="https://img.freepik.com/free-photo/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai_188544-13382.jpg?w=1060&t=st=1714289595~exp=1714290195~hmac=f522e39f326fdd48125f01bf15a044a2071cc62e86167fac7c525ed4c8824924"
          alt="Delicious Food 2"
          className="w-full h-full rounded-lg shadow-lg object-cover"
        />
      </div>
      <p className="text-gray-700 leading-relaxed md:leading-loose">
        Welcome to{" "}
        <span className="font-bold">
          {" "}
          Yummy<span className="text-[#fbc531]">Food</span>
        </span>
        , your go-to destination for delicious food delivered right to your
        doorstep!
        <br className="hidden md:inline" />
        <br className="hidden md:inline" />
        At{" "}
        <span className="font-bold">
          {" "}
          Yummy<span className="text-[#fbc531]">Food</span>
        </span>
        , we're passionate about bringing you the best culinary experiences from
        the comfort of your home. Whether you're craving classic comfort food,
        exploring new cuisines, or seeking healthy options, we've curated a
        diverse selection of dishes to satisfy every palate.
        <br className="hidden md:inline" />
        <br className="hidden md:inline" />
        Our mission is simple: to make food ordering easy, convenient, and
        enjoyable for you. With our user-friendly interface and seamless
        ordering process, you can browse through our extensive menu, customize
        your order to your preferences, and have your favorite dishes delivered
        to you in no time.
        <br className="hidden md:inline" />
        <br className="hidden md:inline" />
        But we're more than just a food delivery service. We're committed to
        supporting local restaurants and food vendors, ensuring that you not
        only enjoy delicious meals but also contribute to the growth of your
        community's culinary scene.
        <br className="hidden md:inline" />
        <br className="hidden md:inline" />
        Join us on a culinary journey where every bite is an adventure. Whether
        you're dining solo, hosting a gathering with friends and family, or
        simply treating yourself after a long day, let{" "}
        <span className="font-bold">
          {" "}
          Yummy<span className="text-[#fbc531]">Food</span>
        </span>{" "}
        be your trusted partner in satisfying your cravings and making every
        meal memorable.
        <br className="hidden md:inline" />
        <br className="hidden md:inline" />
        Thank you for choosing{" "}
        <span className="font-bold">
          {" "}
          Yummy<span className="text-[#fbc531]">Food</span>
        </span>
        . We look forward to serving you!
      </p>
    </div>
  );
}

export default About;
