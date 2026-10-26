import ContactSection from "@/components/contact-section";
import CompanyReferences from "@/components/company-references";
import ContactFormSection from "@/components/contact-form-section";
import CourseFacts from "@/components/course-facts";
import CourseDetails from "@/components/course-details";
import CourseIntro from "@/components/course-intro";
import DeviceOverview from "@/components/device-overview";
import Faq from "@/components/faq";
import Hero from "@/components/hero";
import ImageStory from "@/components/image-story";
import MidPageCta from "@/components/mid-page-cta";
import ProgramSection from "@/components/program-section";
import RegistrationSection from "@/components/registration-section";
import SiteFooter from "@/components/site-footer";
import TrainerSection from "@/components/trainer-section";
import Header from "@/layout/header";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-3 pb-3 text-ink sm:px-5 lg:px-7">
      <Header />
      <main>
        <Hero />
        <CourseIntro />
        <CourseFacts />
        <CourseDetails />
        <MidPageCta />
        <ProgramSection />
        <DeviceOverview />
        <ImageStory />
        <TrainerSection />
        <CompanyReferences />
        <RegistrationSection />
        <Faq />
        <ContactFormSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
