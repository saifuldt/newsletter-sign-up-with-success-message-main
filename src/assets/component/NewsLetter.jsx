import { useState } from "react";
import iconList from "../image/icon-list.svg"
import singUp from "../image/illustration-sign-up-desktop.svg"
import singUpMobile from "../image/illustration-sign-up-mobile.svg"

const NewsLetter = ({ onSubscribe }) => {
   
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const icon = <img src={iconList} alt="icon" />;
    const contents = [
        {
            id: 1,
            icons: icon,
            header: "Product discovery and building what matters"
        },
        {
            id: 2,
            icons: icon,
            header: "Measuring to ensure updates are a success"
        },
        {
            id: 3,
            icons: icon,
            header: "And much more!"
        }
    ]

    // Email validation function
    const isValidEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValidEmail(email)) {
            setError(""); // Clear error if email is valid
            onSubscribe(email); // Proceed with the subscription action
        } else {
            setError("Please enter a valid email address."); // Show error message
        }
    };

    return (
        <div className=" flex justify-center items-center bg-blue-950 h-[100vh]">
            <div className="flex flex-col-reverse md:flex-row justify-center items-center bg-white p-4 w-full h-[100vh] md:h-fit md:w-[700px] rounded-xl ">
                <div className="p-2 space-y-6 md:w-1/2">
                    <h1 className="text-4xl font-bold text-blue-950">Stay updated!</h1>
                    <p>Join 60,000+ product managers receiving monthly updates on:</p>
                    <div>
                        {
                            contents.map((item) => (
                                <div key={item.id} className="flex gap-1 text-[14px] py-2 items-center  " >
                                    <span>{item.icons}</span>
                                    <p>{item.header}</p>
                                </div>
                            ))}
                    </div>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <label htmlFor="email">
                            Email address:
                            {error && <span className="text-red-600 text-sm float-right">{error}</span>}
                            <br />
                            <input
                                className={`bg-white w-full h-10 pl-4 border-2 rounded-lg ${error ? "border-red-500" : "border-gray-300"
                                    }`}
                                type="text"
                                id="email"
                                name="email"
                                placeholder="email@company.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                        </label>
                        <button className=" w-full h-10 bg-blue-950 hover:bg-red-400 text-white rounded-lg" type="submit"> Subscribe to monthly newsletter </button>
                    </form>

                </div>
                <div className="md:h-[460px] md:w-1/2 flex  items-center   ">
                    <img className="h-[450px] w-[300px] md:block hidden" src={singUp} alt="img" />
                    <img className=" w-full h-fit md:hidden " src={singUpMobile} alt="img" />
                </div>
            </div>
        </div>
    )
}

export default NewsLetter