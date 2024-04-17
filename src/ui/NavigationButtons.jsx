import Button from './Button';

export default function NavigationButtons() {
  return (
    <div className=' fixed justify-center bottom-0 z-[5]  pointer-events-none flex gap-4 w-full p-4 xs:p-6'>
      <Button type={'circle'} position={'left'} />
      <Button type={'circle'} position={'right'} />
    </div>
  );
}
