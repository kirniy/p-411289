import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const WaitlistForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Submitted email:", email);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
      <h2 className="text-2xl font-semibold text-foreground">Get notified on the Release</h2>
      <div className="flex space-x-2">
        <Input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
          required
        />
        <Button type="submit" className="bg-primary text-primary-foreground">
          Join Waitlist
        </Button>
      </div>
    </form>
  );
};