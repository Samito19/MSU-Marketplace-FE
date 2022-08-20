import YellowStar from "../assets/yellow-star.svg";


function ListingCard(props: any) {
  return (
    <div className="h-[21rem] min-w-[18rem] w-[18rem] bg-white shadow-n5 rounded-[7px] flex flex-col overflow-hidden cursor-pointer">
      <div className="h-[60%] w-full bg-blue-500">
        <img src={props.image} alt="" className="h-full w-full object-cover" />
      </div>
      <span className="ml-3 mt-3 font-light underline hover:text-msu-red">
        {props.title}
      </span>
      <div className="flex ml-3 mt-2 gap-[0.10rem]">
        {Array(props.rating)
          .fill("star")
          .map((star, index: number) => {
            return <img key={index} src={YellowStar} alt="" />;
          })}
      </div>
      <div className="flex items-center mt-3">

        <span className="ml-3 font-light w-[89%] overflow-hidden whitespace-nowrap">
          {props.description}
        </span>
       {props.description.length > 34 ? (<span>...</span>) : null} 
        
      </div>
      <span className="font-medium text-msu-red ml-3 mt-2">{props.price}$</span>
    </div>
  );
}

export default ListingCard;
