import React from "react";
import Image from "next/image";
import images from "@/public/images";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: <Github className="w-6 h-6" />, url: "https://github.com" },
  { icon: <Linkedin className="w-6 h-6" />, url: "https://linkedin.com" },
  { icon: <Instagram className="w-6 h-6" />, url: "https://instagram.com" },
  { icon: <Mail className="w-6 h-6" />, url: "mailto:your-email@example.com" },
];

export default function MyHeader() {
  return (
    <header className="bg-zinc-800 text-white py-2">
      <div className="container mx-auto flex items-center px-4">
        {/* Profile Image */}
        <div className="w-12 h-12 rounded-full overflow-hidden relative mr-4">
          <Image
            src={images.profile}
            alt="Profile Picture"
            width={48}
            height={48}
            className="object-cover"
          />
        </div>
        
        {/* Profile Name */}
        <h1 className="text-lg font-semibold mr-auto">
          Gede Bagus Jyestha Permana
        </h1>

        {/* Social Links */}
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
