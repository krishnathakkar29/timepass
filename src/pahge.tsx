"use client";

import { DealsSection } from "@/components/deals-section";
import { User, Search, MapPin, ChevronRight, Clock } from "lucide-react";

const categories = [
  {
    title: "Fruits & Vegetables",
    image: "/image.png",
  },
  {
    title: "Dairy & Eggs",
    image: "/image.png",
  },
  {
    title: "Beverages",
    image: "/image.png",
  },
  {
    title: "Snacks",
    image: "/image.png",
  },
];

const hotDeals = [
  {
    title: "Fresh Oranges",
    image: "/image.png",
    discount: 20,
    price: 199,
    originalPrice: 249,
    quantity: "1 kg",
    deliveryTime: "12",
  },
  {
    title: "Whole Milk",
    image: "/image.png",
    discount: 10,
    price: 89,
    originalPrice: 99,
    quantity: "1 L",
    deliveryTime: "12",
  },
  {
    title: "Mixed Berries",
    image: "/image.png",
    discount: 25,
    price: 299,
    originalPrice: 399,
    quantity: "500 g",
    deliveryTime: "12",
  },
];

const dailyNeeds = [
  {
    title: "Brown Eggs",
    image: "/image.png",
    discount: 13,
    price: 129,
    originalPrice: 149,
    quantity: "12 pcs",
    deliveryTime: "12",
  },
  {
    title: "Wheat Bread",
    image: "/image.png",
    discount: 18,
    price: 45,
    originalPrice: 55,
    quantity: "400 g",
    deliveryTime: "12",
  },
  {
    title: "Tomatoes",
    image: "/image.png",
    discount: 29,
    price: 49,
    originalPrice: 69,
    quantity: "500 g",
    deliveryTime: "12",
  },
];

export default function Home() {
  return (
    <div className="pb-20">
      {/* Enhanced Header with Glass Effect */}
      <div className="sticky top-0 z-50 glass-effect px-4 py-3 flex flex-col gap-3 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-2xl gradient-text">Swift Market</h1>
              <div className="flex items-center gap-1 px-2 py-1 bg-green-100 rounded-full">
                <Clock className="w-3 h-3 text-green-600" />
                <span className="text-xs font-medium text-green-600">
                  12 mins
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
              <MapPin className="w-4 h-4" />
              <p>No. 2/50-G, Shantipath, Ra...</p>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
          <button className="p-2.5 bg-white/80 hover:bg-white shadow-sm rounded-full transition-colors">
            <User className="w-6 h-6 text-[var(--brand-purple)]" />
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
              className="relative overflow-hidden rounded-2xl bg-white hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer aspect-[4/3]"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--brand-purple)]/90 via-[var(--brand-purple)]/50 to-transparent p-4">
                <p className="text-white font-medium text-lg">
                  {category.title}
                </p>
                <p className="text-white/90 text-sm">Premium Selection</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Promotional Banner */}
      <div className="px-4 py-2">
        <div className="premium-gradient rounded-2xl p-6 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-2">₹200 Off</h2>
            <p className="text-white/90 text-lg mb-4">First order above ₹499</p>
            <button className="bg-white text-[var(--brand-purple)] px-6 py-2.5 rounded-xl text-sm font-semibold hover:scale-105 transition-transform shadow-lg">
              Shop Now
            </button>
          </div>
        </div>
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

// "use client";

// import { DealsSection } from "@/components/deals-section";
// import { User, Search, MapPin, ChevronRight, Clock } from "lucide-react";

// const categories = [
//   {
//     title: "Fruits & Vegetables",
//     image: "/image.png",
//   },
//   {
//     title: "Dairy & Eggs",
//     image: "/image.png",
//   },
//   {
//     title: "Beverages",
//     image: "/image.png",
//   },
//   {
//     title: "Snacks",
//     image: "/image.png",
//   },
// ];

// const hotDeals = [
//   {
//     title: "Fresh Oranges",
//     image: "/image.png",

//     discount: 20,
//     price: 199,
//     originalPrice: 249,
//     quantity: "1 kg",
//     deliveryTime: "12",
//   },
//   {
//     title: "Whole Milk",
//     image: "/image.png",

//     discount: 10,
//     price: 89,
//     originalPrice: 99,
//     quantity: "1 L",
//     deliveryTime: "12",
//   },
//   {
//     title: "Mixed Berries",
//     image: "/image.png",

