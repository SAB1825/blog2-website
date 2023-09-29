import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
    "NAME : Sabari",
    "a student from India",
    "Doing Mechanical Engineering ",
    "2nd Year in BIT",
    "Visit my gihub for my projects 📝",
    "Dont forget to checkout my socials",
   
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
