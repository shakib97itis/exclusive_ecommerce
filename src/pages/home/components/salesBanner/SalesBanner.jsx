import bannerBg from "../../../../assets/images/banner_bg.png";
import bannerImg from "../../../../assets/images/banner_img.png";

const SalesBanner = () => {
  return (
    <section className="">
      <div className="main-container border-button/30 border-b pt-[80px] pb-[70px]">
        <div
          className="bg-button grid grid-cols-1 bg-cover p-6 sm:grid-cols-2 sm:px-14 sm:py-[70px]"
          style={{ backgroundImage: `url("${bannerBg}")` }}
        >
          <div className="">
            <p className="title-16-semibold text-button-1 mb-8">Categories</p>
            <h2 className="heading-48-semibold text-text mb-8 max-w-md">
              Enhance Your Music Experience
            </h2>
            <div className="mb-10 flex flex-wrap items-center gap-4">
              <div className="bg-primary flex h-16 w-16 flex-col items-center justify-center rounded-full p-4">
                <span className="title-16-semibold text-text-2">05</span>
                <span className="title-14-regular text-text-2">Days</span>
              </div>
              <div className="bg-primary flex h-16 w-16 flex-col items-center justify-center rounded-full p-3.5">
                <span className="title-16-semibold text-text-2">23</span>
                <span className="title-14-regular text-text-2">Hours</span>
              </div>
              <div className="bg-primary flex h-16 w-16 flex-col items-center justify-center rounded-full p-3.5">
                <span className="title-16-semibold text-text-2">59</span>
                <span className="title-14-regular text-text-2">Minutes</span>
              </div>
              <div className="bg-primary flex h-16 w-16 flex-col items-center justify-center rounded-full p-6">
                <span className="title-16-semibold text-text-2">35</span>
                <span className="title-14-regular text-text-2 border-2">
                  Seconds
                </span>
              </div>
            </div>
            <button className="bg-button-1 text-text px-12 py-4">
              Buy Now!
            </button>
          </div>

          <div className="hidden h-full w-full items-center justify-center sm:flex">
            <img src={bannerImg} alt="Banner Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesBanner;