//     discount: 25,
//     price: 299,
//     originalPrice: 399,
//     quantity: "500 g",
//     deliveryTime: "12",
//   },
// ];

// const dailyNeeds = [
//   {
//     title: "Brown Eggs",
//     image: "/image.png",

//     discount: 13,
//     price: 129,
//     originalPrice: 149,
//     quantity: "12 pcs",
//     deliveryTime: "12",
//   },
//   {
//     title: "Wheat Bread",
//     image: "/image.png",

//     discount: 18,
//     price: 45,
//     originalPrice: 55,
//     quantity: "400 g",
//     deliveryTime: "12",
//   },
//   {
//     title: "Tomatoes",
//     image: "/products/tomatoes.jpg",
//     discount: 29,
//     price: 49,
//     originalPrice: 69,
//     quantity: "500 g",
//     deliveryTime: "12",
//   },
// ];

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
//               className="category-card"
//               style={{
//                 animationDelay: `${index * 0.1}s`,
//               }}
//             >
//               <img
//                 src={category.image || "/placeholder.svg"}
//                 alt={category.title}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//               />
//               <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
//                 <p className="text-white font-medium text-lg">
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

// import { DealsSection } from "@/components/deals-section";
// import { User, Search, MapPin, ChevronRight } from "lucide-react";

// const categories = [
//   {
//     title: "Vegetables & Fruits",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-g9FkrAcFyVXVpLKuB02gujHD6FNuVk.png#vegetables",
//   },
//   {
//     title: "Dairy & Breakfast",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-g9FkrAcFyVXVpLKuB02gujHD6FNuVk.png#dairy",
//   },
//   {
//     title: "Munchies",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-g9FkrAcFyVXVpLKuB02gujHD6FNuVk.png#munchies",
//   },
//   {
//     title: "Cold Drinks & Juices",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-g9FkrAcFyVXVpLKuB02gujHD6FNuVk.png#drinks",
//   },
//   {
//     title: "Instant & Frozen Foods",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-g9FkrAcFyVXVpLKuB02gujHD6FNuVk.png#frozen",
//   },
// ];

// const hotDeals = [
//   {
//     title: "Cadbury Dairy Milk Bites",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pLRg0u8wJuf6ekILKPbhFqxjJ3ewCy.png#cadbury",
//     discount: 30,
//     price: 140,
//     originalPrice: 200,
//     quantity: "2 x 40 g",
//     deliveryTime: "12",
//   },
//   {
//     title: "Real Fruit Power Masala Mixed",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pLRg0u8wJuf6ekILKPbhFqxjJ3ewCy.png#real",
//     discount: 45,
//     price: 72,
//     originalPrice: 140,
//     quantity: "1 ltr",
//     deliveryTime: "12",
//   },
//   {
//     title: "Sunfeast Fantastik",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pLRg0u8wJuf6ekILKPbhFqxjJ3ewCy.png#sunfeast",
//     discount: 45,
//     price: 55,
//     originalPrice: 100,
//     quantity: "125.4 g",
//     deliveryTime: "12",
//   },
// ];

// const dailyNeeds = [
//   {
//     title: "Long Purple Brinjal (Baingan)",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pLRg0u8wJuf6ekILKPbhFqxjJ3ewCy.png#brinjal",
//     discount: 15,
//     price: 29,
//     originalPrice: 35,
//     quantity: "500 g",
//     deliveryTime: "12",
//   },
//   {
//     title: "Assorted Fruits (Fresh Deal)",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pLRg0u8wJuf6ekILKPbhFqxjJ3ewCy.png#fruits",
//     discount: 26,
//     price: 149,
//     originalPrice: 199,
//     quantity: "1 pack",
//     deliveryTime: "12",
//   },
//   {
//     title: "Shiitake Mushroom",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pLRg0u8wJuf6ekILKPbhFqxjJ3ewCy.png#mushroom",
//     discount: 21,
//     price: 299,
//     originalPrice: 399,
//     quantity: "125 g",
//     deliveryTime: "30",
//   },
// ];

