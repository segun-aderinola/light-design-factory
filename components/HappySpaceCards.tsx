import { Button } from "@/components/ui/button";
import { Gift, Users, Paintbrush } from "lucide-react";
import { RiHeartFill } from "react-icons/ri";
import Link from "next/link";

export function VideoCard() {
  return (
    <div className="rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden h-full min-h-[260px] sm:min-h-[300px] lg:min-h-[320px]">
      <div className="relative h-full flex items-center justify-center">
        <video
          className="w-full h-full object-cover"
          muted
          loop
          autoPlay
          playsInline
          poster="/modern-living-room.jpg"
        >
          <source src="/videos/happy_space_section_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export function DonationCard() {
  return (
    <div className="rounded-xl sm:rounded-2xl lg:rounded-3xl bg-white border-2 border-gray-200 p-5 sm:p-6 md:p-7 lg:p-8 flex flex-col h-full min-h-[260px] sm:min-h-[300px] lg:min-h-[320px]">
      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mb-4 sm:mb-5 md:mb-6 flex-shrink-0">
        <RiHeartFill
          size={24}
          className="sm:w-7 sm:h-7 md:w-8 md:h-8 text-black"
          strokeWidth={2}
        />
      </div>
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-black mb-2 sm:mb-3 md:mb-4">
        Donation
      </h3>
      <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-5 sm:mb-6 md:mb-8 flex-grow leading-relaxed">
        Support community transformation projects across West Africa
        through design donations.
      </p>
      <Link href="https://www.paypal.com/donate/?hosted_button_id=PK9A8SUBWC5L2">
        <Button className="w-full bg-black text-white hover:bg-secondary hover:text-white transition-colors duration-200 rounded-full py-3 sm:py-4 md:py-5 lg:py-6 font-semibold text-sm sm:text-base">
          Make a Donation
        </Button>
      </Link>
    </div>
  );
}

export function LargeTextCard() {
  return (
    <div className="rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden h-full min-h-[260px] sm:min-h-[300px] lg:min-h-[320px]">
      <div
        className="relative h-full bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center bg-cover bg-center transition-all duration-300"
        style={{ backgroundImage: "url('/holding_hands.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        <div className="relative z-10 p-4 sm:p-5 md:p-6 lg:p-8">
          <p className="text-white font-semibold text-sm sm:text-base md:text-lg mb-2 sm:mb-3 leading-relaxed">
            This belief fuels everything we do across the entire Light
            Design Factory ecosystem.
          </p>
          <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
            Right now, we're focused on transforming the homes of widows,
            orphans, and underserved communities across West Africa —
            individuals who are too often overlooked or marginalized. Here,
            you get the chance to gift a beautiful, personalized space to
            someone you love, support design-for-impact projects, or
            explore real-life transformations that bring comfort,
            creativity, and healing into everyday homes.
          </p>
        </div>
      </div>
    </div>
  );
}

export function DesignersCard() {
  return (
    <div className="rounded-xl sm:rounded-2xl lg:rounded-3xl bg-white border-2 border-gray-200 p-5 sm:p-6 md:p-7 lg:p-8 flex flex-col h-full min-h-[260px] sm:min-h-[300px] lg:min-h-[320px]">
      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mb-4 sm:mb-5 md:mb-6 flex-shrink-0">
        <Paintbrush size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7 text-black" />
      </div>
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-black mb-2 sm:mb-3 md:mb-4">
        Designers
      </h3>
      <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-2 leading-relaxed">
        Partner with Light Design Factory to create healing spaces for
        widows, orphans, and individuals in need across West Africa.
      </p>
      <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-5 sm:mb-6 md:mb-8 flex-grow leading-relaxed">
        Showcase your expertise, grow your reach, and design with purpose.
      </p>
      <Button className="w-full bg-black text-white hover:bg-secondary hover:text-white transition-colors duration-200 rounded-full py-3 sm:py-4 md:py-5 lg:py-6 font-semibold text-sm sm:text-base">
        Apply Now
      </Button>
    </div>
  );
}

export function StoriesCard() {
  return (
    <div className="rounded-xl sm:rounded-2xl lg:rounded-3xl bg-black text-white p-5 sm:p-6 md:p-7 lg:p-8 flex flex-col h-full min-h-[260px] sm:min-h-[300px] lg:min-h-[320px]">
      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center mb-4 sm:mb-5 md:mb-6 flex-shrink-0">
        <Users
          size={20}
          className="sm:w-6 sm:h-6 md:w-7 md:h-7 text-black"
          strokeWidth={2}
        />
      </div>
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold mb-2 sm:mb-3 md:mb-4">
        Stories
      </h3>
      <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-5 sm:mb-6 md:mb-8 flex-grow leading-relaxed">
        Read inspiring stories from Happy Space Projects and community
        transformations.
      </p>
      <Link href="https://lightdesignfactory.com/happyspaces">
        <Button className="w-full bg-white text-black hover:bg-secondary hover:text-white transition-colors duration-200 rounded-full py-3 sm:py-4 md:py-5 lg:py-6 font-semibold text-sm sm:text-base">
          Read Stories
        </Button>
      </Link>
    </div>
  );
}

export function GiftCardsCard() {
  return (
    <div className="rounded-xl sm:rounded-2xl lg:rounded-3xl bg-black text-white p-5 sm:p-6 md:p-7 lg:p-8 flex flex-col h-full min-h-[260px] sm:min-h-[300px] lg:min-h-[320px]">
      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center mb-4 sm:mb-5 md:mb-6 flex-shrink-0">
        <Gift
          size={20}
          className="sm:w-6 sm:h-6 md:w-7 md:h-7 text-black"
          strokeWidth={2}
        />
      </div>
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold mb-2 sm:mb-3 md:mb-4">
        Gift Cards
      </h3>
      <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-5 sm:mb-6 md:mb-8 flex-grow leading-relaxed">
        Purchase design support for others and spread the joy of beautiful
        spaces
      </p>
      <Button className="w-full bg-white text-black hover:bg-secondary hover:text-white transition-colors duration-200 rounded-full py-3 sm:py-4 md:py-5 lg:py-6 font-semibold text-sm sm:text-base">
        Buy Gift Cards
      </Button>
    </div>
  );
}