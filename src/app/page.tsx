"use client";

import { DealsSection } from "@/components/deals-section";
import { User, Search, MapPin, ChevronRight, Clock } from "lucide-react";

const categories = [
  {
    title: "Chips & Namkeen",
    image: "/test.png",
  },
  {
    title: "Beverages",
    image: "/yo.jpg",
  },
  {
    title: "Kitchen Essentials",
    image: "/kt.jpg",
  },
  {
    title: "Toiletaries",
    image: "/mein.jpg",
  },
];

const hotDeals = [
  {
    title: "Perfect Atta",
    image: "/atta.jpg",
    discount: 21,
    price: 299,
    originalPrice: 320,
    quantity: "5 kg",
    deliveryTime: "12",
  },
  {
    title: "Whole Milk",
    image: "/milk.jpg",
    discount: 3,
    price: 52,
    originalPrice: 55,
    quantity: "1 L",
    deliveryTime: "12",
  },
  {
    title: "Basmati Rice",
    image: "/basmati.png",
    discount: 8,
    price: 122,
    originalPrice: 130,
    quantity: "1kg",
    deliveryTime: "12",
  },
];

const dailyNeeds = [
  {
    title: "Corn Flakes",
    image: "/cornflakes.png",
    discount: 15,
    price: 325,
    originalPrice: 340,
    quantity: "575 gm",
    deliveryTime: "12",
  },
  {
    title: "Wheat Bread",
    image: "/bread.png",
    discount: 5,
    price: 55,
    originalPrice: 60,
    quantity: "400 g",
    deliveryTime: "12",
  },
  {
    title: "Kashmiri Mirch",
    image: "/mirch.jpg",
    discount: 650,
    price: 560,
    originalPrice: 610,
    quantity: "500 g",
    deliveryTime: "12",
  },
];

// export default function Home() {
//   return (
//     <div className="pb-20">
//       {/* Enhanced Header with Glass Effect */}
//       <div className="sticky top-0 z-50 glass-effect px-4 py-3 flex flex-col gap-3 shadow-sm">
//         <div className="flex items-center justify-between">
//           <div>
//             <div className="flex items-center gap-2">
//               <h1 className="font-bold text-2xl gradient-text">Swift Market</h1>
//               <div className="flex items-center gap-1 px-2 py-1 bg-green-100 rounded-full">
//                 <Clock className="w-3 h-3 text-green-600" />
//                 <span className="text-xs font-medium text-green-600">
//                   12 mins
//                 </span>
//               </div>
//             </div>
//             <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
//               <MapPin className="w-4 h-4" />
//               <p>No. 2/50-G, Shantipath, Ra...</p>
//               <ChevronRight className="w-4 h-4" />
//             </div>
//           </div>
//           <button className="p-2.5 bg-white/80 hover:bg-white shadow-sm rounded-full transition-colors">
//             <User className="w-6 h-6 text-[var(--brand-purple)]" />
//           </button>
//         </div>
//         <div className="relative">
//           <input
//             type="search"
//             placeholder="Search for groceries, snacks..."
//             className="search-input"
//           />
//           <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//         </div>
//       </div>

