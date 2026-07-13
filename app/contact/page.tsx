"use client";

import {
  Button,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert("Message sent successfully!");

    e.currentTarget.reset();
  };

  return (
    <main className="bg-gray-50 py-16">
      <div className="mx-auto w-11/12 max-w-7xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <h1 className="text-5xl font-bold text-gray-900">
            Contact Us
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            We'd love to hear from you. If you have any questions,
            feedback, or need assistance, feel free to contact us.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Contact Info */}
          <div className="rounded-3xl bg-gradient-to-br from-cyan-600 to-blue-700 p-10 text-white">

            <h2 className="text-3xl font-bold">
              Get In Touch
            </h2>

            <p className="mt-5 leading-8 text-cyan-100">
              Our support team is always ready to help you with your
              shopping experience.
            </p>

            <div className="mt-10 space-y-8">

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-white/20 p-3">
                  <Mail size={24} />
                </div>

                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-cyan-100">
                    support@kickhub.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-white/20 p-3">
                  <Phone size={24} />
                </div>

                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-cyan-100">
                    +39 123 456 789
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-white/20 p-3">
                  <MapPin size={24} />
                </div>

                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-cyan-100">
                    Milan, Italy
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              Send Message
            </h2>

            <Form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >

              <TextField name="name" isRequired>
                <Label>Full Name</Label>
                <Input placeholder="John Doe" />
              </TextField>

              <TextField
                name="email"
                type="email"
                isRequired
              >
                <Label>Email</Label>
                <Input placeholder="john@example.com" />
              </TextField>

              <TextField name="subject" isRequired>
                <Label>Subject</Label>
                <Input placeholder="How can we help?" />
              </TextField>

              <TextField name="message" isRequired>
                <Label>Message</Label>
                <TextArea
                  placeholder="Write your message..."
                 
                />
              </TextField>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
              >
                Send Message
              </Button>

            </Form>

          </div>

        </div>
      </div>
    </main>
  );
};

export default ContactPage;