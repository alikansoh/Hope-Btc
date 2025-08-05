import Image from "next/image";
import Hero from "./Components/Hero";
import WhyChooseUs from "./Components/WhyUs";
import CoursesPreview from "./Components/CoursePreview";
export default function Home() {
  return (
    <div >
      <Hero/>
      <WhyChooseUs/>
      <CoursesPreview/>
    </div>
  );
}
