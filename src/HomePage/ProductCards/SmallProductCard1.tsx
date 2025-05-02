type SmallProductCardProps = {
    title: string;
    image?: string;
    description?: string;
  };
  
  const SmallProductCard = ({ title, image, description }: SmallProductCardProps) => {
    return (
      <div className=" h-[135px] border-1 w-[31.9%] my-[15px] mx-[8px] px-[10px] py-[12px] flex items-center">
        
        <div className="border-1 border-green-500 h-[100px] w-[100px] ml-4">
          {image && <img src={"/image.png"}  className="h-full w-full object-cover" />}
        </div>

        <div className="w-[238px] h-[112px] border-1 pl-[15px]">
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>

      </div>
    );
  };
  
  export default SmallProductCard;
  