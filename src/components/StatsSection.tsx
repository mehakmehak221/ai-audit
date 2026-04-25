"use client";

import { motion } from "framer-motion";

const stats = [
  {
    icon: (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.6666 10.8335C16.6666 15.0002 13.7499 17.0835 10.2833 18.2919C10.1017 18.3534 9.90453 18.3505 9.72492 18.2835C6.24992 17.0835 3.33325 15.0002 3.33325 10.8335V5.00021C3.33325 4.7792 3.42105 4.56724 3.57733 4.41096C3.73361 4.25468 3.94557 4.16688 4.16659 4.16688C5.83325 4.16688 7.91658 3.16688 9.36658 1.90021C9.54313 1.74938 9.76771 1.6665 9.99992 1.6665C10.2321 1.6665 10.4567 1.74938 10.6333 1.90021C12.0916 3.17521 14.1666 4.16688 15.8333 4.16688C16.0543 4.16688 16.2662 4.25468 16.4225 4.41096C16.5788 4.56724 16.6666 4.7792 16.6666 5.00021V10.8335Z" stroke="#155DFC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    ),
    value: "$4.2M",
    label: "ASSETS UNDER AUDIT",
  },
  {
    icon: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.28086 12.9167C8.20647 12.6283 8.05615 12.3651 7.84555 12.1545C7.63494 11.9439 7.37176 11.7936 7.08336 11.7192L1.97086 10.4009C1.88364 10.3761 1.80687 10.3236 1.75221 10.2512C1.69754 10.1789 1.66797 10.0907 1.66797 10C1.66797 9.90937 1.69754 9.82118 1.75221 9.74884C1.80687 9.6765 1.88364 9.62397 1.97086 9.59921L7.08336 8.28004C7.37166 8.20572 7.63477 8.05552 7.84537 7.84508C8.05596 7.63463 8.20634 7.37162 8.28086 7.08338L9.5992 1.97088C9.6237 1.88331 9.67618 1.80616 9.74863 1.75121C9.82108 1.69625 9.90951 1.6665 10.0004 1.6665C10.0914 1.6665 10.1798 1.69625 10.2523 1.75121C10.3247 1.80616 10.3772 1.88331 10.4017 1.97088L11.7192 7.08338C11.7936 7.37177 11.9439 7.63496 12.1545 7.84556C12.3651 8.05616 12.6283 8.20648 12.9167 8.28088L18.0292 9.59838C18.1171 9.62263 18.1946 9.67505 18.2499 9.74761C18.3052 9.82016 18.3351 9.90884 18.3351 10C18.3351 10.0912 18.3052 10.1799 18.2499 10.2525C18.1946 10.325 18.1171 10.3775 18.0292 10.4017L12.9167 11.7192C12.6283 11.7936 12.3651 11.9439 12.1545 12.1545C11.9439 12.3651 11.7936 12.6283 11.7192 12.9167L10.4009 18.0292C10.3764 18.1168 10.3239 18.1939 10.2514 18.2489C10.179 18.3038 10.0905 18.3336 9.99961 18.3336C9.90868 18.3336 9.82025 18.3038 9.7478 18.2489C9.67535 18.1939 9.62287 18.1168 9.59836 18.0292L8.28086 12.9167Z" stroke="#155DFC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.6667 2.5V5.83333" stroke="#155DFC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.3333 4.1665H15" stroke="#155DFC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.33325 14.1665V15.8332" stroke="#155DFC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.16667 15H2.5" stroke="#155DFC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    ),
    value: "1.2M",
    label: "INSIGHTS GENERATED",
  },
  {
    icon: (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0001 18.3332C14.6025 18.3332 18.3334 14.6022 18.3334 9.99984C18.3334 5.39746 14.6025 1.6665 10.0001 1.6665C5.39771 1.6665 1.66675 5.39746 1.66675 9.99984C1.66675 14.6022 5.39771 18.3332 10.0001 18.3332Z" stroke="#155DFC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 10.0002L9.16667 11.6668L12.5 8.3335" stroke="#155DFC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    ),
    value: "99.9%",
    label: "AUDIT ACCURACY",
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="h-12 w-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
