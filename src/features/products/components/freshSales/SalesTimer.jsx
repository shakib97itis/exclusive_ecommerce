const SalesTimer = () => {
  return (
    <div className="flex items-end gap-5">
      <div className="">
        <div className="title-12-medium text-text-2 mb-1">Days</div>
        <div className="heading-32-bold text-text-2">03</div>
      </div>
      <span className="text-hover-button heading-32-bold mb-1">:</span>
      <div className="">
        <div className="title-12-medium text-text-2 mb-1">Hours</div>
        <div className="heading-32-bold text-text-2">23</div>
      </div>
      <span className="text-hover-button heading-32-bold mb-1">:</span>
      <div className="">
        <div className="title-12-medium text-text-2 mb-1">Minutes</div>
        <div className="heading-32-bold text-text-2">19</div>
      </div>
      <span className="text-hover-button heading-32-bold mb-1">:</span>
      <div className="">
        <div className="title-12-medium text-text-2 mb-1">Seconds</div>
        <div className="heading-32-bold text-text-2">56</div>
      </div>
    </div>
  );
};

export default SalesTimer;
