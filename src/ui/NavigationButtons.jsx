import { useAppContext } from '../store/AppContext';
import Button from './Button';

export default function NavigationButtons() {
  const { navigation, setNavigation } = useAppContext();

  return (
    <div className=' fixed justify-center bottom-0 z-[5]  pointer-events-none flex gap-4 w-full p-4 xs:p-6'>
      <Button
        type={'circle'}
        position={'left'}
        disable={navigation === 1}
        onClick={() => {
          if (navigation === 1) return;
          setNavigation(navigation - 1);
        }}
      />
      <Button
        type={'circle'}
        position={'right'}
        onClick={() => {
          if (navigation === 6) {
            localStorage.setItem('currentPage', 1);
            setNavigation(1);
          } else {
            setNavigation(navigation + 1);
          }
        }}
      />
    </div>
  );
}
