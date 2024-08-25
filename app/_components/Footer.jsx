import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-[#e2e8f0] text-block">
      <div className="flex h-12 items-center md:mx-20 justify-between space-y-3">
        <div className="flex space-x-4">
          <p className="text-black text-[15px]">
            Copyright © 2024 Doctor Appointment. All Rights Reserved.
          </p>
        </div>
        {/* <div className="mb-4 flex gap-2">
          <Link
            href="/"
            className="text-black-400 hover:text-white transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/"
            className="text-black-400 hover:text-white transition-colors duration-300"
          >
            About Us
          </Link>
          <Link
            href="/"
            className="text-black-400 hover:text-white transition-colors duration-300"
          >
            Services
          </Link>
        </div> */}
        <div className="flex space-x-4">
          <Link
            href="/"
            className="text-black-400 hover:text-white transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.951.555-2.005.959-3.127 1.184-.897-.959-2.178-1.559-3.594-1.559-2.719 0-4.92 2.201-4.92 4.917 0 .39.045.765.127 1.124C7.69 8.094 4.066 6.13 1.64 3.161c-.427.734-.666 1.584-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.697 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.621-.03-.92-.086.631 1.953 2.445 3.376 4.604 3.416-1.68 1.319-3.809 2.107-6.102 2.107-.397 0-.788-.023-1.177-.068 2.179 1.394 4.768 2.21 7.557 2.21 9.054 0 14.002-7.496 14.002-13.986 0-.21-.004-.42-.014-.63.962-.695 1.8-1.562 2.46-2.549z" />
            </svg>
          </Link>
          <Link
            href="/"
            className="text-black-400 hover:text-white transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.676 0h-21.352c-.733 0-1.324.592-1.324 1.324v21.352c0 .732.591 1.324 1.324 1.324h11.495v-9.294h-3.129v-3.62h3.129v-2.672c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.464.099 2.794.143v3.243l-1.917.001c-1.504 0-1.796.714-1.796 1.763v2.31h3.59l-.467 3.62h-3.123v9.294h6.13c.732 0 1.323-.592 1.323-1.324v-21.352c0-.732-.591-1.324-1.323-1.324z" />
            </svg>
          </Link>
          <Link
            href="/"
            className="text-black-400 hover:text-white transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.555v-5.569c0-1.327-.025-3.037-1.849-3.037-1.851 0-2.135 1.446-2.135 2.941v5.665h-3.554v-11.452h3.414v1.561h.049c.477-.898 1.637-1.847 3.366-1.847 3.594 0 4.254 2.366 4.254 5.441v6.297zM5.337 8.433c-1.148 0-2.079-.932-2.079-2.081s.931-2.081 2.079-2.081 2.079.932 2.079 2.081-.931 2.081-2.079 2.081zM6.113 20.452h-1.553v-11.452h1.553v11.452zM22.225 0h-20.451c-.975 0-1.775.8-1.775 1.775v20.451c0 .975.8 1.774 1.775 1.774h20.451c.975 0 1.775-.8 1.775-1.774v-20.451c0-.975-.8-1.775-1.775-1.775z" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