// export default function page() {
//   return (
//     <div className="pb-20 bg-gradient-to-b from-[#FFF7ED] to-[#FFEDD5]">
//       {/* Enhanced Header */}
//       <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md px-4 py-3 flex flex-col gap-3 shadow-sm border-b border-orange-100">
//         <div className="flex items-center justify-between">
//           <div>
//             <div className="flex items-center gap-2">
//               <h1 className="font-bold text-xl gradient-text-orange">
//                 Delivery in 12 minutes
//               </h1>
//               <div className="animate-pulse">
//                 <div className="w-2 h-2 rounded-full bg-green-500"></div>
//               </div>
//             </div>
//             <div className="flex items-center gap-1 text-sm text-gray-600">
//               <MapPin className="w-4 h-4 text-orange-500" />
//               <p>No. 2/50-G, Shantipath, Ra...</p>
//               <ChevronRight className="w-4 h-4" />
//             </div>
//           </div>
//           <button className="p-2 hover:bg-orange-50 rounded-full transition-colors">
//             <User className="w-6 h-6 text-orange-600" />
//           </button>
//         </div>
//         <div className="relative">
//           <input
//             type="search"
//             placeholder='Search "chocolate"'
//             className="w-full px-4 py-3 bg-orange-50 rounded-xl pl-11 pr-4 outline-none focus:ring-2 focus:ring-orange-500 transition-all placeholder:text-orange-400 text-orange-800"
//           />
//           <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-400" />
//         </div>
//       </div>

//       {/* Categories Section */}
//       <div className="px-4 py-6">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-xl font-bold text-orange-900">
//             Shop by category
//           </h2>
//           <button className="text-orange-600 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
//             View all <ChevronRight className="w-4 h-4" />
//           </button>
//         </div>
//         <div className="grid grid-cols-2 gap-4">
//           {categories.map((category, index) => (
//             <div
//               key={category.title}
//               className="group relative aspect-[4/3] rounded-2xl overflow-hidden card-shadow hover:scale-[1.02] transition-transform cursor-pointer"
//               style={{
//                 animationDelay: `${index * 0.1}s`,
//               }}
//             >
//               <img
//                 src={category.image || "/placeholder.svg"}
//                 alt={category.title}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//               />
//               <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
//                 <p className="text-white font-medium text-lg">
//                   {category.title}
//                 </p>
//                 <p className="text-white/80 text-sm">Fresh picks daily</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Promotional Banner */}
//       <div className="px-4 py-2">
//         <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-6 text-white relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
//           <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16" />
//           <div className="relative z-10">
//             <h2 className="text-3xl font-bold mb-2">Get ₹100 Off</h2>
//             <p className="text-white/90 text-lg mb-4">
//               On your first order above ₹499
//             </p>
//             <button className="bg-white text-orange-600 px-6 py-2.5 rounded-xl text-sm font-semibold hover:scale-105 transition-transform">
//               Order Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Deals Sections */}
//       <div className="mt-6">
//         <DealsSection title="Hot deals 🔥" products={hotDeals} showSeeAll />
//         <DealsSection
//           title="Your daily fresh needs 🥬"
//           products={dailyNeeds}
//           showSeeAll
//         />
//       </div>
//     </div>
//   );
// }

// import { DealsSection } from "@/components/deals-section";
// import { User, Search, MapPin, ChevronRight } from "lucide-react";

// const categories = [
//   {
//     title: "Vegetables & Fruits",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-g9FkrAcFyVXVpLKuB02gujHD6FNuVk.png#vegetables",
//   },
//   {
//     title: "Dairy & Breakfast",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-g9FkrAcFyVXVpLKuB02gujHD6FNuVk.png#dairy",
//   },
//   {
//     title: "Munchies",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-g9FkrAcFyVXVpLKuB02gujHD6FNuVk.png#munchies",
//   },
//   {
//     title: "Cold Drinks & Juices",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-g9FkrAcFyVXVpLKuB02gujHD6FNuVk.png#drinks",
//   },
//   {
//     title: "Instant & Frozen Foods",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-g9FkrAcFyVXVpLKuB02gujHD6FNuVk.png#frozen",
//   },
// ];

// const hotDeals = [
//   {
//     title: "Cadbury Dairy Milk Bites",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pLRg0u8wJuf6ekILKPbhFqxjJ3ewCy.png#cadbury",
//     discount: 30,
//     price: 140,
//     originalPrice: 200,
//     quantity: "2 x 40 g",
//     deliveryTime: "12",
//   },
//   {
//     title: "Real Fruit Power Masala Mixed",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pLRg0u8wJuf6ekILKPbhFqxjJ3ewCy.png#real",
//     discount: 45,
//     price: 72,
//     originalPrice: 140,
//     quantity: "1 ltr",
//     deliveryTime: "12",
//   },
//   {
//     title: "Sunfeast Fantastik",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pLRg0u8wJuf6ekILKPbhFqxjJ3ewCy.png#sunfeast",
//     discount: 45,
//     price: 55,
//     originalPrice: 100,
//     quantity: "125.4 g",
//     deliveryTime: "12",
//   },
// ];

