import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import memeDataArray from "./data";

const MemeCard = ({ creator, address, tokenName, imageUrl, description }) => {
  return (
    <Card className="py-4 w-80 bg-black border border-blue-500"> {/* Fixed width of 20rem (80 * 0.25rem) */}
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold text-white">Creator: <span className="font-medium"> {creator} </span> </p>
        <small className="text-white mt-[5px] font-bold">Token Address: <span className="font-medium"> {address} </span> </small>
        <h4 className="font-bold text-large text-white">{tokenName}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt={description}
          className="object-cover rounded-xl"
          src={imageUrl}
          width={340} 
        />
      </CardBody>
    </Card>
  );
}


const Dashboard = () => {
  return (
    <div className="relative min-h-screen w-full bg-slate-950">
    <div className="absolute bottom-0 left-0 right-0 top-0 bg-custom-grid bg-custom-size flex flex-col items-center pt-16">
      <div className="relative">
        <input 
          type="text" 
          placeholder="Search" 
          className="bg-black text-white placeholder-gray-500 border border-blue-500 px-4 py-2 rounded-md focus:outline-none pl-10 pr-4"
        />
        <i className="fas fa-search absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-[40px] mx-6'>
        {memeDataArray.map((meme) => (
          <MemeCard 
            key={meme.id}
            creator={meme.creator}
            address={meme.address}
            tokenName={meme.tokenName}
            imageUrl={meme.imageUrl}
            description={meme.description}
          />
        ))}
      </div>  
    </div>
  </div>
  );
};

export default Dashboard;
