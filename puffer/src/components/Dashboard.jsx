import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import '@fortawesome/fontawesome-free/css/all.min.css'; 

const MemeCard = () => {
  return (
    <Card className="py-4 w-64 bg-black border border-blue-500"> {/* Fixed width of 16rem (64 * 0.25rem) */}
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold text-white">creator - address</p>
        <small className="text-white">token - address</small>
        <h4 className="font-bold text-large text-white">Token name</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
    </Card>
  );
}

const Dashboard = () => {
  return (
    <div className="relative min-h-screen w-full bg-slate-950">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-custom-grid bg-custom-size flex flex-col items-center pt-16"> {/* Adjust the padding here */}
      <div className="relative">
      <input 
        type="text" 
        placeholder="Search" 
        className="bg-black text-white placeholder-gray-500 border border-blue-500 px-4 py-2 rounded-md focus:outline-none pl-10 pr-4" // Add padding to the left and right for icon space
      />
      <i className="fas fa-search absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
    </div>
        <div className='flex flex-row gap-x-6 mt-4'>
          <MemeCard />
          <MemeCard />
        </div>  
      </div>
    </div>
  );
};

export default Dashboard;
