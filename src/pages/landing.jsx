import React, { useState } from "react";


export const Nav = () => {
    // State to toggle mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle mobile menu visibility
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className="relative flex justify-between max-w-7xl sticky top-10 z-50 m-auto px-6">
            
            <div className="w-[40px] h-[40px] rounded-full bg-[#C9E6F0] p-1">
                <img
                    src="https://pluspng.com/img-png/rizal-png-jose-rizal-is-my-homeboy-women-s-tee-178.png"
                    alt="Jose Rizal"
                    className="w-full h-full object-cover rounded-full"
                />
            </div>

            
            <div className="hidden md:flex items-center gap-4">
                <a href="#hero"><span className="cursor-pointer hover:text-[#89d9f2]">Home</span></a>
                <a href="#about"><span className="cursor-pointer hover:text-[#89d9f2]">Samples</span></a>
                <a href="#faq"><span className="cursor-pointer hover:text-[#89d9f2]">FAQs</span></a>
                |
                <div className="ml-2 flex gap-4">
                    <a href="/login">
                        <span className="cursor-pointer rounded-xl bg-[#89d9f2] hover:bg-[#6bbbd4] px-4 p-2 text-black">
                            Login
                        </span>
                    </a>
                    <a href="/signup">
                        <span className="cursor-pointer border rounded-xl border-[#89d9f2] hover:bg-[#6bbbd4] px-4 p-2 text-white hover:text-black">
                            Signup
                        </span>
                    </a>
                </div>
            </div>

            
            <div className="md:hidden flex items-center z-50">
                <button onClick={toggleMenu} className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            
            {isMenuOpen && (
                <div className="absolute top-0 right-0 bg-[#1a202c] w-full h-screen flex flex-col items-center py-8 space-y-6 text-white">
                    <a href="#hero" className="hover:text-[#89d9f2]" onClick={toggleMenu}>Home</a>
                    <a href="#about" className="hover:text-[#89d9f2]" onClick={toggleMenu}>Samples</a>
                    <a href="#faq" className="hover:text-[#89d9f2]" onClick={toggleMenu}>FAQs</a>
                    __________
                    <div className="mt-4 flex flex-col items-center gap-4">
                        <a href="/login" className="cursor-pointer rounded-xl bg-[#89d9f2] hover:bg-[#6bbbd4] px-4 p-2 text-black" onClick={toggleMenu}>Login</a>
                        <a href="/signup" className="cursor-pointer border rounded-xl border-[#89d9f2] hover:bg-[#6bbbd4] px-4 p-2 text-white hover:text-black" onClick={toggleMenu}>Signup</a>
                    </div>
                </div>
            )}
        </div>
    );
};


export const Hero = () => {

    return (
        <section id="hero" className="flex flex-col items-center justify-center min-h-screen">
            
            <div className="max-w-5xl text-center">
                <h6 className="text-xs my-2">INTRODUCING RIZALGPT</h6>
                
                <h1 className="text-center text-5xl font-semibold mb-6">
                    Discover the life of Jose Rizal and the stories that made him a hero.

                </h1>
                
                <div className="font-light text-sm max-w-2xl m-auto">
                    An AI-powered model of Jose Rizal allows users to engage in conversations, answering questions about his life, works, 
                    and historical contributions for an interactive learning experience.
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
                    <a href="/login">
                        <button className="bg-[#89d9f2] hover:bg-[#6bbbd4]
                        rounded-xl p-2 text-black font-medium flex items-center">
                            Try RizalGPT 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 stroke-black">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>

                        </button>
                    </a>
                    <a href="#about">
                    <button className="border border-[#89d9f2] hover:border-[#6bbbd4]
                    rounded-xl p-2 text-white font-medium ">Learn More</button>
                    </a>
                </div>
            </div>
          
        </section>
    )
}


