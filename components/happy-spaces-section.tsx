// "use client";

// import { Button } from "@/components/ui/button";
// import { Gift, Heart, Users, BookOpen, Play, Paintbrush } from "lucide-react";
// import { FaPen } from "react-icons/fa";
// import { RiHeartFill } from "react-icons/ri";

// export function HappySpacesSection() {
//   return (
//     <section className="relative py-24 bg-gray-50 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="mb-16 animate-fade-in-up">
//           <h2 className="text-5xl lg:text-6xl font-heading font-bold text-black mb-6">
//             Happy Spaces
//           </h2>

//           <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
//             We strongly believe that everyone — no matter their background,
//             status, or situation — deserves to live in a space that brings joy,
//             dignity, and peace. At Light Design Factory, Happy Spaces are the
//             reason we exist. Our passion is to create environments that uplift
//             the human spirit — places where people can feel seen, safe, and
//             inspired.
//           </p>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Gift Cards */}
//           <div className="rounded-3xl bg-black text-white p-8 flex flex-col animate-fade-in-up">
//             <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
//               <Gift size={28} className="text-black" strokeWidth={2} />
//             </div>
//             <h3 className="text-3xl font-heading font-bold mb-4">Gift Cards</h3>
//             <p className="text-gray-300 mb-8 flex-grow">
//               Purchase design support for others and spread the joy of beautiful
//               spaces
//             </p>
//             <Button className="w-full bg-white text-black hover:bg-white/90 rounded-full py-6 font-semibold">
//               Buy Gift Cards
//             </Button>
//           </div>

//           {/* Video/Image Card */}
//           <div
//             className="rounded-3xl overflow-hidden animate-fade-in-up"
//             style={{ animationDelay: "0.1s" }}
//           >
//             <div
//               className="relative h-full min-h-[400px] bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center group cursor-pointer bg-cover bg-center hover:bg-[length:105%] transition-all duration-300"
//               style={{ backgroundImage: "url('/modern-living-room.jpg')" }}
//             >
//               <div className="absolute top-1 left-4 p-8">
//                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
//                   <Play size={24} className="text-black fill-black ml-1" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Donation */}
//           <div
//             className="rounded-3xl bg-white border-2 border-gray-200 p-8 flex flex-col animate-fade-in-up"
//             style={{ animationDelay: "0.2s" }}
//           >
//             <div className="w-16 h-16 flex items-center justify-center mb-6">
//               <RiHeartFill size={32} className="text-black" strokeWidth={2} />
//             </div>
//             <h3 className="text-3xl font-heading font-bold text-black mb-4">
//               Donation
//             </h3>
//             <p className="text-gray-700 mb-8 flex-grow">
//               Support community transformation projects across West Africa
//               through design donations.
//             </p>
//             <Button className="w-full bg-black text-white hover:bg-black/90 rounded-full py-6 font-semibold">
//               Make a Donation
//             </Button>
//           </div>

//           {/* Large Text/Image Card */}
//           <div
//             className="rounded-3xl overflow-hidden animate-fade-in-up"
//             style={{ animationDelay: "0.1s" }}
//           >
//             <div
//               className="relative h-full min-h-[400px] bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center group cursor-pointer bg-cover bg-center  transition-all duration-300"
//               style={{ backgroundImage: "url('/holding_hands.jpg')" }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
//               <div className="relative z-10 p-4">
//                 <p className="text-white font-semibold text-lg mb-3 leading-relaxed">
//                   This belief fuels everything we do across the entire Light
//                   Design Factory ecosystem.
//                 </p>
//                 <p className="text-white/90 text-sm leading-relaxed">
//                   Right now, we're focused on transforming the homes of widows,
//                   orphans, and underserved communities across West Africa —
//                   individuals who are too often overlooked or marginalized.
//                   Here, you get the chance to gift a beautiful, personalized
//                   space to someone you love, support design-for-impact projects,
//                   or explore real-life transformations that bring comfort,
//                   creativity, and healing into everyday homes.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Designers */}
//           <div
//             className="rounded-3xl bg-white border-2 border-gray-200 p-8 flex flex-col animate-fade-in-up"
//             style={{ animationDelay: "0.4s" }}
//           >
//             <div className="w-16 h-16 flex items-center justify-center mb-6">
//               <Paintbrush size={28} className="text-black" />
//             </div>
//             <h3 className="text-3xl font-heading font-bold text-black mb-4">
//               Designers
//             </h3>
//             <p className="text-gray-700 mb-2">
//               Partner with Light Design Factory to create healing spaces for
//               widows, orphans, and individuals in need across West Africa.
//             </p>
//             <p className="text-gray-700 mb-8 flex-grow">
//               Showcase your expertise, grow your reach, and design with purpose.
//             </p>
//             <Button className="w-full bg-black text-white hover:bg-black/90 rounded-full py-6 font-semibold">
//               Apply Now
//             </Button>
//           </div>

