"use client";

import { Button, Card, Checkbox, Label, Navbar, TextInput } from "flowbite-react";
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'


export default function Login() {
  return (


    // className="bg-cover bg-center min-h-screen" 
   <>

    <NavBar></NavBar>

    <Card className="max-w-full rounded-3xl lg:px-60 mt-9 bg-cover bg-center" style={{ backgroundImage: "url('assets/sunset.jpeg')" }}>
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput id="email1" type="email" placeholder="name@gmail.com" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Card>

    <Footer></Footer>
    </>
  );
}
