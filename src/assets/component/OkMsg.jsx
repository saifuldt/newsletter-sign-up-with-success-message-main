import okImg from "../image/icon-success.svg"
const OkMsg = ({ onDismiss,email }) => {
   
  return (
    <div className=" flex justify-center items-center bg-blue-950 h-[100vh]">
             <div id="ok" className=" flex flex-col justify-center items-center bg-white p-8 w-[400px] rounded-xl space-y-2">
                <div className="space-y-2">
                    <img src={okImg} alt="img" />
                <h1 className="text-5xl font-bold text-blue-950 ">Thanks for subscribing!</h1>
                <p className="text-[14px] text-gray-700 ">
                A confirmation email has been sent to <strong> {email} </strong> . 
                Please open it and click the button inside to confirm your subscription.
                </p>
                </div>
                <button onClick={onDismiss}  className="w-full bg-blue-950 h-10 rounded-lg text-white ">Dismiss message</button>

            </div>
        </div>
  )
}

export default OkMsg