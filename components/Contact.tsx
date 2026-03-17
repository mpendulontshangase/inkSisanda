"use client";

import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import AnimateIn from "./AnimateIn";

const WHATSAPP_NUMBER = "27817194455";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const contactInfo = [
  { icon: Phone, label: "Phone", value: "067 829 7792" },
  { icon: Mail, label: "Email", value: "InkSisandatech25@gmail.com" },
  { icon: MapPin, label: "Location", value: "South Africa" },
  { icon: Clock, label: "Hours", value: "Mon–Sat: 8am – 6pm" },
];

const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    label: "Instagram",
    href: "#",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    label: "TikTok",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn className="text-center mb-16">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-black mt-2 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Ready to start a project, enroll in a class, or purchase a machine?
            Reach us directly on WhatsApp.
          </p>
          <div className="mt-4 flex justify-center">
            <div className="w-16 h-1 bg-orange-500 rounded-full" />
          </div>
          </AnimateIn>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {/* Info panel */}
          <AnimateIn direction="left">
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8">
            <h3 className="font-black text-xl text-gray-900 mb-6">
              Contact <span className="text-orange-500">Info</span>
            </h3>

            <div className="space-y-5 mb-8">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs uppercase tracking-wide mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-gray-800 font-medium text-sm">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="text-gray-500 text-sm mb-3">Follow Us</div>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-10 h-10 bg-orange-500/10 hover:bg-orange-500 rounded-xl flex items-center justify-center text-orange-500 hover:text-white transition-all"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          </AnimateIn>

          {/* WhatsApp QR */}
          <AnimateIn direction="right" className="lg:col-span-2 flex items-center justify-center">
            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-10 flex flex-col items-center gap-8 w-full">
              <div className="text-center">
                <h3 className="text-gray-900 font-black text-2xl mb-2">
                  Chat on <span className="text-green-500">WhatsApp</span>
                </h3>
                <p className="text-gray-500 text-sm">
                  Scan the QR code or tap the button below to start a conversation.
                </p>
              </div>

              {/* QR Code */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-2xl shadow-md hover:shadow-lg hover:shadow-green-500/20 transition-all hover:scale-105"
              >
                <QRCodeSVG
                  value={WHATSAPP_URL}
                  size={200}
                  bgColor="#ffffff"
                  fgColor="#111111"
                  level="H"
                />
              </a>

              {/* Tap button */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-black px-5 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base transition-all hover:shadow-lg hover:shadow-green-500/30 hover:scale-105"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Message Us on WhatsApp
              </a>

              <p className="text-gray-400 text-xs">
                We typically reply within a few minutes during business hours.
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