//           {/* Stories */}
//           <div
//             className="rounded-3xl bg-black text-white p-8 flex flex-col animate-fade-in-up"
//             style={{ animationDelay: "0.5s" }}
//           >
//             <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
//               <Users size={28} className="text-black" strokeWidth={2} />
//             </div>
//             <h3 className="text-3xl font-heading font-bold mb-4">Stories</h3>
//             <p className="text-gray-300 mb-8 flex-grow">
//               Read inspiring stories from Happy Space Projects and community
//               transformations.
//             </p>
//             <Button className="w-full bg-white text-black hover:bg-white/90 rounded-full py-6 font-semibold">
//               Read Stories
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { Button } from "@/components/ui/button";
import { Gift, Heart, Users, BookOpen, Play, Paintbrush } from "lucide-react";
import { FaPen } from "react-icons/fa";
import { RiHeartFill } from "react-icons/ri";

export function HappySpacesSection() {
  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-5xl lg:text-6xl font-heading font-bold text-black mb-6">
            Happy Spaces
          </h2>

          <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
            We strongly believe that everyone — no matter their background, status, or situation — deserves to live in a
            space that brings joy, dignity, and peace. At Light Design Factory, Happy Spaces are the reason we exist.
            Our passion is to create environments that uplift the human spirit — places where people can feel seen,
            safe, and inspired.
          </p>
        </div>

        {/* Cards Grid - 2 rows with column spans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Gift Cards - 1 column */}
          <div className="rounded-3xl bg-black text-white p-8 flex flex-col animate-fade-in-up h-[320px] lg:col-span-1">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
              <Gift size={28} className="text-black" strokeWidth={2} />
            </div>
            <h3 className="text-3xl font-heading font-bold mb-4">Gift Cards</h3>
            <p className="text-gray-300 mb-8 flex-grow">
              Purchase design support for others and spread the joy of beautiful spaces
            </p>
            <Button className="w-full bg-white text-black hover:bg-white/90 rounded-full py-6 font-semibold">
              Buy Gift Cards
            </Button>
          </div>

          {/* Card 2: Video/Image Card - 2 columns */}
          <div
            className="rounded-3xl overflow-hidden animate-fade-in-up h-[320px] lg:col-span-2"
            style={{ animationDelay: "0.1s" }}
          >
            <div 
              className="relative h-full bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center group cursor-pointer bg-cover bg-center hover:bg-[length:105%] transition-all duration-300"
              style={{ backgroundImage: "url('/modern-living-room.jpg')" }}
            >
              <div className="absolute top-4 right-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={24} className="text-black fill-black ml-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Donation - 1 column */}
          <div
            className="rounded-3xl bg-white border-2 border-gray-200 p-8 flex flex-col animate-fade-in-up h-[320px] lg:col-span-1"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-16 h-16 flex items-center justify-center mb-6">
              <RiHeartFill size={32} className="text-black" strokeWidth={2} />
            </div>
            <h3 className="text-3xl font-heading font-bold text-black mb-4">Donation</h3>
            <p className="text-gray-700 mb-8 flex-grow">
              Support community transformation projects across West Africa through design donations.
            </p>
            <Button className="w-full bg-black text-white hover:bg-black/90 rounded-full py-6 font-semibold">
              Make a Donation
            </Button>
          </div>

          {/* Card 4: Large Text/Image Card - 2 columns */}
          <div
            className="rounded-3xl overflow-hidden animate-fade-in-up h-[320px] lg:col-span-2"
            style={{ animationDelay: "0.3s" }}
          >
            <div 
              className="relative h-full bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center group cursor-pointer bg-cover bg-center transition-all duration-300"
              style={{ backgroundImage: "url('/holding_hands.jpg')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="relative z-10 p-6">
                <p className="text-white font-semibold text-lg mb-3 leading-relaxed">
                  This belief fuels everything we do across the entire Light Design Factory ecosystem.
                </p>
                <p className="text-white/90 text-sm leading-relaxed">
                  Right now, we're focused on transforming the homes of widows, orphans, and underserved communities across West Africa — individuals who are too often overlooked or marginalized.
                </p>
              </div>
            </div>
          </div>

          {/* Card 5: Designers - 1 column */}
          <div
            className="rounded-3xl bg-white border-2 border-gray-200 p-8 flex flex-col animate-fade-in-up h-[320px] lg:col-span-1"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="w-16 h-16 flex items-center justify-center mb-6">
              <Paintbrush size={28} className="text-black" />
            </div>
            <h3 className="text-3xl font-heading font-bold text-black mb-4">Designers</h3>
            <p className="text-gray-700 mb-2">
              Partner with Light Design Factory to create healing spaces for widows, orphans, and individuals in need across West Africa.
            </p>
            <p className="text-gray-700 mb-8 flex-grow">
              Showcase your expertise, grow your reach, and design with purpose.
            </p>
            <Button className="w-full bg-black text-white hover:bg-black/90 rounded-full py-6 font-semibold">
              Apply Now
            </Button>
          </div>

          {/* Card 6: Stories - 1 column */}
          <div
            className="rounded-3xl bg-black text-white p-8 flex flex-col animate-fade-in-up h-[320px] lg:col-span-1"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
              <Users size={28} className="text-black" strokeWidth={2} />
            </div>
            <h3 className="text-3xl font-heading font-bold mb-4">Stories</h3>
            <p className="text-gray-300 mb-8 flex-grow">
              Read inspiring stories from Happy Space Projects and community transformations.
            </p>
            <Button className="w-full bg-white text-black hover:bg-white/90 rounded-full py-6 font-semibold">
              Read Stories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}