//       {/* Categories Section */}
//       <div className="px-4 py-8">
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-xl font-bold text-[var(--text-primary)]">
//             Shop by category
//           </h2>
//           <button className="text-[var(--brand-purple)] font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
//             View all <ChevronRight className="w-4 h-4" />
//           </button>
//         </div>
//         <div className="grid grid-cols-2 gap-4">
//           {categories.map((category, index) => (
//             <div
//               key={category.title}
//               className="category-card flex flex-col gap-3"
//               style={{
//                 animationDelay: `${index * 0.1}s`,
//               }}
//             >
//               <img
//                 src={"/image2.png"}
//                 alt={category.title}
//                 className="w-full h-full object-cover aspect-[4/3]"
//               />
//               <div className="">
//                 <p className="text-black font-medium text-lg px-6">
//                   {category.title}
//                 </p>
//                 <p className="text-white/80 text-sm">Premium Selection</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Premium Promotional Banner */}
//       <div className="px-4 py-2">
//         <div className="premium-gradient rounded-2xl p-6 text-white relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
//           <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16" />
//           <div className="relative z-10">
//             <h2 className="text-3xl font-bold mb-2">₹200 Off</h2>
//             <p className="text-white/90 text-lg mb-4">First order above ₹499</p>
//             <button className="bg-white text-[var(--brand-purple)] px-6 py-2.5 rounded-xl text-sm font-semibold hover:scale-105 transition-transform shadow-lg">
//               Shop Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Deals Sections */}
//       <div className="mt-8">
//         <DealsSection
//           title="Premium Deals ⚡️"
//           products={hotDeals}
//           showSeeAll
//         />
//         <DealsSection title="Fresh Picks 🌿" products={dailyNeeds} showSeeAll />
//       </div>
//     </div>
//   );
// }

export default function Home() {
  return (
    <div className="pb-20">
      {/* Enhanced Header with Glass Effect */}
      <div className="sticky top-0 z-50 glass-effect px-4 py-3 flex flex-col gap-3 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-xl gradient-text">Mithibai College</h1>
              <div className="flex items-center gap-1 px-2 py-1 bg-green-100 rounded-full">
                <Clock className="w-3 h-3 text-green-600" />
                <span className="text-xs font-medium text-green-600">
                  12 mins 
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
              <MapPin className="w-4 h-4" />
              <p>No. 2/50-G, Vile Parle, Mum...</p>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
          <button className="p-2.5 bg-white/80 hover:bg-white shadow-sm rounded-full transition-colors">
          <span className="text-3xl">🫂</span>
            {/* <User className="w-6 h-6 text-[var(--brand-purple)]" /> */}
          </button>
        </div>
        <div className="relative">
          <input
            type="search"
            placeholder="Search for groceries, snacks..."
            className="search-input"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* New Layout Section */}
      <div className="px-4 py-6">
        <div className="premium-gradient rounded-2xl p-6 text-white relative overflow-hidden">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold">₹ 350</h2>
                <span className="text-sm bg-white/20 px-2 py-1 rounded-full">
                  Credits Available
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4">
              <button className="bg-white text-[var(--brand-purple)] px-6 py-2.5 rounded-xl text-sm font-semibold hover:scale-105 transition-transform shadow-lg">
                Quick Order
              </button>
              <button className="bg-white text-[var(--brand-purple)] px-6 py-2.5 rounded-xl text-sm font-semibold hover:scale-105 transition-transform shadow-lg">
                Deep Discount
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-[var(--text-primary)]">
            Shop by category
          </h2>
          <button className="text-[var(--brand-purple)] font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
            View all <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="category-card flex flex-col gap-3"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <img
                src={category.image || "/image2.png"}
                alt={category.title}
                className="w-full h-full object-cover aspect-[4/3]"
              />
              <div className="">
                <p className="text-black font-medium text-lg px-6">
                  {category.title}
                </p>
                <p className="text-white/80 text-sm">Premium Selection</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Promotional Banner */}
      <div className="px-4 py-2">
        {/* <div className="premium-gradient rounded-2xl p-6 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-2">₹200 Off</h2>
            <p className="text-white/90 text-lg mb-4">First order above ₹499</p>
            <button className="bg-white text-[var(--brand-purple)] px-6 py-2.5 rounded-xl text-sm font-semibold hover:scale-105 transition-transform shadow-lg">
              Shop Now
            </button>
          </div>
        </div> */}
      </div>

      {/* Deals Sections */}
      <div className="mt-8">
        <DealsSection
          title="Premium Deals ⚡️"
          products={hotDeals}
          showSeeAll
        />
        <DealsSection title="Fresh Picks 🌿" products={dailyNeeds} showSeeAll />
      </div>
    </div>
  );
}