// const dailyNeeds = [
//   {
//     title: "Long Purple Brinjal (Baingan)",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pLRg0u8wJuf6ekILKPbhFqxjJ3ewCy.png#brinjal",
//     discount: 15,
//     price: 29,
//     originalPrice: 35,
//     quantity: "500 g",
//     deliveryTime: "12",
//   },
//   {
//     title: "Assorted Fruits (Fresh Deal)",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pLRg0u8wJuf6ekILKPbhFqxjJ3ewCy.png#fruits",
//     discount: 26,
//     price: 149,
//     originalPrice: 199,
//     quantity: "1 pack",
//     deliveryTime: "12",
//   },
//   {
//     title: "Shiitake Mushroom",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pLRg0u8wJuf6ekILKPbhFqxjJ3ewCy.png#mushroom",
//     discount: 21,
//     price: 299,
//     originalPrice: 399,
//     quantity: "125 g",
//     deliveryTime: "30",
//   },
// ];

// export default function Home() {
//   return (
//     <div className="pb-20">
//       {/* Enhanced Header */}
//       <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md px-4 py-3 flex flex-col gap-3 shadow-sm">
//         <div className="flex items-center justify-between">
//           <div>
//             <div className="flex items-center gap-2">
//               <h1 className="font-bold text-xl gradient-text">
//                 Delivery in 12 minutes
//               </h1>
//               <div className="animate-pulse">
//                 <div className="w-2 h-2 rounded-full bg-green-500"></div>
//               </div>
//             </div>
//             <div className="flex items-center gap-1 text-sm text-gray-600">
//               <MapPin className="w-4 h-4" />
//               <p>No. 2/50-G, Shantipath, Ra...</p>
//               <ChevronRight className="w-4 h-4" />
//             </div>
//           </div>
//           <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//             <User className="w-6 h-6" />
//           </button>
//         </div>
//         <div className="relative">
//           <input
//             type="search"
//             placeholder='Search "chocolate"'
//             className="w-full px-4 py-3 bg-gray-100 rounded-xl pl-11 pr-4 outline-none focus:ring-2 focus:ring-purple-500 transition-all"
//           />
//           <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//         </div>
//       </div>

//       {/* Categories Section */}
//       <div className="px-4 py-6">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-xl font-bold">Shop by category</h2>
//           <button className="text-purple-600 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
//             View all <ChevronRight className="w-4 h-4" />
//           </button>
//         </div>
//         <div className="grid grid-cols-2 gap-4">
//           {categories.map((category, index) => (
//             <div
//               key={category.title}
//               className="group relative aspect-[4/3] rounded-2xl overflow-hidden card-shadow hover:scale-[1.02] transition-transform cursor-pointer"
//               style={{
//                 animationDelay: `${index * 0.1}s`,
//               }}
//             >
//               <img
//                 src={category.image || "/placeholder.svg"}
//                 alt={category.title}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//               />
//               <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
//                 <p className="text-white font-medium text-lg">
//                   {category.title}
//                 </p>
//                 <p className="text-white/80 text-sm">Fresh picks daily</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Promotional Banner */}
//       <div className="px-4 py-2">
//         <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 text-white relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
//           <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16" />
//           <div className="relative z-10">
//             <h2 className="text-3xl font-bold mb-2">Get ₹100 Off</h2>
//             <p className="text-white/90 text-lg mb-4">
//               On your first order above ₹499
//             </p>
//             <button className="bg-white text-purple-600 px-6 py-2.5 rounded-xl text-sm font-semibold hover:scale-105 transition-transform">
//               Order Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Deals Sections */}
//       <div className="mt-6">
//         <DealsSection title="Hot deals 🔥" products={hotDeals} showSeeAll />
//         <DealsSection
//           title="Your daily fresh needs 🥬"
//           products={dailyNeeds}
//           showSeeAll
//         />
//       </div>
//     </div>
//   );
// }

