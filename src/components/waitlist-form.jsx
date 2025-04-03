"use client";

import { useState } from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label";
import { Textarea } from "./ui/Textarea";
import { toast } from "sonner";
import { CheckCircle, Loader2 } from "lucide-react";

export default function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // This is where you would add your form submission logic
    // For now, we'll simulate a submission with a timeout

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSubmitted(true);
      toast({
        title: "Success!",
        description:
          "You've been added to our waitlist. We'll be in touch soon!",
      });
    } catch {
      toast({
        title: "Something went wrong.",
        description: "Your submission failed. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 p-6 text-center">
        <div className="rounded-full bg-primary/10 p-3">
          <CheckCircle className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold">You're on the list!</h3>
        <p className="text-muted-foreground">
          Thank you for joining our waitlist. We'll notify you when Milan AI is
          ready for early access.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Your name"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your.email@example.com"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="company">Company</Label>
        <Input
          id="company"
          name="company"
          placeholder="Your company"
          value={formData.company}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="role">Role</Label>
        <Input
          id="role"
          name="role"
          placeholder="Your role"
          value={formData.role}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Why are you interested in Milan AI?</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us why you're interested..."
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Join Waitlist"
        )}
      </Button>
    </form>
  );
}
