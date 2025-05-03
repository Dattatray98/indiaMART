const Links = () => {

  return (
    <>
      <div className="flex gap-10 p-1 bg-transparent h-[55p] text-white absolute right-2 font-style">

        {/* Shopping */}
        <div className="flex flex-col items-center">
          <img src="/shopping.png" alt="shopping" className="w-5 h-5" />
          <span className="text-[12px] mt-1">Shopping</span>
        </div>


        {/* Sell */}
        <div
          onClick={() => { "/ProductView.tsx" }}
          className="flex flex-col items-center">
          <img src="/shop.png" alt="sell" className="w-5 h-5" />
          <span className="text-[12px] mt-1">Sell</span>
        </div>
        {/* Help Dropdown */}
        <div className="relative group flex flex-col">
          <img src="/help.png" alt="help" className="w-5 h-5" />
          <a href="#" className=" text-[12px] mt-1">Help</a>

          {/* Dropdown menu */}
          <div className="hidden group-hover:block absolute top-9 right-0 w-64 rounded-md bg-white text-black shadow-lg p-4 text-[13px] leading-6">
            <p className="text-gray-500 text-xs mb-2">Find answers to your queries</p>
            <ul className="space-y-2">
              <li>For <b>Buying</b></li>
              <li>For <b>Selling</b></li>
              <li>Share your Feedback</li>
              <li>Raise a Complaint</li>
              <li>Email us on <br /><b>customercare@indiamart.com</b></li>
              <li>Call us at <b>096-9696-9696</b></li>
              <li>Chat with us</li>
              <li>Seller Academy</li>
            </ul>
          </div>
        </div>

        {/* Messages */}
        <div className="flex flex-col items-center">
          <img src="/message.png" alt="messages" className="w-5 h-5" />
          <span className="text-[12px] mt-1">Messages</span>
        </div>

        <div className="flex flex-col items-center">
          <img src="/profile.png" alt="messages" className="w-5 h-5" />
          <span className="text-[12px] mt-1">Profile</span>
        </div>
      </div>
    </>
  );
};

export default Links;
