import ps5Img from "../../../../assets/new-arrivals/ps5-slim.png";
import attractiveWomenImg from "../../../../assets/new-arrivals/attractive-woman-wearing-hat.png";
import ecoPodImg from "../../../../assets/new-arrivals/amazon-echo.png";
import perfumeImg from "../../../../assets/new-arrivals/perfume.png";
import { Link } from "react-router";

const NewArrival = () => {
  return (
    <section>
      <div className="main-container pt-[80px] pb-[70px]">
        {/* TOP TITLE */}
        <div className="title-16-semibold text-secondary-2 mb-6 flex items-center gap-2.5">
          <div className="bg-secondary-2 h-10 w-5 rounded-sm"></div>
          <p>Featured</p>
        </div>

        <div className="mb-10 space-y-4 sm:flex sm:items-center sm:justify-between sm:space-y-0">
          <div className="flex flex-col gap-2.5 md:flex-row md:items-center md:gap-20">
            <h2 className="heading-36-semibold">New Arrival</h2>
          </div>
        </div>

        {/* NEW ARRIVAL CARDSs  TODO: RESTRACTURE THIS LATER*/}
        <div className="grid grid-cols-2 gap-[20px] sm:grid-cols-4">
          {/* FIRST CARD */}
          <div className="bg-button col-span-2 flex min-h-[380px] pt-[20%] sm:row-span-2">
            <div className="relative flex h-full w-full items-end">
              <div className="w-full">
                <img
                  src={ps5Img}
                  alt="Ps5"
                  className="mx-auto min-h-[280px] w-auto object-contain"
                />
              </div>

              <div className="absolute bottom-0 left-0 w-full space-y-4 p-8">
                <h3 className="heading-24-semibold text-text">Playstation 5</h3>
                <p className="title-14-regular text-text max-w-[250px]">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <Link
                  to="/shop"
                  className="text-text underline underline-offset-8"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>

          {/* SECOND CARD */}
          <div className="bg-button relative col-span-2 min-h-[280px]">
            <div className="h-full">
              <img
                src={attractiveWomenImg}
                alt="Ps5"
                className="ms-auto h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 p-8">
              <div className="max-w-[260px] space-y-4">
                <h3 className="text-text heading-24-semibold">
                  Women’s Collections
                </h3>
                <p className="text-text title-14-regular">
                  Featured woman collections that give you another vibe.
                </p>
                <Link
                  to="/shop"
                  className="text-text title-16-medium underline underline-offset-8"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>

          {/* THIRD CARD */}
          <div className="bg-button relative flex min-h-[284px] p-[30px]">
            <div className="w-full">
              <img
                src={ecoPodImg}
                alt=""
                className="h-full w-full object-contain"
              />
            </div>

            <div className="absolute bottom-0 left-0 p-6">
              <div className="space-y-2">
                <h3 className="text-text heading-24-semibold">Speakers</h3>
                <p className="title-14-regular text-text">
                  Amazon's Wireless Speakers
                </p>
                <Link
                  to="/shop"
                  className="title-16-medium text-text underline underline-offset-8"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>

          {/* FOURTH CARD */}
          <div className="bg-button relative flex min-h-[284px] p-[30px]">
            <div className="w-full">
              <img
                src={perfumeImg}
                alt=""
                className="h-full w-full object-contain"
              />
            </div>

            <div className="absolute bottom-0 left-0 p-6">
              <div className="space-y-2">
                <h3 className="text-text heading-24-semibold">Perfume</h3>
                <p className="title-14-regular text-text">
                  GUCCI INTENSE OUD EDP
                </p>
                <Link
                  to="/shop"
                  className="title-16-medium text-text underline underline-offset-8"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
