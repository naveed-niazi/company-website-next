import React, { useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import bannerImage from "../assets/banner.svg";
import Modal from "../components/Modal";
import FormItem from "../components/FormItem";
import { BUDGET_OPTIONS, SERVICES_OPTIONS } from "./constants";
import { useForm } from "react-hook-form";
import { saveResponse } from "../apiCalls/googleSheet";
// import bannerImage from "../assets/header.jpg";
// import testBannerBg from "../assets/background.svg";
// import { saveResponse } from "../apiCalls/googleForms";

const Banner = () => {
  const router = useRouter();
  const [load, setLoad] = useState(false);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [modalVisible, setModalVisible] = useState(false);
  const initialEmail = useRef("");
  const onSubmit = async (data) => {
    setLoad(true);
    if (await saveResponse(data)) router.push("/thank-you");
    else setLoad(false);
  };

  return (
    <>
      {" "}
      <section id="home" className="table w-full md:h-screen -mt-16 pt-16">
        <div className="md:w-7/12 w-full float-right mx-auto  md:pt-10 pt-5 ">
          <div className="md:block hidden opacity-0 absolute banner-img-animate mx-auto">
            <Image
              src={bannerImage}
              className="banner-img"
              priority={true}
              alt="Banner Image"
              height={460}
              width={780}
            />
          </div>
          <div className="block md:hidden pb-6">
            <Image
              priority={true}
              src={bannerImage}
              layout="responsive"
              alt="Banner Image"
            />
          </div>
        </div>
        <div
          className={
            "md:w-5/12 w-full md:float-left md:text-left text-center md:pl-6 pt-36 mx-auto md:mt-20 md:opacity-0 md:banner-animate"
          }
        >
          <div className="md:min-w-lg	md:max-w-lg mx-auto px-5 md:px-0 	">
            <h1 className={"md:text-5xl text-4xl font-semibold text-slate-700"}>
              Powering Business Growth with Tailored Software Solutions
            </h1>
            <h2 className="md:text-lg mt-4 text-base leading-relaxed opacity-70">
              Our experts develop custom software to drive results, streamline
              operations and increase revenue. Trust us for your next project
              with our cutting-edge technology and transparent communication.
            </h2>

            <form
              className="block md:mt-8 mt-4 md:flex md:opacity-0 md:banner-form-animate"
              onSubmit={(e) => {
                e.preventDefault();
                setModalVisible(true);
                document
                  .querySelector("body")
                  .classList.toggle("overflow-hidden");
              }}
            >
              <div className="md:w-4/6 w-full">
                <input
                  onChange={(event) =>
                    (initialEmail.current = event.target.value)
                  }
                  type="email"
                  id="email-banner"
                  className="bg-gray-200 placeholder-gray-500 text-base px-4  rounded-md w-full h-12   focus:outline-0 focus:border focus:bg-gray-100	 focus:border-gray-500"
                  placeholder="Enter Email address"
                  required
                />
              </div>

              <div className="md:w-2/6 w-full md:pl-2 md:mt-0 mt-4">
                <button
                  type="submit"
                  className=" text-white font-medium tracking-wide bg-orange-600 hover:bg-orange-700 w-full rounded-md h-12 "
                >
                  Get Started
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {modalVisible && (
        <Modal
          onClose={setModalVisible}
          title={
            <div className="mb-2 md:pt-2">
              <h1 className="md:text-4xl text-3xl md:font-bold font-extrabold text-slate-700 md:mb-2 mb-1 ">
                WE BUILD YOUR DREAMS!
              </h1>
              <h2 className="text-slate-700 opacity-80 md:text-lg text-base tracking-tight leading-6">
                You're one step away from your personal custom web application
              </h2>
            </div>
          }
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="md:grid md:grid-cols-2 ">
              <FormItem
                register={register}
                error={errors.firstName}
                type="text"
                label="First Name"
                name="firstName"
                placeholder="First Name"
                isRequired
              />
              <FormItem
                register={register}
                error={errors.lastName}
                type="text"
                label="Last Name"
                name="lastName"
                placeholder="Last Name"
                isRequired
              />
              <FormItem
                register={register}
                error={errors.email}
                type="email"
                label="Email"
                defaultValue={initialEmail.current}
                name="email"
                placeholder="Email Address"
                isRequired
              />
              <FormItem
                error={errors.phone}
                control={control}
                type="tel"
                label="Phone Number"
                name="phone"
                placeholder="(999) 999-9999"
                isRequired
              />

              <FormItem
                error={errors.services}
                register={register}
                type="select"
                label="Select Services"
                options={SERVICES_OPTIONS}
                name="services"
                placeholder="Select Service"
                isRequired
              />
              <FormItem
                error={errors.budget}
                register={register}
                type="select"
                label="Budget in USD"
                options={BUDGET_OPTIONS}
                name="budget"
                placeholder="Select Your Option"
                isRequired
              />
            </div>
            <FormItem
              error={errors.projectDetail}
              register={register}
              type="multiline"
              label="Project Detail"
              name="projectDetail"
              placeholder="Please provide a brief description of your project."
              isRequired
            />

            <button
              disabled={load}
              type="submit"
              className="md:mx-4 md:float-right font-medium tracking-wide text-white bg-orange-600 hover:bg-orange-700 md:w-28 w-full rounded-md h-10"
            >
              {load && <span className="fa fa-spinner fa-spin mr-4"></span>}
              Submit
            </button>
          </form>
        </Modal>
      )}
    </>
  );
};
export default Banner;
