import { Button } from "@v1/components/ui/button";
import { Input } from "@v1/components/ui/input";
import { useState } from "react";

export const WaitlistForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted email:", email);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-6">
      <h2 className="text-xl text-[#8B5CF6] text-center">Get notified on the Release</h2>
      <div className="flex space-x-2">
        <Input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-[#1A1A1A] border-gray-800 text-white placeholder:text-gray-500"
        />
        <Button type="submit" className="bg-[#8B5CF6] text-white hover:bg-[#7C3AED]">
          Join Waitlist
        </Button>
      </div>
    </form>
  );
};