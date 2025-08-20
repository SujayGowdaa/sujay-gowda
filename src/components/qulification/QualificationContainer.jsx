import Certificate from "../../ui/Certificate";
import CertificateMain from "../../ui/CertificateMain";
import Container from "../../ui/Container";
import PageTitle from "../../ui/PageTitle";
import PageTitleSecondary from "../../ui/PageTitleSecondary";
import { motion } from "framer-motion";

export default function QualificationContainer() {
  return (
    <Container>
      <PageTitle title={"qualification"} />

      <CertificateMain />
      <motion.div
        className=" flex flex-col gap-2 xs:gap-3"
        initial={{
          y: 40,
          opacity: 0,
          transition: {
            staggerChild: 0.3,
          },
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        }}
      >
        <PageTitleSecondary title={"certificates"} />
        <p className=" text-center font-vietnam text-sm text-text xs:text-left xs:text-base">
          Over the years, I&apos;ve embarked on a continuous journey of
          self-improvement and skill acquisition through various online courses.
          These courses have been instrumental in expanding my knowledge and
          enhancing my skill set.
        </p>
      </motion.div>
      <Certificate />
    </Container>
  );
}
