
function ListingCardLoading(props: any) {
  return (
    <div className={`h-[21rem] min-w-[18rem] w-[18rem] bg-white shadow-n5 rounded-[7px] flex flex-col overflow-hidden cursor-pointer ${props.visibility}`}>
      <div className="h-[60%] w-full bg-slate-200 animate-pulse rounded-[7px]"></div>
      <div className="ml-3 mt-3 h-[1.5rem] w-[80%] rounded-md bg-slate-200 animate-pulse"></div>
      <div className="ml-3 mt-3 h-[1.5rem] w-[50%] rounded-md bg-slate-200 animate-pulse"></div>
      <div className="ml-3 mt-5 h-[1.5rem] w-[20%] rounded-md bg-slate-200 animate-pulse"></div>
    </div>
  );
}

export default ListingCardLoading;
