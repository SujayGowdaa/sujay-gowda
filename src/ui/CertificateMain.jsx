import { qualifications } from '../qualification';

export default function CertificateMain() {
  return (
    <div className=' flex flex-col items-center basis-full gap-6'>
      {qualifications[0].main.map((qualification, i) => {
        const { course, institue, duration } = qualification;

        return (
          <div
            className=' max-w-[400px] w-full outline outline-accent font-vietnam capitalize p-4 outline-[1px] backdrop-blur-custom shadow-card gap-4 flex flex-col'
            key={i}
          >
            <h3 className=' text-sm text-text font-semibold '>{course}</h3>
            <div className=' flex flex-col gap-1'>
              <h4 className=' text-xs text-accent '>{institue}</h4>
              <div className=' text-[10px] text-text-secondary flex gap-1'>
                <span>{duration?.start}</span>
                <span>-</span>
                <span>{duration?.end}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