// import { DealsSection } from "@/components/deals-section";
// import { User } from "lucide-react";
// import Image from "next/image";

// const categories = [
//   {
//     title: "Vegetables & Fruits",
//     image: "/image.png",
//   },
//   {
//     title: "Dairy & Breakfast",
//     image: "/image.png",
//   },
//   {
//     title: "Munchies",
//     image: "/image.png",
//   },
//   {
//     title: "Cold Drinks & Juices",
//     image: "/image.png",
//   },
//   {
//     title: "Instant & Frozen Foods",
//     image: "/image.png",
//   },
// ];

// const hotDeals = [
//   {
//     title: "Cadbury Dairy Milk Bites",
//     image:
//       "/image2.png",
//     discount: 30,
//     price: 140,
//     originalPrice: 200,
//     quantity: "2 x 40 g",
//     deliveryTime: "12",
//   },
//   {
//     title: "Real Fruit Power Masala Mixed",
//     image:
//       "/image2.png",
//     discount: 45,
//     price: 72,
//     originalPrice: 140,
//     quantity: "1 ltr",
//     deliveryTime: "12",
//   },
//   {
//     title: "Sunfeast Fantastik",
//     image:
//       "/image2.png",
//     discount: 45,
//     price: 55,
//     originalPrice: 100,
//     quantity: "125.4 g",
//     deliveryTime: "12",
//   },
// ];

// const dailyNeeds = [
//   {
//     title: "Long Purple Brinjal (Baingan)",
//     image: "/image2.png",
//     discount: 15,
//     price: 29,
//     originalPrice: 35,
//     quantity: "500 g",
//     deliveryTime: "12",
//   },
//   {
//     title: "Assorted Fruits (Fresh Deal)",
//     image: "/image2.png",
//     discount: 26,
//     price: 149,
//     originalPrice: 199,
//     quantity: "1 pack",
//     deliveryTime: "12",
//   },
//   {
//     title: "Shiitake Mushroom",
//     image: "/image2.png",
//     discount: 21,
//     price: 299,
//     originalPrice: 399,
//     quantity: "125 g",
//     deliveryTime: "30",
//   },
// ];

// export default function Home() {
//   return (
//     <div className="pb-20">
//       <div className="sticky top-0 z-50 bg-white px-4 py-3 flex flex-col gap-3">
//         <div className="flex items-center justify-between">
//           <div>
//             <h1 className="font-bold text-xl">Delivery in 12 minutes</h1>
//             <p className="text-sm text-gray-600">
//               No. 2/50-G, Shantipath, Ra...
//             </p>
//           </div>
//           <button className="p-2">
//             <User className="w-6 h-6" />
//           </button>
//         </div>
//         <div className="relative">
//           <input
//             type="search"
//             placeholder='Search "chocolate"'
//             className="w-full px-4 py-2.5 bg-gray-100 rounded-lg pl-10"
//           />
//           <svg
//             className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//             />
//           </svg>
//         </div>
//       </div>
//       {/* <div className="px-4 py-2">
//         <div className="bg-gray-800 rounded-xl p-4 text-white relative overflow-hidden">
//           <div className="relative z-10">
//             <h2 className="text-2xl font-bold mb-2">Cigarettes?</h2>
//             <p className="text-sm mb-4">
//               Order easily with the blinkit LIT app
//             </p>
//             <button className="bg-white text-black px-4 py-1.5 rounded-lg text-sm font-medium">
//               Use app
//             </button>
//           </div>
//           <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2">
//             <div className="w-12 h-20 bg-green-400 rounded-lg" />
//             <div className="w-12 h-20 bg-red-500 rounded-lg" />
//           </div>
//         </div>
//       </div> */}
//       <div className="px-4 py-2">
//         <h2 className="text-xl font-bold mb-4">Shop by category</h2>
//         <div className="grid grid-cols-2 gap-4">
//           {categories.map((category) => (
//             <div
//               key={category.title}
//               className="relative aspect-[4/3] rounded-xl overflow-hidden"
//             >
//               <img
//                 src={category.image || "/placeholder.svg"}
//                 alt={category.title}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3">
//                 <p className="text-white font-medium">{category.title}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <DealsSection title="Hot deals" products={hotDeals} showSeeAll />
//       <DealsSection
//         title="Your daily fresh needs"
//         products={dailyNeeds}
//         showSeeAll
//       />
//     </div>
//   );
// }
