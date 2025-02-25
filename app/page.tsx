"use client";
import { Button, Card, CardBody, CardFooter, CardHeader } from "@heroui/react";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card>
        <CardHeader>Hello world</CardHeader>
        <CardBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </CardBody>
        <CardFooter>
          <Button>Click me</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Home;