export const About = () => {
    const [activeButton, setActiveButton] = useState("Rizal Biography");

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    
    const content = {
        "Rizal Biography": [
            {
                prompt: "Who is José Rizal?",
                response:
                    "José Rizal was a Filipino nationalist and revolutionary. He is considered the national hero of the Philippines for his role in fighting against Spanish colonial rule through his writings. His famous works include 'Noli Me Tangere' and 'El Filibusterismo.'"
            },
            {
                prompt: "What are the contributions of José Rizal?",
                response:
                    "José Rizal contributed to the Philippine Revolution by exposing the corruption and abuses of the Spanish colonial government through his writings. His works inspired Filipinos to fight for their freedom."
            },
            {
                prompt: "When was José Rizal born?",
                response: "José Rizal was born on June 19, 1861, in Calamba, Laguna, Philippines."
            },            
        ],
        "Rizal Works": [
            {
                prompt: "What is 'Noli Me Tangere' about?",
                response:
                    "'Noli Me Tangere' is a novel written by José Rizal, which exposes the injustices of the Spanish colonial government and the Catholic Church in the Philippines. It is a passionate plea for reform and social change, and it played a significant role in the Philippine Revolution."
            },
            {
                prompt: "What is 'El Filibusterismo' about?",
                response:
                    "'El Filibusterismo' is a sequel to 'Noli Me Tangere.' It is a darker novel that discusses the consequences of the failure of the reform movement, highlighting themes of revenge and revolution."
            },
            {
                prompt: "What is the significance of Rizal’s works?",
                response:
                    "Rizal’s works, particularly 'Noli Me Tangere' and 'El Filibusterismo,' played a crucial role in awakening national consciousness in the Philippines. They inspired the Philippine Revolution and are considered foundational texts in Philippine history."
            },
            {
                prompt: "Why was 'Noli Me Tangere' banned?",
                response:
                    "'Noli Me Tangere' was banned by the Spanish colonial authorities because it exposed the corruption and abuses of the clergy and government officials in the Philippines."
            },            
        ],
        "Reviewer": [
            {
                prompt: "What is the significance of José Rizal's travels?",
                response:
                    "José Rizal's travels throughout Europe and Asia helped shape his views on reform and human rights. His exposure to different cultures and political systems strengthened his resolve to challenge the abuses of the Spanish colonial regime and advocate for independence through peaceful means."
            },
            {
                prompt: "Where did José Rizal study?",
                response:
                    "José Rizal studied in various European countries, including Spain, France, and Germany. He earned degrees in medicine and philosophy."
            },
            {
                prompt: "Why did José Rizal oppose the Spanish rule?",
                response:
                    "José Rizal opposed Spanish rule because of the widespread corruption, exploitation, and injustice faced by Filipinos under the colonial government. He sought peaceful reforms and the protection of human rights."
            },
            {
                prompt: "What role did José Rizal play in the revolution?",
                response:
                    "José Rizal was not directly involved in the revolution, but his writings, particularly 'Noli Me Tangere' and 'El Filibusterismo,' inspired many revolutionaries and fueled the movement for independence."
            }            
        ]
    };

    return (
        <section id="about" className="flex flex-col justify-center h-full p-6">
            <span className="font-bold text-5xl mb-2 text-center">Samples</span>
            <p className="text-center text-sm mb-6 text-gray-300">
                Explore different sample prompts and 
                AI-generated responses about José Rizal's life, works, and legacy.
            </p>

            <div className="flex justify-center items-center gap-4 mb-6">
                <button
                    className={`rounded-xl p-2 font-medium flex gap-2 items-center ${
                        activeButton === "Rizal Biography"
                            ? "bg-[#89d9f2] text-black"
                            : "bg-transparent hover:bg-[#6bbbd4] text-white hover:text-black"
                    }`}
                    onClick={() => handleButtonClick("Rizal Biography")}
                >
                    Rizal Biography
                </button>
                <button
                    className={`rounded-xl p-2 font-medium flex gap-2 items-center ${
                        activeButton === "Rizal Works"
                            ? "bg-[#89d9f2] text-black"
                            : "bg-transparent hover:bg-[#6bbbd4] text-white hover:text-black"
                    }`}
                    onClick={() => handleButtonClick("Rizal Works")}
                >
                    Rizal Works
                </button>
                <button
                    className={`rounded-xl p-2 font-medium flex gap-2 items-center ${
                        activeButton === "Reviewer"
                            ? "bg-[#89d9f2] text-black"
                            : "bg-transparent hover:bg-[#6bbbd4] text-white hover:text-black"
                    }`}
                    onClick={() => handleButtonClick("Reviewer")}
                >
                    Reviewer
                </button>
            </div>

            {/* Dynamic content based on the selected button */}
            <div className="mt-6">
                {content[activeButton].map((item, index) => (
                    <div key={index} className="flex flex-col w-full gap-4 mb-4">
                        {/* User prompt container */}
                        <div className="bg-[#222729] p-4 rounded-xl text-black shadow-lg">
                            <p className="font-semibold italic text-xs mb-2">You</p>
                            <p>{item.prompt}</p>
                        </div>

                        {/* AI response container */}
                        <div className="bg-[#1A1D20] p-4 rounded-xl shadow-lg">
                            <p className="font-semibold italic text-xs mb-2">Jose Rizal</p>
                            <p>{item.response}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};





export const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle the active FAQ
    };

    const faqs = [
        {
            question: "What is RizalBot?",
            answer: "RizalBot is an AI-powered chatbot designed to provide accurate and insightful information about José Rizal, his life, works, and contributions to history."
        },
        {
            question: "How do I use RizalBot?",
            answer: "Simply log in or sign up to access RizalBot. Once logged in, you can type your questions about José Rizal, and the bot will provide detailed responses."
        },
        {
            question: "Do I need an account to use RizalBot?",
            answer: "Yes, you'll need to create an account to access RizalBot. This helps us provide a personalized experience and track your questions for better accuracy."
        },
        {
            question: "Is RizalBot free to use?",
            answer: "Yes, RizalBot is free to use. You can access most features without any cost, but advanced options may require a subscription in the future."
        },
        {
            question: "What types of questions can I ask RizalBot?",
            answer: "You can ask RizalBot about José Rizal's biography, his works like 'Noli Me Tangere' and 'El Filibusterismo,' his travels, contributions to Philippine history, and more."
        },
        {
            question: "How do I sign up?",
            answer: "Click the 'Sign Up' button on the navigation bar, fill in your details, and verify your email to create your account."
        },        
    ];

    return (
        <section id="faq" className="flex flex-col min-h-screen p-6">
            <span className="font-bold text-5xl mb-6 text-center">FAQs</span>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-300">
                        <button
                            className="flex justify-between items-center w-full py-3 text-left font-medium text-black"
                            onClick={() => toggleFaq(index)}
                        >
                            <span>{faq.question}</span>
                            <span className="text-xl">
                                {
                                    activeIndex === index ? 
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                        </svg>
                                    : 
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                }
                            </span>
                        </button>
                        <div
                            className={`transition-[max-height] duration-500 overflow-hidden ${
                                activeIndex === index ? "max-h-screen" : "max-h-0"
                            }`}
                        >
                            <p className="text-white mt-2 px-2">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export const Footer = () => {
    return (
        <div className="flex justify-center items-center text-xs text-gray-400 mb-6">
            @ all rights 
        </div>
    )
}



export const Landing = () => {

    return (
        <div className="bg-[#232323]">
            <Nav />
            <div className="flex justify-center">            
                <div className="max-w-7xl w-full h-full p-4">
                    <Hero />
                    <About />
                    <Faq />

                    <Footer/>
                </div>
            </div>
        </div>
    );
};
