import Hero from "./Components/Hero";
import WhyChooseUs from "./Components/WhyUs";
import CoursesPreview from "./Components/CoursePreview";
import HowItWorks from "./Components/HowItsWork";
import TrainingCentre from "./Components/TrainingCenter";
export default function Home() {
  return (
    <div >
      <Hero/>
      <WhyChooseUs/>
      <CoursesPreview/>
      <HowItWorks/>
      <TrainingCentre/>
    </div>
  );
}
