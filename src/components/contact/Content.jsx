import PageTitleSecondary from "../../ui/PageTitleSecondary";
import Paragraph from "../../ui/Paragraph";

export default function Content() {
  return (
    <>
      <PageTitleSecondary
        className=" capitalize text-text"
        title={'"Open to new opportunities and collaborations"'}
      />
      <Paragraph className={" text-center text-text-secondary "}>
        If you have a project idea, a collaboration proposal, or simply want to
        connect, drop me a line.
      </Paragraph>
    </>
  );
}
