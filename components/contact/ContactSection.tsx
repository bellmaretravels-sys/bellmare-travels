"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock3, Send, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 9847776640",
    href: "tel:+91 9847776641",
  },
  {
    icon: Mail,
    title: "Email",
    value: "Bellmaretravels@gmail.com",
    href: "mailto:Bellmaretravels@gmail.com",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "Edavanakkad, Ernakulam, Kerala",
    href: "#",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat With Us",
    href: "https://wa.me/+919847776640",
  },
];

export default function ContactSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Contact Us
          </span>

          <h2 className="mt-4 text-4xl font-bold text-black md:text-5xl">
            We'd Love to Hear From You
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Have questions about our tours or transportation services? Get in
            touch with us and our team will be happy to assist you.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-black">{item.title}</h3>

                <p className="mt-2 text-slate-600">{item.value}</p>
              </motion.a>
            );
          })}
        </div>

        {/* Form + Map */}
        <div className="mt-24 grid gap-10 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white p-8 shadow-lg"
          >
            <h3 className="text-3xl font-bold text-black">Send Us a Message</h3>

            <form className="mt-8 space-y-5">
              <input
                placeholder="Full Name"
                className="w-full rounded-xl border text-black border-black p-4 outline-none focus:border-blue-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border text-black border-black p-4 outline-none focus:border-blue-600"
              />

              <input
                placeholder="Phone Number"
                className="w-full rounded-xl border text-black border-black p-4 outline-none focus:border-blue-600"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full rounded-xl border text-black border-black p-4 outline-none focus:border-blue-600"
              />

              <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl shadow-lg"
          >
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3927.9263562945653!2d76.20112597503257!3d10.10511409000574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDA2JzE4LjQiTiA3NsKwMTInMTMuMyJF!5e0!3m2!1sen!2sin!4v1783867107068!5m2!1sen!2sin"
              width="600"
              height="450"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="h-full min-h-[500px] w-full border-0"
            />
          </motion.div>
        </div>

        {/* Business Hours */}
        <div className="mt-24 rounded-3xl bg-blue-600 p-10 text-white">
          <div className="flex items-center gap-4">
            <Clock3 size={32} />
            <div>
              <h3 className="text-2xl font-bold">Business Hours</h3>

              <p className="mt-2 text-blue-100">
                Monday – Saturday : 9:00 AM – 7:00 PM
              </p>

              <p className="text-blue-100">Sunday : Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
