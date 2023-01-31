import React from "react";
import { Link } from "react-router-dom";
import image from "../images/home-image.svg";
import Card from "./fragments/Card";

function Home() {
    const card = {
        picture: "http://localhost:5000/picture.png",
        title: "UX Design From Scratch",
        listing: [
            "16 Jam total investasi ilmu",
            "Akses selamanya",
            "Sertifikat",
            "Base real project",
        ],
    };

    return (
        <div>
            {/* First Section */}
            <div className="">
                <div className="container mx-auto py-24">
                    <div className="bg-custom2 shadow-innerCustom p-24 flex rounded-lg justify-around">
                        <div>
                            <h1 className="font-bold text-4xl">
                                Learn UX Design
                            </h1>
                            <h2 className="font-semibold text-2xl my-10">
                                Online UX design courses by experts, with
                                <br />
                                industry-recognized certificates
                            </h2>
                            <div className="mt-16">
                                <Link className="bg-custom1 text-white font-semibold text-xl px-6 py-4">
                                    Start Now
                                </Link>
                            </div>
                        </div>
                        <div>
                            <img src={image} alt="image home" />
                        </div>
                    </div>
                    <div className="max-w-2/3 mx-auto">
                        <div className="my-20 flex flex-col items-center">
                            <h1 className="font-bold text-4xl">
                                Online UX Design Courses for Beginners and
                                Professionals
                            </h1>
                            <h4 className="text-2xl mt-20">
                                Learn the entire spectrum of UX design from 33
                                beginner to advanced courses. Get taught by
                                industry experts and gain recognized
                                certificates to advance your career
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            {/* Second Section */}
            <div className="bg-customsec2">
                <div className="container mx-auto py-6">
                    <h1 className="text-custom2 text-3xl text-opacity-90 font-semibold my-16">
                        Most Popular Class
                    </h1>
                    <div className="flex justify-between mx-8">
                        <Card
                            picture={card.picture}
                            listing={card.listing}
                            title={card.title}
                        />
                        <Card
                            picture={card.picture}
                            listing={card.listing}
                            title={card.title}
                        />
                        <Card
                            picture={card.picture}
                            listing={card.listing}
                            title={card.title}
                        />
                        <Card
                            picture={card.picture}
                            listing={card.listing}
                            title={card.title}
                        />
                    </div>
                    <div className="flex justify-center my-16">
                        <Link className="text-white bg-custombut1 w-1/3 rounded-xl text-center py-4 text-xl font-semibold">
                            see more
                        </Link>
                    </div>
                </div>
            </div>
            {/* Third Section */}
            <div className="bg-customsec3">
                <div className="container mx-auto py-16">
                    <h1 className="text-custom2 text-3xl text-opacity-90 font-semibold my-16">
                        Testimoni
                    </h1>
                    <div className="flex justify-around">
                        <div className="max-w-md">
                            <img
                                src="picture2.png"
                                alt="gambar"
                                style={{ borderRadius: "50%" }}
                            />
                            <h1 className="font-bold text-3xl my-6">
                                Edwardo Capung
                            </h1>
                            <h2 className="leading-loose text-lg">
                                Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit, sed quia
                                consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Neque porro quisquam
                                est.
                            </h2>
                        </div>
                        <div className="max-w-md">
                            <img
                                src="picture2.png"
                                alt="gambar"
                                style={{ borderRadius: "50%" }}
                            />
                            <h1 className="font-bold text-3xl my-6">
                                Edwardo Capung
                            </h1>
                            <h2 className="leading-loose text-lg">
                                Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit, sed quia
                                consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Neque porro quisquam
                                est.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            {/* Fourth Section */}
            <div className="bg-customsec4">
                <div class="container mx-auto w-full h-full py-16">
                    <h1 className="text-center text-custom2 text-3xl font-semibold my-10">
                        Why Us?
                    </h1>
                    <div class="relative wrap overflow-hidden p-10 h-full">
                        <div
                            class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
                            style={{ left: "50%" }}
                        ></div>
                        {/* <!-- right timeline --> */}
                        <div class="mb-8 flex justify-between items-center w-full right-timeline">
                            <div class="w-5/12"></div>
                            <div class="z-20 flex items-center bg-customVerticalTimeline shadow-xl w-8 h-8 rounded-full"></div>
                            <div class="bg-custom1 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 class="mb-3 font-bold text-white text-2xl">
                                    Take online courses by industry experts
                                </h3>
                                <p class="leading-snug tracking-wide text-white text-xl text-opacity-100">
                                    Lessons are self-paced so you’ll never be
                                    late for class or miss a deadline.
                                </p>
                            </div>
                        </div>

                        {/* <!-- left timeline --> */}
                        <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div class="order-1 w-5/12"></div>
                            <div class="z-20 flex items-center order-1 bg-customVerticalTimeline shadow-xl w-8 h-8 rounded-full"></div>
                            <div class="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 class="mb-3 font-bold text-white text-xl">
                                    Get a Course Certificate
                                </h3>
                                <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                                    Your answers are graded by experts, not
                                    machines. Get an industry-recognized Course
                                    Certificate to prove your skills.
                                </p>
                            </div>
                        </div>

                        {/* <!-- right timeline --> */}
                        <div class="mb-8 flex justify-between items-center w-full right-timeline">
                            <div class="order-1 w-5/12"></div>
                            <div class="z-20 flex items-center order-1 bg-customVerticalTimeline shadow-xl w-8 h-8 rounded-full"></div>
                            <div class="order-1 bg-custom1 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 class="mb-3 font-bold text-white text-2xl">
                                    Advance your career
                                </h3>
                                <p class="leading-snug tracking-wide text-white text-xl text-opacity-100">
                                    Use your new skills in your existing job or
                                    to get a new job in UX design. Get help from
                                    our community.
                                </p>
                            </div>
                        </div>

                        {/* <!-- left timeline --> */}
                        <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div class="order-1 w-5/12"></div>
                            <div class="z-20 flex items-center order-1 bg-customVerticalTimeline shadow-xl w-8 h-8 rounded-full"></div>
                            <div class="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 class="mb-3 font-bold text-white text-xl">
                                    Lifetime Access
                                </h3>
                                <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                                    Kamu bisa mendapat akses materi selamanya.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center my-10 text-2xl text-custom2 font-bold">
                        Completed
                    </div>
                </div>
            </div>
            {/* Fifth Section */}
            <div className="h-96 bg-white"></div>
            
        </div>
    );
}

export default Home;
