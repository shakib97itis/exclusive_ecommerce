import { useState } from "react";

const ProductGallery = ({ thumbnails }) => {
  const [mainImage, setMainImage] = useState(thumbnails[0]);

  const handleThumbnailClick = (src) => {
    setMainImage(src);
  };

  return (
    <div className="flex gap-4">
      <div className="flex w-44 flex-col gap-4">
        {thumbnails.map((src, i) => (
          <div
            className="bg-secondary flex grow items-center justify-center rounded-sm px-6 py-3"
            key={i}
          >
            <img
              key={i}
              src={src}
              alt="thumbnail"
              className="h-auto w-full cursor-pointer"
              onClick={() => handleThumbnailClick(src)}
            />
          </div>
        ))}
      </div>

      <div className="bg-secondary flex grow items-center justify-center rounded-sm p-7">
        <img src={mainImage} alt="main product" className="h-auto w-full" />
      </div>
    </div>
  );
};

export default ProductGallery;
