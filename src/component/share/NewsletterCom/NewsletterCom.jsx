const NewsletterCom = () => {
  return (
    <div className="py-20 lg:px-20 bg-primary">
      <div className="px-5 grid gap-10 lg:gap-20 max-w-7xl mx-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h1 className="text-xl font-bold text-white mb-3">
              Weekly Newsletter
            </h1>
            <p className="text-[15px] text-white">
              Subscribe to our newsletter to receive the latest updates,
              Business idea and offers
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-4 my-3">
            <input
              type="text"
              placeholder="Type here"
              className="input w-full lg:max-w-xs h-14 bg-white rounded-md"
            />
            <button className="py-4 px-2 w-full lg:w-[25%] bg-white text-primary text-md font-semibold rounded-md">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterCom;
