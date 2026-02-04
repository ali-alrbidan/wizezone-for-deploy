// "use client";
// import { AnimatePresence, motion } from "framer-motion";
// import {
//   Award,
//   ChevronDown,
//   ChevronRight,
//   Cloud,
//   Code,
//   Cpu,
//   Database,
//   FileText,
//   FolderOpen,
//   Palette,
//   Server,
// } from "lucide-react";
// import React, { useEffect, useState } from "react";

// type TrainingPolicy = {
//   approved: boolean;
//   CoursesCount: number;
//   Email: string;
//   ExperienceYears: number;
//   FullNameAr: string;
//   FullNameEn: string;
//   Id: number;
// };

// const Page = () => {
//   const [trainingPolicies, setTrainingPolicies] = useState<TrainingPolicy[]>(
//     [],
//   );
//   const [loading, setLoading] = useState(true);
//   const [expandedPolicy, setExpandedPolicy] = useState<number | null>(null);
//   const [selectedPolicy, setSelectedPolicy] = useState<TrainingPolicy | null>(
//     null,
//   );

//   useEffect(() => {
//     async function getTrainingPolicies() {
//       try {
//         setLoading(true);
//         const response = await fetch("/api/training-policy");
//         const data = await response.json();
//         setTrainingPolicies(data);
//         if (data.length > 0) {
//           setSelectedPolicy(data[0]); // Select first policy by default
//         }
//       } catch (error) {
//         console.error("Error fetching training policies:", error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     getTrainingPolicies();
//   }, []);

//   const calculateTotalStats = () => {
//     if (trainingPolicies.length === 0)
//       return { totalCourses: 0, totalExperience: 0, approvedCount: 0 };

//     const totalCourses = trainingPolicies.reduce(
//       (sum, policy) => sum + policy.CoursesCount,
//       0,
//     );
//     const totalExperience = Math.max(
//       ...trainingPolicies.map((p) => p.ExperienceYears),
//     );
//     const approvedCount = trainingPolicies.filter((p) => p.approved).length;

//     return { totalCourses, totalExperience, approvedCount };
//   };

//   if (loading) {
//     return (
//       <div className="min-h-[80vh] flex items-center justify-center">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           className="text-center"
//         >
//           <div className="relative">
//             <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full absolute top-0 left-0 animate-spin"></div>
//           </div>
//           <p className="mt-20 mx-auto  w-full text-gray-500 font-medium">
//             Loading...
//           </p>
//         </motion.div>
//       </div>
//     );
//   }

//   if (trainingPolicies.length === 0) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center p-8">
//         <div className="text-center max-w-md">
//           <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
//             <Award className="w-10 h-10 text-red-500" />
//           </div>
//           <h2 className="text-2xl font-bold text-gray-900 mb-3">
//             No Training Policies Found
//           </h2>
//           <p className="text-gray-600 mb-6">
//             No training policies available. Please check back later.
//           </p>
//           <button
//             onClick={() => window.location.reload()}
//             className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
//           >
//             Retry
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const stats = calculateTotalStats();
//   const primaryPolicy = selectedPolicy || trainingPolicies[0];

//   return (
//     <div className="min-h-screen bg-gradient-to-br ">
//       {/* Training Policies Section */}
//       <motion.section
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="bg-gradient-to-br from-primary/5 via-white to-primary/5 py-16 lg:py-24"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Training Policies
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               {trainingPolicies.length} training profiles with{" "}
//               {stats.totalCourses} total courses
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-8">
//             {/* Training Policies List */}
//             <div className="space-y-6">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
//                 <FolderOpen className="w-6 h-6 text-primary" />
//                 Available Training Profiles
//               </h3>

//               <div className="space-y-4">
//                 {trainingPolicies.map((policy, index) => (
//                   <motion.div
//                     key={policy.Id}
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.4, delay: index * 0.1 }}
//                     viewport={{ once: true }}
//                     whileHover={{ x: 5 }}
//                     className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border ${selectedPolicy?.Id === policy.Id ? "border-primary" : "border-gray-100"}`}
//                     onClick={() => {
//                       setSelectedPolicy(policy);
//                       setExpandedPolicy(
//                         expandedPolicy === policy.Id ? null : policy.Id,
//                       );
//                     }}
//                   >
//                     <div className="flex items-center justify-between cursor-pointer">
//                       <div className="flex items-center space-x-4">
//                         <div className="p-2 bg-primary/10 rounded-lg">
//                           <FileText className="w-5 h-5 text-primary" />
//                         </div>
//                         <div>
//                           <h4 className="font-bold text-gray-900">
//                             Profile #{policy.Id}
//                           </h4>
//                           <p className="text-sm text-gray-600">
//                             {policy.FullNameEn}
//                           </p>
//                         </div>
//                       </div>
//                       <div className="flex items-center gap-3">
//                         <span
//                           className={`px-3 py-1 rounded-full text-xs font-medium ${policy.approved ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
//                         >
//                           {policy.approved ? "Approved" : "Pending"}
//                         </span>
//                         {expandedPolicy === policy.Id ? (
//                           <ChevronDown className="w-5 h-5 text-gray-400" />
//                         ) : (
//                           <ChevronRight className="w-5 h-5 text-gray-400" />
//                         )}
//                       </div>
//                     </div>

//                     <AnimatePresence>
//                       {expandedPolicy === policy.Id && (
//                         <motion.div
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: "auto", opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           transition={{ duration: 0.3 }}
//                           className="mt-4 pt-4 border-t border-gray-100"
//                         >
//                           <div className="grid grid-cols-2 gap-4">
//                             <div>
//                               <p className="text-sm text-gray-500">Courses</p>
//                               <p className="font-bold text-primary">
//                                 {policy.CoursesCount}
//                               </p>
//                             </div>
//                             <div>
//                               <p className="text-sm text-gray-500">
//                                 Experience
//                               </p>
//                               <p className="font-bold text-primary">
//                                 {policy.ExperienceYears} years
//                               </p>
//                             </div>
//                             <div>
//                               <p className="text-sm text-gray-500">Status</p>
//                               <p
//                                 className={`font-bold ${policy.approved ? "text-green-600" : "text-yellow-600"}`}
//                               >
//                                 {policy.approved ? "Active" : "Review"}
//                               </p>
//                             </div>
//                             <div>
//                               <p className="text-sm text-gray-500">ID</p>
//                               <p className="font-bold text-gray-900">
//                                 {policy.Id}
//                               </p>
//                             </div>
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.section>
//     </div>
//   );
// };

// export default Page;
import React from "react";

const page = () => {
  return <div></div>;
};

export default page;
