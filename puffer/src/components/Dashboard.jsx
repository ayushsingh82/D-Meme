import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

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
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-custom-grid bg-custom-size flex justify-center items-center">
      <div className='flex flex-row gap-x-6 '>
      <MemeCard />
        <MemeCard />
        </div>  
      </div>
    </div>
  );
};

export default Dashboard;
