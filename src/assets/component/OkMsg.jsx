import okImg from "../image/icon-success.svg"
const OkMsg = ({ onDismiss,email }) => {
   
  return (
    <div className=" flex justify-center items-center bg-blue-950 h-[100vh]">
             <div id="ok" className=" flex flex-col justify-center items-center bg-white md:p-8 p-4 w-full md:w-[400px] h-[100vh] md:h-fit rounded-xl gap-10  ">
                <div className="space-y-4 mb-40 md:mb-0">
                    <img src={okImg} alt="img" />
                <h1 className="md:text-5xl text-3xl font-bold text-blue-950 w-60 md:w-full ">Thanks for subscribing!</h1>
                <p className="text-[14px] text-gray-700 w-64 md:w-fit ">
                A confirmation email has been sent to <strong> {email} </strong> . 
                Please open it and click the button inside to confirm your subscription.
                </p>
                </div>
                <button  onClick={onDismiss}  className="w-full bg-blue-950 h-10 rounded-lg text-white  ">Dismiss message</button>

            </div>
        </div>
  )
}

export default OkMsg